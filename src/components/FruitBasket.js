import React from 'react';
import Filter from './Filter'
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter filters={props.filters}
        currentFilter={props.currentFilter}
        handleChange={props.updateFilterCallback} />
        <FilteredFruitList filter={props.currentFilter} fruit={props.fruit} />
    </div>
  );
}

FruitBasket.defaultProps = {
  currentFilter: 'all',
  filters: [],
  fruit: [],
  updateFilterCallback: ''
};

export default FruitBasket;
