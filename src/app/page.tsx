import React from "react";
import Hero from "./routes/hero/page";
import ThemeSection from "./routes/theme-section/page";
import Gallery from "./routes/gallery/page";
import Testimonies from "./routes/testimonies/page";
import About from "./routes/about/page";
import Footer from "./components/general/Footer";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ThemeSection />
      <Gallery />
      <Testimonies />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
