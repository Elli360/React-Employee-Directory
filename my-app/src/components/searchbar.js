// sample code 
import React from "react";


function Searchbar({handleSearchChange}) {
  return (
    <div className="searchbar">
      <div className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
      </div>
    </div>
  );
}

export default Searchbar;
