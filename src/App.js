import React, { Component } from 'react';
import './App.css';
import Cardlist from './component/card-list/card-list.component'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monster: [],
      searchfield: ''


    }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json()).then(users => this.setState({
      monster: users
    }))
  }

  render() {
    const {monster,searchfield} = this.state;
    const filtermonster=monster.filter(monster=>monster.name.toLowerCase().includes(searchfield.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        

        <input type="search" placeholder="search monster"
          onChange={e => {
            this.setState({ searchfield: e.target.value });
          }} />
        <Cardlist monster={filtermonster} />




      </div>
    );
  }


}


export default App;
