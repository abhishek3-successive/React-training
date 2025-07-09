'use client'
import { useState,createContext } from "react"

const Cart = createContext();

export default function CartProvider({children}){
    const [cartProvider , setcartProvider] = useState([]);

    const additem = (pro)=>{
        setcartProvider(...cartProvider , pro)
    }
    const removeItems = (id) =>
    setCartItems(cartItems.filter((ele) => ele.id !== id));
  
    const total =  () => cartProvider.reduce((sum, item) => sum + item.price, 0);

return (
    <>
    <Cart.Provider value={{additem, removeItems,total}}>
        {children}
    </Cart.Provider>
    </>
)

}