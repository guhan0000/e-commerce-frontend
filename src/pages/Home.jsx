import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FavContext } from "../context/FavContext";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import useProduct from "../hooks/useProduct";
function Home() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { products, loading, error } = useProduct(search, sortOrder);
  const productsPerPage = 8;

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const pagesPerGroup = 5;

  const startPage =
    Math.floor((currentPage - 1) / pagesPerGroup) * pagesPerGroup + 1;

  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);
  const { loggedIn, savedUser } = useContext(AuthContext);
  const { favourites, addFavourites, isFavourite, toggleFavourites } =
    useContext(FavContext);

  const handleWishlist = (item) => {
    addFavourites(item);
  };

  const handleCart = () => {
    navigate("/cart");
  };
  return (
    <div className="container mt-5">
      <SearchBar search={search} setSearch={setSearch} />
      <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <h2 className="mb-4 text-center">Featured Products</h2>
      {currentProducts.length === 0 ? (
        <div className="text-center mt-5">
          <h4>No products found </h4>
        </div>
      ) : (
        <div className="row">
          {currentProducts.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
              <div className="card h-100 shadow border-0">
                <div className="card-body d-flex flex-column">
                  {savedUser && loggedIn ? (
                    <Link
                      to={`/product/${item.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <img
                        src={item.thumbnail}
                        className="card-img-top p-3"
                        alt={item.title}
                        style={{ height: "220px", objectFit: "contain" }}
                      />
                      <h6 className="fw-bold">{item.title}</h6>

                      <p className="text-muted text-capitalize mb-1">
                        {item.category}
                      </p>

                      <p className="mb-1">⭐ {item.rating}</p>

                      <h5 className="text-success fw-bold">${item.price}</h5>
                    </Link>
                  ) : (
                    <>
                      <img
                        src={item.thumbnail}
                        className="card-img-top p-3"
                        alt={item.title}
                        style={{ height: "220px", objectFit: "contain" }}
                      />
                      <h6 className="fw-bold">{item.title}</h6>

                      <p className="text-muted text-capitalize mb-1">
                        {item.category}
                      </p>

                      <p className="mb-1">⭐ {item.rating}</p>

                      <h5 className="text-success fw-bold">${item.price}</h5>
                    </>
                  )}
                  {savedUser && loggedIn && (
                    <div className="d-grid gap-2 mt-auto">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => {
                          toggleFavourites(item);
                        }}
                      >
                        {isFavourite(item.id) ? "❤️" : "🤍"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
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
    </div>
  );
}

export default Home;
