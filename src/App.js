import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './searchBar.js'
import Inventory from './inventory.js'


class App extends Component {
  render() {
      console.log('testeroni and cheese');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>QuidPQ</h1>
        </div>
        <div>
          <SearchBar />
          <Inventory products={this.props.products} /> {/* will need Hai's input here*/}
        </div>
      </div>
    );
  }
}

export default App;
