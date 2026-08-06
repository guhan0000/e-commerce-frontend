import React from "react";

const CategoryFilter = ({ selectedCategories, setSelectedCategories }) => {
  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];

  const addCategory = (category) => {
    setSelectedCategories((prev) => [...prev, category]);
  };

  const removeCategory = (category) => {
    setSelectedCategories((prev) => prev.filter((item) => item !== category));
  };

  return (
    <div className="accordion mb-3" id="filterAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#categoryCollapse"
          >
            Categories
            {selectedCategories.length > 0 && (
              <span className="badge bg-primary ms-2">
                {selectedCategories.length}
              </span>
            )}
          </button>
        </h2>

        <div
          id="categoryCollapse"
          className="accordion-collapse collapse"
          data-bs-parent="#filterAccordion"
        >
          <div className="accordion-body">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: "12px",
                maxHeight: "300px",
                overflowY: "auto",
              }}
            >
              {categories.map((category) => (
                <div className="form-check" key={category}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        addCategory(category);
                      } else {
                        removeCategory(category);
                      }
                    }}
                  />

                  <label className="form-check-label" htmlFor={category}>
                    {category
                      .replaceAll("-", " ")
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </label>
                </div>
              ))}
            </div>

            {selectedCategories.length > 0 && (
              <div className="mt-3">
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => setSelectedCategories([])}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
