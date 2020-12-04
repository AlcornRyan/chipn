import './DiscoverCause.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function PrintDiscoverCause() {

  return (

    <div className="discoverCauseContainer" 
    style={{ backgroundImage: 'url("/images/elephant.jpg")', 
    objectFit:"cover", backgroundSize:"cover"}}>
   
    <Grid container flexGrow="1" direction="row" style={{padding:"4rem"}}>

      <Grid item xs={12} md={12} direction="column">
      <Typography variant="h2"  style={{fontWeight:"150", color:"white", padding:"2rem"}}>
        See the difference you're making
      </Typography>
      </Grid>
      <Grid item xs={12} md={12} direction="column" >
      <Typography variant="h6"  style={{fontWeight:"150", color:"white", padding:"2rem"}}>
            Chipn is hosting 100,000+ charities from around the world.<br/>
            Engage. Change. Direct your impact, and see the results.<br/>
            Join an online sphere of like-minded altruism.<br/>
            Let's build something together!
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} direction="column" style={{marginBottom:"10rem"}}>
        
        
        <Button color="white" 
        style={{padding:"1rem", color:"white", border: "1.5px solid #FFFFFF", borderRadius:"10px"}}>

      <Typography variant="h6" style={{color:"white"}}>
       Discover a cause
      </Typography>
            </Button>
      </Grid>
          

    </Grid>
    </div>

  );
}
  