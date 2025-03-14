"use client";
// import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import { Buenard } from "next/font/google";

// const font1 = Buenard({weight: "400"});
const ROUND_OFF_WIDTH_SIZE = 1000;

export default function Home() {
  return (
    <div className={`flex items-center justify-center w-full flex-col h-screen bg-amber-50`}>
      <CreativeComp />
    </div>
  );
}

function getNumberFromPercent(a) {
  return parseFloat(a.slice(0, a.length - 1));
}

function CreativeComp() {
  const divEle = useRef();
  const textEle = useRef();
  const textEle1 = useRef();
  const textEle2 = useRef();
  const textEle3 = useRef();
  const [divCenter, setDivCenter] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function getOriginPoint() {
      if (divEle.current) {
        const e = divEle.current;
        const rect = e.getBoundingClientRect();
        setDivCenter({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    }
    getOriginPoint();
  }, []);
  function smoothAnimation(current, textEle, timeoutMS) {
    setTimeout(() => {
      textEle.current.style.top = `${current.top}%`;
      textEle.current.style.left = `${current.left}%`;
    }, timeoutMS);
  }
  function handleMouseMove(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    // console.log("Client X:", mouseX, "Client Y:", mouseY, divCenter);
    const xDiff = (mouseX - divCenter.x) / ROUND_OFF_WIDTH_SIZE;
    const yDiff = (mouseY - divCenter.y) / ROUND_OFF_WIDTH_SIZE;
    // console.log("xDiff:", xDiff, "yDiff:", yDiff, textEle.current.style.top, textEle.current.style.left);
    if (textEle.current && textEle1.current && textEle2.current && textEle3.current) {
      const diffDiffer = 10;
      const diffDiffer1 = 8;
      const diffDiffer2 = 6;
      const diffDiffer3 = 4;
      const eleDefPos = { left: 50, top: 50 };
      // main ele
      const target = {
        top: (yDiff * diffDiffer) + eleDefPos.top,
        left: (xDiff * diffDiffer) + eleDefPos.left
      };
      // 2nd back ele
      const target1 = {
        top: (yDiff * diffDiffer1) + eleDefPos.top,
        left: (xDiff * diffDiffer1) + eleDefPos.left
      };
      // 3rd back ele
      const target2 = {
        top: (yDiff * diffDiffer2) + eleDefPos.top,
        left: (xDiff * diffDiffer2) + eleDefPos.left
      };
      // 4th back ele
      const target3 = {
        top: (yDiff * diffDiffer3) + eleDefPos.top,
        left: (xDiff * diffDiffer3) + eleDefPos.left
      };
      // console.log(aniPlaying);
      smoothAnimation(target, textEle, 10);
      smoothAnimation(target1, textEle1, 11);
      smoothAnimation(target2, textEle2, 12);
      smoothAnimation(target3, textEle3, 13);
    }
  }
  return (
    <>
      <div className="text-center w-full relative h-[100%]"
        ref={divEle}
        onMouseMove={handleMouseMove}
      >
        <div ref={textEle} className="text-shadow-ele selection:bg-purple-400 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-white z-[10]" >
          <h2 className="text-8xl font-sans font-bold">
            CREATIVE
          </h2>
          <h2 className="text-8xl font-sans font-bold">
            DEVELOPER
          </h2>
        </div>
        <div ref={textEle1} className="selection:bg-purple-400 absolute -translate-x-1/2 -translate-y-1/2 left-[49.5%] top-[50.5%] text-purple-500 z-[9]" >
          <h2 className="text-8xl font-sans font-bold">
            CREATIVE
          </h2>
          <h2 className="text-8xl font-sans font-bold">
            DEVELOPER
          </h2>
        </div>
        <div ref={textEle2} className="selection:bg-purple-400 absolute -translate-x-1/2 -translate-y-1/2 left-[49%] top-[51%] text-purple-400 z-[8]" >
          <h2 className="text-8xl font-sans font-bold">
            CREATIVE
          </h2>
          <h2 className="text-8xl font-sans font-bold">
            DEVELOPER
          </h2>
        </div>
        <div ref={textEle3} className="selection:bg-purple-400 absolute -translate-x-1/2 -translate-y-1/2 left-[48.5%] top-[51.5%] text-purple-300 z-[7]" >
          <h2 className="text-8xl font-sans font-bold">
            CREATIVE
          </h2>
          <h2 className="text-8xl font-sans font-bold">
            DEVELOPER
          </h2>
        </div>
      </div >
    </>
  )
}
