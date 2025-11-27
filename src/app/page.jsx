import FeaturesSection from "@/Components/FeaturesSection";
import HeroSection from "@/Components/HeroSection";
import PopularCoursesSection from "@/Components/PopularCoursesSection";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <div>
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <PopularCoursesSection></PopularCoursesSection>
    </div>
   </main>
  );
}
