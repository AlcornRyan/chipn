import './FeaturedCharities.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import charityImage from '../../../images/featured.svg';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import als from '../../../images/als.jpg'
import feed from '../../../images/feedingamerica.jpg';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const featuredCharitiesStyle = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  charityCard: {
    margin: theme.spacing(3),
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
}));

export default function PrintFeaturedCharities() {

  const classes = featuredCharitiesStyle();

  return (
      <div className="featuredCharitiesContainer" style={{justify:"center"}}>

      <Grid container flexGrow="1" style={{padding:"1.5rem"}} direction="row" justify="center" alignItems="center">

      <Grid item xs={12} md={4} direction="column" justify="center" alignItems="center">
          <Box className={classes.imageSection}>
          <Typography variant="h4" gutterBottom style={{fontWeight:"bold" }}>
        Featured Charities
      </Typography>
          </Box>
          <Box className={classes.imageSection} >
            <img alt="charity" src={charityImage} style={{width:"80%", height:"80%"}}/>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} justify="center" alignItems="center">
          <Card className={classes.charityCard}>
          <CardActionArea>
                <CardMedia
                className={classes.media}
                image={als}
                title="ALS Canada"
                />
                <CardContent>
       
                <Typography variant="h5" color="textPrimary" >
                  ALS Canada
                </Typography>
                <Typography variant="caption" color="textSecondary">
                 Toronto, Ontario, Canada
                </Typography>
                </CardContent>
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Since 1977, we've helped individuals across Canada navigate their 
                  available healthcare options and connected you with the ALS community for ongoing assistance.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} justify="center" alignItems="center">
        <Card className={classes.charityCard}>
          <CardActionArea>
                <CardMedia
                className={classes.media}
                image={feed}
                title="Feeding America"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" color="textPrimary">
                Feeding America
                </Typography>
                </CardContent>
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Since 1977, we've helped individuals across Canada navigate their 
                  available healthcare options and connected you with the ALS community for ongoing assistance.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
    </Grid>
    </div>
  );
}