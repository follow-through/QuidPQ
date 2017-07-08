import React, {Component} from 'react';

class Shelf extends Component {
  constructor (props){
    super(props);
  }

  render() {
    //render 3 items 
     return (
     <div className='shelf' >{/*should take props from inventory obj*/}</div>

     );
   }
}

export default Shelf;
