import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InterestRate from 'Jobs/JobCard/InterestRate';
import { NoteInputType } from 'types';
import useStyles from './useStyles';

type Props = {
  onCancel: () => void;
  onSubmit: (inputs: NoteInputType) => void;
};

const NewNoteCard = ({ onCancel, onSubmit }: Props) => {
  const [isRemove, setRemove] = React.useState(false);
  const [inputs, setInputs] = React.useState<NoteInputType>({});
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContainer}>
        {isRemove ? (
          <Button className={classes.removeBtn} onClick={onCancel}>
            Confirm
          </Button>
        ) : (
          <div>
            <InterestRate rate={5} onChange={val => setInputs({ ...inputs, frequency: val })} />
            <TextField
              label="Title"
              name="title"
              fullWidth
              value={inputs.title}
              onChange={e => setInputs({ ...inputs, title: e.target.value })}
            />
            <TextField
              label="Text"
              name="text"
              fullWidth
              multiline
              value={inputs.text}
              onChange={e => setInputs({ ...inputs, text: e.target.value })}
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

export default NewNoteCard;
