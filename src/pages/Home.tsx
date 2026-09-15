import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <About />
      <CTA />
    </>
  );
}