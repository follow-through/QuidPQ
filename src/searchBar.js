import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor (props){
    super(props);

  }

  render() {
     return (
       <form>
         <input type="text" placeholder="Search..." />
         {/* <p>
           <input type="checkbox" />
           {' '}
           Only show my products
         </p> */}
       </form>
     );
   }
}

export default SearchBar;
