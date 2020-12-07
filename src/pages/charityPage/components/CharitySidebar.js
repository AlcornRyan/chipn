import './CharitySidebar.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function printCharitySidebar() {
  
  return (
    <Grid container className="CharitySidebar">
      <Grid item md={12} className="">
        
        <Grid container>

          {/* Navigation */}
          <Grid container className="cSB_NavigationCon">

            {/* About */}
            <Grid item md={3}>
              <a>About</a>
            </Grid>

            {/* Stories */}
            <Grid item md={3}>
              <a>Stories</a>
            </Grid>

            {/* Impact */}
            <Grid item md={3}>
              <a>Impact</a>
            </Grid>

            {/* Finances */}
            <Grid item md={3}>
              <a>Spending</a>
            </Grid>

          </Grid>

          {/* Tiers */}
          <Grid container className="cSB_TierCon">
            
            {/* Title */}
            <Grid item md={12}>
              <h3>Tiers</h3>
            </Grid>
          
            {/* Tier 1 - Link */}
            <Grid item md={12} className="cSB_Tier">
              <Grid container>

                {/* Logo */}
                <Grid item md={2}>
                  <Grid item className="cSB_TierLogo"></Grid>
                </Grid>

                {/* Title */}
                <Grid item md={10}>
                  <h3>Tier 1</h3>
                  <p>Tier 1 description</p>
                </Grid>

              </Grid>
            </Grid>

            <Grid className="cSB_LineSeparator"></Grid>
            
            {/* Tier 2 - Link */}
            <Grid item md={12} className="cSB_Tier">
              <Grid container>

                {/* Logo */}
                <Grid item md={2}>
                  <Grid item className="cSB_TierLogo"></Grid>
                </Grid>

                {/* Title */}
                <Grid item md={10}>
                  <h3>Tier 2</h3>
                  <p>Tier 2 description</p>
                </Grid>

              </Grid>
            </Grid>
            
            <Grid className="cSB_LineSeparator"></Grid>

            {/* Tier 3 - Link */}
            <Grid item md={12} className="cSB_Tier">
              <Grid container>

                {/* Logo */}
                <Grid item md={2}>
                  <Grid item className="cSB_TierLogo"></Grid>
                </Grid>

                {/* Title */}
                <Grid item md={10}>
                  <h3>Tier 3</h3>
                  <p>Tier 3 description</p>
                </Grid>

              </Grid>
            </Grid>

          </Grid>

          {/* Donate */}
          <Grid container className="cSB_DonateCon">
            
            {/* Title */}
            <Grid item md={12}>
              <h3>Donate</h3>
            </Grid>

            <form noValidate autoComplete="off">
              <Grid container justify="center" spacing={3}>

                {/* Credit Card Number */}
                <Grid item md={12}>
                  <label>Credit Card Number</label>
                  <input type="password" name="password" className="cSB_Input" />
                </Grid>

                {/* Expiry */}
                <Grid item md={6}>
                  <label>Expiry</label>
                  <input type="password" name="password" className="cSB_Input" />
                </Grid>

                {/* CVC */}
                <Grid item md={6}>
                  <label>CVC</label>
                  <input type="password" name="password" className="cSB_Input" />
                </Grid>

                <button>Donate</button>

              </Grid>
            </form>
          
          {/* Tier 1 - Link */}
          <Grid item md={12} className="cSB_Tier">
            <Grid container>

            </Grid>
          </Grid>

          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );
}