"use client";
import React, { useEffect, useState } from "react";
import { ArrayBlogs } from "../const";
import Image from "next/image";

import Blog2 from "@/assets/images/blogs/blog2.png";
import Avatar from "@/assets/images/blogs/avt.png";
import Dot from "@/assets/images/blogs/dot.svg";
import Clock from "@/assets/images/blogs/tabler_clock-hour-8.svg";
import Share from "@/assets/images/blogs/Share.svg";

const BlogList = () => {
  const [chooseBlogs, setChooseBlogs] = useState<any>({
    id: 1,
    stt: "01",
    time: "June 28, 2018",
    share: "1k",
    title: "Vietnamese Coffee: Discover the World's Best Coffee",
    content:
      "Tasting coffee in Vietnam is an experience that we highly recommend to our readers. This simple drink is more than simply a source of energy for the day; it is an essential component of Vietnamese culture. The strong but delicious fragrance of freshly brewed coffee can be found on practically every street in Vietnam, whether at roadside vendors or trendy cafés.",
    name: "By: Peter Rowardson",
  });

  const setIdBlogs = (item: any) => {
    setChooseBlogs(item);
  };

  return (
    <div className="h-[470px] flex justify-content mx-[100px] relative">
      <div></div>

      <div className="self-center ml-40 mr-20 mb-10">
        {ArrayBlogs.map((item, index) =>
          index < 3 ? (
            <div
              onClick={() => setIdBlogs(item)}
              key={item.stt}
              className="flex justify-end py-3 w-40"
            >
              {chooseBlogs.id === item.id ? (
                <>
                  <div className="w-[62px] h-[2px] rounded-[5px] bg-[#C4C4C4] self-center mr-6"></div>
                  <div className="text-[#0066B3] text-[32px] font-bold justify-end">
                    {item.stt}
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[62px] h-[2px] rounded-[5px] self-center mr-6"></div>
                  <div className="text=[#6A7373] text-[14px]">{item.stt}</div>
                </>
              )}
            </div>
          ) : null
        )}
      </div>
      <div className="my-10">
        <Image
          src={Blog2}
          alt="see-more"
          className="object-cover w-[max(700px)] h-[379px]"
        />
      </div>
      <div className="flex-1 self-center ml-10">
        <div className="flex ">
          <Image src={Dot} alt="x-mark" className="w-2 h-2 self-center" />
          <Image
            src={Clock}
            alt="x-mark"
            className="w-6 h-6 mx-2 self-center"
          />
          <p className="text-[18px] text-[#6A7373] self-center">
            {chooseBlogs?.time}
          </p>
          <Image src={Dot} alt="x-mark" className="mx-5 w-2 h-2 self-center" />
          <Image src={Share} alt="x-mark" className="w-15 h-15 self-center" />
          <p className="mx-5 text-[18px] text-[#6A7373] self-center">
            {chooseBlogs?.share}
          </p>
        </div>
        <p className="my-5 text-[32px] text-[#212529] font-bold">
          {chooseBlogs?.title}
        </p>
        <p className="text=[16px] text-[#6A7373] leading-[24px]">
          {chooseBlogs?.content}
        </p>
        <div className="h-[1px] bg-[#E5E5E5] my-4" />
        <div className="flex">
          <Image
            src={Avatar}
            alt="see-more"
            className="object-cover w-[40px] rounded-[20px]"
          />
          <p className="self-center text-[#6A7373] px-4 text-[20px]">
            {chooseBlogs?.name}
          </p>
        </div>
      </div>
    </div>
  );
};
export default BlogList;
