"use client";

import React, { useState, useEffect } from "react";

const Page = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = document.getElementById("content-section")?.offsetHeight || 0;
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (scrollY > sectionHeight - 150) {
        setHidden(true); 
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#fff5ee] h-full w-full pt-5 px-2">
      
      <div
        className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out ${
          hidden ? "opacity-0 pointer-events-none" : "opacity-100"
        } ${scrolled ? "h-16 text-2xl bg-transparent " : "h-32 text-5xl bg-transparent"}
        flex justify-center items-center text-[#f13f3e] font-extrabold`}
      >
        Problem Statements
      </div>

     
      <div id="content-section" className="pt-40">
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
            Improving healthcare<br /> through technology
          </span>
        </p>
      </div>


      <div className="h-screen bg-gray-200 flex justify-center items-center">
        <h1 className="text-4xl font-bold">Another Section Below</h1>
      </div>
    </div>
  );
};

export default Page;
