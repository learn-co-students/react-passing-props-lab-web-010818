import React from 'react';
import uuid from 'uuid'

const FilteredFruitList = (props) => {
  let filteredFruit;

  if (props.filter === null || props.filter === 'all') {
    filteredFruit = props.fruit
  } else {
    filteredFruit = props.fruit.filter((item) => props.filter === item.fruit_type)
  }

  return (
    <ul className="fruit-list">
      { filteredFruit.map((item) => <li key={uuid()}>{item.char}</li> ) }
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  filter: '',
  fruit: [],
};


export default FilteredFruitList;
