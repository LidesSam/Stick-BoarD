import React, { Component } from 'react';
import '../App.css';


//simple teplate to create react components fast.

class CompName extends Component {

    constructor(props) {
        super(props);

        this.state = {
          
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

    //override a default callback that trigger when the componenet is correctly loaded an set
    componentDidMount() {
        //console.log("mounted")
      
      }


    //return render(used to draw in parent)
    //if the only function nesesary for  a componet too be valid.
    render() {
        return (
            // at least have to contain a div// all html return in jsx should be ecapsulated on a single label
            <div>

            </div>


        )
    }


}



export default CompName;
