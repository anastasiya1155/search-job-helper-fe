import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { Button, Grid, Snackbar, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibleIcon from '@material-ui/icons/VisibilityOutlined';
import NotVisibleIcon from '@material-ui/icons/VisibilityOffOutlined';
import { REGISTER } from 'graphql/queries';
import useStyles from '../useStyles';

const RegistrationPage: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [error, setError] = React.useState('');
  const [register] = useMutation(REGISTER)
  const classes = useStyles();
  const handleSubmit = () => {
    if (password === confirmPassword) {
      register({ variables: { email, password } })
        .then(() => {
          history.push('/login');
        })
        .catch(err => {
          setError(err.message);
        });
    } else {
      setError("Passwords don't match!");
    }
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
            type={visible ? 'text' : 'password'}
            fullWidth
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className={classes.icon}>
                  {visible ? (
                    <NotVisibleIcon onClick={() => setVisible(false)} />
                  ) : (
                    <VisibleIcon onClick={() => setVisible(true)} />
                  )}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Confirm Password"
            type={visible2 ? 'text' : 'password'}
            fullWidth
            name="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className={classes.icon}>
                  {visible2 ? (
                    <NotVisibleIcon onClick={() => setVisible2(false)} />
                  ) : (
                    <VisibleIcon onClick={() => setVisible2(true)} />
                  )}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item container justify="space-between" alignItems="center">
          <Button onClick={handleSubmit}>Submit</Button>
          <Link to="/login">Login</Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegistrationPage;
