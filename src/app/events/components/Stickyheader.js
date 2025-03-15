"use client";

import React, { useState, useEffect } from "react";

const StickyHeader = ({ title, sectionId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [previousSectionVisible, setPreviousSectionVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Find the previous section (if any)
    const allSections = document.querySelectorAll("[id$='-section']");
    let previousSection = null;
    let currentSectionFound = false;

    for (const sec of allSections) {
      if (sec.id === sectionId) {
        currentSectionFound = true;
        break;
      }
      previousSection = sec;
    }

    // Track section visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setHidden(false); // Show header when section is in view
      },
      { threshold: 0.3 }
    );
    observer.observe(section);

    // Track previous section visibility if it exists
    let previousObserver = null;
    if (previousSection) {
      previousObserver = new IntersectionObserver(
        ([entry]) => {
          setPreviousSectionVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      previousObserver.observe(previousSection);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // Shrink header after scrolling past the start of the section
      if (scrollY > sectionTop + 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide header when fully scrolling past the section
      if (scrollY > sectionTop + sectionHeight - 150) {
        setHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      if (previousObserver) previousObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionId]);

  // Determine final visibility based on both current and previous section
  const finalHidden = hidden || previousSectionVisible;

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-50 ${
        finalHidden ? "opacity-0 pointer-events-none" : "opacity-100"
      } ${scrolled ? "h-16 text-2xl bg-transparent " : "h-32 text-5xl bg-transparent"}
      flex justify-center items-center text-[#f13f3e] font-extrabold`}
    >
      {title}
    </div>
  );
};

export default StickyHeader;