"use client";

import React from "react";

type MarkerProps = {
  left: string;
  top: string;
  label: string;
  sublabel?: string;
  color?: "green" | "yellow" | "blue";
};

const Marker: React.FC<MarkerProps> = ({ left, top, label, sublabel, color = "green" }) => {
  const colorClasses = {
    green: "bg-[#90fc90]",
    yellow: "bg-[#fff97f]",
    blue: "bg-[#90caf9]",
  };

  return (
    <div className="absolute group cursor-pointer" style={{ left, top }}>
      {/* Fancy pin shape with shadow and glow */}
      <div
        className={`w-3 h-3 ${colorClasses[color]} rounded-full border-[1px] border-[#886e4d] shadow-sm shadow-[#a2845ed6]`}
      />

      {/* Tooltip on hover */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap z-20 hidden group-hover:block">
        <div
          className="bg-[#faf1e5] px-3 py-1 rounded-full font-ppwriter text-[#614c31] shadow-md border-[1.3px] border-[#886e4d] shadow-[#886f4eb7] relative transition-all duration-200 
          after:content-[''] after:absolute after:w-2 after:h-2 after:bg-[#faf1e5] after:rotate-45 after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:border-[1.3px] after:border-[#886e4d] after:border-t-0 after:border-l-0"
        >
          <div className="text-center">{label}</div>
          {sublabel && <div className="text-[#a2845e] px-3 -mt-1 pb-1text-sm text-center">{sublabel}</div>}
        </div>
      </div>
    </div>
  );
};

export default Marker;
