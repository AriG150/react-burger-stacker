import React from 'react';
import './App.css';

const IngredientList = props => {
  var mappedIngredients = props.allIngredients.map((ingredient, id) => 
    <li key={id}>{ingredient.name} <button name={ingredient.name} onClick={(e) => props.moveIngredient(e, id)}> Go! </button></li>)
  return(
    <div className="ingredientList">
      <div>Menu Items:</div>
      <ul>
        {mappedIngredients}
      </ul>
    </div>
  )
}


export default IngredientList;
