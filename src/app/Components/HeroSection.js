// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const HeroSection = () => {
//   const slides = [
//     {
//       id: 1,
//       background:  "/assets/hero-section.jpg",
    
//     },
//     {
//       id: 2,
//       background: "https://gustosafoods.com/wp-content/uploads/2024/03/2-1.jpg",
//     },
//   ];

//   return (
//     <div className="hero-slider-wrapper">
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         loop={true}
//         speed={1000}
//         spaceBetween={0}
//         slidesPerView={1}
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div
//               className="hero-section d-flex flex-column justify-content-center"
//               style={{
//                 backgroundImage: `url(${slide.background})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="hero-section1">
//                 <h1>
//                   Say goodbye to bland makhanas; it's time to savor the flavors.
//                 </h1>
//                 <p className="fs-6 fs-lg-5 mb-4">
//                   Get extra 5% off on flavoured makhanas.
//                 </p>
//                 <div className="shop-now d-flex gap-2 align-items-center justify-content-center my-3">
//                   <p className="fs-5 mb-0 text-white">Shop Now</p>
//                   <img src="/assets/next.png" alt="Next Icon" />
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HeroSection;


"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import { getBanners } from "../services/banner.service";

const HeroSection = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await getBanners();
        if (response?.data?.length > 0) {
          setSlides(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch banners", error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div className="hero-slider-wrapper">
      {slides.length > 0 && (
        <Swiper
          key={slides.length}
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          slidesPerView={1}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="hero-section d-flex flex-column justify-content-center">
                <img
                  className="banner-img"
                  src={slide.image}
                  alt={`slide-${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default HeroSection;
