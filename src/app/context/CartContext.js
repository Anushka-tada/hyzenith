// 'use client';

// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { LoggedDataContext } from './Context'; // 👈 Import logged user context

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const { loggedUserData } = useContext(LoggedDataContext); // 👈 Get logged user

//   const [cartItems, setCartItems] = useState([]);

//   // Load initial cart from loggedUserData
//   useEffect(() => {
//     if (loggedUserData?.cartItems?.length > 0) {
//       setCartItems(loggedUserData.cartItems);
//     }
//   }, [loggedUserData]);

//   // Save to localStorage (optional)
//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Function to add/update cart items
//   const updateCartItems = (newItem) => {
//     const exists = cartItems.find(item => item.productId === newItem.productId);
//   console.log("🔄 updateCartItems called with:", newItem);
//     let updatedCart;
//     if (exists) {
//       updatedCart = cartItems.map(item =>
//         item.productId === newItem.productId
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       );
//     } else {
//       updatedCart = [...cartItems, { ...newItem, qty: 1 }];
//     }
     
//     setCartItems(updatedCart);
    
//   };

//   const getCartCount = () => {
//       console.log("📦 Current cartItems in context:", cartItems);
//     return cartItems.reduce((total, item) => total + item.qty, 0);
    
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, updateCartItems, getCartCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

"use client"
import React, { createContext, useState, useEffect, useContext, useRef } from "react";
import { LoggedDataContext } from "./Context"; // adjust path accordingly

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { loggedUserData } = useContext(LoggedDataContext);

  const getInitialCart = () => {
    if (typeof window === "undefined") return [];

    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) return JSON.parse(storedCart);

    if (loggedUserData && loggedUserData.cartItems) {
      return loggedUserData.cartItems;
    }

    return [];
  };

  const [cartItems, setCartItems] = useState(getInitialCart);

  // // Lock map to prevent multiple rapid adds per product
  // const addLocks = useRef({}); 

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (loggedUserData && loggedUserData.cartItems) {
      setCartItems(loggedUserData.cartItems);
    } else {
      setCartItems([]);
    }
  }, [loggedUserData]);

 const addToCart = (product) => {
  setCartItems((prevItems) => {
    const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      // item already exists, quantity increment by 1
      const updatedItems = [...prevItems];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + 1,
      };
      return updatedItems;
    } else {
      // new item, quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    }
  });
};

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getCartCount = () => cartItems.length;

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
