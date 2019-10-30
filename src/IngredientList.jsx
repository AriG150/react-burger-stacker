import React, {Component} from 'react';
import './App.css';

const IngredientList = props => {
  var mappedIngredients = props.allIngredients.map((ingredient, id) => 
    <li key={id}>{ingredient}</li>)
  return(
    <ul>
      {mappedIngredients.name}
      <buton>Add!</buton>
    </ul>
  )
}

// const IngredientList = props => (
//   <div>
//     <ul>
//       <li>{props.allIngredients.name}</li>
//       <button>Add</button>
//     </ul>
//   </div>
// )

export default IngredientList;
