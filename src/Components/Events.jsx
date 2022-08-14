import React,{useState} from "react";

const Events = ()=>{
    const [bg,setBg] = useState('orange');
    const [name,setName] = useState('Click Me');
    const bgChange = ()=>{
        // document.getElementById('bg').style.backgroundColor = "orange";
        let newColor = bg === "purple"?"orange":"purple";
        setBg(newColor);
        setName("Ouch!! 🧑‍🦲")
    }
    const bgBack = ()=>{
        setBg('orange');
        setName("Ayyo!! 😠");
    }
    return(
        <>
            <div className="hook1" style={{backgroundColor:bg}}>
                <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button> 
            </div>
        </>
    )
}

export default Events;