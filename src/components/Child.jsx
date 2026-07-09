import React from "react";

const Child=React.memo(()=>{
    console.log("child rendered");
    return(
        <>
            <h1>This is child component</h1>
        </>
    )
});

export default Child;