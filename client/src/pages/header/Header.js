import './Header.css';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

export default function PrintHeader(props) {

  return (
  
    <Grid container className="outerContainer" >
        {/* Header Container */}
        <React.Fragment >
        <CssBaseline />
      <HideOnScroll {...props} >
        <AppBar className="appbar">

        <Grid container direction="row" className="gridcontain">

        <Grid item className="items">
            {/* Chipn Logo */}
            
            <NavLink to="/" className="logoContainer">
              <img src="/chipnLogo.svg" alt="Chipn Logo" className="logochipn"/>
            </NavLink>
        </Grid>

        <Grid item className="items">
           {/* Discover Link */}
           <NavLink to="/discover" className="discover" >discover</NavLink>
        </Grid>

        <Grid item sm={1} md={4} lg={6}></Grid>

        <Grid item className="items">
          {/* Search bar */}
            <input type="text" className="search" placeholder="Search Charities"
            style={{backgroundColor:"transparent",
            border: "1px solid white"}} />
        </Grid>

        <Grid item className="items">
            {/* Sign in Link */}
            <NavLink to="/signin" className="login">
                login
            </NavLink>
        </Grid>

        <Grid item className="items">
              {/* Sign up Link */}
              <NavLink to="/signup" className="register">
                register
            </NavLink>
            </Grid>
        </Grid>
      </AppBar>
      </HideOnScroll>
      </React.Fragment>
      </Grid>
  );
}