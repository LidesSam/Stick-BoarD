import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LogInFB from '../src/components/LogInFB.js'
import StickBox from '../src/components/StickBox.js'
import StickBoard from '../src/components/StickBoard.js'
import reactDom from 'react-dom';

class App extends Component {



  constructor(props) {
    super(props);



    this.inWaitBoard = React.createRef()
    this.state = {
      popUpShow: "none",
      newStickName: " this is title name",
      newStickContent: "this is content"

    }

    this.ShowPopUp()
  }


  handleNameChange = (event) => {
    this.setState({ newStickName: event.target.value });
  }

  handleContentChange = (event) => {
    this.setState({ newStickContent: event.target.value });

  }


  componentDidMount() {
    console.log("mounted")

  }


  ShowPopUp() {

    this.setState({ popUpShow: "flex" });

  }

  HydePopUp() {

    this.setState({ popUpShow: "none" });
  }

  renderLogIn() {
    return (
      <main>
        <h1>this is a LogInFB</h1>
      </main>
    );
  }

  AddStickBox() {
    //
    alert("name: " + this.state.newStickName + " content: " + this.state.newStickContent)

    //validation of fromat
    switch (this.state.newStickContent) {

      case "":
        alert("no content invalid")
      default:
        this.inWaitBoard.current.addNewStickBox(this.state.newStickName, this.state.newStickContent)
    }
    // turns var to 0
    this.setState({
      newStickName: "",
      newStickContent: "",
    })

    this.HydePopUp()
  }


  renderStickBoard() {


    return (
      <main>

        <StickBoard titleName="En espera" ref={this.inWaitBoard} backcolor="#990000" />

        <StickBoard titleName="En Curso" backcolor="#559900" />

        <StickBoard titleName="Terminadas" backcolor="#ff9900" />



      </main>
    )
  }




  render() {
    return (

      <div className="App">
        <header className="App-header">

          <div className="topHeader">
            <img className="sizeBlock" src={logo} alt={logo}></img>

            <div className="fullcolumn" >
            <h1>Stickboard</h1>
            <a href="https://santiagoarrieta.000webhostapp.com" target="blank"><h4>By LDS Santiago Ariel Arrieta</h4></a>
            
            </div>

            <LogInFB />
          </div>
          <hr className="fullRow" />
          <button className="fullRow" onClick={() => this.ShowPopUp()}> new </button>


          {this.renderStickBoard()
          }


        </header>
        <div className="PopUp" style={{ display: this.state.popUpShow }}>
          {/*}  <div className="fullColumn" style={{color:"white", minHeight:"90%",backgroundColor:"black"}}>*/}

          <div className="fullRow">
            name
            </div>
          <input className="fullRow" value={this.state.newStickName} type="text" onChange={this.handleNameChange} />


          <div className="fullRow">
            content
            </div>

          <textarea className="content" value={this.state.newStickContent} onChange={this.handleContentChange} />

          <div className="fullRow">
            <button onClick={() => this.AddStickBox()}> Añadir </button>
            <button onClick={() => this.HydePopUp()} > Cerrar </button>

          </div>



          {/*</div>*/}
        </div>
      </div>
    );
  }
}

export default App;
