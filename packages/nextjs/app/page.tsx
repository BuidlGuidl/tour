"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import EventCard from "../components/EventCard";
import Marker from "../components/Markers";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const textColor = "text-[#392b18]";

  const scrollToEvents = useCallback(() => {
    document.getElementById("events-section")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -top-[75px] bg-[#FFE7B5]">
        <Image
          src="/assets/background.png"
          alt="Background"
          fill
          className="hidden md:block object-contain object-top"
          priority
          sizes="100vw"
          quality={100}
        />
        <Image
          src="/assets/mobile-bg.png"
          alt="Background Mobile"
          fill
          className="block md:hidden object-contain object-top"
          priority
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="hero min-h-[90vh] px-6">
          <div
            className="hero-content flex-col lg:flex-row-reverse lg:ml-10 transition-transform duration-1000 ease-out"
            style={{
              transform: `translateY(${scrollY * -0.05}px)`,
            }}
          >
            <div className="lg:w-2/3">
              <Image
                src="/assets/airship-2.png"
                alt="Airship"
                width={1200}
                height={1200}
                className=""
                sizes="(max-width: 1000px) 100vw, 50vw"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="mb-4">
                <Image src="/assets/eth-symbol.svg" alt="Ethereum Logo" width={40} height={40} />
              </div>
              <h1 className={`text-6xl lg:text-7xl font-bold ${textColor}`}>
                Ethereum <br /> on Tour
              </h1>
              <p className={`py-3 text-xl ${textColor}`}>Bringing Ethereum curriculum, tools, and mentorship to you!</p>
              <button
                className="bg-sky-200 hover:bg-sky-300 border-[1.3px] border-[#55452f] ${textColor} px-6 py-2 rounded-[32px] font-ppwriter font-normal"
                onClick={scrollToEvents}
              >
                Follow our next dates ↓
              </button>
            </div>
          </div>
        </div>

        {/* New Map Section */}
        <div className="container mx-auto px-6 lg:py-20 py-10">
          <div className="flex flex-col items-center">
            <h2 className={`text-4xl font-bold text-center mb-10 ${textColor}`}>Upcoming Locations</h2>
            <div
              className="relative w-full max-w-4xl transition-transform duration-1000 ease-out"
              style={{
                transform: `translateY(${scrollY * -0.03}px)`,
              }}
            >
              <Image
                src="/assets/map.png"
                alt="Tour Map"
                width={1200}
                height={800}
                className="w-full h-auto mt-5"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              {/* Small Airship */}
              <div
                className="absolute bottom-22 lg:bottom-3 right-5 w-24 lg:w-32 transition-transform duration-1000 ease-out"
                style={{
                  transform: `translateY(${scrollY * -0.15}px)`,
                }}
              >
                <Image
                  src="/assets/airship-3.png"
                  alt="Small Airship"
                  width={240}
                  height={240}
                  className="w-full h-auto"
                />
              </div>

              {/* Map Markers */}
              <Marker left="24%" top="39%" label="Lawrence" />
              <Marker left="22%" top="38%" label="Boulder" />
              <Marker left="46.5%" top="35.5%" label="Oxford" />
              <Marker left="20%" top="41%" label="Los Angeles" />
              <Marker left="75%" top="47%" label="Taipei" />
              <Marker left="50.5%" top="36.9%" label="Prague" sublabel="ethPrague" />
              <Marker left="19.2%" top="42%" label="San Francisco" />
              <Marker left="30.3%" top="39.5%" label="New York" />
              <Marker left="31.5%" top="38.3%" label="Boston" />
              <Marker left="48.5%" top="39.3%" label="Cannes" />
              <Marker left="24.3%" top="43.7%" label="Austin" />
              <Marker left="49.7%" top="37%" label="Munich" />
              <Marker left="65.3%" top="46.7%" label="New Delhi" />
              <Marker left="49.8%" top="35.8%" label="Berlin" />
              <Marker left="53.2%" top="38.7%" label="Romania" color="yellow" />
              <Marker left="28.8%" top="39.5%" label="Pittsburgh" />
              <Marker left="34.5%" top="59%" label="Brazil" />
              <Marker left="52%" top="36%" label="Warsaw" />
              <Marker left="52.2%" top="39%" label="Belgrade" color="yellow" />
              <Marker left="19%" top="41%" label="UC Berkeley" />
              <Marker left="32%" top="69%" label="Argentina" />
              <Marker left="19.3%" top="37.4%" label="Seattle" color="yellow" />
              <Marker left="26.7%" top="39.4%" label="Chicago" color="yellow" />
              <Marker left="26.6%" top="40.5%" label="Urbana-Champaign" color="yellow" />
              <Marker left="28%" top="39.2%" label="Ann Arbor" color="yellow" />
              <Marker left="68.2%" top="46.5%" label="Bhutan" color="yellow" />
              {/* Added 05/23/2025 */}
              <Marker
                left="23.7%"
                top="47.7%"
                label="Mexico City"
                sublabel="National Autonomous University of Mexico"
              />
              <Marker left="30.3%" top="53.5%" label="Bogotá" sublabel="Xavierian Pontifical University" />
              <Marker left="49.4%" top="38.9%" label="Milan" sublabel="Bocconi University" />
              <Marker left="51.6%" top="37.4%" label="Brno University of Technology" />
              <Marker left="67%" top="47.2%" label="Dhanbadh" sublabel="Indian Institute of Technology" />
              <Marker left="71%" top="54.8%" label="Singapore" />
              <Marker left="48.6%" top="38.3%" label="Lausanne" sublabel="Swiss Federal Technology Institute" />
            </div>
            {/* Map legend */}
            <div className="flex flex-col items-center mt-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#fff97f] rounded-full border-[1.3px] border-[#886e4d] shadow-sm shadow-[#a2845ed6]"></div>
                  <span className={`${textColor} font-ppwriter`}>Possible locations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#90fc90] rounded-full border-[1.3px] border-[#886e4d] shadow-sm shadow-[#a2845ed6]"></div>
                  <span className={`${textColor} font-ppwriter`}>We&apos;ll be there!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div id="events-section" className="container mx-auto px-6 py-12 mb-16 flex flex-col items-center">
          <h2 className={`text-4xl font-bold mb-12 font-ppwriter ${textColor}`}>Next events:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              date="Mar 9"
              title="Virtual Office Hours"
              location="Kansas University Blockchain Club"
              description="Open office hours on Zoom with the KU Blockchain Club."
            />
            <EventCard
              date="Apr 1"
              title="Speedrun Ethereum Workshop"
              location="ETHTaipei"
              description="We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting."
            />
            <EventCard
              date="Apr 16"
              title="In-Person Office Hours"
              location="Colorado University Boulder"
              description="Open office hours IRL at CU Boulder."
            />
            <EventCard
              date="Apr 22"
              title="Virtual Speedrun Ethereum Workshop"
              location="University of Illinois, Urbana-Champaign"
              description="We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting."
            />
            <EventCard
              date="Apr 24"
              title="Virtual Speedrun Ethereum Workshop"
              location="University of Southern California"
              description="We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting."
            />
            <EventCard
              date="Apr 25"
              title="Virtual Speedrun Ethereum Workshop"
              location="Oxford University"
              description="We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting."
            />
            {/* Added 05/23/2025 */}
            <EventCard
              date="May 15"
              title="Virtual Speedrun Ethereum Workshop"
              location="National Autonomous University of Mexico"
              description="We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting."
            />
            <EventCard
              date="May 22"
              title="Virtual Office Hours"
              location="Xavierian Pontifical University"
              description="Open office hours on Zoom."
            />
            <EventCard
              date="May 27-29"
              title="Speedrun Ethereum Workshop"
              location="ETHPrague"
              description="We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting."
            />
            <EventCard
              date="May 29"
              title="Speedrun Ethereum Workshop"
              location="CTU Prague"
              description="We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting."
            />
            <EventCard
              date="June 5"
              title="Virtual Speedrun Ethereum Workshop"
              location="Swiss Federal Technology Institute of Lausanne"
              description="We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting."
            />
            <EventCard
              date="June 7"
              title="Virtual Office Hours"
              location="Bocconi University"
              description="Open office hours on Zoom."
            />
            <EventCard
              date="June 10"
              title="Virtual Office Hours"
              location="Brno University of Technology"
              description="Open office hours on Zoom."
            />
            <EventCard
              date="June 10"
              title="Virtual Speedrun Ethereum Workshop"
              location="Indian Institute of Technology Dhanbadh"
              description="We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting."
            />
            <EventCard
              date="June 11"
              title="Virtual Speedrun Ethereum Workshop"
              location="Singapore"
              description="We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting."
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center text-center px-6 py-12 mb-16 bg-[#f7d998]">
          <h2 className={`text-4xl font-bold mb-3 font-ppwriter ${textColor}`}>🗺️ Coming soon to your university</h2>
          <p className={`text-xl ${textColor} mb-8`}>
            We are traveling all over the world to bring Ethereum education to you!
          </p>
          <a
            href="https://cryptpad.fr/form/#/2/form/view/RQme15gwpaycGeocic47okNWlJj6q-FcxVwL7gKncXI/"
            className="btn-lg w-40 bg-sky-200 hover:bg-sky-300 border-[1.3px] border-[#55452f] ${textColor} rounded-[32px] font-ppwriter font-normal inline-flex items-center justify-center"
          >
            Sign up!
          </a>
          <p className={`${textColor} text-lg`}>
            Or email us at{" "}
            <a href="mailto:university@ethereum.foundation" className="underline">
              university@ethereum.foundation
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
