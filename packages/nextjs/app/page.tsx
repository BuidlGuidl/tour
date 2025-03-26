import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "200vh",
        margin: 0,
        padding: 0,
        position: "relative",
      }}
    >
      <Image
        src="/tour.png"
        alt="Ethereum on Tour"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "top",
        }}
        priority
      />
    </div>
  );
}
