import React from 'react';

const FilteredFruitList = props => {
  debugger;
  const list = !props.filter
    ? props.fruit
    : props.fruit.filter(f => f.fruit_type === props.filter);

  return (
    <ul className="fruit-list">
      {list.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
    </ul>
  );
};

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
};

export default FilteredFruitList;
