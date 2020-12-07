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
                <img src="/public/images/charity/unicef_logo.png" />
              </Grid>
            </Grid>

            {/* Charity Title */}
            <Grid item md={12} className="cBanner_TitleCon">
              <h1>Unicef Canada</h1>
            </Grid>

          </Grid>

        </Grid>
        

      </Grid>
    </Grid>
  );
}