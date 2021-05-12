import React, { Component } from 'react';
import '../App.css';


//simple teplate to create react components fast.

class LogInFB extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUserName:"error None  is logged  you should't can read this"
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

    LogInUser(){
      //  alert("No funcional Desmotrativo /n not functional demostrative")
    }

    renderLogIn(){
        return(
            <div className="formBox">
                <label> Log In </label>
                  {/* username*/}
                <textarea className="roundBar"/>
                   {/* password*/}
                 <textarea className="roundBar">s</textarea>
                 {/* password*/}
                 <textarea className="roundBar">s</textarea>
                
                <button> "Log In" </button>
                
                
              

            </div>
            )
    }

    renderSingUP(){
        return(
            <div className="formBox">
                <label> Log In </label>
                  {/* username*/}
                <textarea className="roundBar"/>
                   {/* password*/}
                 <textarea className="roundBar">s</textarea>
                 {/* password*/}
                 <textarea className="roundBar">s</textarea>
                
                <button> "Sing Up </button>
                
                
              

            </div>
            )
    }
    renderLoged(){
        return(
            <div className="formBox">
                <label> Loged as {this.state.currentUserName} </label>
            </div>
            )
    }

    //return render(used to draw in parent)
    //if the only function nesesary for  a componet too be valid.
    render() {
        return (


            <div className="formBox">
                
             
                
                <label> Log In /   No Funtional only to test style(for now)</label>

                <div className="fullRow">
                    Usuario:
                    <textarea className="roundBar"></textarea>
                </div>
               
                <div className="fullRow">
                    Contraseña:
                    <textarea className="roundBar"></textarea>
                </div>

                <div className="fullRow">
                    <button onClick={this.LogInUser()}> "Log In" </button>
                    <button onClick={this.LogInUser()}> "Sing Up" </button>
                </div>
                
              

            </div>


        )
    }


}

export default LogInFB;
