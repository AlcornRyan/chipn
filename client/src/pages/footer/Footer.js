import './Footer.css';
import Grid from '@material-ui/core/Grid';
import ChipnLogo from '../../logos/chipn-logo.svg';

export default function footerContainer() {
  return (
    <footer>
      <Grid container  className="footerContainer">

          {/* Logo, Slogan & Support - Column 1 */}
          <Grid item md={2} className="footerColumn">
            <img src={ChipnLogo} alt="Chipn Logo" />
            <h4>Supporting Global Giving</h4>
            <h5>Having troubles? Contact us!</h5>
            <h6>support@chipn.ca</h6>
          </Grid>

          {/* Explore - Column 2 */}
          <Grid item md={2} className="footerContentColumn">
            <u><h4>Explore&nbsp;&nbsp;&nbsp;</h4></u>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Discover</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Account</a></li>
            </ul>
          </Grid>

          {/* Column 3 */}
          <Grid item md={2} className="footerContentColumn">
            <u><h4>Explore&nbsp;&nbsp;</h4></u>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Discover</a></li>
              <li><a href="#">How it works</a></li>
            </ul>
          </Grid>

          {/* About us - Column 4 */}
          <Grid item md={2} className="footerContentColumn">
            <u><h4>About us&nbsp;&nbsp;</h4></u>
            <ul>
              <li><a href="#">Company</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">What we do</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </Grid>

          {/* Social Media - Column 5 */}
          <Grid item md={2} className="footerContentColumn">
            <u><h4>Social Media&nbsp;&nbsp;</h4></u>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </Grid>

          {/* Need help? - Column 6 */}
          <Grid item md={2} className="footerContentColumn">
            <u><h4>Need help?&nbsp;&nbsp;</h4></u>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Getting started</a></li>
              <li><a href="#">Contact support</a></li>
            </ul>
          </Grid>

      </Grid>

      <Grid container className="footerLegalContainer">
        
        {/* Copyright - Left side */}
        <Grid item md={6}>
          <p className="footerCopy">&copy; Chipn. All Rights Reserved.</p>
        </Grid>
        
        {/* TOS & PP - Left side */}
        <Grid item md={6}>
          <p className="footerTOSPP">
            <a href="#">Terms of Service</a>&nbsp;
            &
            &nbsp;<a href="#">Privacy Policy</a></p>
        </Grid>
      
      </Grid>
    </footer>
  );
}
    