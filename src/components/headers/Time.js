import React, { useState } from "react";
//
var moment = require("moment");
moment().format();

function Time() {
  const timeStyle = {
    fontFamily: "Dancing Script",
    fontSize: "30px",
    textAlign: "right",
  };

  const dateStyle = {
    fontFamily: "Dancing Script",
    fontSize: "40px",
    textAlign: "right",
    fontWeight: "normal",
  };

  const date = moment().format("MMMM Do YYYY");
  const now = moment().format("h:mm a");

  const [time, setTime] = useState(now);
  //this is the function that will update the inital value of the initial state
  function updateTime() {
    const newTime = moment().format("h:mm a"); //this will allow us to call a new updated time
    setTime(newTime); //this is the function we delcared would update our state in the destructured array
  }

  setInterval(updateTime, 1000);

  return (
    <div>
      <p style={timeStyle}>{time}</p>
      <p style={dateStyle}>{date}</p>
    </div>
  );
}

export default Time;
