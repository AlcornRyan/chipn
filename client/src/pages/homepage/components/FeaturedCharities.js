import './FeaturedCharities.css';
import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import { Grid } from '@material-ui/core';

class FeaturedCharities extends Component {
  state = {   }
  render() { 
    return (
        <div className="featured-charities-container">
          <Grid
            container
            direction="row">

              <div>
                <h1 className="featured-charities-heading">
                Featured Charities
                </h1>
              </div>
                
              
                <Card className="card-charities" >
                  Card
                </Card>
                
                <Card className="card-charities" >
                  Card
                </Card>
               
          </Grid>
        </div>
      );
  }
}
export default FeaturedCharities;