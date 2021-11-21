import {GreenButton,RedButton} from './components/buttons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Single from './pages/siglepage/Single';

import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'

import About from './pages/about/About'; 
import Userdata from './pages/userdata/Userdata';
import Login from './pages/login/Login';


function App() {
  return (
 <>
   <Router>

   <Routes>
   <Route  path="/" element={<Home/> } />
   <Route path="/single" element={<Single/> } />
   <Route path="/about" element={<About/> } />
   <Route path="/userdata" element={<Userdata/> } />
   <Route path="/login" element={<Login/> } />
      {/* <Route path="/sinle">  <Single/></Route>
      <Route path="/about">  <About/></Route> */}
  
    </Routes>
    </Router>
 
    </>
   
  

  );
}

export default App;
