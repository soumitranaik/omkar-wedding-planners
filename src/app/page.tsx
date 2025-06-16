import { HeroSectionOne } from "@/components/Herobanner";
import { Testimonials } from "@/components/Testimonials";
import { WeddingFeatures } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { FloatingButtons } from "@/components/Floating";
import { SuccessStories } from "@/components/SuccessStories";

export default function Home() {
  return (
    <main>
      <HeroSectionOne />
      <WeddingFeatures />
      <Gallery />
      <SuccessStories />
      <Testimonials />
      <Location />
      <FloatingButtons />
    </main>
  );
}