import React, { Component } from 'react';
import '../App.css';


class StickBox extends Component {
  
    constructor(props) {
        super(props);
     

        this.state = {
            titleName:props.titleName||"",
            contentTxt:props.contentTxt||"",
            parent:props.parent||"",
            boardID: props.boardID||"",  // id in the board use exclusively in it , reasigned a move to another board
            ID:props.ID||""
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

    setFullContent(name="ss",content=""){
        alert("name:"+name+" content:"+content)
        this.setState({
            titleName:name,
            contentTxt:content
        })
        alert("tnam:"+this.state.titleName+" contntxt:"+this.state.contentTxt)
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
