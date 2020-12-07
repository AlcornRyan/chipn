import './CharityBanner.css';
import Grid from '@material-ui/core/Grid';

export default function printCharityBanner() {
  return (
    <Grid container className="CharityBanner">
      <Grid item md={12} className="">
        Banner
      </Grid>
    </Grid>
  );
}