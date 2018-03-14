import React from 'react';
import FruitBasket from './FruitBasket';

export default class App extends React.Component {

  constructor() {
    super()

    this.state = {
      currentFilter: null,
      filters: [],
      fruit: []
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = event => {
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <div>
        <FruitBasket
          currentFilter={this.state.currentFilter}
          filters={this.state.filters}
          handleFilterChange={this.handleFilterChange}
          fruit={this.state.fruit}
        />
      </div>
    )
  }

}
