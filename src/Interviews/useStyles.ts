import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
  },
  addButton: {
    position: 'fixed',
    bottom: theme.spacing(10),
    right: theme.spacing(14),
    zIndex: 10,
  },
}));
