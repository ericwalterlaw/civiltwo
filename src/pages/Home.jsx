import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import ServicesPreview from "../components/sections/ServicesPreview";
import FeaturedProject from "../components/sections/FeaturedProjects";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Stats />
      <ServicesPreview />
      <FeaturedProject />
    </div>
  );
}