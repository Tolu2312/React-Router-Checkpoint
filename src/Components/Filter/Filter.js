// Filter.js
import React from 'react';
import './Filter.css'

function Filter({ onTitleChange, onRatingChange }) {
  return (
    <div className="filter">
      <input
        className='input1'
        type="text"
        placeholder="Filter by Title"
        onChange={onTitleChange}
        
      />
      <input
        className='input2'
        type="text"
        placeholder="Filter by Rating"
        onChange={onRatingChange}
      />
    </div>
  );
}

export default Filter;