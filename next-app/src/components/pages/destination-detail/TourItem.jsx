import React from "react";
import Adress from "@/assets/images/adress.svg";
import Clock from "@/assets/images/Clock-black.svg";
import Star from "@/assets/images/star.svg";
import ArrowWhite from "@/assets/images/ArrowWhite.svg";
import ImageTour from "@/assets/images/ImageTour.jpg";
import Image from "next/image";

const TourItem = () => {
  return (
    <div className=" mt-2 rounded-xl bg-[#f7f7f7] text-black">
      <div className="p-[15px] pb-[27px] overflow-hidden">
        <p className="font-bold text-[22px]">xin chaof</p>
        <div className="flex pt-6 text-[16px] font-semibold text-[#6A7373]">
          <Image className="w-[24px] h-auto mr-2 mb-auto" src={Adress} alt="" />
          Saigon – Mekong Delta – Hoi An – Hue – Hanoi – Sapa – Halong Bay
        </div>
        <div className="flex justify-between mt-5">
          <div className="flex">
            <div className="mr-2">
             <Image src={Clock} alt=""/>
            </div>
            <p className="font-semibold">8 day 9 night</p>
          </div>
          <div className="flex">
            <div>
             <Image src={Star} alt="" className="mr-1" />
            </div>
            <div className="flex">
              <p className="mr-1">4.7</p>
              <p className="text-[#707070]"> (3454 reviews)</p>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-3">
          <p className="font-bold text-[36px] mr-2">$150</p>
          <p className="text-[18px] text-[#707070]">$320/d</p>
        </div>
        <div className="relative">
          <Image src={ImageTour} alt="" className="rounded-xl" />
          <div className="bg-[#0066B3]
          border-[10px] border-[#f7f7f7]
           absolute bottom-0 left-[50%]
           translate-x-[-50%] translate-y-[50%]
           box-content size-[50px] flex items-center justify-center rounded-[50%]">
            <Image src={ArrowWhite} className="size-5" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourItem;
