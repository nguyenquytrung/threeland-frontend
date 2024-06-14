import Image from "next/image";
import React from "react";
import TimnelineIcon from "@/assets/images/timelineIcon.svg";
import hotelIcon from "@/assets/images/hotel.svg";
import mealsIcon from "@/assets/images/meals.svg";
import Link from "next/link";

const TimelineStep = ({ tour }) => {
  const {
    id,
    date,
    image,
    title,
    content,
    meals,
    hotel,
    hotelContent,
    mealsContent,
  } = tour;
  return (
    <>
      <li className="mb-10 ms-6">
        <input
          type="radio"
          name="accordion"
          id={`tour${id}`}
          className="hidden"
        />
        <label htmlFor={`tour${id}`} className="cursor-pointer block">
          <div
            className=" mt-[15px] absolute flex items-center justify-center bg-blue-100 rounded-full -start-3 ring-8 ring-white"
          >
            <Image src={TimnelineIcon} alt="" />
          </div>
          <div className="flex items-center mb-1 px-[10px] py-[13px] bg-[#F3F3F3] rounded-[4px]">
            <span className="text-[18px]  px-[6px] rounded-[4px] gap-[10px] bg-[#0066B3] text-white">
              {date}
            </span>
            <h3 className="ml-2 text-[18px] font-medium">{title}</h3>
          </div>
        </label>
        <div className="content">
          <Image
            src={image}
            alt=""
            layout="responsive"
            className="rounded-[8px]"
          />
          <p className=" mt-2 text-[#394445] text-[20px] leading-[32px]">
            {content}
          </p>
          <div className="flex items-center mt-5 ml-[1.5px]">
            <Image src={hotelIcon} alt="hotel" />
            <p className="ml-2 text-[20px]">{hotel}</p>
            <Link
              className="ml-2 text-[20px] font-bold text-[#0066B3]"
              href="/"
            >
              {hotelContent} 
            </Link>
          </div>
          <div className="flex items-center">
            <Image src={mealsIcon} alt="meals" />
            <p className="ml-2 text-[20px]">{meals}</p>
            <Link
              className="ml-2 text-[20px] font-bold text-[#0066B3]"
              href={"/"}
            >
              {mealsContent}
            </Link>
          </div>
        </div>
      </li>
    </>
  );
};

export default TimelineStep;
