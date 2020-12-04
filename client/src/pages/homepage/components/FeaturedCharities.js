import './FeaturedCharities.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Bookmark from '@material-ui/icons/BookmarkBorderOutlined';
import LocationCity from '@material-ui/icons/LocationOnOutlined';
import View from '@material-ui/icons/VisibilityOutlined';

const featuredCharitiesStyle = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  charityCard: {
    margin: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "auto",
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

export default function PrintFeaturedCharities() {

  const classes = featuredCharitiesStyle();

  return (
      <div className="featuredCharitiesContainer" >

      <Grid container flexGrow="1" style={{padding:"1.5rem"}} direction="row" >

      <Grid item xs={12} md={4} direction="column" >
          <Box className={classes.imageSection}>
          <Typography variant="h4" gutterBottom style={{fontWeight:"150" }}>
        Featured Charities
      </Typography>
          </Box>
          <Box className={classes.imageSection} >
            <img alt="charity" src="/images/featured.svg" style={{width:"70%", height:"70%"}}/>
          </Box>
        </Grid>


        <Grid item xs={12} md={4} >
          <Card className={classes.charityCard}>
          <CardActionArea>
                <CardMedia
                className={classes.media}
                image="/images/als.jpg"
                title="ALS Canada"
                />
                <CardContent style={{justifyContent:"center"}}>
                <Typography variant="h5" color="textPrimary">
                        ALS Canada
                      </Typography>
                  <Grid container flexGrow="1" direction="row" 
                        justify="center" alignItems="center" style={{padding:"5px"}}>
                    
                    <Grid item>
                      <LocationCity color="textPrimary"/>
                      </Grid>
                      <Grid item >
                      <Typography variant="caption" color="textSecondary" >
                        Toronto, Ontario, Canada
                      </Typography>
                    </Grid>

                  </Grid>
                </CardContent>
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Since 1977, we've helped individuals across Canada navigate their 
                  available healthcare options and connected you with the ALS community for ongoing assistance.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Grid container flexGrow="1" direction="row">
              <Grid item xs={4} spacing={2}>
                <Button size="small" color={classes.iconStyle}>
                  <View color="textPrimary" style={{padding:"2px"}}/>
                  <Typography variant="caption" color="textSecondary"style={{padding:"2px"}} >
                        2,526,193 
                  </Typography>
                  </Button>
              </Grid>
              <Grid item xs={6} spacing={2} flexGrow="1"></Grid>
              <Grid item xs={2}>
                <Button size="small">
                  <Bookmark color="textSecondary" />
                </Button>
              </Grid>

            </Grid>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} justify="center" alignItems="center">
        <Card className={classes.charityCard}>
          <CardActionArea>
                <CardMedia
                className={classes.media}
                image="/images/feedingamerica.jpg"
                title="Feeding America"
                />
                <CardContent style={{justifyContent:"center"}}>
                <Typography variant="h5" color="textPrimary">
                    Feeding America
                  </Typography>
                  <Grid container flexGrow="1" direction="row" 
                        justify="center" alignItems="center" style={{padding:"5px"}}>
                    
                    <Grid item>
                      <LocationCity color="textPrimary"/>
                      </Grid>
                      <Grid item >
                      <Typography variant="caption" color="textSecondary" >
                        Decorah, Iowa, USA
                      </Typography>
                    </Grid>

                  </Grid>
                </CardContent>
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Since 1992, we've planted more than 82 million trees, 
                  greened more than 660 schoolyards, helped restore places hit
                  by natural disasters and brought together urban forestry experts greening cities all across Canada.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Grid container flexGrow="1" direction="row">
              <Grid item xs={4} spacing={2}>
                <Button size="small" color={classes.iconStyle}>
                  <View color="textPrimary" style={{padding:"2px"}}/>
                  <Typography variant="caption" color="textSecondary"style={{padding:"2px"}} >
                        1,873,217 
                  </Typography>
                  </Button>
              </Grid>
              <Grid item xs={6} spacing={2} flexGrow="1"></Grid>
              <Grid item xs={2}>
                <Button size="small">
                  <Bookmark color="textSecondary" />
                </Button>
              </Grid>

            </Grid>
            </CardActions>
          </Card>
        </Grid>
    </Grid>
    </div>
  );
}