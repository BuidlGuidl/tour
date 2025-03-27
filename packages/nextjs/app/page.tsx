import Image from "next/image";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -top-[20px]">
        <Image
          src="/assets/background.png"
          alt="Background"
          fill
          className="object-cover object-top"
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
              <h1 className="text-6xl lg:text-7xl font-bold text-white">Ethereum on Tour</h1>
              <p className="py-6 text-gray-300">Learn, build, and thrive on Ethereum.</p>
              <button className="btn btn-primary">Follow our next dates ↓</button>
            </div>
          </div>
        </div>

        {/* New Map Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-center mb-10">Our Tour Locations</h2>
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
      </div>
    </div>
  );
}
