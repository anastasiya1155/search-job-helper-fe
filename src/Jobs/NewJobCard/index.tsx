import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { JobInputType } from 'types';
import useStyles from './useStyles';
import InterestRate from 'Jobs/JobCard/InterestRate';

type Props = {
  onCancel: () => void;
  onSubmit: (inputs: JobInputType) => void;
};

type Field =
  | 'name'
  | 'position'
  | 'link'
  | 'team'
  | 'stack'
  | 'officeAddress'
  | 'additionalBonuses'
  | 'comments';

const NewJobCard = ({ onCancel, onSubmit }: Props) => {
  const [isRemove, setRemove] = React.useState(false);
  const [inputs, setInputs] = React.useState<JobInputType>({});
  const classes = useStyles();
  const fields: Field[] = [
    'name',
    'position',
    'link',
    'team',
    'stack',
    'officeAddress',
    'additionalBonuses',
    'comments',
  ];
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContainer}>
        {isRemove ? (
          <Button className={classes.removeBtn} onClick={onCancel}>
            Confirm
          </Button>
        ) : (
          <div>
            <InterestRate rate={5} onChange={val => setInputs({ ...inputs, interested: val })} />
            {fields.map((name: Field) => (
              <TextField
                key={name}
                label={name}
                name={name}
                fullWidth
                value={inputs[name]}
                onChange={e => setInputs({ ...inputs, [name]: e.target.value })}
              />
            ))}
            <FormControlLabel
              control={
                <Switch
                  checked={inputs.remoteOption}
                  onChange={e => setInputs({ ...inputs, remoteOption: e.target.checked })}
                  value="remoteOption"
                  color="primary"
                />
              }
              label="Remote option"
            />
          </div>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setRemove(!isRemove)}>
          {isRemove ? 'Cancel' : 'Remove'}
        </Button>
        <Button size="small" onClick={() => onSubmit(inputs)}>
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewJobCard;
