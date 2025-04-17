"use client";

import React from "react";

type MarkerProps = {
  left: string;
  top: string;
  label: string;
};

const Marker: React.FC<MarkerProps> = ({ left, top, label }) => {
  return (
    <div className="absolute group cursor-pointer" style={{ left, top }}>
      {/* Fancy pin shape with shadow and glow */}
      <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-full border-[3px] border-white shadow-md shadow-red-300 animate-pulse" />

      {/* Tooltip on hover */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap z-20 hidden group-hover:block">
        <div className="bg-white px-3 py-1 rounded-full font-ppwriter text-black shadow-xl relative transition-all duration-200">
          {label}
          <div className="absolute w-2 h-2 bg-white rotate-45 -bottom-1 left-1/2 -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Marker;
