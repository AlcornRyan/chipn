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
        
        {/* Heading and Hide button */}
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
      <Grid item md={12} className="dis_SortLocatedIn">
        
        {/* Heading and Hide button */}
        <Grid item md={12} className="dis_SortCategoryHeader">
          <h4>Located in</h4>
        </Grid>
        
        {/* Select charity location */}
        <Grid item md={12}>
          <select name="locatedIn" className="sortSelectStyling">
            <option>All locations</option>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
          </select>
        </Grid>

      </Grid>
      
      {/* Mission Scope */}
      <Grid item md={12} className="dis_SortMissionScope">
        
        {/* Heading and Hide button */}
        <Grid item md={12} className="dis_SortCategoryHeader">
          <h4>Mission scope</h4>
        </Grid>
        
        {/* Select mission scope of charity */}
        <Grid item md={12}>
          <select name="missionScope" className="sortSelectStyling">
            <option>All Mission Scopes</option>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
          </select>
        </Grid>

      </Grid>
      
      {/* Helping in */}
      <Grid item md={12} className="dis_SortHelpingIn">
        
        {/* Heading and Hide button */}
        <Grid item md={12} className="dis_SortCategoryHeader">
          <h4>Helping in</h4>
        </Grid>

        {/* Select location charity is helping in */}
        <Grid item md={12}>
          <select name="helpingIn" className="sortSelectStyling">
            <option>All locations</option>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
          </select>
        </Grid>

      </Grid>
      
      {/* Tags */}
      <Grid item md={12} className="dis_SortTags">
        
        {/* Heading and Hide button */}
        <Grid item md={12} className="dis_SortCategoryHeader">
          <h4>Tags</h4>
        </Grid>

        {/* */}
        <Grid item md={12}>
          <input type="text" name="tags" placeholder="Search Tags" className="sortTextInputStyling" />
        </Grid>

      </Grid>
      
      {/* Number of results displayed */}
      <Grid item md={12} className="dis_DisplayingResults">
        Displaying 1 result
      </Grid>


    </Grid>
  );
}
  