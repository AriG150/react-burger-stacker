import React, {Component} from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import './App.css';

class App extends Component{
  state = {
    ingredients: this.props.ingredients,
    stack: []
  }
  render(){
    return(
      <div className="App">
        <BurgerPane />
        <IngredientList allIngredients={this.state.ingredients} />
      </div>
    )
  }
}

export default App;
