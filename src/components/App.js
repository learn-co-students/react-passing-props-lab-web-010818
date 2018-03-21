import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component {
  state = { fruit: [], filters: [], currentFilter: null };

  componentDidMount() {
    this.fetchFruits();
    this.fetchFilters();
  }

  fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  };

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  };

  handleFilter = e => {
    this.setState({ currentFilter: e.target.value });
  };

  render() {
    return (
      <FruitBasket
        onUpdateFilter={this.handleFilter}
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
      />
    );
  }
}
