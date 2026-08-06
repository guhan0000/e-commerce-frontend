import React from "react";
import { useContext } from "react";
import { FavContext } from "../context/FavContext";
import { Link } from "react-router-dom";
const Favourites = () => {
  const { favourites, removeFavourites } = useContext(FavContext);
  return (
    <div>
      <div className="container mt-4">
        {favourites.length === 0 && (
          <h3 className="mb-4 text-center text-danger">
            Nothing in Favourites
          </h3>
        )}
        <div className="row">
          {favourites?.map((product) => (
            // <h3 key={product.id}>{product.title}</h3>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
              <div className="card h-100 shadow border-0">
                <div className="card-body d-flex flex-column">
                  <Link
                    to={`/product/${product.id}`}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={product.thumbnail}
                      className="card-img-top p-3"
                      alt={product.title}
                      style={{ height: "220px", objectFit: "contain" }}
                    />
                    <h6 className="fw-bold">{product.title}</h6>

                    <p className="text-muted text-capitalize mb-1">
                      {product.category}
                    </p>

                    <p className="mb-1">⭐ {product.rating}</p>

                    <h5 className="text-success fw-bold">${product.price}</h5>
                  </Link>
                  <button
                    className="btn btn-danger mt-auto"
                    onClick={() => {
                      removeFavourites(product.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
