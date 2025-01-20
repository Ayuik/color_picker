import React, {useState} from 'react'

function ColorInput(){
    const [color, setColor] = useState('#ffffff')

    const boxStyles = {
        height: "32px",
        width:"32px",
        border: "solid 2px",  
        backgroundColor: color
    }

    
    function handleColorSelection(event){
    setColor(event.target.value)
    }

    return(
        <>
            <div style={boxStyles}></div>
            <input type="color" value={color} onChange={(e) =>handleColorSelection(e)}></input>
        </>
    )
}
export default ColorInput