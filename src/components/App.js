import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {

  state={
    filters: [],
    currentFilter: null,
    fruit: []
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchItems()
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchItems = () => {
    fetch('/api/fruit')
    .then(response => response.json())
    .then(fruit => this.setState({ fruit }));
  }

  //event comes from Fruit Basket, which comes from Filter
  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    debugger;
    return(
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter} onChange={this.handleFilterChange}/>
    )
  }

}

export default App;
