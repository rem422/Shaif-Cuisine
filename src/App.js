import {Routes, Route} from 'react-router-dom'
// Stylings
import GlobalStyles from './components/Styles/GlobalStyles';
// import ResetStyles from './components/Styles/Reset';
// import ComponentStyles from './components/Styles/Component';

//Components
import Home from './components/HomeSection/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Booking from './components/Booking';

function App() {
  return (
    <>
    {/* <ResetStyles /> */}
    <GlobalStyles />
    {/* <ComponentStyles /> */}

    <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route exact path="/menu" element={<Menu />}/>
    <Route exact path="/about" element={<About />}/>
    <Route exact path="/contact" element={<Contact />}/>
    <Route exact path="/booking" element={<Booking />}/>
    </Routes>
    </>
  );
}

export default App;
