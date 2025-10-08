import React from "react";
import SearchBar from "./SearchBar";
import heroIllustration from "../../assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 lg:px-24 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left text area */}
          <div className="w-1/2">
            <h1 className="leading-tight font-bold text-3xl sm:text-4xl md:text-5xl">
              <span className="text-teal-800">Master Your Future.</span>
              <span className="block text-gray-900 whitespace-nowrap">Expert-Led Courses, Unlocked.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Gain in-demand skills with personalized learning paths and a global
              network of educators.
            </p>

            <div className="mt-8 max-w-2xl">
              <SearchBar/>
            </div>
          </div>

          {/* Right illustration */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={heroIllustration}
              alt="Hero illustration"
              className="w-90 max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
