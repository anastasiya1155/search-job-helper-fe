import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    width: '100%',
    height: 'fit-content',
    position: 'relative',
    overflow: 'visible',
    margin: theme.spacing(3, 0),
  },
  cardContainer: {
    position: 'relative',
    minHeight: 140,
  },
  removeBtn: {
    position: 'absolute',
    display: 'block',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));
