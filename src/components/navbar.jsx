import React from 'react';
import ReactDom from 'react-dom';
import {Link,BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from "./Header.jsx";
import ApiFetchX from './apiFetchX.jsx';
import "../App.css";


const Navbar=()=>{
  
  
  return ([
    
 
 <div>

 <Router>
 <Header/>
 <Routes>
<Route path="/about" element={<ApiFetchX/>}/>

 </Routes>
 </Router>
 
 
 
 </div>
    ])
  
  
  
  
  
}
export default Navbar;



