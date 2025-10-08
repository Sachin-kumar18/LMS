import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-white rounded-4xl h-64">
      <div className="flex flex-col items-center gap-4 pt-8 pb-24 px-8 md:px-0 text-center">
        <h1 className="text-xl md:text-4xl text-gray-800 font-bold max-w-2xl mx-auto">
          Master In-Demand Skills. Start Learning Today.
        </h1>
        <p className="text-gray-500 sm:text-sm max-w-xl mx-auto">
          Access 500+ expert-led courses and personalized learning paths
          designed to accelerate your career growth.
        </p>
        <div className="flex items-center font-medium gap-6 mt-4">
          <button className="px-10 py-3 rounded-md text-white bg-teal-800 hover:bg-teal-900">
            Get Started
          </button>
          <a href="#" className="flex items-center gap-2 text-teal-800 text-[14px] hover:text-teal-900 transition-colors">
            Learn More <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
