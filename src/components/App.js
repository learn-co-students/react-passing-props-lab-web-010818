import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component {
  state = {
    currentFilter: null,
    fruit: [],
    filters: []
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit: items }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(newFilters => this.setState({ filters: [...this.state.filters, ...newFilters]}))
  }

  setFilter = (e) => {
    this.setState({ currentFilter: e.target.value})
  }

  render() {
    return(
      <div>
        <FruitBasket  currentFilter={this.state.currentFilter}
                      fruit={this.state.fruit}
                      filters={this.state.filters}
                      updateFilterCallback={this.setFilter}/>
      </div>
    )
  }
}

export default App;
