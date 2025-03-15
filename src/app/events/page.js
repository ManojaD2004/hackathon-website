"use client";

import React, { useState, useEffect } from "react";

const Page = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#fff5ee] h-full w-full py-5 px-2">
      <div
        className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out ${
          scrolled
            ? "h-16 text-2xl bg-transparent"
            : "h-32 text-5xl bg-transparent"
        } flex justify-center items-center text-[#f13f3e] font-extrabold`}
      >
        Problem Statements
      </div>

      <div className="pt-40">
        <p className="text-[#f13f3e] text-9xl font-extrabold">
          <span>
            Digital solutions <br /> for rural education
          </span>
        </p> 
        <p className="text-[#f13f3e] text-9xl font-extrabold text-end">
          <span>
            Promoting culture <br /> to boost tourism
          </span>
        </p>
        <p className="text-[#f13f3e] text-9xl font-extrabold">
          <span>
            Improving healthcare
            <br /> through technology
          </span>
        </p>
      </div>
    </div>
  );
};

export default Page;
