import './DiscoverCharityContainer.css';
import Grid from '@material-ui/core/Grid';
import charityCardImage from '../../../images/Brighter-forest.jpg';
import { Link } from 'react-router-dom';

export default function printDiscoverCharityContainer() {
  return (

    <Grid container direction="column" >

  <Grid item md={6}>
    <Link to="/charity/1">
      <Grid container justify="start" className="DiscoverCharityContainer" >
        
        {/* Charity Card */}
        <Grid item md={6} className="dis_CharityCardContainer">
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
            <Grid item md={12} justify="start" className="dis_CharityCardCategoryContainer" >
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
        </Grid>
      </Grid>
    </Link> 
    </Grid>



    <Grid item md={6}>
    <Link to="/charity/2">
      <Grid container justify="start" className="DiscoverCharityContainer" >
        
        {/* Charity Card */}
        <Grid item md={6} className="dis_CharityCardContainer">
          <Grid container className="dis_CharityCard">
            
            {/* Image Container */}
            <Grid item md={12} className="">
              <img src="../../../images/image1.png" alt="Elephant walking in desert" />
              <h3>Spay Day HRM Society</h3>
              <p>Halifax, NS, Canada</p>
              
              <div className="dis_CharityCardDescription">
                <p>
                Spay Day HRM was formed to address the cat population explosion in the Halifax area. We assist those of low income to have their cats fixed.
                </p>
              </div>

            </Grid>

            {/* Category Container */}
            <Grid item md={12} justify="start" className="dis_CharityCardCategoryContainer" >
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
        </Grid>
      </Grid>
    </Link> 
    </Grid>

    <Grid item md={6}>
    <Link to="/charity/2">
      <Grid container justify="start" className="DiscoverCharityContainer" >
        
        {/* Charity Card */}
        <Grid item md={6} className="dis_CharityCardContainer">
          <Grid container className="dis_CharityCard">
            
            {/* Image Container */}
            <Grid item md={12} className="">
              <img src="../../../images/image2.png" alt="Elephant walking in desert" />
              <h3>Port Colborne Historical and Marine Museum</h3>
              <p>Port Colborne, ON, Canada</p>
              
              <div className="dis_CharityCardDescription">
                <p>
                The Port Colborne Historical and Marine Museum's mission is to serve 
                Port Colborne’s residents and visitors by preserving, exhibiting, and interpreting the artifacts and archives of Port Colborne and Humberstone.
                </p>
              </div>

            </Grid>

            {/* Category Container */}
            <Grid item md={12} justify="start" className="dis_CharityCardCategoryContainer" >
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
        </Grid>
      </Grid>
    </Link> 
    </Grid>

    <Grid item md={6}>
    <Link to="/charity/3">
      <Grid container justify="start" className="DiscoverCharityContainer" >
        
        {/* Charity Card */}
        <Grid item md={6} className="dis_CharityCardContainer">
          <Grid container className="dis_CharityCard">
            
            {/* Image Container */}
            <Grid item md={12} className="">
              <img src="../../../images/image3.png" alt="Elephant walking in desert" />
              <h3>UNICEF Canada</h3>
              <p>Toronto, ON, Canada</p>
              
              <div className="dis_CharityCardDescription">
                <p>
                UNICEF works in over 190 countries and territories to protect 
                the rights of every child. </p>
              </div>

            </Grid>

            {/* Category Container */}
            <Grid item md={12} justify="start" className="dis_CharityCardCategoryContainer" >
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
        </Grid>
      </Grid>
    </Link> 
    </Grid>

    <Grid item md={6}>
    <Link to="/charity/2">
      <Grid container justify="start" className="DiscoverCharityContainer" >
        
        {/* Charity Card */}
        <Grid item md={6} className="dis_CharityCardContainer">
          <Grid container className="dis_CharityCard">
            
            {/* Image Container */}
            <Grid item md={12} className="">
              <img src="../../../images/image4.png" alt="Elephant walking in desert" />
              <h3>Elimu</h3>
              <p>Ottawa, ON, Canada</p>
              
              <div className="dis_CharityCardDescription">
                <p>
                Elimu empowers Kenyan Children, youth and adults to become more 
                enterprising in how they approach their futures. 
                </p>
              </div>

            </Grid>

            {/* Category Container */}
            <Grid item md={12} justify="start" className="dis_CharityCardCategoryContainer" >
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
        </Grid>
      </Grid>
    </Link> 
    </Grid>


    <Grid item md={6}>
    <Link to="/charity/2">
      <Grid container justify="start" className="DiscoverCharityContainer" >
        
        {/* Charity Card */}
        <Grid item md={6} className="dis_CharityCardContainer">
          <Grid container className="dis_CharityCard">
            
            {/* Image Container */}
            <Grid item md={12} className="">
              <img src="../../../images/image5.png" alt="Elephant walking in desert" />
              <h3>Small Change Fund</h3>
              <p>Toronto, ON, Canada</p>
              
              <div className="dis_CharityCardDescription">
                <p>
                Small Change Fund is the only crowdfunding organization that 
                matches every donation for grassroots groups in Canada.
                </p>
              </div>

            </Grid>

            {/* Category Container */}
            <Grid item md={12} justify="start" className="dis_CharityCardCategoryContainer" >
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
        </Grid>
      </Grid>
    </Link> 
    </Grid>


    <Grid item md={6}>
    <Link to="/charity/2">
      <Grid container justify="start" className="DiscoverCharityContainer" >
        
        {/* Charity Card */}
        <Grid item md={6} className="dis_CharityCardContainer">
          <Grid container className="dis_CharityCard">
            
            {/* Image Container */}
            <Grid item md={12} className="">
              <img src="../../../images/image6.png" alt="Elephant walking in desert" />
              <h3>Canadian Neurovascular Health Society</h3>
              <p>Victoria, BC Canada</p>
              
              <div className="dis_CharityCardDescription">
                <p>
                We are dedicated to improving the lives of Canadians affected by 
                neurovascular conditions and diseases through support, research & education
                </p>
              </div>

            </Grid>

            {/* Category Container */}
            <Grid item md={12} justify="start" className="dis_CharityCardCategoryContainer" >
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
        </Grid>
      </Grid>
    </Link> 
    </Grid>


    <Grid item md={6}>
    <Link to="/charity/2">
      <Grid container justify="start" className="DiscoverCharityContainer" >
        
        {/* Charity Card */}
        <Grid item md={6} className="dis_CharityCardContainer">
          <Grid container className="dis_CharityCard">
            
            {/* Image Container */}
            <Grid item md={12} className="">
              <img src="../../../images/image7.png" alt="Elephant walking in desert" />
              <h3>PAAL Let's share the world</h3>
              <p>Canada</p>
              
              <div className="dis_CharityCardDescription">
                <p>
                PAAL works to end racism and discrimination through intercultural art activities
                </p>
              </div>

            </Grid>

            {/* Category Container */}
            <Grid item md={12} justify="start" className="dis_CharityCardCategoryContainer" >
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
        </Grid>
      </Grid>
    </Link> 
    </Grid>


    </Grid>
  );
}
  