import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { NoteType } from 'types';
import { EDIT_NOTE, REMOVE_NOTE } from 'graphql/queries';
import InterestRate from 'Jobs/JobCard/InterestRate';
import TextOrInput from 'Jobs/JobCard/JobCardContent/TextOrInput';
import useStyles from './useStyles';

type Props = {
  note: NoteType;
};

const NoteCard = ({ note }: Props) => {
  const [isRemove, setRemove] = React.useState(false);
  const [remove] = useMutation(REMOVE_NOTE);
  const [edit] = useMutation(EDIT_NOTE);
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContainer}>
        {isRemove ? (
          <Button
            className={classes.removeBtn}
            onClick={() => remove({ variables: { id: note.id }, refetchQueries: ['getAllNotes'] })}
          >
            Confirm
          </Button>
        ) : (
          <>
            <InterestRate
              rate={note.frequency || 0}
              onChange={value => edit({ variables: { id: note.id, input: { frequency: value } } })}
            />
            <TextOrInput
              textProps={{ variant: 'h4' }}
              editProps={{ autoFocus: true, fullWidth: true }}
              noName
              name="Title"
              type="string"
              text={note.title}
              EditComponent={TextField}
              fieldName="title"
              onSubmit={(name, value) =>
                edit({ variables: { id: note.id, input: { title: value } } })
              }
            />
            <TextOrInput
              textProps={{ variant: 'h6' }}
              editProps={{ autoFocus: true, fullWidth: true, multiline: true }}
              noName
              name="Text"
              type="string"
              text={note.text}
              EditComponent={TextField}
              fieldName="text"
              onSubmit={(name, value) =>
                edit({ variables: { id: note.id, input: { text: value } } })
              }
            />
          </>
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

export default NoteCard;
