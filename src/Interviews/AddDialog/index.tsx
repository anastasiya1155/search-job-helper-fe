import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { DateTimePicker } from '@material-ui/pickers';
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
            <Grid item xs={12} sm={6}>
              <DateTimePicker
                disablePast
                fullWidth
                name="startTime"
                label="Start time"
                value={values.startTime}
                onChange={val => setValues({ ...values, startTime: val ? val.toDate() : '' })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateTimePicker
                disablePast
                fullWidth
                name="endTime"
                label="End time"
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
              <Button onClick={() => handleSubmit(values)}>Submit</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Dialog>
  );
};

export default AddInterviewDialog;
