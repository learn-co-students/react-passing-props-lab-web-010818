import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{

  state = {
    fruit: [],
    filters: [],
    currentFilter: null
  }

  componentDidMount(){
    fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));

    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = (filter) => {
    this.setState({currentFilter: filter})
  }

  render(){
    // console.log('state', this.state)
    return(
      <FruitBasket fruit={this.state.fruit}
                    filters={this.state.filters}
                    currentFilter={this.state.currentFilter}
                    updateFilterCallback={this.handleFilterChange}
                    />
    )

  }

}

export default App;
