import React from "react";
import ReactDOM  from "react-dom";
import  "./index.css";


const tem = "movies";
const name = "Krishna Kishor Tiwari";
const currdate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const img = "https://picsum.photos/200/300";
const img1 = "https://picsum.photos/250/400";
const img2 = "https://picsum.photos/100/350";
const heading ={
  color : "#00FFFF",
  textTransform :'capitalize',
  textAlign:'center',
}
const head = {
  width: '200%',
  height: '200%',
  align:'center',
  
}

ReactDOM.render(
  <>
   <h2 style={{color : "#00FFFF",textTransform :'capitalize',textAlign:'center',}}>My name is {name}</h2>
  <div style={{width: '200%', height: '200%',align:'center'}}>
  <img src={img} alt="Random Image"/>
  <img src={img1} alt="Random Image"/>
  <img src={img2} alt="Random Image"/>
  </div>
<h1> INDIAN 2022 movies </h1>
<p>{`Top five ${tem}`}</p>
<ol>
  <li>K.G.F 2</li>
  <li>RRR</li>
  <li>Bachchhan Paandey</li>
  <li>A Thursday</li>
  <li>Runway 34</li>
  </ol>
  <h2>Today time is {currdate}</h2>
  <h2>Today date is {currTime}</h2>
</>, document.getElementById("root"));
  
       // or


//ReactDOM.render(React.createElement("h1", null, " Hello india "), document.getElementById("root"));

//var h1=document.createElement("h1");
//h1.innerHTML= "hello everyone";
//document.getElementById("root").appendChild(h1);
