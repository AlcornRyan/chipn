import './Homepage.css';
import DiscoverCause from './components/DiscoverCause';
import HowItWorks from './components/HowItWorks';
import FeaturedCharities from './components/FeaturedCharities';
import WidgetInfo from './components/WidgetInfo';

export default function LandingPage() {
  return (
    <div>
      {/*Slideshow()*/}
      <DiscoverCause />
      <HowItWorks />
      <FeaturedCharities />
      <WidgetInfo />
    </div>
  );
}

function Slideshow() {
  return (
    'asdasd'
  );
}