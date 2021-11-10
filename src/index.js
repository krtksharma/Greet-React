//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
import React from 'react';
import ReactDOM from 'react-dom';

const hour = new Date().getHours();
let greet;
const style1 = {
  color:"red",
  border:"2px solid "
}
if( hour < 12)
  {greet = "Good Morning";
   style1.color = "green"}
else if(hour < 18)
      {greet = "Good Afternoon";
      style1.color = "red"}
else if(hour < 24)
     {greet = "Good Night";
     style1.color = "blue"}
ReactDOM.render(
  <div>
  <h1 className="Heading" style={style1}>{greet}</h1>
  </div>
  ,document.getElementById("root")
);