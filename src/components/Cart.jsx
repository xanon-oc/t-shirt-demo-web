import React from "react";
import "./CSS/Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some product</p>;
  } else {
    message = (
      <div>
        <p>Thanks for wasting money</p>
      </div>
    );
  }
  return (
    <div>
      <h2 className={cart.length === 1 ? "blue" : "red"}>
        Order Summary {cart.length}
      </h2>
      <p className={`bold ${cart.length === 3 ? "yellow" : "purple"}`}>
        Something
      </p>
      {cart.length > 2 ? (
        <span className="purple">You Have Brought More Then 2</span>
      ) : (
        "Your Inventory Is Too Low"
      )}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X </button>
        </p>
      ))}
      {cart.length === 2 && <p>Good Luck</p>}
      {cart.length === 3 || <h3>Tinta To Hoilo Na</h3>}
    </div>
  );
};

export default Cart;
