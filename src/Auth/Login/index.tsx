import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { Grid, TextField, Button, Snackbar } from '@material-ui/core';
import { LOGIN } from 'graphql/queries';
import useStyles from '../useStyles';

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [login] = useMutation(LOGIN);
  const classes = useStyles();
  const handleSubmit = () => {
    login({ variables: { email, password } })
      .then(resp => {
        localStorage.setItem('token', resp.data.login.token);
        history.push('/jobs');
      })
      .catch(err => {
        setError(err.message);
      });
  };

  const handleClose = () => {
    setError('');
  };
  return (
    <Grid container justify="center" alignItems="center" className={classes.container}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={!!error}
        autoHideDuration={5000}
        onClose={handleClose}
        ContentProps={{ className: classes.error }}
        message={error}
      />
      <Grid item container direction="column" spacing={2} className={classes.form}>
        <Grid item>
          <TextField
            label="Email"
            fullWidth
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Password"
            type="password"
            fullWidth
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item container justify="space-between" alignItems="center">
          <Button onClick={handleSubmit}>Submit</Button>
          <Link to="/register">Register</Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
