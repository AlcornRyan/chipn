import './Header.css';
import Grid from '@material-ui/core/Grid';
import ChipnLogo from '../../logos/chipn-logo.svg';
import { NavLink } from 'react-router-dom';

export default function PrintHeader() {
  return (
      <Grid container className="headerContainer">
        {/* Header Container */}
        <Grid item md={12}>
          
          {/* Chipn Logo */}
          <div className="logoContainer">
            <NavLink to="/">
              <img src={ChipnLogo} alt="Chipn Logo" className="chipnLogo" />
            </NavLink>
          </div>

          {/* Discover Link */}
          <NavLink to="/discover" className="">Discover</NavLink>
          
        
        {/* Right side of Header */}
        <div id="rightSideContainer">
          
          {/* Search bar */}
          <div id="searchContainer">
            <input type="text" id="searchBar" placeholder="Search charities" />
          </div>
          
          {/* Sign in Link */}
          <NavLink to="/signin" className="signInLink rightLinks">Sign in</NavLink>

          {/* Sign up Link */}
          <NavLink to="/signup" className="rightLinks">Sign up</NavLink>

        </div>

        </Grid>
      </Grid>
  );
}
