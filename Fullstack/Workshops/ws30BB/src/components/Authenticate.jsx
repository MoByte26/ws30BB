import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register, login } from '../API';
const AuthForm = ({ type }) => {
    const navigate = useNavigate();
  
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
  
    const passwordsMismatch = !!(
      type === 'register' &&
      password &&
      repeatPassword &&
      password !== repeatPassword
    );
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      let user;
  
      if (type === 'register') {
        user = await register({ firstname, lastname, email, password });
      }
  
      if (type === 'login') {
        user = await login({ email, password });
      }
  
      // If register or login is successful, token is on returned user
      if (user.token) {
        // Set token to localStorage, clear any errors, and navigate to Account page
        localStorage.setItem('token', user.token);
        setError('');
        navigate('/account');
      } else {
        // Otherwise, there was an error, set it to state
        setError(user.message);
      }
    };
  
    return (
      <Paper elevation={6} sx={{ width: '50%', padding: 4, margin: '14px auto' }}>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <Stack direction="column">
            <Typography variant="h5" sx={{ textAlign: 'center' }}>
              {type === 'login' ? 'Log In' : 'Register'}
            </Typography>
  
            {type === 'register' && (
              <>
                <TextField
                  label="First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                  sx={{ margin: '8px 0' }}
                />
                <TextField
                  label="Last Name"
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                  sx={{ margin: '8px 0' }}
                />
              </>
            )}
  
            <TextField
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              sx={{ margin: '8px 0' }}
            />
            <TextField
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              sx={{ margin: '8px 0' }}
              type="password"
            />
  
            {type === 'register' && (
              <TextField
                label="Re-Enter Password"
                onChange={(e) => setRepeatPassword(e.target.value)}
                value={repeatPassword}
                type="password"
                error={!!passwordsMismatch}
                helperText={passwordsMismatch && 'Password must match'}
                sx={{ margin: '8px 0' }}
              />
            )}
          </Stack>
  
          <Button
            disabled={passwordsMismatch}
            variant="contained"
            size="large"
            sx={{ margin: '8px 0', width: '100%' }}
            type="submit"
          >
            {type === 'login' ? 'Log In' : 'Register'}
          </Button>
  
          {type === 'login' ? (
            <Typography>
              Need to create an account?{' '}
              <Link href="#" onClick={() => navigate('/register')}>
                Register
              </Link>
            </Typography>
          ) : (
            <Typography>
              Already have an account?{' '}
              <Link href="#" onClick={() => navigate('/login')}>
                Log In
              </Link>
            </Typography>
          )}
        </form>
      </Paper>
    );
  };
  
  AuthForm.propTypes = {
    type: PropTypes.oneOf(['login', 'register']),
  };
  
  export default AuthForm;