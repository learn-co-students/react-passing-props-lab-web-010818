import React, { Component } from 'react';


const FilteredFruitList = (props) => {

  const filter = props.filter
  const fruit = props.fruit
  let list;
  if(filter) {
    list = fruit.filter(fruit => {
      return fruit.fruit_type === filter
    })
  } else {
    list = fruit
  }

  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit:[],
  filter:null
}

export default FilteredFruitList;
