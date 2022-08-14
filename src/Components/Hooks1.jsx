import React, {useState}from "react";

// Array Destructuring 

const Hooks1 = ()=>{
    let [num,setNum] = useState(0); // always called inside the function body | initial value
    const incNum = ()=>{
        setNum(num + 1);
    }
    // setInterval(incNum,400);
    return(
        <>
            <div className="hook1">
                <h1> {num} </h1>
                <button onClick={incNum}> Click Me</button>
            </div>
        </>
    )
}


export default Hooks1;