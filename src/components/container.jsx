import React from 'react';
import ReactDom from 'react';
import {useState,useEffect} from 'react';
import Users from'./data.jsx';
import Button from './showSlideUp.jsx';
import '../App.css';
const FooterSection=()=>{
  
 const [apidata, setApidata]=useState(Users);
 let [count,setCount]=useState(0);

  return([
    <h1>/ Reviews</h1>,
    <h3>{console.log(count)}</h3>,
    <div className="container">
    <h3>{console.log(Users)}</h3>,
     
     <div className="contentContainer">
     <img src={apidata[count].image}/>
    <div className="betweeners">
    <h3>{apidata[count].name}</h3>
    <Button apidata={apidata} count={count} setCount={setCount}/>
    <p>{apidata[count].quote}</p>
  </div>
      </div>
    </div>
    
   ])
}
export default FooterSection;