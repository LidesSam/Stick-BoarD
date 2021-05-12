import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LogInFB from '../src/components/LogInFB.js'
import StickBox from '../src/components/StickBox.js'
import StickBoard from '../src/components/StickBoard.js'

class App extends Component {



  constructor(props) {
    super(props);

    this.state = {
      popUpShow : "none"
    }

    this.ShowPopUp()
  }
  //
  componentDidMount() {
    console.log("mounted")

  }

  ShowPopUp(){
    
    this.setState({ popUpShow:"flex"});
   
  }

  HydePopUp(){
       
    this.setState({ popUpShow:"none"});
  }

  renderLogIn() {
    return (
      <main>
        <h1>this is a LogInFB</h1>
      </main>
    );
  }

  AddStickBox() {
    this.HydePopUp()
  }



  renderStickBoard() {
    return (
      <main>

        <StickBoard titleName="En espera" backcolor="#990000" />

        <StickBoard titleName="En Curso" backcolor="#559900" />

        <StickBoard titleName="Terminadas" backcolor="#ff9900" />



      </main>
    )
  }




  render() {
    return (

      <div className="App">
        <header className="App-header">
        
          <div className="fullRow">

            <h1>Stickboard</h1>


            <LogInFB />
          </div>
          <hr  className="fullRow" />
          <button  className="fullRow" onClick={() => this.ShowPopUp()}> new </button>
     

          {this.renderStickBoard()
          }


        </header>
        <div className="PopUp" style={{display:this.state.popUpShow}}>
          <div className="fullColumn" style={{color:"white", minHeight:"90%",backgroundColor:"black"}}>
            
            <div className="fullRow">
              name
            </div>
           
            <textarea  className="fullRow" />
           
            <div className="fullRow">
              content   
            </div>

            <textarea className="content"  style={{color:"white", height:"100%",backgroundColor:"black"}} />
            
            <div className="fullRow">
              <button> Añadir </button>
              <button onClick={() => this.HydePopUp} > Cerrar </button>
            
            </div>
            
             

          </div>
        </div>
      </div>
    );
  }
}

export default App;
