import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import LinearProgress from '@material-ui/core/LinearProgress';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  AppointmentForm,
  AppointmentTooltip,
  CurrentTimeIndicator,
} from '@devexpress/dx-react-scheduler-material-ui';
import { GET_ALL_INTERVIEWS } from 'graphql/queries';
import { InterviewType } from 'types';

const ToolbarWithLoading: React.FC = ({ children, ...restProps }) => (
  <div>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Toolbar.Root {...restProps}>{children}</Toolbar.Root>
    <LinearProgress />
  </div>
);

const Interviews = () => {
  const { data, loading } = useQuery(GET_ALL_INTERVIEWS);
  const formattedData = data && data.getAllInterviews
    ? data.getAllInterviews.map((i: InterviewType) => ({
      startDate: i.startTime,
        endDate: i.endTime,
      title: `${i.job.name}, ${i.type}, ${i.location}`,
    }))
    : [];
  return (
    <div>
      <Scheduler data={formattedData}>
        <ViewState />
        <WeekView startDayHour={9} endDayHour={18} />
        <MonthView />
        <Appointments />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Toolbar {...(loading ? { rootComponent: ToolbarWithLoading } : null)} />
        <DateNavigator />
        <ViewSwitcher />
        <AppointmentTooltip showOpenButton showCloseButton />
        <CurrentTimeIndicator
          shadePreviousCells
          shadePreviousAppointments
          updateInterval={10000}
        />
        <AppointmentForm readOnly />
      </Scheduler>
    </div>
  );
};

export default Interviews;
