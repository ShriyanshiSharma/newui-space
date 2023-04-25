import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Homepage from "./pages/Home/Homepage"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import News from './pages/News/News';
import Newsdisplay from './pages/News/Newsdisplay';
import Join from './pages/Join/Join';
import Application from './pages/Application/Application';
import Feature from './pages/Feature/Feature';
import Launch from './pages/Launch/Launch';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Routes>
      <Route path='/newui-space' element={<div><Navbar/><Homepage/><Footer/></div>}/>
      <Route path='/about' element={<div><Navbar/><About/><Footer/></div>}/>
      <Route path='/launch' element={<div><Navbar/><Launch/><Footer/></div>}/>
      <Route path='/news' element={<div><Navbar/><News/><Footer/></div>}/>
      <Route path='/news/:pid' element={<div><Navbar/><Newsdisplay/><Footer/></div>}/>
      <Route path='/career' element={<div><Navbar/><Join/><Footer/></div>}/>
      <Route path='/application' element={<Application/>}/>
      <Route path='/freatures' element={<div><Navbar/><Feature/><Footer/></div>}/>
      </Routes>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
