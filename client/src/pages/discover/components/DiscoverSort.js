import './DiscoverSort.css';
import Grid from '@material-ui/core/Grid';

export default function printDiscoverSort() {
  return (
    <Grid container className="discoverSort">
      
      {/* Title */}
      <Grid item md={12} className="dis_SortTitle">
        <h3>Discover Charities</h3>
      </Grid>
      
      {/* Category */}
      <Grid item md={12} className="dis_SortCategory">
        
        {/* Category Title and Hide button */}
        <Grid item md={12} className="dis_SortCategoryHeader">
          <h4>Categories</h4>
        </Grid>
        
        {/* Category sort options */}
        <Grid container className="dis_SortCategoryBody">

          <Grid item md={12}>
            <input type="checkbox" name="categoryName"/>
            <p>Animals</p>
          </Grid>

          <Grid item md={12}>
            <input type="checkbox" name="categoryName"/>
            <p>Arts & Culture</p>
          </Grid>

          <Grid item md={12}>
            <input type="checkbox" name="categoryName"/>
            <p>Education</p>
          </Grid>

          <Grid item md={12}>
            <input type="checkbox" name="categoryName"/>
            <p>Environment</p>
          </Grid>

          <Grid item md={12}>
            <input type="checkbox" name="categoryName"/>
            <p>Health</p>
          </Grid>

          <Grid item md={12}>
            <input type="checkbox" name="categoryName"/>
            <p>Indigenous Peoples</p>
          </Grid>

          <Grid item md={12}>
            <input type="checkbox" name="categoryName"/>
            <p>International</p>
          </Grid>

          <Grid item md={12}>
            <input type="checkbox" name="categoryName"/>
            <p>Public Benefit</p>
          </Grid>

          <Grid item md={12}>
            <input type="checkbox" name="categoryName"/>
            <p>Social Services</p>
          </Grid>

          <Grid item md={12}>
            <input type="checkbox" name="categoryName"/>
            <p>Religion</p>
          </Grid>

        </Grid>

      </Grid>
      
      {/* Located in */}
      <Grid item md={12} className="">
        Discover Charities
      </Grid>
      
      {/* Mission Scope */}
      <Grid item md={12} className="">
        Discover Charities
      </Grid>
      
      {/* Helping in */}
      <Grid item md={12} className="">
        Discover Charities
      </Grid>
      
      {/* Tags */}
      <Grid item md={12} className="">
        Discover Charities
      </Grid>
      
      {/* Number of results displayed */}
      <Grid item md={12} className="">
        Discover Charities
      </Grid>


    </Grid>
  );
}
  