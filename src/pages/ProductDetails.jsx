import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart, cartItems } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);
  const isInCart = cartItems.some(
    (item) => item.id === product.id
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>

          <p className="text-muted">
            {product?.category
              ?.charAt(0)
              ?.toUpperCase()
              ?.concat(product?.category?.slice(1))}
          </p>

          <h4 className="text-success">${product.price}</h4>

          <p>⭐ {product.rating}</p>

          <p>Brand: {product.brand}</p>

          <p>Stock: {product.stock}</p>

          <p>Discount: {product.discountPercentage}%</p>

          <p>{product.description}</p>

          <button
            className={`btn ${isInCart ? "btn-secondary" : "btn-success"
              }`}
            onClick={() => addToCart(product)}
            disabled={isInCart}
          >
            {isInCart ? "✅ Added to Cart" : "🛒 Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;