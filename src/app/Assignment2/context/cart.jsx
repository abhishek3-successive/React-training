"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AddCart = (item) => {
    setCart((prev) => {
      const updatedCart = [...prev];
      const existingItem = updatedCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1; // Just increase quantity
      } else {
        updatedCart.push({ ...item, quantity: 1 }); // Add new item
      }

      return updatedCart;
    });
  };

  // Remove item from the cart by id
  const removeCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id)); // Filter out item by id
  };

  return (
    <CartContext.Provider value={{ cart, AddCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;