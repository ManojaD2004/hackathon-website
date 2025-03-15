"use client";

import React, { useEffect, useRef } from "react";
import StickyHeader from "./Stickyheader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Prizes = () => {
  const barsContainerRef = useRef(null);
  const barRefs = useRef([]);
  const amountRefs = useRef([]);

  useEffect(() => {

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }


    barRefs.current = barRefs.current.slice(0, 3);
    amountRefs.current = amountRefs.current.slice(0, 3);


    const initAnimation = () => {
      if (!barsContainerRef.current) return;

      gsap.context(() => {
        ScrollTrigger.getAll().forEach(t => t.kill());
        

        gsap.set(barRefs.current, { 
          scaleY: 0,
          transformOrigin: "bottom"
        });
        

        gsap.set(amountRefs.current, {
          y: 30,
          opacity: 0
        });


        barRefs.current.forEach((bar, index) => {
          gsap.to(bar, {
            scaleY: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: barsContainerRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.2
          });

          // Animate the prize amounts
          gsap.to(amountRefs.current[index], {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out",
            scrollTrigger: {
              trigger: barsContainerRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse"
            },
            delay: 0.4 + index * 0.2
          });
        });
      }, barsContainerRef);
    };

    // Run animation setup after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(initAnimation, 100);
    
    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Prize data with custom colors
  const prizes = [
    { 
      position: "2nd", 
      amount: "₹50,000", 
      height: "h-64", 
      customColor: "#68910f" 
    },
    { 
      position: "1st", 
      amount: "₹75,000", 
      height: "h-80", 
      customColor: "#f47738" 
    },
    { 
      position: "3rd", 
      amount: "₹25,000", 
      height: "h-48", 
      customColor: "#7f705d" 
    }
  ];

  return (
    <div
      id="prizes-section"
      className=" min-h-screen w-full py-20 px-8 pt-[100px]"
    >
      <StickyHeader title="Prizes" sectionId="prizes-section" />
      
      <h2 className="text-3xl font-bold  text-[#f13f3e] mb-16">
        Cash Prizes for each Problem statement
      </h2>
      
      <div 
        ref={barsContainerRef}
        className="flex justify-center items-end gap-12 h-96 mt-20"
      >
        {prizes.map((prize, index) => (
          <div key={index} className="flex flex-col items-center">

            <div 
              ref={el => amountRefs.current[index] = el}
              className="text-2xl font-bold mb-4 opacity-0"
              style={{ color: prize.customColor }}
            >
              {prize.amount}
            </div>
         
            <div className="relative w-32 flex justify-center items-end">
              <div 
                ref={el => barRefs.current[index] = el}
                className={`w-full rounded-t-lg opacity-1 ${prize.height}`}
                style={{ 
                  backgroundColor: prize.customColor,
                  transformOrigin: "bottom", 
                  scaleY: 0 
                }}
              ></div>
              
              
              <div 
                className="absolute -bottom-10 text-xl font-bold"
                style={{ color: prize.customColor }}
              >
                {prize.position}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prizes;