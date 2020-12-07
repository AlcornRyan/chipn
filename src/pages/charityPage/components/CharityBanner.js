import './CharityBanner.css';
import Grid from '@material-ui/core/Grid';

export default function printCharityBanner() {
  return (
    <Grid container className="CharityBanner">
      <Grid item md={12} className="">
        
        <Grid container>
        
          <Grid item md={12}>

            {/* Charity Logo */}
            <Grid item md={12} className="cBanner_LogoCon">
              <Grid className="cBanner_Logo">
                <img src="/images/unicef_logo.png" alt="" />
              </Grid>
            </Grid>

          </Grid>

        </Grid>
        

      </Grid>
    </Grid>
  );
}