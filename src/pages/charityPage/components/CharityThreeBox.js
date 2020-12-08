import './CharityThreeBox.css';
import Grid from '@material-ui/core/Grid';

export default function printCharityThreeBox() {
  return (
    <Grid container justify="center" className="c_resultsCon">
          
    {/*  */}
    <Grid item md={12}>
      <h3>Mission</h3>
    </Grid>
    
    {/*  */}
    <Grid item md={11}>
      <Grid container justify="start" spacing={2} className="c_threeBoxCon">

        {/*  */}
        <Grid item md={4} className="c_threeBoxCon">
          <Grid item md={12} className="c_threeBox">
            <h3>$216</h3>
          </Grid>
          <h4>to access education</h4>
        </Grid>

        {/*  */}
        <Grid item md={4} className="c_threeBoxCon">
          <Grid item md={12} className="c_threeBox">
            <h3>29.9</h3>
          </Grid>
          <h4>million people</h4>
        </Grid>

        {/*  */}
        <Grid item md={4} className="c_threeBoxCon">
          <Grid item md={12} className="c_threeBox">
            <h3>2.8</h3>
          </Grid>
          <h4>million children</h4>
        </Grid>

      </Grid>
    </Grid>
  </Grid>
  );
}