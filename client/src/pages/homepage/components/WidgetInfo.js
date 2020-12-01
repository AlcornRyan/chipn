import './WidgetInfo.css';
import Grid from '@material-ui/core/Grid';
import WidgetImage from '../../../images/widget.jpg';

export default function PrintWidgetInfo() {
  return (
    <Grid container className="widgetInfoContainer">
      
      {/* Widget Information - Left side */}
      <Grid item md={6}>

        <div id="WI_leftContainer">
          <div id="WI_leftContainerContent">

            <h1>Cause Marketing Simplified.</h1>

            <p>
            Partner with businesses to make a difference!<br/>
            Chipn offers free packages to charities to display their<br/>
            donate button on web or mobile checkout pages. Have<br/>
            access to a rotating cast of businesses that are actively<br/>
            lookign to help your cause.
            </p>

            <button>
              Sign up
            </button>

          </div>
        </div>

      </Grid>

      {/* Widget Image - Right side */}
      <Grid item md={6} id="WI_RightContainer">
        <img src={WidgetImage} alt="Elephant walking in desert" className="WI_backgroundImage" />
      </Grid>

    </Grid>
  );
}
  