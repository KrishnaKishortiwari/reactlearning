import React from "react";
import ReactDOM  from "react-dom";

ReactDOM.render(<h1> Hello world </h1>, document.getElementById("root"));
  
       // or


//ReactDOM.render(React.createElement("h1", null, " Hello india "), document.getElementById("root"));

var h1=document.createElement("h1");
h1.innerHTML= "hello everyone";
document.getElementById("root").appendChild(h1);
