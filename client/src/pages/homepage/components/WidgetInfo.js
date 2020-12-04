import './WidgetInfo.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function PrintWidgetInfo() {
  return (
    <div className="widgetInfoContainer" >

    <Grid container direction="row">
      
      {/* Widget Information - Left side */}
      
      <Grid item xs={12} md={6} direction="row" style={{padding:"2em"}}>
    
      <div style={{margin:"3em"}}>
          <Typography variant="h4" gutterBottom 
            style={{fontWeight:"150"}}>
            Cause Marketing Simplified
            </Typography>
          </div>

          <div style={{margin:"4em", justify:"center"}}>
          <img alt="charity" 
            src="/images/marketing1.svg" 
            style={{width:"50%", height:"50%", margin:"0 auto"}}/>
          </div>
           
          <div style={{margin:"4em"}}>
            <Typography variant="h7"  
            style={{fontWeight:"150", 
            color:"textPrimary"}}>
              Partner with businesses to make a difference! Chipn offers free packages to charities to display their donate button on web or mobile checkout pages. Have access to a rotating cast of businesses that are actively looking to help your cause.
            </Typography>
            </div>
            
            <div style={{margin:"4em"}}>
              <Button 
              className="signup" style={{padding:"0.7em", 
              color:"white",fontSize:"1.4em", width:"12rem",
              border:"1.4px solid black"}}>
                Sign up
              </Button>
              </div>

      </Grid>


      {/* Widget Image - Right side */}
      <Grid item xs={12} md={6} direction="row">
      <div style={{justify:"center", paddingTop:"10rem"}}>
        <img src="/images/widget.png" className="widget" alt="widget" />
      </div>
        
      </Grid>

    </Grid>
    </div>
  );
}
  