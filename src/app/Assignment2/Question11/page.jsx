"use client";
import { createContext, useState} from "react";
import  {ProductList, Cart} from "./Q11";

const CartContext = createContext();
export default function CartProvider() {
  const [cartItems, setCartItems] = useState([]);

  const addItems = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeItems = (id) =>
    setCartItems(cartItems.filter((ele) => ele.id !== id));
  
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
   <CartContext.Provider value={{ cartItems, addItems, removeItems, total }}>
      <h1>Shopping Cart</h1>
      <div>
        <ProductList />
        <Cart />
      </div>
    </CartContext.Provider>
);
}





export {CartContext}