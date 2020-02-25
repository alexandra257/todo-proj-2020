import React, { useState } from "react";

function Time() {


    const today = (new Date()).toString().split(' ').splice(1, 2).join(' ');



    setInterval(updateTime, 1000); //call updatedTime every second

    const now = new Date().toLocaleTimeString(); //setting now to the current time

    //below we set a destructured aray as a constant and assign the destructured array to useState
    //we now need to declare two things:
    //FIRST we pass in the name/state of this piece of state
    //SECOND we pass in the function that will update this piece of data (time)
    const [time, setTime] = useState(now);
    //starting value of state is defined in useState()'s parentheses
    //in this case it's the current time which we stored at the top of our App in the const 'now'

    //this is the function that will update the inital value of the initial state
    function updateTime() {
        const newTime = new Date().toLocaleTimeString(); //this will allow us to call a new updated time
        setTime(newTime); //this is the function we delcared would update our state in the destructured array
    }

    return (
        <div className="container">

            <div className="row ml-auto time">
                <span><h1 className="text-right">{today}</h1></span>
            </div>
            <div className="row ml-auto time">
                <h1>{time}</h1>{/*we use {time} to insert the dynamic value of 'time' into this h1*/}
                {/*<button className="btnTime" onClick={updateTime}>Get Time</button>*/} {/*when the user clicks the button, updateTime is called*/}

            </div>
        </div>
    );
}

export default Time;
