import './SignIn.css';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

export default function SignInPage() {
  return (
    <Grid container justify="center" align-items="center" className="SignIn">
      <Grid item xs={11} sm={10} md={7} className="si_Container">
        
        <Grid container justify="center">

          {/* Image Container */}
          <Hidden smDown>
            <Grid item md={6} className="si_ImageContainer">
              a
            </Grid>
          </Hidden>

          {/* Sign in form */}
          <Grid item xs={12} md={6} className="si_Form">
            <Grid container justify="center">

              {/* Heading */}
              <Grid item xs={12}>
                <h1>Sign in</h1>
              </Grid>

              {/* Sign up with Social Media */}
              <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                      
                  {/* Facebook Link */}
                  <Grid item>
                    <Avatar className="su_Facebook"><h3>f</h3></Avatar>
                  </Grid>
                      
                  {/* Google Link */}
                  <Grid item>
                    <Avatar className="su_Google"><h3>G</h3></Avatar>
                  </Grid>
                      
                  {/* LinkedIn */}
                  <Grid item>
                    <Avatar className="su_LinkedIn"><h3>in</h3></Avatar>
                  </Grid>

                </Grid>
              </Grid>

              {/* Sub heading */}
              <Grid item xs={12}>
                <p>Or sign in with your email</p>
              </Grid>

              <Grid container justify="center">
                {/* Email input */}
                <Grid item xs={12}>
                  <Grid container justify="center">
                    <Grid item xs={7}>
                      <label>Email</label>
                      <input type="text" name="email" placeholder="email@example.com" className="si_Input" />
                    </Grid>
                  </Grid>
                </Grid>

                {/* Password input */}
                <Grid item xs={12}>
                  <Grid container justify="center">
                    <Grid item xs={7}>
                      <label>Password</label>
                      <input type="password" name="password" className="si_Input" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* Forgot password */}
              <Grid item xs={12}>
                <p>Forgot your password?</p>
              </Grid>

              {/* Sign in Button */}
              <Grid item xs={12}>
                <button>Sign in</button>
              </Grid>

              {/* Link to sign up */}
              <Grid item xs={12}>
                <p>Don't have an account? <Link to="/signup">Sign up!</Link></p>
              </Grid>

            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
}