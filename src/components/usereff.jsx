import { useRef } from "react";

function App(){
    const [image,setImage]=useState(null)


    return(
        <>
            <input type="file" onChange={()=>{
                let image=e.target.file(0);

                if(file){
                    const imageurl=URL.createObjectURL(file);
                    setImage(imageurl);
                }
            }}>
            </input>
        </>
    )
}