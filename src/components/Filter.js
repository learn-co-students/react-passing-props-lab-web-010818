import React, { Component } from 'react';

const Filter = (props) => {

  const {handleChange, filters} = props
// handleChange={handleFilterChange} filters={filters}
  // componentWillMount() {
  //   this.fetchFilters();
  // }
  //

  return (
    <select onChange={handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  );
}

Filter.defaultProps = {
  handleChange: null,
  filters: []
}

export default Filter;
