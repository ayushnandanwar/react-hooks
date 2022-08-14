import React,{useState} from "react";

const Forms = ()=>{
    let [name,setName] = useState(""); // Array destructuring
    let [fullName,setFullName] = useState("");
    const inputEvent = (event)=>{
        // console.log(event.target.value);
        setName(event.target.value);
    }
    const hello = ()=>{
         setFullName(name);
    }
    return (
        <>
            <div className="form_div">
                <h1>Hello {fullName}</h1>
                <input 
                    type={"text"} 
                    placeholder="Enter Your Name" 
                    value={name}
                    onChange={inputEvent}     
                />
                <button onClick={hello}>Submit</button>
            </div>
        </>
    )
}

export default Forms;