import './CharityPage.css';
import Grid from '@material-ui/core/Grid';
import CharityBanner from './components/CharityBanner';
import CharitySidebar from './components/CharitySidebar';
import CharityAbout from './components/CharityAbout';

export default function CharityPage() {
  return (
    <Grid container>
      
      {/* Charity Banner */}
      <Grid item md={12}>
        <CharityBanner />
      </Grid>

      <Grid container className="CharityPage">

        {/* Charity Sidebar */}
        <Grid item md={3} className="sortBarContainer">
          <CharitySidebar />
        </Grid>
        
        {/* Charity About */}
        <Grid item md={9} className="rightContainer">
          <CharityAbout />
        </Grid>
        
      </Grid>
      
    </Grid>
  );
}