import './DiscoverCause.css';
import Grid from '@material-ui/core/Grid';

export default function PrintDiscoverCause() {
  return (
    <Grid container className="discoverCauseContainer">
      <Grid item md={12}>
        
        {/* Left side Container */}
        <div id="discoverCauseLeftContainer">
          
          <div className="leftContainerContent">

            <h1>See the difference<br/>you're making</h1>
            
            <p>
            Chipn is hosting 100,000+ charities from around the world.<br/>
            Engage. Change. Direct your impact, and see the results.<br/>
            Join an online sphere of like-minded altruism.<br/>
            Let's build something together!
            </p>
            
            <button>
              Discover a Cause
            </button>

          </div>

        </div>
        
        {/* Right side Container */}
        <div id="discoverCauseRightContainer">
            <img src="/images/elephant.jpg" alt="Elephant walking in desert" className="backgroundImage" />
        </div>

      </Grid>
    </Grid>
  );
}
  