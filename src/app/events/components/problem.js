import React from "react";
import StickyHeader from "./Stickyheader";

const Problem = () => {
  return (
    <div
      id="problem-section"
      className="bg-[#fff5ee] min-h-screen w-full py-5 px-2 pt-[100px]"
    >
      <StickyHeader title="Problem Statements" sectionId="problem-section" />

      <p className="text-[#f13f3e] text-9xl font-extrabold">
        Digital solutions <br /> for rural education
      </p>
      <p className="text-[#f13f3e] text-9xl font-extrabold text-end">
        Promoting culture <br /> to boost tourism
      </p>
      <p className="text-[#f13f3e] text-9xl font-extrabold">
        Improving healthcare
        <br /> through technology
      </p>
    </div>
  );
};

export default Problem;
