import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className=" bg-slate-200 w-screen h-screen ">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/coins' element={<Coins />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>

    </div>
  );
}

export default App;
