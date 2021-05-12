import React, { Component } from 'react';
import '../App.css';


//simple teplate to create react components fast.

class StickBox extends Component {
  
    constructor(props) {
        super(props);
     

        this.state = {
            titleName:props.titleName,
            contentTxt:props.contentTxt,
            parent:props.parent
            /**
           *   example props set
           *    id: props.id,
            value: props.value,
            callback: props.callback,
            callbackEdit: props.callbackEdit,
            checked: props.checked,

            inEdit: false
            */

        }
      

    }
    //return render(used to draw in parent)
    //if the only function nesesary for  a componet too be valid.
    render() {
        return (
            // at least have to contain a div
            <div className = "stickbox" draggable="true">
                
                <div>{this.state.titleName || "no name set"} </div>
                <div>{this.state.contentTxt || "content text"}  </div>
                <div className="fullRow">
                    <button>{"<--"}</button>
                    <button>{"-->"}</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                
                
            </div>


        )
    }


}


export default StickBox;
