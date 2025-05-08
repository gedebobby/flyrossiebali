import { About } from "@/components/about/About";
import { AboutSecond } from "@/components/about/AboutSecond";
import { AboutThird } from "@/components/about/AboutThird";
import { Hero } from "@/components/hero";
import { Package } from "@/components/package";
import { Service } from "@/components/service";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <AboutSecond />
      <Package />
      <Service />
      <AboutThird />
    </>
  );
}
