import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FavContext } from "../context/FavContext";
import SearchBar from "../components/SearchBar";
import { CartContext } from "../context/CartContext";

import SortDropdown from "../components/SortDropdown";
import useProduct from "../hooks/useProduct";
import Pagination from "../components/Pagination";
import CategoryFilter from "../components/CategoryFilter";
function Home() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { addToCart } = useContext(CartContext);

  const [currentPage, setCurrentPage] = useState(1);
  const { products, loading, error } = useProduct(
    search,
    sortOrder,
    selectedCategories,
  );

  const productsPerPage = 8;

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);
  const totalPages = Math.ceil(products.length / productsPerPage);
  const pagesPerGroup = 5;
  const startPage =
    Math.floor((currentPage - 1) / pagesPerGroup) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);
  useEffect(() => {
    setCurrentPage(1);
  }, [products]);
  const { loggedIn, savedUser } = useContext(AuthContext);
  const { favourites, addFavourites, isFavourite, toggleFavourites } =
    useContext(FavContext);
  const handleWishlist = (item) => {
    addFavourites(item);
  };
  // const handleCart = () => {
  //   navigate("/cart");
  // };
  return (
    <div className="container mt-5">
      <SearchBar search={search} setSearch={setSearch} />

      <CategoryFilter
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        startPage={startPage}
        endPage={endPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Home;
