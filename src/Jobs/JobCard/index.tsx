import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';
import { JobType } from '../../types';
import JobCardContent from './JobCardContent';

type Props = {
  job: JobType
}

const JobCard = ({ job }: Props) => {
  const [isEdit, setEdit] = React.useState(false);
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <JobCardContent job={job} />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setEdit(true)}>Edit</Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
