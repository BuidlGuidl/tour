"use client";

import { useCallback } from "react";
import Image from "next/image";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";

export default function Home() {
  const scrollToEvents = useCallback(() => {
    document.getElementById("events-section")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -top-[20px] bg-[#FFE7B5]">
        <Image
          src="/assets/background.png"
          alt="Background"
          fill
          className="object-contain object-top"
          priority
          sizes="100vw"
          quality={100}
        />
      </div>
      <div className="relative z-10">
        <Header />
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="lg:w-1/2">
              <Image
                src="/assets/airship.png"
                alt="Airship"
                width={1000}
                height={1000}
                className=""
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="lg:w-1/2">
              <h1 className="text-6xl lg:text-7xl font-bold text-black">Ethereum on Tour</h1>
              <p className="py-6 text-black">Learn, build, and thrive on Ethereum.</p>
              <button className="btn btn-primary bg-sky-200 hover:bg-sky-300 border-none" onClick={scrollToEvents}>
                Follow our next dates ↓
              </button>
            </div>
          </div>
        </div>

        {/* New Map Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-center mb-10">Upcoming Locations</h2>
            <div className="relative w-full max-w-4xl">
              <Image
                src="/assets/map.png" // Add your map image to public/assets/
                alt="Tour Map"
                width={1200}
                height={800}
                className="w-full h-auto"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div id="events-section" className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-12">Next events:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="rounded-[24px] overflow-hidden bg-white shadow-lg">
              <div className="p-6 bg-sky-200 rounded-t-[24px]">
                <div className="text-xl">Jan 25</div>
                <h3 className="text-2xl font-bold">SpeedrunEthereum</h3>
                <p className="text-gray-700">Denver University, Denver, CO</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  We&apos;ll be at Denver University giving a talk and workshop introducing speedrunethereum.com, and
                  we&apos;ll run through the first challenge together.
                </p>
                <button className="bg-sky-200 text-gray-800 px-6 py-2 rounded-[32px] hover:bg-sky-300 transition-colors">
                  Read more
                </button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="rounded-[24px] overflow-hidden bg-white shadow-lg">
              <div className="p-6 bg-sky-200 rounded-t-[24px]">
                <div className="text-xl">Jan 25</div>
                <h3 className="text-2xl font-bold">SpeedrunEthereum</h3>
                <p className="text-gray-700">Denver University, Denver, CO</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  We&apos;ll be at Denver University giving a talk and workshop introducing speedrunethereum.com, and
                  we&apos;ll run through the first challenge together.
                </p>
                <button className="bg-sky-200 text-gray-800 px-6 py-2 rounded-[32px] hover:bg-sky-300 transition-colors">
                  Read more
                </button>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="rounded-[24px] overflow-hidden bg-white shadow-lg">
              <div className="p-6 bg-sky-200 rounded-t-[24px]">
                <div className="text-xl">Jan 25</div>
                <h3 className="text-2xl font-bold">SpeedrunEthereum</h3>
                <p className="text-gray-700">Denver University, Denver, CO</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  We&apos;ll be at Denver University giving a talk and workshop introducing speedrunethereum.com, and
                  we&apos;ll run through the first challenge together.
                </p>
                <button className="bg-sky-200 text-gray-800 px-6 py-2 rounded-[32px] hover:bg-sky-300 transition-colors">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
