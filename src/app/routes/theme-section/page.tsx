import Image from "next/image";
import React from "react";

const ThemeSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-white px-6 md:px-12 py-16 max-w-7xl mx-auto">
      {/* Text container */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <div className="flex flex-col gap-0 mb-12">
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-snug">
            The Standing One
          </h1>
          <p className="text-lg italic text-muted-foreground md:text-2xl capitalize max-w-xl mx-auto lg:mx-0">
            ...called to be separated{" "}
          </p>
        </div>
        <div>
          <span className="text-primary tracking-wider text-xl font-semibold">
            2 Chronicles 7:16, 1 Peter 2:9
          </span>
        </div>
      </div>

      {/* Image container */}
      <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
        <Image
          src="/ytmc5.png"
          alt="theme"
          width={380} // reduced size
          height={380}
          className="object-contain rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  );
};

export default ThemeSection;
