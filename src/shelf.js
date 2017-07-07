import React, {Component} from 'react';

class Shelf extends Component {
  constructor (props){
    super(props);
  }

  render() {
     return (
    <div className='shelf' >{/*should take props from inventory obj*/}</div>

     );
   }
}

export default Shelf;
