

import type { Metadata } from "next";

import { HomeHeaderSection, HomeHeroSection, JoinRMPFamilySection} from "@/components/sections/home";

export const metadata: Metadata = {
  title: "ratemyprofessors | Home",
  description: "ratemyprofessors home page"
}



export default function Page() {
  return (
      <>
      <HomeHeaderSection />
      <HomeHeroSection />
      <JoinRMPFamilySection />
      </>
  );
}
