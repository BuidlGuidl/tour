"use client";

import React from "react";

type MarkerProps = {
  left: string;
  top: string;
  label: string;
  color?: "green" | "yellow";
};

const Marker: React.FC<MarkerProps> = ({ left, top, label, color = "green" }) => {
  const gradientClasses = {
    green: "from-green-500 to-emerald-500 shadow-green-300",
    yellow: "from-yellow-400 to-amber-500 shadow-yellow-300",
  };

  return (
    <div className="absolute group cursor-pointer" style={{ left, top }}>
      {/* Fancy pin shape with shadow and glow */}
      <div
        className={`w-4 h-4 bg-gradient-to-br ${gradientClasses[color]} rounded-full border-[3px] border-white shadow-md animate-pulse`}
      />

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
