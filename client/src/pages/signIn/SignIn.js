import './SignIn.css';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

export default function SignInPage() {
  return (
    <Grid container justify="center" align-items="center" className="SignIn">
      <Grid item md={7} className="si_Container">
        
        <Grid container>

          {/* Image Container */}
          <Hidden smDown>
            <Grid item xs={0} md={6} className="si_ImageContainer">
              a
            </Grid>
          </Hidden>

          {/* Sign in form */}
          <Grid item xs={12} md={6} className="si_Form">
            <Grid container justify="center">

              {/* Heading */}
              <Grid item md={12}>
                <h1>Sign in</h1>
              </Grid>

              {/* Social Media Login */}
              <Grid item md={4}>
                <div className="socialMediaLoginButtons">f</div>
                <div className="socialMediaLoginButtons">G</div>
                <div className="socialMediaLoginButtons">in</div>
              </Grid>

              {/* Sub heading */}
              <Grid item md={12}>
                <p>or sign in using email</p>
              </Grid>

              <Grid container justify="center">
                {/* Email input */}
                <Grid item md={12}>
                  <Grid container justify="center">
                    <Grid item md={7}>
                      <label>Email</label>
                      <input type="text" name="email" placeholder="email@example.com" className="si_Input" />
                    </Grid>
                  </Grid>
                </Grid>

                {/* Password input */}
                <Grid item md={12}>
                  <Grid container justify="center">
                    <Grid item md={7}>
                      <label>Password</label>
                      <input type="password" name="password" className="si_Input" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* Forgot password */}
              <Grid item md={12}>
                <p>Forgot your password?</p>
              </Grid>

              {/* Sign in Button */}
              <Grid item md={12}>
                <button>Sign in</button>
              </Grid>

              {/* Link to sign up */}
              <Grid item md={12}>
                <p>Don't have an account? Sign up!</p>
              </Grid>

            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
}