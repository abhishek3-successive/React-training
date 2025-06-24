// 11.Build a shopping cart application using the useContext hook.
// Set up a context to manage the state of the shopping cart.
// Create components to display products and a shopping cart.
// Use the useContext hook to access the cart state and update it.
// Allow users to add and remove items from the cart.
// Display the total price of items in the cart.

"use client";

import { useContext } from "react";
import { CartContext } from "../context/cart";

const Cart = () => {
  const { cart, AddCart, removeCart } = useContext(CartContext);

  const products = [
    { id: "1", name: "Product 1", price: 10 },
    { id: "2", name: "Product 2", price: 20 },
    { id: "3", name: "Product 3", price: 30 },
    { id: "4", name: "Product 4", price: 40 },
  ];

  return (
    <div>
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ margin: "10px 0" }}>
              <h3>{item.name}</h3>
              <p>Price: Rs{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeCart(item.id)}>
                Remove from Cart
              </button>
            </div>
          ))}
          <hr />
          <h3>
            Total: Rs
            {cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </h3>
        </div>
      )}

      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id} style={{ margin: "10px 0" }}>
          <h4>{product.name}</h4>
          <p>Price: Rs {product.price}</p>
          <button onClick={() => AddCart(product)}>
            Add {product.name} to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;