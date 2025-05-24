
"use client"

import { useEffect, useState } from "react";
import React from "react";
import { getProductServ } from "../services/product.service";

const ShopFromFarm = () => {
  // const products = [
  //   {
  //     id: 1,
  //     image: "https://gustosafoods.com/wp-content/uploads/2024/10/4-plus-300x300.png",
  //     description: "4 Suta Plus Makhana| (12mm and above) | 200 gm",
  //     price1: "300.00",
  //     price2: "299.00",
  //   },
  //   {
  //     id: 2,
  //     image: "https://gustosafoods.com/wp-content/uploads/2025/02/5-plus-Handpicked-300x300.jpg",
  //     description: "5 Suta (15.9mm) | Makhana | 200gm",
  //     price1: "300.00",
  //     price2: "299.00",
  //   },
  //   {
  //     id: 3,
  //     image: "https://gustosafoods.com/wp-content/uploads/2025/02/5-plus-Handpicked-300x300.jpg",
  //     description: "6 Suta Plus (19mm above) | Handpicked Makhana | 100gm",
  //     price1: "300.00",
  //     price2: "299.00",
  //   },
  //   {
  //     id: 4,
  //     image: "https://gustosafoods.com/wp-content/uploads/2024/10/6-plus-hp-600x600.png",
  //     description: "6.5 Suta Plus (20.7mm above) | Handpicked Makhana | 200gm",
  //     price1: "499.00",
  //     price2: "499.00",
  //   },
  //   {
  //     id: 5,
  //     image: "https://gustosafoods.com/wp-content/uploads/2025/02/5-plus-Handpicked-300x300.jpg",
  //     description: "4 Suta Plus Makhana| (12mm and above) | 200 gm",
  //     price1: "300.00",
  //     price2: "299.00",
  //   },
  //   {
  //     id: 6,
  //     image: "https://gustosafoods.com/wp-content/uploads/2025/02/5-plus-Handpicked-300x300.jpg",
  //     description: "5 Suta (15.9mm) | Makhana | 200gm",
  //     price1: "300.00",
  //     price2: "299.00",
  //   },
  //   {
  //     id: 7,
  //     image: "https://gustosafoods.com/wp-content/uploads/2025/02/5-plus-Handpicked-300x300.jpg",
  //     description: "6 Suta Plus (19mm above) | Handpicked Makhana | 100gm",
  //     price1: "300.00",
  //     price2: "299.00",
  //   },
  //   {
  //     id: 8,
  //     image: "https://gustosafoods.com/wp-content/uploads/2024/10/4-suta-1-600x600.png",
  //     description: "6.5 Suta Plus (20.7mm above) | Handpicked Makhana | 200gm",
  //     price1: "499.00",
  //     price2: "499.00",
  //   },
  // ];


      const [products, setProducts] = useState([]);
    
        useEffect(() => {
          const fetchProducts = async () => {
            try {
              const response = await getProductServ();
              console.log(response.data);
              setProducts(response.data || []);
            } catch (error) {
              console.error("Error loading products:", error);
            }
          };
      
          fetchProducts();
        }, []);


  return (


    <div className="from-farm d-flex flex-column align-items-center">
      <h2 className="farm-h">Our Shop</h2>
      <h1>From our Farm</h1>

      <div
        className="Farm-Products d-flex flex-wrap justify-content-center gap-4"
        
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card2 d-flex flex-column justify-content-between"
           
          >
            <div>
              <img
                src={product.productHeroImage}
                className="product-img"
                alt={product.description}
              />
              <p className="product-descrip mb-2">{product.name}</p>
              <div className="wishlist-icon">
                <img src="https://cdn-icons-png.flaticon.com/128/6051/6051092.png" />
              </div>
            </div>
            <div>
              <div className="price d-flex gap-1">
                <p className="price1">₹{product.price}</p>
                <p className="price2">₹{product.offerPrice}</p>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopFromFarm;
