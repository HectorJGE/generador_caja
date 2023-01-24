import React, {useState} from "react";

const FormBox = (props) => {
    const [caja,setCaja] = useState({
        color:"black",
        width:"100px",
        height:"100px"
    })
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        props.onNewBox(caja)
    }



    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="color" onChange={(e) => {setCaja({...caja,color:e.target.value})}}></input><br/>
            <input type="text" name="width" onChange={(e) => {setCaja({...caja,width:e.target.value})}}></input><br/>
            <input type="text" name="height" onChange={(e) => {setCaja({...caja,height:e.target.value})}}></input><br/>
            <input type="submit"/>
        </form>
        
    );
}

export default FormBox;
