// import React from "react";

// const Testimonals = () => {
//   return (
//     <>
//       <div className="testimonals">
//         <div className="row d-flex align-items-center">
//           <div className="col-md-5 col-12 ">
//             <h1 className="text-white">Testimonials</h1>
//             <h1 className="testi-h">What our customers say</h1>
//             {/* <h1  className="testi-h"></h1> */}
//           </div>

//           <div className="col-md-7 col-12">
//             <div
//               id="testimonialCarousel"
//               className="carousel slide"
//               data-bs-ride="carousel"
//             >
//               <div className="carousel-inner ">
//                 {/* Slide 1 */}
//                 <div className="carousel-item active ">
//                   <div className="card   text-center d-flex flex-column align-items-center">
//                     <div className="testi-card">
//                         <p className="mb-3">
//                       "I recently tried Gustoosa Food's raw makhana and was
//                       blown away by the quality and taste. The makhana was fresh
//                       and crunchy, and had a subtle nutty flavor that was simply
//                       delicious. I love that it's a healthy snack option that I
//                       can feel good about eating, and I'll definitely be
//                       ordering more in the future! "
//                     </p>
//                     <h6 className="mb-0 text-primary">Shreya Jain</h6>
//                     <small className="text-muted">Student</small>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Slide 2 */}
//                 <div className="carousel-item ">
//                   <div className="card   text-center d-flex flex-column align-items-center">
//                    <div  className="testi-card" >
//                      <p className="mb-3">
//                       " I'm a big fan of Gustoosa Food's roasted makhana snacks.
//                       The flavors are so unique and tasty, and they're the
//                       perfect snack to satisfy my cravings without feeling
//                       guilty. I especially love the cheese and caramel flavors –
//                       they're addictive! "
//                     </p>
//                     <h6 className="mb-0 text-primary">Puneet Rawat</h6>
//                     <small className="text-muted">Avid Foodie</small>
//                    </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Controls */}
//               <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#testimonialCarousel"
//                 data-bs-slide="prev"
//               >
//                 <span
//                   className="carousel-control-prev-icon rounded-circle p-3"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#testimonialCarousel"
//                 data-bs-slide="next"
//               >
//                 <span
//                   className="carousel-control-next-icon  rounded-circle p-3"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonals;

import React from "react";

const Testimonals = () => {
  return (
    <>
      <div className="testimonals">
        <div className="row d-flex align-items-center">
          <div className="col-md-5 col-12 ">
            <h1 className="text-white">Testimonials</h1>
            <h1 className="testi-h">What our customers say</h1>
            {/* <h1  className="testi-h"></h1> */}
          </div>

          <div className="col-md-7 col-12">
            <div
              id="testimonialCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner ">
                {/* Slide 1 */}
                <div className="carousel-item active ">
                  <div className="card   text-center d-flex flex-column align-items-center">
                    <div className="testi-card">
                        <p className="mb-3 testimonal-para">
                      "I recently tried Gustoosa Food's raw makhana and was
                      blown away by the quality and taste. The makhana was fresh
                      and crunchy, and had a subtle nutty flavor that was simply
                      delicious. I love that it's a healthy snack option that I
                      can feel good about eating, and I'll definitely be
                      ordering more in the future! "
                    </p>
                    <h6 className="mb-0 text-primary">Shreya Jain</h6>
                    <small className="text-muted">Student</small>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item ">
                  <div className="card   text-center d-flex flex-column align-items-center">
                   <div  className="testi-card" >
                     <p className="mb-3 testimonal-para">
                      " I'm a big fan of Gustoosa Food's roasted makhana snacks.
                      The flavors are so unique and tasty, and they're the
                      perfect snack to satisfy my cravings without feeling
                      guilty. I especially love the cheese and caramel flavors –
                      they're addictive! "
                    </p>
                    <h6 className="mb-0 text-primary">Puneet Rawat</h6>
                    <small className="text-muted">Avid Foodie</small>
                   </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon rounded-circle p-3"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon  rounded-circle p-3"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonals;

