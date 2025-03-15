"use client";
// import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import { Buenard } from "next/font/google";

// const font1 = Buenard();
const ROUND_OFF_WIDTH_SIZE = 1500;
const ROTATE_SPEED = 0.01;

export default function Home() {
  return (
    <section className={`flex items-center w-full flex-col h-[500vh] bg-amber-50`}>
      <CreativeComp />
    </section>
  );
}

// function getNumberFromPercent(a) {
//   return parseFloat(a.slice(0, a.length - 1));
// }

function CreativeComp({ firstLine = "ADVAYA", lastLine = "HACKATHON" }) {
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
  const [scrollPercent, setScrollPercent] = useState(0);
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
    const plaRadius = 45;
    const intervalId = setInterval(() => {
      for (let i = 0; i < planets.length; i++) {
        const planet = planets[i];
        planet.angle += ROTATE_SPEED;
        const x = Math.cos(planet.angle) * (plaRadius + 100) * 7;
        const y = Math.sin(planet.angle) * plaRadius * 7;
        const z = Math.sin(planet.angle) * plaRadius * 1.5;
        // console.log(x, y);
        if (planet.plaEle.current) {
          planet.plaEle.current.style.transform = `translateX(${x}%) translateY(${y}%) translateZ(${z}px)`;
        }
      }
    }, 10);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (divEle.current) {
        const section = divEle.current;
        const scrollY = window.scrollY;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY < sectionTop) {
          setScrollPercent(0);
        } else if (scrollY > sectionTop + sectionHeight) {
          setScrollPercent(100);
        } else {
          const scrolledInsideSection = ((scrollY - sectionTop) / sectionHeight) * 100;
          setScrollPercent(Math.min(Math.max(scrolledInsideSection, 0), 100));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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

  // console.log(scrollPercent);
  return (
    <div className="relative w-full h-[200vh]"
      onMouseMove={handleMouseMove}
    >
      <div className="text-center selection:bg-violet-400 text-[300px] tracking-wider leading-[0.9] w-full relative h-[100vh] transform-3d perspective-[15cm]"
        ref={divEle}
      >
        <div className="small-bounce w-[57%] h-[30%] oval border-violet-800 border-[10px] translate-z-2 z-20 rotate-x-45 -rotate-y-3 absolute -translate-x-1/2 -translate-y-[100%] left-1/2 top-1/2">
        </div>
        {/* <div className="small-bounce w-[60%] h-[250px] rounded-b-full border-violet-800/30 border-b-[20px] translate-z-2 z-20 rotate-x-45 -rotate-y-6 absolute -translate-x-1/2 -translate-y-[90%] left-1/2 top-1/2">
        </div> */}
        <div ref={textEle} className="text-shadow-ele absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-white z-[10]" >
          <FirstLine text={firstLine} scrollPer={scrollPercent} />
          <LastLine text={lastLine} scrollPer={scrollPercent} />
        </div>
        <div ref={textEle1} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 left-[49.5%] top-[50.5%] text-violet-500 z-[9]" >
          <FirstLine text={firstLine} scrollPer={scrollPercent} />
          <LastLine text={lastLine} scrollPer={scrollPercent} />
        </div>
        <div ref={textEle2} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 left-[49%] top-[51%] text-violet-400 z-[8]" >
          <FirstLine text={firstLine} scrollPer={scrollPercent} />
          <LastLine text={lastLine} scrollPer={scrollPercent} />
        </div>
        <div ref={textEle3} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 left-[48.5%] top-[51.5%] text-violet-300 z-[7]" >
          <FirstLine text={firstLine} scrollPer={scrollPercent} />
          <LastLine text={lastLine} scrollPer={scrollPercent} />
        </div>
        <div
          ref={iconEle1}
          className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <ImgComp imgSrc="/icon/cursor.svg" altTxt="cursor" />
        </div>
        <div
          ref={iconEle2}
          className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <ImgComp imgSrc="/icon/award.svg" altTxt="award" />
        </div>
        <div
          ref={iconEle3}
          className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <ImgComp imgSrc="/icon/eyes.svg" altTxt="eyes" />
        </div>
        <div
          ref={iconEle4}
          className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <ImgComp imgSrc="/icon/light.svg" altTxt="light" />
        </div>
        <div
          ref={iconEle5}
          className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <ImgComp imgSrc="/icon/planet.svg" altTxt="planet" />
        </div>
        <div
          ref={iconEle6}
          className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <ImgComp imgSrc="/icon/plant.svg" altTxt="plant" />
        </div>
        <div
          ref={iconEle7}
          className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <ImgComp imgSrc="/icon/pointer.svg" altTxt="pointer" />
        </div>
      </div >
    </div>
  )
}

function LastLine({ text, scrollPer }) {
  return (
    <h2 className="font-bold text-[190px]" style={{ scale: `100% ${100 + scrollPer}%` }}>
      {text}
    </h2>
  );
}

function FirstLine({ text, scrollPer }) {
  return (
    <h2 className="font-bold" style={{ scale: `100% ${100 - scrollPer}%` }}>
      {text}
    </h2>
  );
}

function ImgComp({ imgSrc = "/icon/cursor.svg", altTxt = "cursor" }) {
  return (
    <div className="w-[59px] h-[59px]">
      <img
        alt={altTxt}
        src={imgSrc}
        className="h-full w-full object-contain pointer-events-none"
      />
    </div>
  )
}
