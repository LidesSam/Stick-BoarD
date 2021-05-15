import React, { Component } from 'react';
import StickBox from '../components/StickBox.js'
import '../App.css';


//simple teplate to create react components fast.

class StickBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
          
            backcolor:props.backcolor,
            titleName:props.titleName,
            parent:props.parent,
            stickboxes:[]
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

    addNewStickBox(name,content){
        alert("name1:"+name +" content1:" +content)
       // let stickbox = new StickBox({titleName:name,contentTxt:content,parent:this})
        let stickbox = <StickBox titleName={name} />
        //stickbox.setFullContent(name,content)
        
        let arr = this.state.stickboxes.concat(stickbox)
        this.setState({ stickboxes: arr })
        
    }

    changeBackColor(_color){
        this.setState({      backcolor:_color})
    }
    
    changeBackColor(_color){
        this.setState({      backcolor:_color})
    }
    StickBoxIn(){
        
        this.setState({})
    }

    StickBoxOut(id){

    }
    
    //return render(used to draw in parent)
    //if the only function nesesary for  a componet too be valid.
    render() {
        return (
            // at least have to contain a div
            
            <div className="stickboard" style={{backgroundColor:this.state.backcolor}}>
           
            <h1>{this.state.titleName} </h1>
            <hr/>
            <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(auto-fill,auto-fill)"
            }}>
               {this.state.stickboxes.map(stickbox=>
                    {
                        return(
                            <StickBox/>
                        );
                    }
                    )
                    }
            </div>
        
        </div>


        )
    }


}

export default StickBoard;
