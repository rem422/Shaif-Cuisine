import {Routes, Route} from 'react-router-dom'
// Stylings
import GlobalStyles from './components/Styles/GlobalStyles';
//Components
import Home from './components/HomePage/Home';
import Menu from './components/MenuPage/Menu';
import About from './components/AboutPage/About';
import Contact from './components/ContactPage/Contact';
import Booking from './components/BookingPage/Booking';
import ScrollBtn from './components/Global/ScrollButton/ScrollBtn';

function App() {
  return (
    <>
    <GlobalStyles />
    <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route exact path="/menu" element={<Menu />}/>
    <Route exact path="/about" element={<About />}/>
    <Route exact path="/contact" element={<Contact />}/>
    <Route exact path="/booking" element={<Booking />}/>
    </Routes>
    <ScrollBtn />
    </>
  );
}

export default App;
