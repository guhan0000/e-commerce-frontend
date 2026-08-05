import React from "react";

const SortDropdown = ({ sortOrder, setSortOrder }) => {
  return (
    <div>
      <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
        <option value="">Sort By Price</option>
        <option value="low-high">Price: Low - High</option>
        <option value="high-low">Price: High - Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
