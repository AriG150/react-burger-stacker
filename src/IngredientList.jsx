import React, {Component} from 'react';
import './App.css';

const IngredientList = props => {
  var mappedIngredients = props.allIngredients.map((ingredient, id) => 
    <li key={id}>{ingredient.name} <button>Add!</button></li>)
  return(
    <ul>
      {mappedIngredients}
    </ul>
  )
}


export default IngredientList;
