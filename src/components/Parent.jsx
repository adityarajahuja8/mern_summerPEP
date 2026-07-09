import Child from "./Child.jsx"
import { useState } from "react";

function parent(){
    const [count ,setCount]=useState(0);
    
    return(
        
        <div>
            <Child/>
            <h1>Counter: {count}</h1>

            <button onClick={()=>{setCount(count+1)}}>Increase</button>

            <button onClick={()=>{
                if(count>0){
                    setCount(count-1);
                    
                }
            }}>Decrease</button>    
        
        </div>
    )
}

export default parent;
