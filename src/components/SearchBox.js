import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
        <input
        className="pa3 ba b-green bg-lightest-blue"
        type="search" 
        placeholder="Search your Robot"
        //Every time is triggered call the search function
        onChange ={searchChange}
        />
        </div>
    );
}
export default SearchBox;