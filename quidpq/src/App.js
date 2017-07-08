import React, { Component } from 'react';
import './styles/index.css';
import Screen from "./Screen.js";

//font: GT Bold 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: null,
      password: null,
      currScreen: 2,
      items: [],
      users: [],
      messages: [],
      toSend: "items",
      message: ""
    }
    this.users = [];
    this.items = [];
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
componentDidMount(){
   

   fetch("/item")
      .then(res => res.json())
      .then(item => this.items = item)
      .then(()=>{fetch("/user").then(res => res.json()).then((user)=>this.users = user)})
      .then(()=>{fetch("/message").then(res => res.json()).then((message)=>{
          this.setState({
            items: this.items,
            users: this.users,
            messages: message
          })
        })
      })
 }
  handleNameChange(e){
    this.setState({
      userName: e.target.value
    })
  }
  handlePassChange(e){
    this.setState({
      password: e.target.value
    })
  }
  handleMessageChange(e){
    this.setState({
      message: e.target.value
    })
  }
  handleSubmit(){
    console.log("this.state.message", this.state.message);
    fetch("/message",{
    method: "POST",
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messageContent: this.state.message,
      owner: "Hai"
    })
    })
    .then(function (data) {  
      console.log('Request success: ', data);  
    })  
    .catch(function (error) {  
      console.log('Request failure: ', error);  
    });
  }
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <h1>QUIDPQ</h1>
          <div>{this.state.userName}</div>
          <div>{this.state.password}</div>
          <div>{this.state.message}</div>
        </div>
        <div className="app-wrapper">
          <div className="app-nav">


            <form className="screen input hvr-rectangle-out">
              <label className="submission1">Login</label>
              <label>Username</label>
              <input className="submission2" type="text" onChange={this.handleNameChange}/>
              <label>Password</label>
              <input className="submission2" type="text" onChange={this.handlePassChange}/>
              <input className="submission3" type="submit"></input>
            </form>


            
             <form className="screen input hvr-rectangle-out" onSubmit={()=>{this.handleSubmit}}>
              <label className="submission1">Submit New Message</label>
              <label>Message</label>
              <input className="submission4" type="text" onChange={this.handleMessageChange}/>
              <input className="submission3" type="submit"></input>
            </form>

         
            <div className={this.state.currScreen === 1?"screen sOne activeScreen hvr-rotate": "screen sOne hvr-bubble-float-left"} onClick={()=>this.setState({toSend: "users", currScreen: 1})}>Users</div>
            <div className={this.state.currScreen === 2?"screen sTwo activeScreen hvr-rotate": "screen sTwo hvr-bubble-float-left"} onClick={()=>this.setState({toSend: "items", currScreen: 2})}>Items</div>
            <div className={this.state.currScreen === 3?"screen sThree activeScreen hvr-rotate": "screen sThree hvr-bubble-float-left"} onClick={()=>this.setState({toSend: "messages", currScreen: 3})}>Messages</div>
            
          </div> 
          <div className="main-content">
            <Screen stateList={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
