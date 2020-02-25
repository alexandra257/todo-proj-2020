import React, { useState } from "react";

function Time() {
    //split divides the date/time string at each space and returns an array
    const today = (new Date()).toString().split(' ').splice(1, 2).join(' ') + addSuffix(); //splice(1, 2) takes the 2nd & 3rd values of the string
    //then we join those together using the .join() method



    const now = new Date().toLocaleTimeString(); //setting 'now' to the current time
    //below we set a destructured aray as a constant and assign the destructured array to useState
    //we now need to declare two things:
    //FIRST we pass in the name/state of this piece of state
    //SECOND we pass in the function that will update this piece of data (time)
    const [time, setTime] = useState(now);
    //starting value of state is defined in useState()'s parentheses
    //in this case it's the current time which we stored at the top of our App in the const 'now'
    setInterval(updateTime, 1000); //calls updatedTime every second



    //this is the function that will update the inital value of the initial state
    function updateTime() {
        const newTime = new Date().toLocaleTimeString(); //this will allow us to call a new updated time
        setTime(newTime); //this is the function we delcared would update our state in the destructured array
    }


    function addSuffix(num) {
        var array = ("" + num).split("").reverse(); // E.g. 123 = array["3","2","1"] - needs to be reversed because of single digit dates

        if (array[1] !== "1") { // Number is 11th, 12th, 13th)

            switch (array[0]) {    //get the first value of the array
                case "1": return "st";
                case "2": return "nd";
                case "3": return "rd";
                default:
            }
        }
        return "th";  //else return 'th'
    }

    addSuffix(today);


    return (
        <div className="container">

            <div className="row ml-auto justify-content-right time">
                <h1 className="text-right">{today}</h1>
            </div>
            <div className="row ml-auto time">
                <h1>{time}</h1>{/*we use {time} to insert the dynamic value of 'time' into this h1*/}
                {/*<button className="btnTime" onClick={updateTime}>Get Time</button>*/} {/*when the user clicks the button, updateTime is called*/}

            </div>
        </div>
    );
}

export default Time;
