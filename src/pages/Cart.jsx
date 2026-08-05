import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  console.log("Cart Page:", cartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <h4 className="text-center">Your cart is empty.</h4>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                key={item.id}
              >
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

                  <div className="card-body">
                    <h5>{item.title}</h5>

                    <p>{item.category}</p>

                    <p>⭐ {item.rating}</p>

                    <h4 className="text-success">${item.price}</h4>

                    <div className="d-flex justify-content-center align-items-center gap-2 my-3">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>

                      <span className="fw-bold fs-5">
                        {item.quantity}
                      </span>

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
                      🗑️ Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-end mt-4">
            <div className="card p-3 shadow" style={{ width: "300px" }}>
              <h4>Total Items: {cartItems.length}</h4>

              <h3 className="text-success">
                Total: ${totalPrice.toFixed(2)}
              </h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;