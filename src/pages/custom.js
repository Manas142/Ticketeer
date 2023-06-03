import { useRef } from "react";


function Custom(){
    
    const inputRef = useRef(null); 


    const onButtonClick=()=>{
        inputRef.current.focus();
    }




    return (<div style={{margin:"20px"}}>
            <input type="text" ref={inputRef} />
            <input type="button" value="Focus the text input" onClick={onButtonClick} />
        </div>

    )

}


export default Custom;