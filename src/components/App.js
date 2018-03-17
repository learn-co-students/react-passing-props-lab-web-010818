import React from 'react';
import FruitBasket from './FruitBasket';


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    }
  }

componentWillMount() {
  this.fetchFilters();
}

fetchFilters = () => {
  fetch('/api/fruit_types')
    .then(response => response.json())
    .then(filters => this.setState({ filters }));
}

handleFilterChange = event => {
  console.log('new filter: ', event.target.value);
  this.setState({ currentFilter: event.target.value });
}

componentDidMount() {
  fetch('/api/fruit')
    .then(response => response.json())
    .then(fruit => this.setState({ fruit }));
}

  render(){
    return(
      <div>
      <FruitBasket fruit={this.state.fruit} handleChange={this.handleFilterChange} filters={this.state.filters} filter={this.state.currentFilter}/>
      </div>



    )
  }
}




export default App;
