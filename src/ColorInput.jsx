import React, {useState} from 'react'

function ColorInput(){
    const [color, setColor] = useState('#ffffff')
    const [text, setText] = useState ("#ffffff")

    const boxStyles = {
        height: "200px",
        width:"200px",
        border: "solid 1px black",
        borderRadius: "20%",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        marginBottom: "10%",
    }

    
    function handleColorSelection(event){
    setColor(event.target.value)
    setText(event.target.textContent)
    }

    return(
        <>
            <div style={boxStyles}>Selected color:{text}</div>
            <label>Select a color</label>
            <input type="color" value={color} onChange={(e) =>handleColorSelection(e)}></input>
        </>
    )
}
export default ColorInput