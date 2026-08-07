import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  // console.log("Cart Page:", cartItems);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2> My Cart</h2>

        {cartItems.length > 0 && (
          <div className="card p-3 shadow" style={{ width: "260px" }}>
            <h5 className="mb-2">Total Items: {cartCount}</h5>

            <h4 className="text-success mb-0">
              Total: ${totalPrice.toFixed(2)}
            </h4>
          </div>
        )}
      </div>

      {cartItems.length === 0 ? (
        <h4 className="text-center text-danger">Your cart is empty.</h4>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
                <div className="card h-100 shadow border-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="card-img-top"
                    style={{
                      height: "220px",
                      objectFit: "contain",
                      padding: "15px",
                    }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="mb-2" style={{ minHeight: "60px" }}>
                      {item.title}
                    </h5>

                    <p className="text-muted mb-1">{item.category}</p>

                    <p className="mb-1">⭐ {item.rating}</p>

                    <h4 className="text-success mb-3">${item.price}</h4>

                    <div className="d-flex justify-content-center align-items-center gap-2 mt-auto mb-3">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>

                      <span className="fw-bold fs-5">{item.quantity}</span>

                      <button
                        className="btn btn-outline-success"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="btn btn-danger w-100"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
