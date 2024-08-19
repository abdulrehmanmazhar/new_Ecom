import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slide from './components/Slide';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import DropDown from './components/DropDown';

function App() {
  const LOGO = "BinSaif.";
  const Links = [
    { text: 'Home', link: '/home' },
    { text: 'Products', link: '/products' },
    { text: 'Categories', link: '/categories' },
    { text: 'Hot Sales', link: '/hotsales' }
  ];

  const [isSlideOpen, setSlideOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const user = useSelector(state => state.auth.user);
  const LINKSLIDE = [{ text: 'Sign Up', link: '/signup' }, { text: 'Search', link: '/search' }, { text: 'Cart', link: '/cart' }, ...Links];

  function handleHamburgerClick() {
    setSlideOpen(prevState => !prevState);
  }

  const styles = {
    padding: {
      position: 'relative',
      paddingTop: '76px'
    }
  };

  return (
    <>
      <div className="container">
        <Navbar
          LOGO={LOGO}
          LINKS={Links}
          toggleSlide={handleHamburgerClick}
          isDropdownOpen={isDropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />
        {isSlideOpen && <Slide LINKS={LINKSLIDE} />}
        {/* {user && (
          <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <DropDown isOpen={isDropdownOpen} />
          </div>
        )} */}
        <div style={styles.padding}></div>
        <Outlet />
        <Footer />
        <ToastContainer style={{ position: 'fixed', top: '5rem' }} />
      </div>
    </>
  );
}

export default App;
