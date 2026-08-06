import React from "react";

const SortDropdown = ({ sortOrder, setSortOrder }) => {
  return (
    <div>
      <select
        onChange={(e) => setSortOrder(e.target.value)}
        value={sortOrder}
        className="form-select w-auto"
      >
        <option value="">Sort Products</option>
        <option value="price-asc">Price: Low - High</option>
        <option value="price-desc">Price: High - Low</option>
        <option value="rating-asc">Rating: Low - High</option>
        <option value="rating-desc">Rating: High - Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
