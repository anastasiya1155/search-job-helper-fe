import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { JobType } from 'types';
import { EDIT_JOB, REMOVE_JOB } from 'graphql/queries';
import useStyles from './useStyles';
import JobCardContent from './JobCardContent';

type Props = {
  job: JobType;
};

const JobCard = ({ job }: Props) => {
  const [isRemove, setRemove] = React.useState(false);
  const [remove] = useMutation(REMOVE_JOB);
  const [edit] = useMutation(EDIT_JOB);
  const classes = useStyles(job);
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContainer}>
        {isRemove ? (
          <Button
            className={classes.removeBtn}
            onClick={() => remove({ variables: { id: job.id }, refetchQueries: ['getAllJobs'] })}
          >
            Confirm
          </Button>
        ) : (
          <JobCardContent job={job} edit={edit} />
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setRemove(!isRemove)}>
          {isRemove ? 'Cancel' : 'Remove'}
        </Button>
        <Button onClick={() => edit({ variables: { id: job.id, input: { active: !job.active } } })}>
          Make {job.active ? 'inactive' : 'active'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
