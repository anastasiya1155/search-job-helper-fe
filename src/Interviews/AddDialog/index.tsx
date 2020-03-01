import React from 'react';
import moment from 'moment';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { DatePicker, TimePicker } from '@material-ui/pickers';
import { InterviewInputType, JobType } from 'types';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_JOBS } from 'graphql/queries';
import { emptyInterview } from 'Interviews/index';

type Props = {
  isOpen: boolean;
  initialValues: InterviewInputType;
  onClose: () => void;
  handleSubmit: (i: InterviewInputType) => void;
};

const AddInterviewDialog = ({ isOpen, initialValues = {}, onClose, handleSubmit }: Props) => {
  const [values, setValues] = React.useState<InterviewInputType>(initialValues);
  const { data } = useQuery(GET_ALL_JOBS);
  const jobs = data && data.getAllJobs ? data.getAllJobs : [];
  const handleClose = () => {
    setValues(emptyInterview);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Paper style={{ padding: 20 }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DatePicker
                disablePast
                fullWidth
                name="date"
                label="Date"
                value={values.date}
                onChange={val =>
                  setValues({ ...values, date: val ? val.format('YYYY-MM-DD') : '' })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TimePicker
                fullWidth
                ampm={false}
                name="startTime"
                label="Start time"
                minutesStep={5}
                value={values.startTime}
                onChange={val => setValues({ ...values, startTime: val ? val.toDate() : '' })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TimePicker
                fullWidth
                ampm={false}
                name="endTime"
                label="End time"
                minutesStep={5}
                value={values.endTime}
                onChange={val => setValues({ ...values, endTime: val ? val.toDate() : '' })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="location"
                label="Location"
                value={values.location}
                onChange={e => setValues({ ...values, location: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="type"
                label="Type"
                value={values.type}
                onChange={e => setValues({ ...values, type: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl style={{ width: '100%' }}>
                <InputLabel id="job-id-label">Job</InputLabel>
                <Select
                  name="jobId"
                  labelId="job-id-label"
                  id="jobId"
                  fullWidth
                  displayEmpty
                  value={values.jobId}
                  onChange={e => setValues({ ...values, jobId: e.target.value as string })}
                >
                  {jobs.map((j: JobType) => (
                    <MenuItem key={j.id} value={j.id}>
                      {j.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                name="comments"
                label="Comments"
                value={values.comments}
                onChange={e => setValues({ ...values, comments: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <Button onClick={handleClose}>Cancel</Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={e => {
                  e.stopPropagation();
                  const { date, ...vals } = values;
                  const startTime = moment(values.startTime).format('HH:mm');
                  const endTime = moment(values.endTime).format('HH:mm');
                  console.log(date, startTime, moment(`${date} ${startTime}`).toDate());
                  handleSubmit({
                    ...vals,
                    startTime: moment(`${date} ${startTime}`).toDate(),
                    endTime: moment(`${date} ${endTime}`).toDate(),
                  });
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Dialog>
  );
};

export default AddInterviewDialog;
