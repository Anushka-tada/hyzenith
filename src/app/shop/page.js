

// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "../Components/Navbar";
// import PriceFilter from "../Components/PriceFilter";
// import { getCategory, getProductServ } from "../services/product.service";
// import { useRouter } from "next/navigation";
// import Footer from "../Components/Footer";

// const page = () => {
//   const router = useRouter();

//   const [priceRange, setPriceRange] = useState([50, 400]);
//   const [sortOption, setSortOption] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [showFilters, setShowFilters] = useState(false);

//   // product listing
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await getProductServ();
//         console.log(response.data);
//         setProducts(response.data || []);
//       } catch (error) {
//         console.error("Error loading products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // filter product
//   useEffect(() => {
//     let filtered = products.filter(
//       (product) =>
//         product.offerPrice >= priceRange[0] && product.offerPrice <= priceRange[1]
//     );

//     if (sortOption === "high to low") {
//       filtered.sort((a, b) => b.price - a.price);
//     } else if (sortOption === "low to high") {
//       filtered.sort((a, b) => a.price - b.price);
//     }
//     console.log("Filtered:", filtered);
//     setFilteredProducts(filtered);
//   }, [priceRange, sortOption, products]);

//   const [itemsToShow, setItemsToShow] = useState(10);

//   // navigate
//   function handleProductDetails(id) {
//     router.push(`/Product/${id}`);
//     console.log(id);
//   }

//   // category api
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const response = await getCategory();
//         if (response?.data?.length > 0) {
//           setCategories(response.data);
//         }
//       } catch (error) {
//         console.error("Failed to fetch banners", error);
//       }
//     };

//     fetchCategory();
//   }, []);

//   // add to cart logic
//   const [cartQty, setCartQty] = useState({});

//   const handleAddToCart = (productId) => {
//     setCartQty((prev) => ({
//       ...prev,
//       [productId]: 1,
//     }));
//   };

//   const handleIncrease = (productId) => {
//     setCartQty((prev) => ({
//       ...prev,
//       [productId]: prev[productId] + 1,
//     }));
//   };

//   const handleDecrease = (productId) => {
//     setCartQty((prev) => {
//       const currentQty = prev[productId];
//       if (currentQty === 1) {
//         const newQty = { ...prev };
//         delete newQty[productId];
//         return newQty;
//       } else {
//         return {
//           ...prev,
//           [productId]: currentQty - 1,
//         };
//       }
//     });
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="shop-page">
//         <div className="shop-sections ">
//           <div className={`category-section ${showFilters ? "open" : ""}`}>
//             <div className="close-btn" onClick={() => setShowFilters(false)}>
//               <img src="https://cdn-icons-png.flaticon.com/128/2732/2732657.png" />
//             </div>

//             <h5>Categories</h5>

//             <div className="all-categroy mb-5">
//               {categories.map((category) => (
//                 <div
//                   key={category._id}
//                   className="category d-flex justify-content-between align-items-center"
//                 >
//                   <p className="mb-0">{category.name}</p>
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/130/130884.png"
//                     alt="arrow"
//                   />
//                 </div>
//               ))}
//             </div>

//             <PriceFilter
//               values={priceRange}
//               onChange={(range) => setPriceRange(range)}
//             />

//             {/* rating section */}
//             <div className="shop-rating mt-5">
//               {/* ...rating checkboxes as you had */}
//               {/* (omitted here for brevity) */}
//             </div>

//             <div className="daily-sell1 daily-selling ">
//               <h3 className="">Pure. Natural. Safe. Hygiene You Can Trust..</h3>
//               <p className="">Get the best deal before close.</p>
//               <div className="daily-shop d-flex gap-2 align-items-center justify-content-center my-3">
//                 <p className="fs-5 mb-0 text-white fs-6">Shop Now</p>
//                 <img src="/assets/next.png" alt="Next Icon" />
//               </div>
//             </div>
//           </div>

//           {/* product show / item section */}
//           <div className="item-section pt-4">
//             <div className="all-filters d-flex gap-3">
//               <input
//                 className="product-search"
//                 placeholder="search for products"
//               ></input>

//               <div className="d-flex gap-1 bottom-filters justify-content-between">
//                 <div className="filter-outer">
//                   <button
//                     className="btn  filters-toggle-btn "
//                     onClick={() => setShowFilters(true)}
//                   >
//                     <img
//                       src="https://cdn-icons-png.flaticon.com/128/15430/15430342.png"
//                       className="filter-img"
//                     />
//                     Filters
//                   </button>
//                 </div>

//                 <div className="last-filters d-flex gap-lg-3 gap-sm-2 gap-1">
//                   <select
//                     id="showSelect"
//                     className="form-select form-select-sm w-auto"
//                     value={itemsToShow}
//                     onChange={(e) => setItemsToShow(Number(e.target.value))}
//                   >
//                     <option value="10">Show: 10</option>
//                     <option value="10">10</option>
//                     <option value="12">12</option>
//                     <option value="16">16</option>
//                   </select>

//                   <select
//                     id="sortSelect"
//                     className="form-select form-select-sm w-auto "
//                     onChange={(e) => setSortOption(e.target.value)}
//                   >
//                     <option value="featured">Sort by: Featured</option>
//                     <option value="high to low">Price: High to Low</option>
//                     <option value="low to high">Price: Low to High</option>
//                     <option value="release date">Release Date</option>
//                     <option value="avg. rating">Avg. Rating</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <p className="product-quantity">
//               {filteredProducts.length} <span className="quantity-p">Products found</span>
//             </p>

//             <div className="products">
//               {filteredProducts.slice(0, itemsToShow).map((product) => (
//                 <div
//                   className="shop-product-card d-flex flex-column justify-content-between"
//                   key={product._id}
//                 >
//                   <div>
//                     <div className="shop-product-img">
//                       <img
//                         src={product.productHeroImage}
//                         alt={product.name}
//                         className="product-img"
//                         onClick={() => handleProductDetails(product._id)}
//                       />
//                     </div>

//                     <div className="inner-product d-flex flex-column justify-content-between">
//                       <p className="category1 mb-0">{product.name}</p>
//                       <p className="description">{product.tags?.join(", ")}</p>

//                       <div className="product-rating d-flex align-items-center gap-1">
//                         {/* Star icons as before */}
//                         <img
//                           src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                           className="rate2"
//                         />
//                         <img
//                           src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                           className="rate2"
//                         />
//                         <img
//                           src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                           className="rate2"
//                         />
//                         <img
//                           src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                           className="rate2"
//                         />
//                         <img
//                           src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png"
//                           className="rate2"
//                         />
//                         <p className="mb-0">4.4(4)</p>
//                       </div>

//                       <div className="shop-wishlist-icon">
//                         <img src="https://cdn-icons-png.flaticon.com/128/13369/13369080.png" />
//                       </div>

//                       <div className="price d-flex gap-1">
//                         <p className="shop-price2 fw-bold ">₹{product.offerPrice}</p>
//                         <p className="shop-price1 text-muted text-decoration-line-through">
//                           ₹{product.price}
//                         </p>
//                       </div>

//                       {!cartQty[product._id] ? (
//                         <button
//                           className="shop-addCart-btn"
//                           onClick={() => handleAddToCart(product._id)}
//                         >
//                           + Add to Cart
//                         </button>
//                       ) : (
//                         <div className="quantity-controller d-flex align-items-center justify-content-center gap-3">
//                           <button
//                             className="qty-btn"
//                             onClick={() => handleDecrease(product._id)}
//                           >
//                             -
//                           </button>
//                           <span>{cartQty[product._id]}</span>
//                           <button
//                             className="qty-btn"
//                             onClick={() => handleIncrease(product._id)}
//                           >
//                             +
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default page;





"use client";

import React, { useState, useEffect , useContext } from "react";
import Navbar from "../Components/Navbar";
import PriceFilter from "../Components/PriceFilter";
import { getCategory, getProductServ , addProductToCart } from "../services/product.service";
import { useRouter } from "next/navigation";
import Footer from "../Components/Footer";
import { LoggedDataContext } from '../context/Context';

const page = () => {
  const router = useRouter();
   const { loggedUserData } = useContext(LoggedDataContext); 

  const [priceRange, setPriceRange] = useState([50, 400]);
  const [sortOption, setSortOption] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // product listing
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

  // filter product
  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.offerPrice >= priceRange[0] && product.offerPrice <= priceRange[1]
    );

    if (sortOption === "high to low") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "low to high") {
      filtered.sort((a, b) => a.price - b.price);
    }
    console.log("Filtered:", filtered);
    setFilteredProducts(filtered);
  }, [priceRange, sortOption, products]);

  const [itemsToShow, setItemsToShow] = useState(10);

  // navigate
  function handleProductDetails(id) {
    router.push(`/Product/${id}`);
    console.log(id);
  }

  // category api
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await getCategory();
        if (response?.data?.length > 0) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch banners", error);
      }
    };

    fetchCategory();
  }, []);

  // add to cart logic
  const [cartQty, setCartQty] = useState({});

  const userId = loggedUserData?.userId || '';

 const addToCartApiCall = async (productId) => {
  const payload = {
    userId, // just userId in the body
  };  
  console.log("in  add to cart api call function")
  const token = loggedUserData?.token
  console.log("user token  " + token)
  
  try {
    await addProductToCart(payload, productId , token); // productId passed as param
    console.log("Product added to cart:", productId);
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

 const handleAddToCart = (productId) => {
  // Update local state qty to 1 and make API call
  setCartQty((prev) => ({
    ...prev,
    [productId]: 1,
  }));

  addToCartApiCall(productId); // call API only here
};

const handleIncrease = (productId) => {
  // Just update local state, no API call
  setCartQty((prev) => ({
    ...prev,
    [productId]: prev[productId] + 1,
  }));
};

const handleDecrease = (productId) => {
  setCartQty((prev) => {
    const currentQty = prev[productId];
    if (currentQty === 1) {
      // Remove from cart locally if quantity reaches 0
      const updated = { ...prev };
      delete updated[productId];
      return updated;
    } else {
      return {
        ...prev,
        [productId]: currentQty - 1,
      };
    }
  });
};




  return (
    <>
      <Navbar />

      <div className="shop-page">
        <div className="shop-sections ">
          <div className={`category-section ${showFilters ? "open" : ""}`}>
            <div className="close-btn" onClick={() => setShowFilters(false)}>
              <img src="https://cdn-icons-png.flaticon.com/128/2732/2732657.png" />
            </div>

            <h5>Categories</h5>

            <div className="all-categroy mb-5">
              {categories.map((category) => (
                <div
                  key={category._id}
                  className="category d-flex justify-content-between align-items-center"
                >
                  <p className="mb-0">{category.name}</p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/130/130884.png"
                    alt="arrow"
                  />
                </div>
              ))}
            </div>

            <PriceFilter
              values={priceRange}
              onChange={(range) => setPriceRange(range)}
            />

            {/* rating section */}
            <div className="shop-rating mt-5">
              {/* ...rating checkboxes as you had */}
              {/* (omitted here for brevity) */}
            </div>

            <div className="daily-sell1 daily-selling ">
              <h3 className="">Pure. Natural. Safe. Hygiene You Can Trust..</h3>
              <p className="">Get the best deal before close.</p>
              <div className="daily-shop d-flex gap-2 align-items-center justify-content-center my-3">
                <p className="fs-5 mb-0 text-white fs-6">Shop Now</p>
                <img src="/assets/next.png" alt="Next Icon" />
              </div>
            </div>
          </div>

          {/* product show / item section */}
          <div className="item-section pt-4">
            <div className="all-filters d-flex gap-3">
              <input
                className="product-search"
                placeholder="search for products"
              ></input>

              <div className="d-flex gap-1 bottom-filters justify-content-between">
                <div className="filter-outer">
                  <button
                    className="btn  filters-toggle-btn "
                    onClick={() => setShowFilters(true)}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/15430/15430342.png"
                      className="filter-img"
                    />
                    Filters
                  </button>
                </div>

                <div className="last-filters d-flex gap-lg-3 gap-sm-2 gap-1">
                  <select
                    id="showSelect"
                    className="form-select form-select-sm w-auto"
                    value={itemsToShow}
                    onChange={(e) => setItemsToShow(Number(e.target.value))}
                  >
                    <option value="10">Show: 10</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                  </select>

                  <select
                    id="sortSelect"
                    className="form-select form-select-sm w-auto "
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="featured">Sort by: Featured</option>
                    <option value="high to low">Price: High to Low</option>
                    <option value="low to high">Price: Low to High</option>
                    <option value="release date">Release Date</option>
                    <option value="avg. rating">Avg. Rating</option>
                  </select>
                </div>
              </div>
            </div>

            <p className="product-quantity">
              {filteredProducts.length} <span className="quantity-p">Products found</span>
            </p>

            <div className="products">
              {filteredProducts.slice(0, itemsToShow).map((product) => (
                <div
                  className="shop-product-card d-flex flex-column justify-content-between"
                  key={product._id}
                >
                  <div>
                    <div className="shop-product-img">
                      <img
                        src={product.productHeroImage}
                        alt={product.name}
                        className="product-img"
                        onClick={() => handleProductDetails(product._id)}
                      />
                    </div>

                    <div className="inner-product d-flex flex-column justify-content-between">
                      <p className="category1 mb-0">{product.name}</p>
                      <p className="description">{product.tags?.join(", ")}</p>

                      <div className="product-rating d-flex align-items-center gap-1">
                        {/* Star icons as before */}
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                          className="rate2"
                        />
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                          className="rate2"
                        />
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                          className="rate2"
                        />
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                          className="rate2"
                        />
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png"
                          className="rate2"
                        />
                        <p className="mb-0">4.4(4)</p>
                      </div>

                      <div className="shop-wishlist-icon">
                        <img src="https://cdn-icons-png.flaticon.com/128/13369/13369080.png" />
                      </div>

                      <div className="price d-flex gap-1">
                        <p className="shop-price2 fw-bold ">₹{product.offerPrice}</p>
                        <p className="shop-price1 text-muted text-decoration-line-through">
                          ₹{product.price}
                        </p>
                      </div>

                      {!cartQty[product._id] ? (
                        <button
                          className="shop-addCart-btn"
                          onClick={() => handleAddToCart(product._id)}
                        >
                          + Add to Cart
                        </button>
                      ) : (
                        <div className="quantity-controller d-flex align-items-center justify-content-center gap-3">
                          <button
                            className="qty-btn"
                            onClick={() => handleDecrease(product._id)}
                          >
                            -
                          </button>
                          <span>{cartQty[product._id]}</span>
                          <button
                            className="qty-btn"
                            onClick={() => handleIncrease(product._id)}
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
