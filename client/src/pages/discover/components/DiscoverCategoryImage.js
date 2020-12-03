import './DiscoverCategoryImage.css';
import Grid from '@material-ui/core/Grid';
import forestBG from '../../../images/brighter-forest.jpg';

export default function printDiscoverCategoryImage() {
  return (
    <Grid container className="dis_CategoryImageContainer">
      <Grid item md={12} className="dis_CategoryImage">
        <img src={forestBG} alt="Elephant walking in desert" className="dis_CategoryBackgroundImage" />
      </Grid>
    </Grid>
  );
}
  