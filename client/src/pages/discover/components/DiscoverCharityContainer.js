import './DiscoverCharityContainer.css';
import Grid from '@material-ui/core/Grid';

export default function printDiscoverCharityContainer() {
  return (
    <Grid container justify="center" className="DiscoverCharityContainer" spacing={3}>
      
      <Grid item md={4} className="dis_CharityCardContainer">
        <Grid container>
          <Grid item md={12} className="dis_CharityCard">
            1
          </Grid>
        </Grid>
      </Grid>
      
      <Grid item md={4} className="">
        <Grid container>
          <Grid item md={12} className="dis_CharityCard">
            2
          </Grid>
        </Grid>
      </Grid>
      
      <Grid item md={4} className="">
        <Grid container>
          <Grid item md={12} className="dis_CharityCard">
            3
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={4} className="dis_CharityCardContainer">
        <Grid container>
          <Grid item md={12} className="dis_CharityCard">
            4
          </Grid>
        </Grid>
      </Grid>
      
      <Grid item md={4} className="">
        <Grid container>
          <Grid item md={12} className="dis_CharityCard">
            5
          </Grid>
        </Grid>
      </Grid>
      
      <Grid item md={4} className="">
        <Grid container>
          <Grid item md={12} className="dis_CharityCard">
            6
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
  