import React from "react";
import Image from "next/image";

import Blog2 from '@/assets/images/blogs/blog2.png'

const Page = () => {
  return (
    <main>
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
      <div className="h-[470px] flex justify-content mx-[100px]">
        <div className="self-center ml-40 mr-20">
          <div className="flex justify-end py-3">
            <div className="w-[62px] h-[2px] rounded-[5px] bg-[#C4C4C4] self-center mr-6"></div>
            <div className="text-[#0066B3] text-[32px] font-bold justify-end">01</div>
          </div>
          <div className="flex justify-end py-3">
            <div className="w-[62px] h-[2px] rounded-[5px] self-center mr-6"></div>
            <div className="justify-end">02</div>
          </div>
          <div className="flex justify-end py-3">
            <div className="w-[62px] h-[2px] rounded-[5px] self-center mr-6"></div>
            <div >03</div>
          </div>
        </div>
        <div className="">
          <Image src={Blog2} alt='see-more' className="w-[700px] my-10" />
        </div>
        <div className="flex-1">zxcxzcxz</div>
      </div>
    </main>
  );
};

export default Page;
