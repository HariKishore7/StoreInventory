import React from 'react';
// import './search-box.css';

function Search({onChangeHandler}) {
  return (
      <div className='mb-2'>
        <input
          className='form-control'
          type='search'
          placeholder='Search for Product'
          onChange={onChangeHandler}
        />
      </div>
  )
}

export default Search;