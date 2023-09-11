import React from "react";
import './styles.css'

const FunctionCompo = () =>{

    function clickHandler() {
        const functionComponentContent = document.getElementById("func-content");
        functionComponentContent.style.display = functionComponentContent.style.display === 'none' ? 'block' : 'none';  
      }
    return (
        <div className="function-compo-container">
            <button className="btn" onClick={clickHandler}>To see styling in functional component</button>
            <div id="func-content">
                <h3>This is Created Using Functional component</h3>
                <p>This is done using external CSS</p>
                <p style={{color:'blue'}}>This is done using inline CSS</p>
            </div>
        </div>
    )
}

export default FunctionCompo;