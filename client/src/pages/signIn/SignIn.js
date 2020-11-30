import './SignIn.css';
import Header from '../header/Header';
import SignInBox from './components/SignInBox';
import Footer from '../footer/Footer';

export default function SignInPage() {
  return (
    <div>
      <Header />
        <SignInBox />
      <Footer />
    </div>
  );
}