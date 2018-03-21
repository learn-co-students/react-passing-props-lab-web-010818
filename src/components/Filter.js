import React from 'react';

const Filter = props => {
  return (
    <select onChange={props.handleChange} defaultValue="all">
      <option value="all">All</option>
      {props.filters.map(f => (
        <option key={f} value={f}>
          {f}
        </option>
      ))}
    </select>
  );
};

Filter.defaultProps = {
  filters: [],
  handleChange: () => {}
};

export default Filter;
