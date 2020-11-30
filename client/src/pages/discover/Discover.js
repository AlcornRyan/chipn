import './Discover.css';
import Header from '../header/Header';
import DiscoverSort from './components/DiscoverSort';
import DiscoverCategoryImage from './components/DiscoverCategoryImage';
import DiscoverCharityContainer from './components/DiscoverCharityContainer';
import Footer from '../footer/Footer';

export default function DiscoverPage() {
  return (
    <div>
      <Header />
        <DiscoverSort />
        <DiscoverCategoryImage />
        <DiscoverCharityContainer />
      <Footer />
    </div>
  );
}