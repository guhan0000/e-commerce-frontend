import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  startPage,
  endPage,
  setCurrentPage,
}) => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <nav>
        <ul className="pagination">
          {/* Previous */}
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              Previous
            </button>
          </li>

          {/* Page Numbers */}
          {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
            <li
              key={startPage + index}
              className={`page-item ${
                currentPage === startPage + index ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(startPage + index)}
              >
                {startPage + index}
              </button>
            </li>
          ))}

          {/* Next */}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => {
                if (currentPage < totalPages) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;