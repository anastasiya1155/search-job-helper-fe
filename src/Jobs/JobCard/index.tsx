import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { JobType } from 'types';
import useStyles from './useStyles';
import JobCardContent from './JobCardContent';

type Props = {
  job: JobType;
};

const JobCard = ({ job }: Props) => {
  const [isRemove, setRemove] = React.useState(false);
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        {isRemove ? (
          <Button className={classes.removeBtn}>Confirm</Button>
        ) : (
          <JobCardContent job={job} />
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setRemove(!isRemove)}>
          {isRemove ? 'Cancel' : 'Remove'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
