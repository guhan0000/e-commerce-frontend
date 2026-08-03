import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [products, setproducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=194")
            .then((response) => response.json())
            .then((data) => setproducts(data.products))
            .catch((error) => console.log(error));
    }, []);

    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const currentProducts = products.slice(firstProductIndex, lastProductIndex);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const pagesPerGroup = 5;

    const startPage =
        Math.floor((currentPage - 1) / pagesPerGroup) * pagesPerGroup + 1;

    const endPage = Math.min(
        startPage + pagesPerGroup - 1,
        totalPages
    );

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Featured Products</h2>

            <div className="row">
                {currentProducts.map((item) => (
                    <div
                        className="col-lg-3 col-md-4 col-sm-6 mb-4"
                        key={item.id}
                    >
                        <Link
                            to={`/product/${item.id}`}
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100 shadow border-0">
                                <img
                                    src={item.thumbnail}
                                    className="card-img-top p-3"
                                    alt={item.title}
                                    style={{ height: "220px", objectFit: "contain" }}
                                />

                                <div className="card-body d-flex flex-column">
                                    <h6 className="fw-bold">{item.title}</h6>

                                    <p className="text-muted text-capitalize mb-1">
                                        {item.category}
                                    </p>

                                    <p className="mb-1">
                                        ⭐ {item.rating}
                                    </p>

                                    <h5 className="text-success fw-bold">
                                        ${item.price}
                                    </h5>

                                    <div className="d-grid gap-2 mt-auto">
                                        <button className="btn btn-outline-danger">
                                            ❤️ Add to Wishlist
                                        </button>

                                        <button className="btn btn-success">
                                            🛒 Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center mt-4">
                <nav>
                    <ul className="pagination">
                        <li
                            className={`page-item ${
                                currentPage === 1 ? "disabled" : ""
                            }`}
                        >
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

                        {Array.from(
                            { length: endPage - startPage + 1 },
                            (_, index) => (
                                <li
                                    key={startPage + index}
                                    className={`page-item ${
                                        currentPage === startPage + index
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() =>
                                            setCurrentPage(startPage + index)
                                        }
                                    >
                                        {startPage + index}
                                    </button>
                                </li>
                            )
                        )}

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