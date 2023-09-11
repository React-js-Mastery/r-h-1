import React, {Component} from "react";

class ClassCompo extends Component {

    Handler = () =>{
        const classComponentContent = document.getElementById("class-content");
        classComponentContent.style.display = classComponentContent.style.display === 'none' ? 'block' : 'none';  
      }

    render(){
        return (
            <div>
                <button className="btn" onClick={this.Handler}>To see styling in Class component</button>
                <div id="class-content">
                    <h3>This is Created Using Functional component</h3>
                    <p>This is done using external CSS</p>
                    <p style={{color:'orangered'}}>This is done using inline CSS</p>
                </div>
            </div>
        )
    }
}

export default ClassCompo;