import React from 'react';
import { MutationHookOptions } from '@apollo/react-hooks';
import { ExecutionResult } from 'graphql';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { JobType } from 'types';
import InterestRate from 'Jobs/JobCard/InterestRate';
import TextOrInput from './TextOrInput';
import useStyles from './useStyles';

type Props = {
  job: JobType;
  edit: (options: MutationHookOptions) => Promise<ExecutionResult<any>>;
};

const CardContent = ({ job, edit }: Props) => {
  const classes = useStyles();
  return (
    <>
      <InterestRate
        rate={job.interested || 0}
        isGrey={!job.active}
        onChange={value => edit({ variables: { id: job.id, input: { interested: value } } })}
      />
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
          key={fieldName}
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
