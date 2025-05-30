// import React, { useState, useEffect } from "react";

// const products = [
//   { id: 1, name: "Baby Care", image: "https://freshcart-next-js.vercel.app/images/category/category-baby-care.jpg" },
//   { id: 2, name: "Chicken, Meat & Fish", image: "https://freshcart-next-js.vercel.app/images/category/category-chicken-meat-fish.jpg" },
//   { id: 3, name: "Cleaning Essentials", image: "https://freshcart-next-js.vercel.app/images/category/category-cleaning-essentials.jpg" },
//   { id: 4, name: "Pet Care", image: "https://freshcart-next-js.vercel.app/images/category/category-pet-care.jpg" },
//   { id: 5, name: "Fruits & Vegetables", image: "https://freshcart-next-js.vercel.app/images/category/category-fruits-vegetables.jpg" },
//   { id: 6, name: "Cold Drink Juices", image: "https://freshcart-next-js.vercel.app/images/category/category-cold-drinks-juices.jpg" },
//   { id: 7, name: "Instant Food", image: "https://freshcart-next-js.vercel.app/images/category/category-instant-food.jpg" },
//   { id: 8, name: "Tea Coffee & Drinks", image: "https://freshcart-next-js.vercel.app/images/category/category-tea-coffee-drinks.jpg" },
//   { id: 9, name: "Snacks & Munchies", image: "https://freshcart-next-js.vercel.app/images/category/category-snack-munchies.jpg" },
//   { id: 10, name: "Bakery & Buiscuits", image: "https://freshcart-next-js.vercel.app/images/category/category-bakery-biscuits.jpg" },
//   { id: 11, name: "Dairy, Bread & Eggs", image: "https://freshcart-next-js.vercel.app/images/category/category-dairy-bread-eggs.jpg" },
//   { id: 12, name: "Atta, Rice & Dal", image: "https://freshcart-next-js.vercel.app/images/category/category-atta-rice-dal.jpg" },
// ];

// const FeaturedCarousel = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(4); // Default visible count is 4
//   const [visibleProducts, setVisibleProducts] = useState([]);

//   // 1️⃣ Update visible count based on screen size
//   useEffect(() => {
//     const updateVisibleCount = () => {
//       const width = window.innerWidth;
//       if (width <= 600) setVisibleCount(2); // For mobile
//       else if (width <= 800) setVisibleCount(3); // For tablets
//       else if (width <= 1025) setVisibleCount(4); // For larger tablets or small desktops
//       else setVisibleCount(6); // For large desktops
//     };

//     updateVisibleCount();
//     window.addEventListener("resize", updateVisibleCount);
//     return () => window.removeEventListener("resize", updateVisibleCount);
//   }, []);

//   // 2️⃣ Update visible products when startIndex or visibleCount changes
//   useEffect(() => {
//     const end = startIndex + visibleCount;
//     const visible = products
//       .slice(startIndex, end)
//       .concat(products.slice(0, Math.max(0, end - products.length)));
//     setVisibleProducts(visible);
//   }, [startIndex, visibleCount]);

//   // 3️⃣ Navigation (Next and Previous slide)
//   const nextSlide = () => {
//     setStartIndex((prev) => (prev + 1) % products.length); // Move 1 product at a time
//   };

//   const prevSlide = () => {
//     setStartIndex((prev) => (prev - 1 + products.length) % products.length); // Move 1 product at a time
//   };

//   return (
//     <div className="featured">
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h3>Featured Categories</h3>
//         <div className="d-flex gap-3">
//           <button onClick={prevSlide} className="carousel-btn2">
//             <img src="/assets/back.png" alt="Previous" />
//           </button>
//           <button onClick={nextSlide} className="carousel-btn2">
//             <img src="/assets/next2.png" alt="Next" />
//           </button>
//         </div>
//       </div>

//       <div className="featured-carousel" style={{ display: "flex", gap: "10px", marginTop: "10px", flexWrap: "wrap", justifyContent: "center" }}>
//         {visibleProducts.map((product) => (
//           <div key={product.id} className="feature-product" style={{ textAlign: "center" }}>
//             <img src={product.image} alt={product.name} width="100" height="100" />
//             <p className="mb-0 mt-2">{product.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCarousel;

"use Client"

import { getCategory } from "../services/product.service";
import React, { useState, useEffect } from "react";

 
const FeaturedCarousel = () => {


  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4); // Default visible count is 4
  const [visibleProducts, setVisibleProducts] = useState([]);


   const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await getCategory();
        if (response?.data?.length > 0) {
          setProducts(response.data);
         console.log("all categories:", response.data); // Properly logs the whole object

        }
      } catch (error) {
        console.error("Failed to fetch banners", error);
      }
    };

    fetchCategory();
  }, []);

  // 1️⃣ Update visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width <= 600) setVisibleCount(2); // For mobile
      else if (width <= 800) setVisibleCount(3); // For tablets
      else if (width <= 1025) setVisibleCount(3); // For larger tablets or small desktops
      else setVisibleCount(5); // For large desktops
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // 2️⃣ Update visible products when startIndex or visibleCount changes
  useEffect(() => {
    const end = startIndex + visibleCount;
    const visible = products
      .slice(startIndex, end)
      .concat(products.slice(0, Math.max(0, end - products.length)));
    setVisibleProducts(visible);
  }, [startIndex, visibleCount , products]);

  // 3️⃣ Navigation (Next and Previous slide)
  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % products.length); // Move 1 product at a time
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + products.length) % products.length); // Move 1 product at a time
  };

  return (
    <div className="featured ">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} className="mb-5">
        <h3 className="ms-md-5 ">Featured Categories</h3>
        <div className="d-flex gap-3 d-lg-none d-block">
          <button onClick={prevSlide} className="carousel-btn2">
            <img src="/assets/back.png" alt="Previous" />
          </button>
          <button onClick={nextSlide} className="carousel-btn2">
            <img src="/assets/next2.png" alt="Next" />
          </button>
        </div>
      </div>

      <div className="featured-carousel ms-md-5" style={{ display: "flex", gap: "20px", marginTop: "10px", flexWrap: "wrap", justifyContent: "start" }}>
        {visibleProducts.map((product) => (
          <div key={product._id} className="feature-product" style={{ textAlign: "center" }}>
            <img src={product.image} alt={product.name} width="100" height="100" />
            <p className="mb-0 mt-2">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;

