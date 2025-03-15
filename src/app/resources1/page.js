"use client";
// import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import { Buenard } from "next/font/google";

// const font1 = Buenard();
const ROUND_OFF_WIDTH_SIZE = 1500;
const ROTATE_SPEED = 0.01;

export default function Home() {
  return (
    <div className={`flex items-center justify-center w-full flex-col h-screen bg-amber-50`}>
      <CreativeComp />
    </div>
  );
}

// function getNumberFromPercent(a) {
//   return parseFloat(a.slice(0, a.length - 1));
// }

function CreativeComp() {
  const divEle = useRef();
  const textEle = useRef();
  const textEle1 = useRef();
  const textEle2 = useRef();
  const textEle3 = useRef();
  const iconEle1 = useRef();
  const iconEle2 = useRef();
  const iconEle3 = useRef();
  const iconEle4 = useRef();
  const iconEle5 = useRef();
  const iconEle6 = useRef();
  const iconEle7 = useRef();
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
    const planets = [
      { angle: 0 * (Math.PI / 180), plaEle: iconEle1 },
      { angle: 51.42 * (Math.PI / 180), plaEle: iconEle2 },
      { angle: 102.85 * (Math.PI / 180), plaEle: iconEle3 },
      { angle: 154.27 * (Math.PI / 180), plaEle: iconEle4 },
      { angle: 205.69 * (Math.PI / 180), plaEle: iconEle5 },
      { angle: 257.11 * (Math.PI / 180), plaEle: iconEle6 },
      { angle: 308.53 * (Math.PI / 180), plaEle: iconEle7 },
    ]
    const plaRadius = 50;
    const intervalId = setInterval(() => {
      for (let i = 0; i < planets.length; i++) {
        const planet = planets[i];
        planet.angle += ROTATE_SPEED;
        const x = Math.cos(planet.angle) * (plaRadius + 100) * 7;
        const y = Math.sin(planet.angle) * plaRadius * 7;
        const z = Math.sin(planet.angle) * plaRadius * 1.5;
        // console.log(x, y);
        // if (i === 0) {
        //   const sin1 = Math.sin(planet.angle);
        //   console.log(z, sin1);
        // }
        if (planet.plaEle.current) {
          planet.plaEle.current.style.transform = `translateX(${x}%) translateY(${y}%) translateZ(${z}px)`;
        }
      }
    }, 10);
    return () => clearInterval(intervalId);
  }, []);
  function smoothAnimation(current, textEle, timeoutMS, transform) {
    setTimeout(() => {
      textEle.current.style.top = `${current.top}%`;
      textEle.current.style.left = `${current.left}%`;
      textEle.current.style.transform = `rotateY(${transform.left}deg) rotateX(${transform.top}deg)`;
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
      const transform = {
        top: -yDiff * 40 * 1.2,
        left: xDiff * 40 * 1.2
      };
      // 2nd back ele
      const target1 = {
        top: (yDiff * diffDiffer1) + eleDefPos.top,
        left: (xDiff * diffDiffer1) + eleDefPos.left
      };
      const transform1 = {
        top: -yDiff * 40 * 1.2,
        left: xDiff * 40 * 1.2
      };
      // 3rd back ele
      const target2 = {
        top: (yDiff * diffDiffer2) + eleDefPos.top,
        left: (xDiff * diffDiffer2) + eleDefPos.left
      };
      const transform2 = {
        top: -yDiff * 40 * 1.2,
        left: xDiff * 40 * 1.2
      };
      // 4th back ele
      const target3 = {
        top: (yDiff * diffDiffer3) + eleDefPos.top,
        left: (xDiff * diffDiffer3) + eleDefPos.left
      };
      const transform3 = {
        top: -yDiff * 40 * 1.2,
        left: xDiff * 40 * 1.2
      };
      // console.log(aniPlaying);
      smoothAnimation(target, textEle, 10, transform);
      smoothAnimation(target1, textEle1, 11, transform1);
      smoothAnimation(target2, textEle2, 12, transform2);
      smoothAnimation(target3, textEle3, 13, transform3);
    }
  }
  return (
    <>
      <div className="text-center selection:bg-violet-400 text-[180px] leading-[1] w-full relative h-[100%] transform-3d perspective-[10cm]"
        ref={divEle}
        onMouseMove={handleMouseMove}
      >
        <div ref={textEle} className="text-shadow-ele absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-white z-[10]" >
          <h2 className="font-bold">
            CREATIVE
          </h2>
          <h2 className="font-bold">
            DEVELOPER
          </h2>
        </div>
        <div ref={textEle1} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 left-[49.5%] top-[50.5%] text-violet-500 z-[9]" >
          <h2 className="font-bold">
            CREATIVE
          </h2>
          <h2 className="font-bold">
            DEVELOPER
          </h2>
        </div>
        <div ref={textEle2} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 left-[49%] top-[51%] text-violet-400 z-[8]" >
          <h2 className="font-bold">
            CREATIVE
          </h2>
          <h2 className="font-bold">
            DEVELOPER
          </h2>
        </div>
        <div ref={textEle3} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 left-[48.5%] top-[51.5%] text-violet-300 z-[7]" >
          <h2 className="font-bold">
            CREATIVE
          </h2>
          <h2 className="font-bold">
            DEVELOPER
          </h2>
        </div>
        <div
          ref={iconEle1}
          className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <img
            alt=""
            src="/icon/cursor.svg"
            className="h-full w-full object-contain pointer-events-none"
          />
        </div>
        <div
          ref={iconEle2}
          className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <img
            alt=""
            src="/icon/award.svg"
            className="h-full w-full object-contain pointer-events-none"
          />
        </div>
        <div
          ref={iconEle3}
          className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <img
            alt=""
            src="/icon/eyes.svg"
            className="h-full w-full object-contain pointer-events-none"
          />
        </div>
        <div
          ref={iconEle4}
          className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <img
            alt=""
            src="/icon/light.svg"
            className="h-full w-full object-contain pointer-events-none"
          />
        </div>
        <div
          ref={iconEle5}
          className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <img
            alt=""
            src="/icon/planet.svg"
            className="h-full w-full object-contain pointer-events-none"
          />
        </div>
        <div
          ref={iconEle6}
          className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <img
            alt=""
            src="/icon/plant.svg"
            className="h-full w-full object-contain pointer-events-none"
          />
        </div>
        <div
          ref={iconEle7}
          className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <img
            alt=""
            src="/icon/pointer.svg"
            className="h-full w-full object-contain pointer-events-none"
          />
        </div>
      </div >
    </>
  )
}
