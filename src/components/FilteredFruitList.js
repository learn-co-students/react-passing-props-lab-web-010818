import React, { Component } from 'react';

const FilteredFruitList = (props) => {

  const {fruit, filter} = props
  const list = !filter || filter === 'all' ? fruit : fruit.filter(f => f.fruit_type === filter);

  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );

}

FilteredFruitList.defaultProps = {
  filter: null,
  fruit: []
}

export default FilteredFruitList;
