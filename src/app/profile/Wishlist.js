"use client";

import React, { useEffect, useState , useContext } from "react";
import { getListItems } from "../services/product.service";
import { LoggedDataContext } from '../context/Context'; 

const Wishlist = () => {
  const [cartItems, setCartItems] = useState(null); 
   const { loggedUserData} = useContext(LoggedDataContext);
  

  const userId = loggedUserData?._id || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getListItems(userId);
        setCartItems(res.data || []);
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
         <p className="category1 mb-1">{item.tags?.join(", ")}</p>
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
     
      <button className="shop-addCart-btn">Add to cart</button>

    </div>
  </div>
          ))}
        </ul>
      )}
    </div>
  );
};


export default Wishlist;


