import './CharityAbout.css';
import Grid from '@material-ui/core/Grid';

export default function printCharityAbout() {
  return (
    <Grid container className="CharityAbout">
      <Grid item md={12} className="">
        <h3>About</h3>
      </Grid>
    </Grid>
  );
}