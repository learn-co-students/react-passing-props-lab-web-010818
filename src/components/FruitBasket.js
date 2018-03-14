import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  const {fruit, filters, currentFilter, updateFilterCallback} = props

  const handleFilterChange = (event) => {
    updateFilterCallback(event.target.value)
  }
  return (
      <div className="fruit-basket">
        <Filter handleChange={handleFilterChange} filters={filters}/>
        <FilteredFruitList
          filter={currentFilter} fruit={fruit}/>
      </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
