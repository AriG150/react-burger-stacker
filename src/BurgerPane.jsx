import React from 'react';
import './App.css';

const BurgerPane = props => {
  var newBurger = props.burger.map((burgerPart, id) => <li key={id}> {burgerPart.name} </li>)
  // console.log(newBurger)
  return(
    <div className="burgerPane">
      <ul className="bulletpoint">
        {newBurger}
      </ul>
      <hr></hr>
      <span>Burger Stacking Area</span>
      <br/>
      <button type="reset" onClick={props.clear} >Make New Burger</button>
    </div>
  )
}

export default BurgerPane;