import React, {Component} from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import './App.css';

class App extends Component{
  state = {
    ingredients: this.props.ingredients,
    stack: []
  }

  handleClick = (e, id) => {
    console.log(e.target.name)
    const stackCopy = [...this.state.stack]
    stackCopy.unshift(this.state.ingredients[id])

    this.setState({
      stack: stackCopy
    })
  }

  render(){
    return(
      <div className="App">
        <IngredientList allIngredients={this.state.ingredients} onClick={this.handleClick} />
        <BurgerPane  burger={this.state.stack} />
      </div>
    )
  }
}

export default App;
