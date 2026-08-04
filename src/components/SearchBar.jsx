import React from 'react';
function SearchBar({ search, setSearch }) {
  return (
    <div className="row justify-content-center mb-4">
      <div className="col-lg-6 col-md-8">
        <input
          type="text"
          className="form-control"
          placeholder="🔎 Search For Products, Brands and More 🔍"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
export default SearchBar;