import React, {Component} from 'react';
import './App.css';

class BurgerPane extends Component{
  render() {
    return(
      <>
      <hr></hr>
      <span>Burger Stacking Area</span>
      <button type="reset">Make New Burger</button>
      </>
    )
  }
}


export default BurgerPane;