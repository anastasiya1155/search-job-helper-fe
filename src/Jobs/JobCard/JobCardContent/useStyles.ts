import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    color: 'inherit',
    border: 'none',
  },
  stepper: {
    backgroundColor: 'transparent',
    padding: 0,
    marginBottom: theme.spacing(2),
  },
}));
