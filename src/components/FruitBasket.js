import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({filters, handleChange, fruit, currentFilter}) => {

    return (
      <div className="fruit-basket">
        <Filter
        filters={filters}
        handleChange={handleChange}
        />
        <FilteredFruitList
        fruit={fruit}
        filter={currentFilter}
        />
      </div>
    );

}

FruitBasket.defaultProps = {
  filters: [],
  fruit: [],
  currentFilter: null,
  updateFilterCallback: () => {}

}

export default FruitBasket;
