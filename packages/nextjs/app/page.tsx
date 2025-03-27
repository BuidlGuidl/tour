import Image from "next/image";
import { Header } from "~~/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <Image src="/assets/airship.png" alt="Airship" width={1000} height={1000} className="" />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold">Ethereum on Tour</h1>
            <p className="py-6">Learn, build, and thrive on Ethereum.</p>
            <button className="btn btn-primary">Follow our next dates ↓</button>
          </div>
        </div>
      </div>
    </>
  );
}
