import { makeStyles } from '@material-ui/core/styles';
import { JobType } from 'types';

export default makeStyles({
  card: {
    width: 350,
    height: 'fit-content',
    position: 'relative',
    overflow: 'visible',
    backgroundColor: (job: JobType) => (job.active ? 'white' : '#eee'),
  },
  cardContainer: {
    position: 'relative',
    minHeight: 330,
  },
  removeBtn: {
    position: 'absolute',
    display: 'block',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});
