// &query=${search};
import React from 'react';
import ReactDom from 'react-dom';
import {Link,BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {useState,useRef, useEffect} from 'react';


const FetchApi=({searchVal})=>{
  const [apiData,setApiData]=useState([])
  const [movieExplain,setMovieExplain]=useState("");
  const [count,setCount]=useState(false);
  
  
   const url="https://api.themoviedb.org/3/search/movie?&api_key=YOUR_API_KEY&query="; // use your own API key to fetch the Movie Data.
   const imageData="https://image.tmdb.org/t/p/w1280";
   const blueDark=()=>{
     fetch(`${url}${searchVal}`).then((res)=>{
     let resData=res.json();
     return resData;
   }).then((data)=>{
     setApiData(data.results);
     console.log(data);
     
   })
   }
   const movieOn=(elem)=>{
     console.log(elem.overview);
     setMovieExplain(elem);
     setCount(true);
   }
   
   useEffect(()=>{
     blueDark();
     
     
   },[searchVal]);
  return ([
    
 <div className="movieDBContainer">
 {
(count==false) ?
 (<div className="movieContainer">
  {  
 apiData.map((elem, index) => {
  return (
    <div className="movieImg" onClick={() => { movieOn(elem); } } key={index}>

      <img src={`${imageData}${elem["poster_path"]}`} className="img" />
      <div className="detail">
        <h4 className="movie">{elem.original_title}</h4>
        <small>IMDB - {elem.vote_average}/10</small>
      </div>

    </div>)
 })}
 </div>)
 :
  <div>
  <div className="movieImg" >
    <img src={`${imageData}${movieExplain["poster_path"]}`} className="img"/>
   <h4>{movieExplain["overview"]}</h4>
   </div>
   <div className="swiftMovie">{
     apiData.map((elem, index) => {
       return (
         <div className="movieImgSwift" onClick ={()=>{movieOn(elem)}} key={index}>
         
        <img src={`${imageData}${elem["poster_path"]}`} className="imgSwift"/>
        <div className="detailSwift">
        <h4 className="movieSwift">{elem.original_title}</h4>
        <h4 className="smallSwift">IMDB - {elem.vote_average}/10</h4>
        </div>
        
         </div>
       )
     })
     }
     </div>
   
  
  </div>
 
   
    
 
   
 }
  </div>
    ]);
  
}
export default FetchApi;



