import React, {useState} from "react";
// #Challenge 6 - Get time on refreshing and clicking the button using useState Hook.


const Hook2 = ()=>{
    let [time,setTime] = useState(new Date());
    const getTime = ()=>{
        setTime(new Date());
    }
    setInterval(getTime,1000); // milli second
    return(
        <>
            <div className="hook1">
                <h1> {time.toLocaleTimeString()} </h1>
                <button onClick={getTime}>Get Time</button>
            </div>
        </>
    )
}
export default Hook2;