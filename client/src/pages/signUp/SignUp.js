import './SignUp.css';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '34ch',
    },
  },
}));

export default function SignUpPage() {
  const classes = useStyles();

  return (
    <Grid container justify="center" className="SignUp">
      <Grid item xs={12}>
        <form className={classes.root} noValidate autoComplete="off">
        {/* Sign up container */}
        <Grid container justify="center">
          <Grid item xs={11} sm={7} md={8} className="su_Container">

            {/* Sign up Inner container */}
            <Grid container className="su_InnerContainer">

              {/* Left side */}
              <Hidden smDown>
                <Grid item md={6} className="su_LeftCon">
                  
                </Grid>
              </Hidden>

              {/* Left side */}
              <Grid item xs={12} md={6} className="su_RightCon">
                <Grid container justify="center">
                  
                  {/* Heading */}
                  <Grid item xs={12}>
                    <h1>Sign up</h1>
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

                  {/* Sign up using email */}
                  <Grid item xs={12}>
                    <p>Or sign up with your email</p>
                  </Grid>

                  {/* Input boxes */}
                  <Grid item xs={12}>

                    {/* First name */}
                    <TextField
                      id="outlined-full-width"
                      label="First Name"
                      style={{ margin: 8 }}
                      placeholder="Jane Smith"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />

                    {/* Email */}
                    <TextField
                      id="outlined-full-width"
                      label="Email"
                      type="email"
                      style={{ margin: 8 }}
                      placeholder="example@email.com"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />

                    {/* Full name */}
                    <TextField
                      id="outlined-full-width"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      style={{ margin: 8 }}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />

                    {/* Full name */}
                    <TextField
                      id="outlined-full-width"
                      label="Confirm Password"
                      type="password"
                      autoComplete="current-password"
                      style={{ margin: 8 }}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                    
                  </Grid>
                  
                  {/* Sign up button */}
                  <Grid item xs={12}>
                    <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                      Sign up
                    </Button>
                  </Grid>
                  
                  {/* Already have an account? Sign in! */}
                  <p>Already have an account? <Link to="/signin">Sign in!</Link></p>

                </Grid>
              </Grid>
            
            </Grid>

          </Grid>
        </Grid>
      </form>
      </Grid>
    </Grid>
  );
}