"use client";

import DailySell from "./Components/DailySell";
import FeaturedCarousel from "./Components/FeaturedCarousel";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import Testimonals from "./Components/Testimonals";
import Faq from "./Components/Faq";
import ShopFromFarm from "./Components/ShopFromFarm";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import { getProductServ } from "./services/product.service";

export default function Home() {

  // const products = [

  //   {
  //     id: 1,
  //     image:
  //       "https://gustosafoods.com/wp-content/uploads/2024/10/4-plus-300x300.png",
  //     description: "4 Suta Plus Makhana| (12mm and above)| 200gm",
  //     price1: "₹300.00",
  //     price2: "₹299.00",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://gustosafoods.com/wp-content/uploads/2024/10/6-plus-hp-600x600.png",
  //     description: "S6.5 Suta Plus(20.7mm above)| Handpicked Makhana|200gm",
  //     price1: "₹499.00",
  //     price2: "₹499.00",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "	https://gustosafoods.com/wp-content/uploads/2024/10/5-plus-Handpicked-300x300.jpg",
  //     description: "5 Suta Plus Handpicked Makhana(15.8mm and above)| 200gm",
  //     price1: "₹349.00 ",
  //     price2: "₹299.00",
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://gustosafoods.com/wp-content/uploads/2024/10/2-300x300.png",
  //     description: "Yogibhog Makhana 500gm (250gm x 2)",
  //     price1: "₹1,400.00",
  //     price2: "₹799.00",
  //   },
  //   {
  //     id: 5,
  //     image:
  //       "https://gustosafoods.com/wp-content/uploads/2024/10/3-300x300.png",
  //     description: "Yogibhog | Premium Makhana Big Size 250gm",
  //     price1: "₹700.00",
  //     price2: "₹499.00",
  //   },
  //   {
  //     id: 6,
  //     image:
  //       "https://gustosafoods.com/wp-content/uploads/2024/02/Peri-Peri-a--300x300.png",
  //     description: "Frisky Roasted Makhana(Fox Nut), Peri Peri, jar - 70gm",
  //     price1: "₹199.00",
  //     price2: "₹198.00",
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
   

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [visibleProducts, setVisibleProducts] = useState([]);

  // 1️⃣ Update visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width <= 600) setVisibleCount(2);
      else if (width <= 800) setVisibleCount(3);
      else if (width <= 1025) setVisibleCount(4);
      else setVisibleCount(4);
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
  console.log("Visible Products:", visibleProducts);

// Remove products from dependencies
}, [startIndex, visibleCount , products]);


  // 3️⃣ Navigation
  const nextSlide = () => {
    setStartIndex((prev) => (prev + visibleCount) % products.length);
  };

  const prevSlide = () => {
    setStartIndex(
      (prev) => (prev - visibleCount + products.length) % products.length
    );
  };

  const images = [
    "/assets/hero-section.jpg",
    "https://gustosafoods.com/wp-content/uploads/2024/03/2-1.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images[0] ? images[1] : images[0]
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <Navbar />

      {/* hero section */}
      <HeroSection/>
   

      {/* most popular section */}

      <div className="most-popular d-flex flex-column align-items-center">
        <p className="mb-0">Most Popular</p>
        <h1 className="text-center mx-2">Discover flavours in demand</h1>
        <div className="carousel-container d-flex gap-1">
          <button onClick={prevSlide} className="carousel-btn">
            <img src="/assets/back.png" alt="Previous" className="popular-btn" />
          </button>

          <div className="products-grid">
          {visibleProducts.map((product) => (
  <div key={product._id} className="product-card d-flex flex-column justify-content-between">
    <div>
      <a href={`/Product/${product._id}`}>
        <img
          src={product.productHeroImage}
          alt={product.name}
          className="product-img"
        />
      </a>
      <p className="product-descrip">{product.name}</p>
        <p className="category1">{product.tags?.join(", ")}</p>
      <div className="wishlist-icon">
        <img src="https://cdn-icons-png.flaticon.com/128/13369/13369080.png" />
      </div>
    </div>
    <div>
      <div className="price d-flex gap-1">
        <p className="price1-home">₹{product.offerPrice}</p>
        <p className="price2-home">₹{product.price}</p>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  </div>
))}

          </div>

          <button onClick={nextSlide} className="carousel-btn">
            <img src="/assets/next2.png" alt="Next" className="popular-btn" />
          </button>
        </div>
      </div>

       {/* Featured categories */}

      <FeaturedCarousel />

      {/* shop from our farm */}

      <ShopFromFarm/>

     

      {/* feature bottom */}

      {/* <div className="featured-bottom ">
        <div className="row">
          <div className="col-lg-6 col-12 mt-3">
           <div className="feature-card feature-card1  d-flex flex-column justify-content-center">
           <h3 className=" fw-bold">Fruits & Vegetables</h3>
            <p>Get Upto 30% Off</p>
            <button className="shop-btn">
              Shop Now
            </button>
           </div>
          </div>

          <div className="col-lg-6 col-12 mt-3 ">
           <div className=" feature-card feature-card2  d-flex flex-column justify-content-center">
           <h3 className=" fw-bold">Freshly Baked Buns</h3>
            <p>Get Upto 25% Off</p>
            <button className="shop-btn">
              Shop Now
            </button>
           </div>
          </div>
        </div>
      </div> */}

      {/* Daily best sells section */}
         <DailySell/>

          {/* testimonals section */}
          <Testimonals/>

         {/* free shiping section */}

         <div className="free-shiping ">
           <div className="row">
              <div className="col-lg-4 col-sm-6 col-12 d-flex gap-4 justify-content-center mb-4">
                <div className="services-icon-wrapper">
                 <img src="/assets/car.png" className="services-icon"/>
                 </div>
                 <div>
                  <p className="mb-0 fw-bold" > Free Shipping</p>
                  <p>On Order Over $49</p>
                 </div>
              </div>

               <div className="col-lg-4 col-sm-6 col-12  d-flex gap-4 justify-content-center mb-4">
                <div className="services-icon-wrapper">
                 <img src="/assets/viber.png" className="services-icon"/>
                 </div>
                 <div>
                  <p className="mb-0 fw-bold">24/7 Customer Care</p>
                  <p>Call us on anytime</p>
                 </div>
              </div>

               <div className="col-lg-4 col-sm-6 col-12 d-flex gap-4 justify-content-center mb-4">
                <div className="services-icon-wrapper">
                 <img src="/assets/secure-payment.png" className="services-icon"/>
                 </div>
                 <div>
                  <p className="mb-0 fw-bold">Secure payment</p>
                  <p>100% Safe Payment</p>
                 </div>
              </div>
           </div>
         </div>
            
            <Faq/>

            {/* footer */}

            <Footer/>
    </>
  );
}
