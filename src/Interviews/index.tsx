import React from 'react';
import moment from 'moment';
import { useQuery } from '@apollo/react-hooks';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  AppointmentTooltip,
  CurrentTimeIndicator,
} from '@devexpress/dx-react-scheduler-material-ui';
import { GET_ALL_INTERVIEWS } from 'graphql/queries';
import { InterviewInputType, InterviewType } from 'types';
import AddInterviewDialog from 'Interviews/AddDialog';
import useStyles from './useStyles';

const ToolbarWithLoading: React.FC = ({ children, ...restProps }) => (
  <div>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Toolbar.Root {...restProps}>{children}</Toolbar.Root>
    <LinearProgress />
  </div>
);

export const emptyInterview = {
  startTime: new Date(),
  endTime: moment()
    .add(1, 'hour')
    .toDate(),
  location: '',
  comments: '',
  type: '',
  jobId: '',
};

const Interviews = () => {
  const [isEdit, setEdit] = React.useState(false);
  const [interviewToEdit, setInterviewToEdit] = React.useState<InterviewInputType>(emptyInterview);
  const { data, loading } = useQuery(GET_ALL_INTERVIEWS);
  const safeData = data && data.getAllInterviews ? data.getAllInterviews : [];
  const formattedData = safeData.map((i: InterviewType) => ({
    startDate: i.startTime,
    endDate: i.endTime,
    title: `${i.job ? i.job.name : 'no job'}, ${i.type}, ${i.location}`,
  }));
  const classes = useStyles();

  const handleAdd = () => {
    setEdit(true);
    setInterviewToEdit(emptyInterview);
  };

  return (
    <div className={classes.container}>
      <Scheduler data={formattedData}>
        <ViewState />
        <WeekView startDayHour={9} endDayHour={21} />
        <MonthView />
        <Appointments />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Toolbar {...(loading ? { rootComponent: ToolbarWithLoading } : null)} />
        <DateNavigator />
        <ViewSwitcher />
        <AppointmentTooltip showOpenButton showCloseButton />
        <CurrentTimeIndicator shadePreviousCells shadePreviousAppointments updateInterval={10000} />
        <Fab color="secondary" className={classes.addButton} onClick={handleAdd}>
          <AddIcon />
        </Fab>
      </Scheduler>
      <AddInterviewDialog
        isOpen={isEdit}
        initialValues={interviewToEdit}
        onClose={() => setEdit(false)}
      />
    </div>
  );
};

export default Interviews;
