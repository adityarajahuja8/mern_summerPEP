import { useState } from "react";

function input(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [displayName,setDisplayName]=useState("");
    const [displayEmail,setDisplayEmail]=useState("");
    function handleClick(){
        setDisplayName(name);
        setDisplayEmail(email);
    }
    return (
        <div>
            {/* <h1></h1> */}
            <label>Enter Your name: </label><input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            ></input>
            {/* <h1>Email:</h1>  */}
            <br></br>
            <label>Enter Email: </label><input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            ></input>
            <br></br>
            <button onClick={handleClick}>Submit</button>

            <h2>{displayName}</h2>
            <h2>{displayEmail}</h2>
        </div>
    )
}

export default input;