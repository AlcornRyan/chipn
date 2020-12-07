import './CharitySidebar.css';
import Grid from '@material-ui/core/Grid';

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
              <a>History</a>
            </Grid>

          </Grid>

          <Grid className="cSB_LineSeparator"></Grid>
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
                  <h4>Tier 1</h4>
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
                  <h4>Tier 2</h4>
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
                  <h4>Tier 3</h4>
                  <p>Tier 3 description</p>
                </Grid>

              </Grid>
            </Grid>

          </Grid>

          <Grid className="cSB_LineSeparator"></Grid>
          {/* Donate */}
          <Grid container className="cSB_DonateCon">
            
            {/* Title */}
            <Grid item md={12}>
              <h3>Donate</h3>
            </Grid>

            <form noValidate autoComplete="off">
              <Grid container justify="center" spacing={3}>

                {/* Donation Amount */}
                <Grid item md={12}>
                  <label>Donation Amount</label>
                  <input type="text" name="password" placeholder="" maxlength="19" className="cSB_Input" />
                </Grid>
                
                {/* Credit Card Number */}
                <Grid item md={12}>
                  <label className="cSB_RaiseAll">Credit Card Number</label>
                  <input type="text" name="password" placeholder="#### #### #### ####" maxlength="19" className="cSB_Input" />
                </Grid>

                {/* Expiry */}
                <Grid item md={6}>
                  <label className="cSB_RaiseAll">Expiry</label>
                  <input type="text" name="password" placeholder="MM/YY" maxlength="5" className="cSB_Input" />
                </Grid>

                {/* CVC */}
                <Grid item md={6}>
                  <label className="cSB_RaiseAll">CVC</label>
                  <input type="text" name="password" placeholder="" maxlength="3" className="cSB_Input" />
                </Grid>

                <Grid container className="donatingStatus">
                  <Grid item md={12} className="donatingStatus_Inner">
                    <p>Currently donating anonymously</p>
                  </Grid>
                </Grid>

                <button>Donate</button>

              </Grid>
            </form>

          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );
}