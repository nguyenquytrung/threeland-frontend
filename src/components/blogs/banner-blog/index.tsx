import React from "react";

const BannerBlog = () => {
    return (
        <section
        className={`bg-[url('/blogs/backgroundBlog.png')] flex justify-center relative bg-banner-1 h-[calc(100vh-144px)] 2xl:h-[927px] overflow-hidden bg-cover text-[#FFFFFF]`}
      >
        <div className="flex flex-col justify-center">
          <div className={"text-[69px] text-center font-bold py-2"}>
            Talk To Our Local Expert Directly
          </div>
          <div className="text-center font-normal text-[18px] mx-30 py-2">
            We are a real estate agency that will help you find the best
            residence you dream of, let’s discuss for your dream house?
          </div>
          <div className="flex justify-center py-2">
            <div
              role="button"
              className="bg-[#0066B3] w-[200px] h-[48px] text-[white] rounded-[8px] flex items-center justify-center"
            >
              <span className="text-[16px] font-semibold">
                Get Free Advice Now
              </span>
            </div>
          </div>
        </div>
      </section>
    )
}

export default BannerBlog