import './Header.css';
import Grid from '@material-ui/core/Grid';
import ChipnLogo from '../../logos/chipn-logo.svg';
import { NavLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

export default function PrintHeader() {
  return (
  <Grid container className="headerContainer">
    <Grid item xs={12}>
      {/* Header Container */}
      <Grid container>
            
        {/* Left side */}
        <Grid item sm={4}>
              
          {/* Chipn Logo */}
          <Grid className="logoContainer">
            <NavLink to="/">
              <img src={ChipnLogo} alt="Chipn Logo" className="chipnLogo" />
            </NavLink>
          </Grid>

          {/* Discover Link */}
          <NavLink to="/discover" className="">Discover</NavLink>

        </Grid>
            
        {/* Right side */}
        <Grid item sm={8} className="rightSideContainer">
          <Grid container justify="flex-end">
            {/* Search bar */}
            <Grid  id="searchContainer">
              <input type="text" id="searchBar" placeholder="Search charities" />
            </Grid>
                
            {/* Sign in Link */}
            <NavLink to="/signin" className="signInLink rightLinks">Sign in</NavLink>

            {/* Sign up Link */}
            <NavLink to="/signup" className="rightLinks">Sign up</NavLink>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  );
}
