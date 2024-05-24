import React from "react";

const Index = () => {
  return (
    <section
      className={`px-[600px] bg-[url('/blogs/tour.png')] flex justify-center relative bg-banner-1 h-[calc(100vh-144px)] 2xl:h-[927px] overflow-hidden bg-cover text-[#FFFFFF]`}
    >
      <div className="flex flex-col justify-center">
        <div className="justify-center flex">
          <p className="text-center text-[24px] font-normal backdrop-blur-md bg-white/30 w-[85px]">
            Travel
          </p>
        </div>
        <p className={"text-[69px] text-center font-bold pb-2"}>
          Explore our tours
        </p>
        <p className="text-center font-normal text-[18px] mx-30 py-2">
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </p>
        <div className="flex justify-center py-[20px]">
          <div
            role="button"
            className="bg-[#0066B3] w-[220px] h-[64px] text-[white] rounded-[8px] flex items-center justify-center"
          >
            <span className="text-[20px] font-semibold">Request a tour</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
