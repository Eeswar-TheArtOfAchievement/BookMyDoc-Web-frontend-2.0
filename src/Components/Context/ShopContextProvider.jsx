import React, { createContext, useState } from "react";
import { RentalProducts } from "../Rental/RentalProducts";
import Products from "../Rental/Products";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < RentalProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  let [cartItem, setCartItem] = useState(getDefaultCart());
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let iteminfo = RentalProducts.find(
          (props) => props.id === Number(item)
        );
        totalAmount += cartItem[item] * iteminfo.price;
      }
    }
    return totalAmount;
  };
  const getTotalCart = () => {
    let total = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let iteminfo = RentalProducts.find((props) => props.id === item);
        total += cartItem[item];
      }
    }
    return total;
  };
  const addToCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };
  const removeFromCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };
  const updateCartItems = (newAmount, id) => {
    setCartItem((prev) => ({ ...prev, [id]: newAmount }));
  };
  const contextValue = {
    addToCart,
    removeFromCart,
    cartItem,
    updateCartItems,
    getTotalCartAmount,
    getTotalCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
