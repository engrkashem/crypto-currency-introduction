import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import BDAddress from './components/BDAddress/BDAddress';
import CoinDetails from './components/CoinDetails/CoinDetails';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import UKAddress from './components/UKAddress/UKAddress';
import USAAddress from './components/USAAddress/USAAddress';

function App() {
  return (
    <div className=" bg-slate-100  h-full ">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/coins' element={<Coins />}></Route>
        <Route path='/coin-details/:id' element={<CoinDetails />} />
        <Route path='/contact' element={<Contact />}>
          <Route path='usa-address' element={<USAAddress />} />
          <Route path='uk-address' element={<UKAddress />} />
          <Route path='bd-address' element={<BDAddress />} />
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
