import React from 'react';
import { MutationHookOptions } from '@apollo/react-hooks';
import { ExecutionResult } from 'graphql';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { JobType } from 'types';
import InterestRate from 'Jobs/JobCard/InterestRate';
import TextOrInput from './TextOrInput';
import useStyles from './useStyles';
import fieldsMap from './fieldsMap';

type Props = {
  job: JobType;
  edit: (options: MutationHookOptions) => Promise<ExecutionResult<any>>;
};

const CardContent = ({ job, edit }: Props) => {
  const classes = useStyles();
  const interviewsCountArr = Array.from(Array(job.interviewsCount).keys());
  return (
    <>
      <Stepper activeStep={job.interviews.length} className={classes.stepper}>
        {interviewsCountArr.map((num, index) => (
          <Step key={num} completed={index < job.interviews.length} color="secondary">
            <StepLabel> </StepLabel>
          </Step>
        ))}
      </Stepper>
      <TextOrInput
        textProps={{ variant: 'h5', component: 'h2' }}
        name="Name"
        type="string"
        text={job.name}
        EditComponent={TextField}
        fieldName="name"
        onSubmit={(name, value) => edit({ variables: { id: job.id, input: { [name]: value } } })}
      />
      <TextOrInput
        textProps={{ className: classes.title, color: 'textSecondary', gutterBottom: true }}
        name="Position"
        type="string"
        text={job.position}
        EditComponent={TextField}
        fieldName="position"
        onSubmit={(name, value) => edit({ variables: { id: job.id, input: { [name]: value } } })}
      />
      <InterestRate
        rate={job.interested || 0}
        isGrey={!job.active}
        onChange={value => edit({ variables: { id: job.id, input: { interested: value } } })}
      />
      <Typography component="p">
        Link:{' '}
        <a href={job.link} className={classes.link} target="_blank" rel="noopener noreferrer">
          {job.link}
        </a>
      </Typography>
      {fieldsMap.map(({ fieldName, name, type, editProps, editComponent }) => (
        <TextOrInput
          key={fieldName}
          name={name}
          type={type}
          text={job[fieldName]}
          EditComponent={editComponent}
          editProps={editProps}
          fieldName={fieldName}
          onSubmit={(n, value) => {
            let normalizedValue: any = value;
            if (type === 'number') {
              normalizedValue = parseInt(value, 10);
            }
            return edit({
              variables: {
                id: job.id,
                input: { [n]: normalizedValue },
              },
            });
          }}
        />
      ))}
    </>
  );
};

export default CardContent;
