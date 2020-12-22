// sample code 
import React from "react";

function SearchForm(props) {
  return (
        <form>
          <div className="form-group"> style ={{ display: 'flex' }}
            <label htmlFor="search">Search:</label>
            <input
              onChange={props.handleInputChange} 
              value={props.value}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search Employee"
              id="search"
            />
            <br />
            <button onClick={props.handleFormSubmit} className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
  );
}

export default SearchForm;
