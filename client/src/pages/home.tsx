import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Gallery from "@/components/sections/gallery";
import Demo from "@/components/sections/demo";
import GitHub from "@/components/sections/github";
import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-firehawk-primary text-slate-50">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Demo />
      <GitHub />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}
