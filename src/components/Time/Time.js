import React, { useState } from "react";

function Time() {



    const now = new Date().toLocaleTimeString(); //setting 'now' to the current time
    //below we set a destructured aray as a constant and assign the destructured array to useState
    //we now need to declare two things:
    //FIRST we pass in the name/state of this piece of state
    //SECOND we pass in the function that will update this piece of data (time)
    const [time, setTime] = useState(now);
    //starting value of state is defined in useState()'s parentheses
    //in this case it's the current time which we stored at the top of our App in the const 'now'
    // setInterval(updateTime, 1000); //calls updatedTime every second


    //this is the function that will update the inital value of the initial state
    function updateTime() {
        const newTime = new Date().toLocaleTimeString(); //this will allow us to call a new updated time
        setTime(newTime); //this is the function we delcared would update our state in the destructured array
    }

    //------------------------------------

    //split divides the date/time string at each space and returns an array
    // const today = (new Date()).toString().split(' ').splice(1, 2).join(' '); //splice(1, 2) takes the 2nd & 3rd values of the string and calling the suffix function
    //then we join those together using the .join() method

    const today = new Date().getDay().toString();
    // console.log(today);
    const month = new Date().getMonth();



    // const timeForSuffix = new Date().getDate().toString();
    // console.log(timeForSuffix);


    // function addSuffix(num) {
    //     console.log(num)

    //     if (num[0] < 32) {
    //         switch (num[0]) {    //get the first value of the array & run the switch statement below
    //             case "1":
    //             case "21":
    //             case "31":
    //                 return "st"; //return st when 1 is the value at index 0 of array

    //             case "2":
    //             case "22": return "nd"; //return nd when 2 is the value at index 0 of array

    //             case "3":
    //             case "23": return "rd"; //return rd when 3 is the value at index 0 of array
    //             default:
    //         }
    //     }
    //     return "th";  //else return 'th'
    // }

    // addSuffix(timeForSuffix); //passing in the current date which is stored in the variable today


    return (
        <div className="container">

            <div className="row ml-auto time">
                <h1>{month} {today}</h1>
            </div>
            <div className="row ml-auto time">
                <h1>{time}</h1>{/*we use {time} to insert the dynamic value of 'time' into this h1*/}
                {/*<button className="btnTime" onClick={updateTime}>Get Time</button>*/} {/*when the user clicks the button, updateTime is called*/}

            </div>
        </div>
    );
}

export default Time;
