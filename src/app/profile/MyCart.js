"use client";

import React, { useEffect, useState , useContext } from "react";
import { getCartItems } from "../services/product.service";
import { LoggedDataContext } from '../context/Context'; 

const MyCart = () => {
  const [cartItems, setCartItems] = useState(null); 
   const { loggedUserData} = useContext(LoggedDataContext);
  

  const userId = loggedUserData?._id || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCartItems(userId);
        setCartItems(res.cartItems || []);
         console.log("Cart API response:", res);
      } catch (err) {
        console.error("Error loading cart:", err);
        setCartItems([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-cart">
      <h3>Cart</h3>

      {/* Loader */}
      {cartItems === null ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <ul className="list-group d-flex flex-wrap flex-row gap-3">
          {cartItems.map((item, index) => (
            <div key={item._id} className="product-card d-flex flex-column justify-content-between">
    <div>
      <a href={`/Product/${item._id}`}>
        <img
          src={item.productHeroImage}
          alt={item.name}
          className="product-img"
        />
      </a>
     
         <p className="product-descrip mb-2">{item.name}</p>
      {/* <div className="wishlist-icon">
        <img src="https://cdn-icons-png.flaticon.com/128/13369/13369080.png" />
      </div> */}
    </div>
    <div>
      <div className="price d-flex gap-1">
        <p className="price1-home mb-1">₹{item.discountedPrice}</p>
        <p className="price2-home mb-1">₹{item.price}</p>
      </div>
      <div className="d-flex justify-content-between">
         <p>Quantity</p>
      <h5 className="cart-quantity">{item.quantity}</h5>
      </div>
      <div className="d-flex justify-content-between">
         <p>Total</p>
      <h5 className="price1-home mb-1">₹{item.totalItemDiscountedPrice}</h5>
      </div>
      <button className="add-to-cart">Remove from cart</button>

    </div>
  </div>
          ))}
        </ul>
      )}
    </div>
  );
};


export default MyCart;


