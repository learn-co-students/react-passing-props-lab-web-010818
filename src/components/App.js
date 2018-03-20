import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component {
  state = { fruits: [], filter: '' };

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruits => this.setState({ fruits }));
  }

  render() {
    return <FruitBasket />;
  }
}
