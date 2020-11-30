import './Header.css';
import Grid from '@material-ui/core/Grid';
import ChipnLogo from '../../logos/chipn-logo.svg';

export default function PrintHeader() {
  return (
      <Grid container className="headerContainer">
        {/* Left side of Header */}
        <Grid item md={12}>
          
          {/* Chipn Logo */}
          <div id="logoContainer">
            <img src={ChipnLogo} alt="Chipn Logo" id="chipnLogo" />
          </div>

          {/* Discover Link */}
          <a href="#">Discover</a>
          
        
        {/* Right side of Header */}
        <div id="rightSideContainer">
          
          {/* Search bar */}
          <div id="searchContainer">
            <input type="text" id="searchBar" placeholder="Search charities" />
          </div>
          
          {/* Sign in Link */}
          <a href="#">Sign in</a>

          <span className="slashDivider">/</span>

          {/* Sign up Link */}
          <a href="#">Sign up</a>

        </div>

        </Grid>
      </Grid>
  );
}
