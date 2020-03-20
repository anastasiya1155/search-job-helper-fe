import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  jobsContainer: {
    display: 'grid',
    gridGap: theme.spacing(4),
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr));',
    marginTop: theme.spacing(4),
  },
}));
