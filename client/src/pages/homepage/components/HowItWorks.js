import './HowItWorks.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LocationCity from '@material-ui/icons/LocationOnOutlined';
import View from '@material-ui/icons/VisibilityOutlined';
import IconButton from '@material-ui/core/IconButton';

const howItWorksStyle = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  howItWorksCard: {
    margin: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  imageSection: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: 'center',
    contentAlign: 'center',
  },
  media: {
    height: 200,
  },
  iconStyle: {
    color: "#f5f5f5",
  }
}));

export default function PrintHowItWorks() {

  const classes = howItWorksStyle();

  return (
      <div className="howItWorksContainer" >

      <Grid container flexGrow="1" style={{padding:"2rem"}} direction="row" >

      <Grid item xs={12} md={6} lg={4} direction="column" >
          <Box className={classes.imageSection}>
          <Typography variant="h4" gutterBottom style={{fontWeight:"bold" }}>
        How It Works
      </Typography>
          </Box>
          <Box className={classes.imageSection} >
            <img alt="charity" src="/images/howitworksicon.svg" style={{width:"80%", height:"80%"}}/>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={2}>
          <Card className={classes.howItWorksCard}>
          <CardActionArea>
                <CardContent style={{justifyContent:"center"}}>
                <Grid container flexGrow="1" direction="row" justify="center" alignItems="center">
                <Grid item xs={12} sm={8} lg={12}>
           
                {/* <Typography variant="h4" color="textPrimary" 
                style={{padding:"5px",backgroundColor:"#FFCD00", 
                height:"20px", width:"20px", fontSize:"2rem"}}>
                     1
                      </Typography> */}
       
                <img alt="1" src="images/1number.svg" style={{width:"30%", height:"30%", padding:"15px"}}/>
         
                </Grid>

                <Grid item xs={12}>
                <Typography variant="button" color="textPrimary" style={{fontSize:"1rem"}}>
                        Discover A Charity
                </Typography>
                </Grid>

                <Grid item>
                <img alt="1" src="/images/search.svg"  style={{width:"80%", height:"80%", marginTop:"25px", marginBottom:"25px", padding:"5px"}}/>
                </Grid>

                <Grid item>
                <Typography variant="body2" color="textSecondary" component="p">
                  Find a cause you are passionate about.
                </Typography>
                </Grid>
                </Grid>
                </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} lg={2}>
          <Card className={classes.howItWorksCard}>
          <CardActionArea>
                <CardContent style={{justifyContent:"center"}}>
                <Grid container flexGrow="1" direction="row" justify="center" alignItems="center">
                <Grid item xs={12} sm={8} lg={12}>
           
                {/* <Typography variant="h4" color="textPrimary" 
                style={{padding:"5px",backgroundColor:"#FFCD00", 
                height:"20px", width:"20px", fontSize:"2rem"}}>
                     1
                      </Typography> */}
       
                <img alt="2" src="images/2number.svg" style={{width:"30%", height:"30%", padding:"15px"}}/>
         
                </Grid>

                <Grid item xs={12}>
                <Typography variant="button" color="textPrimary" style={{fontSize:"1rem"}}>
                        Get Involved
                </Typography>
                </Grid>

                <Grid item>
                <img alt="1" src="/images/getinvolved.svg"  style={{width:"80%", height:"80%", marginTop:"25px", marginBottom:"25px", padding:"5px"}}/>
                </Grid>

                <Grid item>
                <Typography variant="body2" color="textSecondary" component="p">
                  There are countless ways to get involved with your cause. Become a donor!
                </Typography>
                </Grid>
                </Grid>
                </CardContent>
            </CardActionArea>
          </Card>
        </Grid>


        <Grid item xs={12} md={4} lg={2}>
          <Card className={classes.howItWorksCard}>
          <CardActionArea>
                <CardContent style={{justifyContent:"center"}}>
                <Grid container flexGrow="1" direction="row" justify="center" alignItems="center">
                <Grid item xs={12} sm={8} lg={12}>
           
                {/* <Typography variant="h4" color="textPrimary" 
                style={{padding:"5px",backgroundColor:"#FFCD00", 
                height:"20px", width:"20px", fontSize:"2rem"}}>
                     1
                      </Typography> */}
       
                <img alt="3" src="images/3number.svg" style={{width:"30%", height:"30%", padding:"15px"}}/>
         
                </Grid>

                <Grid item xs={12}>
                <Typography variant="button" color="textPrimary" style={{fontSize:"1rem"}}>
                        See Results
                </Typography>
                </Grid>

                <Grid item>
                <img alt="1" src="/images/seeresults1.svg"  style={{width:"80%", height:"80%", marginTop:"25px", marginBottom:"25px", padding:"5px"}}/>
                </Grid>

                <Grid item>
                <Typography variant="body2" color="textSecondary" component="p">
                  Follow stories and content about where your dollar is going. Do good together!
                </Typography>
                </Grid>
                </Grid>
                </CardContent>
            </CardActionArea>
          </Card>
        </Grid>


        <Grid item xs={12} md={4} lg={2}>
          <Card className={classes.howItWorksCard}>
          <CardActionArea>
                <CardContent style={{justifyContent:"center"}}>
                <Grid container flexGrow="1" direction="row" justify="center" alignItems="center">
                <Grid item xs={12} sm={8} lg={12}>
           
                {/* <Typography variant="h4" color="textPrimary" 
                style={{padding:"5px",backgroundColor:"#FFCD00", 
                height:"20px", width:"20px", fontSize:"2rem"}}>
                     1
                      </Typography> */}
       
                <img alt="4" src="images/4number.svg" style={{width:"30%", height:"30%", padding:"15px"}}/>
                
                </Grid>

                <Grid item xs={12}>
                <Typography variant="button" color="textPrimary" style={{fontSize:"1rem"}}>
                        Work Together
                </Typography>
                </Grid>

                <Grid item>
                <img alt="1" src="/images/worktogether1.svg"  style={{width:"80%", height:"80%", marginTop:"25px", marginBottom:"25px", padding:"5px"}}/>
                </Grid>

                <Grid item>
                <Typography variant="body2" color="textSecondary" component="p">
                  Find your community of like-minded people and receive updates from your cause.
                </Typography>
                </Grid>
                </Grid>
                </CardContent>
            </CardActionArea>
          </Card>
        </Grid>


        
    </Grid>
    </div>
  );
}