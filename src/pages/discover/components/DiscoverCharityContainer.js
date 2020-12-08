import './DiscoverCharityContainer.css';
import Grid from '@material-ui/core/Grid';
import charityCardImage from '../../../images/Brighter-forest.jpg';
import { Link } from 'react-router-dom';

export default function printDiscoverCharityContainer() {
  return (
  <Grid container>
    <Grid item md={12}>
      <Grid container justify="start" className="DiscoverCharityContainer" spacing={3}>
        
        {/* Charity Card */}
        <Grid item md={4}>
            <Link to="/charity/1" className="dis_CharityCardContainer">
              <Grid container className="dis_CharityCard">
                
                {/* Image Container */}
                <Grid item md={12} className="">
                  <img src={charityCardImage} alt="Elephant walking in desert" />
                  <h3>Trans Canada Trail Foundation</h3>
                  <p>Mississauga, ON, Canada</p>
                  
                  <div className="dis_CharityCardDescription">
                    <p>
                    Bringing communities together to help families<br/>
                    build strength, stability and independence through<br/>
                    affordable homeownership.
                    </p>
                  </div>

                </Grid>

                {/* Category Container */}
                <Grid item md={12} justify="start" className="dis_CharityCardCategoryContainer" spacing={3}>
                  <div className="dis_CharityCardCategoryIcon">

                  </div>
                  <div className="dis_CharityCardCategoryIcon">

                  </div>
                </Grid>
                
                {/* Footer Container */}
                <Grid item md={12} className="dis_CharityCardFooter">
                  Learn more
                </Grid>

              </Grid>
            </Link>
          </Grid>
          {/* END OF Charity Card */}


          {/* Charity Card */}
          <Grid item md={4}>
            <Link to="/charity/2" className="dis_CharityCardContainer">
              <Grid container className="dis_CharityCard">
                
                {/* Image Container */}
                <Grid item md={12} className="">
                  <img src={charityCardImage} alt="Elephant walking in desert" />
                  <h3>Trans Canada Trail Foundation</h3>
                  <p>Mississauga, ON, Canada</p>
                  
                  <div className="dis_CharityCardDescription">
                    <p>
                    Bringing communities together to help families<br/>
                    build strength, stability and independence through<br/>
                    affordable homeownership.
                    </p>
                  </div>

                </Grid>

                {/* Category Container */}
                <Grid item md={12} justify="start" className="dis_CharityCardCategoryContainer" spacing={3}>
                  <div className="dis_CharityCardCategoryIcon">

                  </div>
                  <div className="dis_CharityCardCategoryIcon">

                  </div>
                </Grid>
                
                {/* Footer Container */}
                <Grid item md={12} className="dis_CharityCardFooter">
                  Learn more
                </Grid>

              </Grid>
            </Link>
          </Grid>
          {/* END OF Charity Card */}


          {/* Charity Card */}
          <Grid item md={4}>
            <Link to="/charity/3" className="dis_CharityCardContainer">
              <Grid container className="dis_CharityCard">
                
                {/* Image Container */}
                <Grid item md={12} className="">
                  <img src={charityCardImage} alt="Elephant walking in desert" />
                  <h3>Trans Canada Trail Foundation</h3>
                  <p>Mississauga, ON, Canada</p>
                  
                  <div className="dis_CharityCardDescription">
                    <p>
                    Bringing communities together to help families<br/>
                    build strength, stability and independence through<br/>
                    affordable homeownership.
                    </p>
                  </div>

                </Grid>

                {/* Category Container */}
                <Grid item md={12} justify="start" className="dis_CharityCardCategoryContainer" spacing={3}>
                  <div className="dis_CharityCardCategoryIcon">

                  </div>
                  <div className="dis_CharityCardCategoryIcon">

                  </div>
                </Grid>
                
                {/* Footer Container */}
                <Grid item md={12} className="dis_CharityCardFooter">
                  Learn more
                </Grid>

              </Grid>
            </Link>
          </Grid>
          {/* END OF Charity Card */}


      </Grid>
    </Grid>
  </Grid>
  );
}
  