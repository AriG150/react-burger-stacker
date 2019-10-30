import React, {Component} from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import './App.css';

class App extends Component{
  state = {
    stack: []
  }

  handleClick = (e) => {
    console.log(e.target.name)
    e.preventDefault()
    const stackCopy = [...this.state.stack]
    stackCopy.unshift(this.props.ingredients.name)
    
    this.setState({
      stack: stackCopy
    })
  }

  render(){
    return(
      <div className="App">
        <BurgerPane  />
        <IngredientList allIngredients={this.props.ingredients} onClick={this.handleClick} />
      </div>
    )
  }
}

export default App;
