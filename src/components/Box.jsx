import React from "react";

const estilos = (elemento) => ({
    backgroundColor:elemento.color,
    width:`${elemento.width}px`,
    height:`${elemento.height}px`,
    display:'inline-block',
    margin:'10px'
});

const Box = (props) => {
    
    const {cajas}=props;

    console.log(cajas)

    return (
        <div style={{display:'flex'}}>  
            {cajas.map(( elemento, index ) => {
                return <div key={index} style={estilos(elemento)}></div>
            })}
        </div>
    );
}

export default Box;
