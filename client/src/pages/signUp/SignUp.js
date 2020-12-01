import './SignUp.css';
import Header from '../header/Header';
import SignUpBox from './components/SignUpBox';
import Footer from '../footer/Footer';

export default function SignUpPage() {
  return (
    <div>
      <Header />
        <SignUpBox />
      <Footer />
    </div>
  );
}