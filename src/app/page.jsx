import BannerSection from "@/components/CTA/BannerSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import PopularCoursesSection from "@/components/PopularCoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection></HeroSection>
        <FeaturesSection></FeaturesSection>
        <PopularCoursesSection></PopularCoursesSection>
        <TestimonialsSection></TestimonialsSection>
        <BannerSection></BannerSection>
      </div>
    </main>
  );
}
