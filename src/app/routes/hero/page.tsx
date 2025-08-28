import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-gray-50" id="hero">
      <div className="flex flex-col justify-center px-6 py-12 lg:px-16 lg:w-1/2 max-w-lg mx-auto lg:mx-0 z-10 bg-gray-50 lg:bg-transparent items-center">
        <div className="mb-4">
          <Badge className="text-blue-600 font-bold text-lg animate-bounce">
            YTMC
          </Badge>
        </div>
        <h1 className="text-5xl md:text-[52px] font-extrabold text-primary mb-2 text-center">
          YouTeen Mini Conference 5.0
        </h1>
        <h3 className="text-xl md:text-3xl font-semibold text-amber-300 mb-4 text-center lg:text-left">
          The Standing One
        </h3>
        <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed text-center lg:text-left">
          Standing firm in faith, embracing sexual purity, and
          stepping into God’s divine purpose for your life.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button className=" hover:bg-indigo-700/60 cursor-pointer text-xl text-white font-semibold px-6 py-5 rounded shadow">
            Stand with Us – Register Now!
          </Button>
        </div>
      </div>

      {/* Image section: background on large, featured image on smaller */}
      <div className="relative w-full lg:w-1/2 h-72 sm:h-96 lg:h-full background-image">
        {/* On smaller screens, also show image as <Image> for better loading or SEO if needed */}
        <div className="block lg:hidden w-full h-full">
          <Image
            src="/hero.jpg"
            alt="hero"
            layout="fill"
            objectFit="cover"
            className="rounded-b-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
