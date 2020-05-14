import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    position: 'relative',
    height: 'calc(100vh - 110px)',
  },
  addButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    zIndex: 10,
  },
}));
