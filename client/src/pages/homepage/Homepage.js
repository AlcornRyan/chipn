import './Homepage.css';
import Header from '../header/Header';
import DiscoverCause from './components/DiscoverCause';
import HowItWorks from './components/HowItWorks';
import FeaturedCharities from './components/FeaturedCharities';
import WidgetInfo from './components/WidgetInfo';
import Footer from '../footer/Footer';
// Material UI
import Container from '@material-ui/core/Container';

export default function LandingPage() {
  return (
    <div>
      <Header />
        {/*Slideshow()*/}
        <DiscoverCause />
        <HowItWorks />
        <FeaturedCharities />
        <WidgetInfo />
      <Footer />
    </div>
  );
}

function Slideshow() {
  return (
    'asdasd'
  );
}