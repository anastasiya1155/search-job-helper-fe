import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    width: 350,
    maxWidth: '100%',
    overflow: 'visible',
  },
  cardContainer: {
    position: 'relative',
    minHeight: 454,
  },
  removeBtn: {
    position: 'absolute',
    display: 'block',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});
