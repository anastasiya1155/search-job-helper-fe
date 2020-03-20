import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { CREATE_NOTE, GET_ALL_NOTES } from 'graphql/queries';
import { NoteType } from 'types';
import NoteCard from './NoteCard';
// import useStyles from './useStyles';
import NewNoteCard from './NewNoteCard';

const Notes: React.FC = () => {
  const [isNewAdded, setNewAdded] = React.useState(false);
  const [notes, setNotes] = React.useState<NoteType[]>([]);
  const { data, loading } = useQuery(GET_ALL_NOTES);
  const [create] = useMutation(CREATE_NOTE);
  // const classes = useStyles();

  React.useEffect(() => {
    if (data && data.getAllNotes) {
      setNotes(data.getAllNotes);
    }
  }, [data]);

  const handleNew = () => {
    setNewAdded(true);
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleNew}>
        <AddIcon />
      </Fab>
      <div>
        {isNewAdded ? (
          <NewNoteCard
            onCancel={() => setNewAdded(false)}
            onSubmit={vals =>
              create({
                variables: { input: vals },
                refetchQueries: ['getAllNotes'],
              }).then(() => setNewAdded(false))
            }
          />
        ) : null}
        {notes.map((note: NoteType) => (
          <NoteCard note={note} key={note.id} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
