import './CharityAbout.css';
import Grid from '@material-ui/core/Grid';
import CharityThreeBox from './CharityThreeBox';

export default function printCharityAbout() {
  return (
    <Grid container className="CharityAbout">
      
        
        <Grid item md={12} className="c_TitleCon">
          <Grid container>
            <Grid item md={6}>
              <Grid container>
                <Grid item md={12}>
                  <h1 className="c_Title">Unicef Canada</h1><br />
                </Grid>
                <Grid item md={12}>
                  <h5 className="c_Location">in Toronto, Ontario, Canada</h5>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <h4 className="c_BusinessNumber"><span className="c_BusinessNumberSmall">Business No: </span>122680572RR0001</h4>
            </Grid>
          </Grid>
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
        <CharityThreeBox />
      
    </Grid>
  );
}