import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchBar from './searchBar.js'
import Shelf from './shelf.js'
import TradeBtn from './tradeBtn.js'

class Inventory extends Component {
  constructor (props){
    super(props);
  }

  render() {
     return (
       //include shelves
      <div>
        <SearchBar />
        <Shelf />
        <TradeBtn />
      </div>
     );
   }
}
export default Inventory;
