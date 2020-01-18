import React from 'react';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './useStyles';
import { JobType } from '../../../types';

type Props = {
  job: JobType;
};

const CardContent = ({ job }: Props) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Position: {job.position}
      </Typography>
      <Typography variant="h5" component="h2">
        Name: {job.name}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Source: {job.source}
      </Typography>
      <Typography variant="body2" component="p">
        Link:{' '}
        <a href={job.link} target="_blank" rel="noopener noreferrer">
          {job.link}
        </a>
      </Typography>
      <Typography>Remote Option: {job.remoteOption ? <CheckIcon /> : <CloseIcon />}</Typography>
      <Typography>Team: {job.team}</Typography>
      <Typography>Stack: {job.stack}</Typography>
      <Typography>Office: {job.officeAddress}</Typography>
      <Typography>Additional: {job.additionalBonuses}</Typography>
      <Typography>Comments: {job.comments}</Typography>
    </>
  );
};

export default CardContent;
