import React, { Component } from 'react';
import './App.css';
import Cardlist from './component/card-list/card-list.component'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monster: []
       
 
  } 
}

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json()).then(users => this.setState({
      monster : users
    }))
  }

  render() {
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <Cardlist monster={this.state.monster} /> 
     
       
       
        
      </div>
    );
  }


}


export default App;
