import './Header.css';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Search from '@material-ui/icons/SearchOutlined';
import { Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  item: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function PrintHeader(props) {

  const classes = useStyles();

  return (
   <div className={classes.root}>
      <Grid container 
      direction="row" 
      style={{backgroundColor:"white", marginBottom:"4em", 
      flexGrow:"1", justify:"center", alignItems:"flex-start"}}>
        {/* Header Container */}

        <React.Fragment>
        <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{backgroundImage:'url("/images/elephantblur.jpg")', backgroundSize: "cover", color:"transparent"}} >
          <Toolbar>


        <Grid item className="chipnLogo">
            {/* Chipn Logo */}
            <NavLink to="/">
              <img src="/chipnLogoW3.svg" alt="Chipn Logo"  style={{width:"95px", height:"35px", 
              objectFit:"cover"}}/>
            </NavLink>
        </Grid>


          <Grid item  >
           {/* Discover Link */}
           <NavLink to="/discover" className="discover" style={{border: "1px solid transparent",
              borderRadius: "10px", padding:"10px"}}>discover</NavLink>
          </Grid>


          <Grid item>
          <Search style={{color:"white", justify:"center"}}/>
          </Grid>     

          <Grid item >
          {/* Search bar */}
            <input type="text" id="searchBar" className="search"
            style={{backgroundColor:"transparent",
            border: "1px solid white",
            placeholder:"search charities",
            padding:"10px",
            borderRadius:"10px", 
            color:"textPrimary"}} />
            </Grid>
       

       <Grid item spacing={2}>
            {/* Sign in Link */}
            <NavLink to="/signin" className="login" style={{border: "1.4px solid white",
              borderRadius: "10px", padding:"10px"}}>
           login
           
            </NavLink>
            </Grid>


            <Grid >
              {/* Sign up Link */}
              <NavLink to="/signup" className="signup" style={{border: "1.4px solid transparent",
              borderRadius: "10px", padding:"10px"}}>sign up</NavLink>
            </Grid>

        </Toolbar>
      </AppBar>
      </HideOnScroll>
      </React.Fragment>
      </Grid>
      </div>
  );
}
