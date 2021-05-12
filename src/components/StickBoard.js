import React, { Component } from 'react';
import '../App.css';


//simple teplate to create react components fast.

class StickBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
          
            backcolor:props.backcolor,
            titleName:props.titleName,
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
            
            <div className="stickboard" style={{backgroundColor:this.state.backcolor}}>
           
            <h1>{this.state.titleName} </h1>
            <hr/>
            <div className="fullRow">
                
            </div>
        </div>


        )
    }


}

export default StickBoard;
