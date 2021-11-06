import {GreenButton,RedButton} from './components/buttons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Single from './pages/siglepage/Single';

import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'

import About from './pages/about/About'; 


function App() {
  return (
 <>
   <Router>

   <Routes>
   <Route  path="/" element={<Home/> } />
   <Route path="/single" element={<Single/> } />
   <Route path="/about" element={<About/> } />
      {/* <Route path="/sinle">  <Single/></Route>
      <Route path="/about">  <About/></Route> */}
  
    </Routes>
    </Router>
 
    </>
   
  

  );
}

export default App;
