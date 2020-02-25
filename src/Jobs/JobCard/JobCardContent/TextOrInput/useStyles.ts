import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  pencil: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    verticalAlign: 'text-top',
    marginLeft: theme.spacing(1),
  },
  confirmIcons: {
    verticalAlign: 'text-bottom',
  },
}));
