import './Discover.css';
import Grid from '@material-ui/core/Grid';
import DiscoverSort from './components/DiscoverSort';
import DiscoverCategoryImage from './components/DiscoverCategoryImage';
import DiscoverCharityContainer from './components/DiscoverCharityContainer';

export default function DiscoverPage() {
  return (
    <Grid container className="Discover">
      
      <Grid item md={3} className="sortBarContainer">
        <DiscoverSort />
      </Grid>
      
      <Grid item md={9} className="rightContainer">
        <DiscoverCategoryImage />
        <DiscoverCharityContainer />
      </Grid>
      
    </Grid>
  );
}