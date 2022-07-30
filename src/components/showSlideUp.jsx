import React from 'react';
import ReactDom from 'react';
import { useState, useEffect } from 'react';
import Users from './data.jsx';
import '../App.css';



import FooterSection from './container.jsx';
const Button=({apidata,count,setCount})=>{
  
return([
  <div className="buttonCont">
 <button className="leftButton" onClick={()=>{count>0 ? setCount(count-1):setCount(apidata.length-1)
 }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></button>
  <strong>{apidata[count].title}</strong>
  
<button className="buttonRight" onClick={()=>{count<apidata.length-1 ? setCount(count+1):setCount(0)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button>
</div>
  
  
  
  
  
  
  
  
  
  ])
  
  
  
  
  
  
  
  
}
export default Button;
















