import React from "react";
import "../App.css";

const Intro = () => {
  return (
    <div className="intro">
      <div class="h-48">
        <p class="lg:text-[56px] md:text-[44px] sm:text-[32px] lg:ml-80 md:ml-60 sm:ml-20 w-1/3 p-6">
          We are at the forefront of AI
        </p>
      </div>

      <div>
        <p class="text-[19.2px] lg:ml-80 md:ml-50 sm:ml-20 w-1/2 p-4 h-28">
          From Conserving Wildlife to Automatically
          <br />
          <span>Generating Caricatures–</span>
          <span class="font-bold">We Do It All</span>
        </p>
      </div>

      <div class="h-40">
        <button
          class=" w-44 bg-black text-white px-3 py-3 mx-1 
        rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black lg:ml-96 md:ml-64 sm:ml-32 p-10"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Intro;
