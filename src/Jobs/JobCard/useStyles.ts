import { makeStyles } from '@material-ui/core/styles';
import { JobType } from 'types';

export default makeStyles({
  card: {
    width: 350,
    maxWidth: '100%',
    height: 'fit-content',
    position: 'relative',
    overflow: 'visible',
    backgroundColor: (job: JobType) => {
      if (!job.active) {
        return '#eee';
      }
      if (job.offer) {
        return '#d0ffb4';
      }
      return 'white';
    },
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
