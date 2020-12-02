import './Discover.css';
import DiscoverSort from './components/DiscoverSort';
import DiscoverCategoryImage from './components/DiscoverCategoryImage';
import DiscoverCharityContainer from './components/DiscoverCharityContainer';

export default function DiscoverPage() {
  return (
    <div>
      <DiscoverSort />
      <DiscoverCategoryImage />
      <DiscoverCharityContainer />
    </div>
  );
}