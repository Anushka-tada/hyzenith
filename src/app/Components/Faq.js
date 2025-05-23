"use client";

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const cardsData = [
  {
    title: "What is Suta in Makhana?",
    content:
      "What is Suta in Makhana? Soota is a unit of length rarely used in daily life but essential in the",
  },
  {
    title: "A Complete Guide to Makhana Grading and Sizing for New Businesses",
    content:
      "Table of Contents Makhana size is the most important thing you need to know if you’re planning to start a",
  },
  {
    title: "Hello World!",
    content: "Welcome to WordPress. This is your first post. Edit or delete it.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive logic
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width <= 600) setVisibleCount(1);
      else if (width <= 1203) setVisibleCount(2);
      else setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const next = () => {
  setActiveIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
};

const prev = () => {
  setActiveIndex(
    (prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length
  );
};

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(cardsData[(activeIndex + i) % cardsData.length]);
    }
    return visible;
  };

  return (
    <div className="faq-section text-center py-5">
      <h2 className="mb-4">Must Read for Makhana Business</h2>

      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {/* Left Icon */}
        <div
          onClick={prev}
          style={{ cursor: "pointer", marginRight: "10px" }}
        >
          <FaChevronLeft size={24} />
        </div>

        {/* Cards */}
        <div className="d-flex gap-4 flex-wrap justify-content-center ">
          {getVisibleCards().map((card, index) => (
            <div
              key={index}
              className="card faq-card  shadow d-flex flex-column justify-content-center"
              style={{ width: "19rem", minHeight: "180px" }}
            >
              <h5 className="mb-3 faq-title">{card.title}</h5>
              <p>{card.content}</p>
            </div>
          ))}
        </div>

        {/* Right Icon */}
        <div
          onClick={next}
          style={{ cursor: "pointer", marginLeft: "10px" }}
        >
          <FaChevronRight size={24} />
        </div>
      </div>

      {/* Dots */}
      <div className="mt-4">
        {cardsData.map((_, index) => (
          <span
            key={index}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              display: "inline-block",
              margin: "0 6px",
              backgroundColor: index === activeIndex ? "#677FB2" : "#ddd",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Faq;
