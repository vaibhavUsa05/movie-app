
import React from 'react';
import ReactDom from 'react-dom';
import {Link,BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {useState,useRef,useEffect} from 'react';
import FetchApi from './apiFetch.jsx';
import "../App.css";
const Header=()=>{
  const inputEl=useRef(null);
  const [searchData,setSearchData]=useState("");
  const searchingDataElement=()=>{
    
    console.log(inputEl.current.value);
    setSearchData(inputEl.current.value);
 console.log(searchData);
 
 
  }
  return ([
    
 
 <div class="topNavbar">
 
 <h3>Movies App</h3>
 <div className="headerBar">
 <input type="text" class="input" ref={inputEl}/>
 <button class="button" onClick={searchingDataElement}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="searchBar" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
 </div>
 <FetchApi searchVal={searchData.length!=0? (searchData) : "America"} />
 
 <Link to="/about">About</Link>
 
 </div>
   
    ])
}
export default Header;



