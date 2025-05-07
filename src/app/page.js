import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-[200vh]">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, itaque!</p>
      </div>
    </>
  );
}
