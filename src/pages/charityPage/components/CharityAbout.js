import './CharityAbout.css';
import Grid from '@material-ui/core/Grid';

export default function printCharityAbout() {
  return (
    <Grid container className="CharityAbout">
      
        
        <Grid item md={12} className="c_TitleCon">
          <h1 className="cTitle">Unicef Canada</h1>
          <h4 className="cBusinessNumber">Unicef Canada</h4>
        </Grid>
        
        <Grid item md={12} className="c_ContentCon">
          <h3>About Us</h3>
          <p>
          UNICEF is the world's leading child-focused humanitarian and development agency. 
          Through innovative programs and advocacy work, we secure children's rights in virtually every country. 
          Our global reach, unparalleled influence on policymakers, and diverse partnerships make us an instrumental force 
          in shaping a world fit for children. UNICEF is supported entirely by voluntary donations and helps all children, 
          regardless of race, religion or politics.
          </p>
          <br />
          <h3>Our Goals</h3>
          <p>
          &bull; Emergency relief following natural or humanitarian crises<br />
          &bull; Clean water, vaccines and access to medical care<br />
          &bull; Educational opportunities and supplies<br />
          </p>
        </Grid>
        
        {/* Our Results */}
        <Grid container justify="center" className="c_resultsCon">
          
          {/*  */}
          <Grid item md={12}>
            <h3>Mission</h3>
          </Grid>
          
          {/*  */}
          <Grid item md={11}>
            <Grid container justify="start" spacing={2} className="c_threeBoxCon">

              {/*  */}
              <Grid item md={4} className="c_threeBoxCon">
                <Grid item md={12} className="c_threeBox">
                  <h3>$216</h3>
                </Grid>
                <h4>to access education</h4>
              </Grid>

              {/*  */}
              <Grid item md={4} className="c_threeBoxCon">
                <Grid item md={12} className="c_threeBox">
                  <h3>29.9</h3>
                </Grid>
                <h4>million people</h4>
              </Grid>

              {/*  */}
              <Grid item md={4} className="c_threeBoxCon">
                <Grid item md={12} className="c_threeBox">
                  <h3>2.8</h3>
                </Grid>
                <h4>million children</h4>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      
    </Grid>
  );
}