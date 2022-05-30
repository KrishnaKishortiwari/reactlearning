import React from "react";
// import {createRoot} from "react-dom/client";
import ReactDom from "react-dom"
import Heading from "./App";
import Head from "./Sapp";
import next,{flow, orFirst, orSecond} from "./Next";
ReactDom.render(
  <div>
    <Heading/>
    <Head/>
   <ol> 
        <li>{next} </li>
        <li>{flow}</li>
        <li>{orFirst()} </li>
        <li>{orSecond()}</li>
  </ol>
  </div>, document.getElementById("root"));

       
