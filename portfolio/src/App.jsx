import Home from './components/Home';
import About from './components/About'; 
import Contact from './components/Contact';
import Header from './components/Header';
//import Footer from './components/Footer';

import './App.css'

import {
  Route,
  Routes
} from 'react-router-dom';

function App() {

  
  

  return (
    <div>
     <Header />
     <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
    </div>
  )
}


 
export default App
