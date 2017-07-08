import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './searchBar.js'
import Box from './box.js'
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
        <Box />
        <TradeBtn />
      </div>
     );
   }
}
export default Inventory;
