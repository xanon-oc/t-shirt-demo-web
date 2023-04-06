import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "./TShirt";
import Cart from "./Cart";
import "./CSS/Home.css";
import { Toaster, toast } from "react-hot-toast";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const handleAddToCart = (tshirt) => {
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
      toast("You have already added this T-Shirt");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };
  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {tshirts.map((tshirt) => (
          <TShirt
            handleAddToCart={handleAddToCart}
            tshirt={tshirt}
            key={tshirt._id}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
