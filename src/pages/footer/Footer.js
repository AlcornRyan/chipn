import './Footer.css';
import Grid from '@material-ui/core/Grid';
import ChipnLogo from '../../logos/chipn-logo.svg';
import { Link } from 'react-router-dom';

export default function footerContainer() {
  return (
    <footer>
      <Grid container  className="footerContainer">

          {/* Logo, Slogan & Support - Column 1 */}
          <Grid item md={2} className="footerColumn">
            <Link to="/"><img src={ChipnLogo} alt="Chipn Logo" /></Link>
            <h4>Supporting Global Giving</h4>
            <h5>Having troubles? Contact us!</h5>
            <h6>support@chipn.ca</h6>
          </Grid>

          {/* Explore - Column 2 */}
          <Grid item md={2} className="footerContentColumn">
            <u><h4>Explore&nbsp;&nbsp;&nbsp;</h4></u>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/discover">Discover</Link></li>
              <li><Link to="#">How it works</Link></li>
              <li><Link to="#">Account</Link></li>
            </ul>
          </Grid>

          {/* Column 3 */}
          <Grid item md={2} className="footerContentColumn">
            <u><h4>Keep Exploreing&nbsp;&nbsp;</h4></u>
            <ul>
              <li><Link to="/signin">Sign in</Link></li>
              <li><Link to="/signup">Sign up</Link></li>
            </ul>
          </Grid>

          {/* About us - Column 4 */}
          <Grid item md={2} className="footerContentColumn">
            <u><h4>About us&nbsp;&nbsp;</h4></u>
            <ul>
              <li><Link to="#">Company</Link></li>
              <li><Link to="#">Our Mission</Link></li>
              <li><Link to="#">What we do</Link></li>
              <li><Link to="#">Blog</Link></li>
            </ul>
          </Grid>

          {/* Social Media - Column 5 */}
          <Grid item md={2} className="footerContentColumn">
            <u><h4>Social Media&nbsp;&nbsp;</h4></u>
            <ul>
              <li><Link to="#">Facebook</Link></li>
              <li><Link to="#">Instagram</Link></li>
              <li><Link to="#">Twitter</Link></li>
              <li><Link to="#">LinkedIn</Link></li>
            </ul>
          </Grid>

          {/* Need help? - Column 6 */}
          <Grid item md={2} className="footerContentColumn">
            <u><h4>Need help?&nbsp;&nbsp;</h4></u>
            <ul>
              <li><Link to="#">FAQ</Link></li>
              <li><Link to="#">Getting started</Link></li>
              <li><Link to="#">Contact support</Link></li>
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
            <Link to="#">Terms of Service</Link>&nbsp;
            &
            &nbsp;<Link to="#">Privacy Policy</Link></p>
        </Grid>
      
      </Grid>
    </footer>
  );
}
    