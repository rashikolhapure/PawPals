import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Contact from './routes/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import Match from './routes/Match.jsx';


function App() {
  return (
    <div className="bg-[#ffafed]">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/match' element={<Match/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
