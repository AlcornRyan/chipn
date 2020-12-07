import './CharityBanner.css';
import Grid from '@material-ui/core/Grid';

export default function printCharityBanner() {
  return (
    <Grid container className="CharityBanner">
      <Grid item md={12} className="">
        
        <Grid container>
        
          <Grid item md={4}>

            {/* Charity Logo */}
            <Grid item md={12} className="cBanner_Logo">

            </Grid>

            {/* Charity Title */}
            <Grid item md={12} className="cBanner_Title">
              <h1>Unicef Canada</h1>
            </Grid>

          </Grid>
        
          <Grid item md={8}>
            
          </Grid>

        </Grid>
        

      </Grid>
    </Grid>
  );
}