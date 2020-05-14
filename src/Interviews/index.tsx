import React from 'react';
import moment from 'moment';
import { useMutation, useQuery } from '@apollo/react-hooks';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import { connectProps } from '@devexpress/dx-react-core';
import { ViewState, EditingState, ChangeSet, Resource } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  AppointmentTooltip,
  AppointmentForm,
  DragDropProvider,
  CurrentTimeIndicator,
  EditRecurrenceMenu,
  Resources,
} from '@devexpress/dx-react-scheduler-material-ui';
import {
  CREATE_INTERVIEW,
  EDIT_INTERVIEW,
  GET_ALL_INTERVIEWS,
  GET_ALL_JOBS,
  REMOVE_INTERVIEW,
} from 'graphql/queries';
import { InterviewInputType, InterviewType, JobType } from 'types';
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
  date: moment().format('YYYY-MM-DD'),
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
  const [resources, setResources] = React.useState<Resource[]>([]);
  const { data, loading } = useQuery(GET_ALL_INTERVIEWS);
  const [create] = useMutation(CREATE_INTERVIEW);
  const [edit] = useMutation(EDIT_INTERVIEW);
  const [remove] = useMutation(REMOVE_INTERVIEW);
  const { data: jobsData, loading: jobsLoading } = useQuery(GET_ALL_JOBS);
  const jobs = jobsData && jobsData.getAllJobs ? jobsData.getAllJobs : [];
  const safeData = data && data.getAllInterviews ? data.getAllInterviews : [];
  const formattedData = safeData.map((i: InterviewType) => ({
    ...i,
    startDate: i.startTime,
    endDate: i.endTime,
    title: `${i.job ? i.job.name : 'no job'}, ${i.type}, ${i.location}`,
  }));
  const classes = useStyles();

  React.useEffect(() => {
    if (jobs.length > 0 && safeData.length > 0) {
      const locations = new Set();
      safeData.forEach((i: InterviewType) => locations.add(i.location));

      const src = [
        {
          fieldName: 'jobId',
          title: 'Job',
          instances: jobs.map((j: JobType) => ({ id: j.id, text: j.name })),
        },
        {
          fieldName: 'location',
          title: 'Location',
          instances: Array.from(locations).map(l => ({ id: l, text: l })),
        },
      ];
      setResources(src);
    }
  }, [jobs, safeData]);

  const handleAdd = () => {
    setEdit(true);
    setInterviewToEdit(emptyInterview);
  };

  const cancelEdit = () => {
    setEdit(false);
    setInterviewToEdit(emptyInterview);
  };

  const onSubmit = (values: InterviewInputType) => {
    const { id } = interviewToEdit;
    const { startTime, endTime, comments, jobId, location, type } = values;
    const options = id
      ? {
          variables: {
            id,
            input: {
              startTime,
              endTime,
              comments,
              jobId,
              location,
              type,
            },
          },
        }
      : { variables: { input: values }, refetchQueries: ['getAllInterviews'] };
    const operation = id ? edit : create;
    operation(options).then(cancelEdit);
  };

  const appointmentForm = connectProps(AddInterviewDialog, () => ({
    isOpen: isEdit,
    initialValues: interviewToEdit,
    handleSubmit: onSubmit,
    visibleChange: () => setEdit(!isEdit),
    onEditingAppointmentChange: (i: InterviewInputType) => setInterviewToEdit(i),
    onClose: cancelEdit,
    jobs,
  }));

  const handleChanges = ({ changed, deleted }: ChangeSet) => {
    if (changed) {
      const changedInterviewId = Object.keys(changed)[0];
      edit({
        variables: {
          id: changedInterviewId,
          input: {
            startTime: changed[changedInterviewId].startDate,
            endTime: changed[changedInterviewId].endDate,
          },
        },
      });
    }
    if (deleted) {
      remove({ variables: { id: deleted }, refetchQueries: ['getAllInterviews'] });
    }
  };

  return (
    <Paper className={classes.container}>
      <Scheduler data={formattedData}>
        <ViewState />
        <EditingState
          onCommitChanges={handleChanges}
          onEditingAppointmentChange={int => {
            setInterviewToEdit(int as InterviewInputType);
          }}
        />
        <WeekView startDayHour={9} endDayHour={21} />
        <MonthView />
        <Appointments />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Toolbar {...(loading || jobsLoading ? { rootComponent: ToolbarWithLoading } : null)} />
        <DateNavigator />
        <ViewSwitcher />
        <EditRecurrenceMenu />
        <AppointmentTooltip showOpenButton showCloseButton showDeleteButton />
        <AppointmentForm
          overlayComponent={appointmentForm}
          visible={isEdit}
          onVisibilityChange={() => setEdit(!isEdit)}
        />
        <DragDropProvider />
        <CurrentTimeIndicator shadePreviousCells shadePreviousAppointments updateInterval={10000} />
        <Resources data={resources} mainResourceName="jobId" />
        <Fab color="secondary" className={classes.addButton} onClick={handleAdd}>
          <AddIcon />
        </Fab>
      </Scheduler>
    </Paper>
  );
};

export default Interviews;
