import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import CheckIcon from '@material-ui/icons/Check';
// import CloseIcon from '@material-ui/icons/Close';
import { JobType } from 'types';
import { EDIT_JOB } from 'graphql/queries';
import TextOrInput from './TextOrInput';
import useStyles from './useStyles';

type Props = {
  job: JobType;
};

const CardContent = ({ job }: Props) => {
  const classes = useStyles();
  const [edit] = useMutation(EDIT_JOB);
  return (
    <>
      <TextOrInput
        textProps={{ className: classes.title, color: 'textSecondary', gutterBottom: true }}
        name="Position"
        text={job.position}
        EditComponent={TextField}
        fieldName="position"
        onSubmit={(name, value) => edit({ variables: { id: job.id, input: { [name]: value } } })}
      />
      <TextOrInput
        textProps={{ variant: 'h5', component: 'h2' }}
        name="Name"
        text={job.name}
        EditComponent={TextField}
        fieldName="name"
        onSubmit={(name, value) => edit({ variables: { id: job.id, input: { [name]: value } } })}
      />
      <Typography component="p">
        Link:{' '}
        <a href={job.link} className={classes.link} target="_blank" rel="noopener noreferrer">
          {job.link}
        </a>
      </Typography>
      {[
        { fieldName: 'remoteOption', name: 'Remote Option', text: job.remoteOption.toString() },
        { fieldName: 'team', name: 'Team', text: job.team },
        { fieldName: 'stack', name: 'Stack', text: job.stack },
        { fieldName: 'officeAddress', name: 'Office', text: job.officeAddress },
        { fieldName: 'additionalBonuses', name: 'Additional', text: job.additionalBonuses },
        { fieldName: 'source', name: 'Source', text: job.source },
        { fieldName: 'comments', name: 'Comments', text: job.comments },
      ].map(({ fieldName, name, text }) => (
        <TextOrInput
          name={name}
          text={text}
          EditComponent={TextField}
          fieldName={fieldName}
          onSubmit={(n, value) =>
            edit({
              variables: {
                id: job.id,
                input: { [n]: n === 'remoteOption' ? value === 'true' : value },
              },
            })
          }
        />
      ))}
    </>
  );
};

export default CardContent;
