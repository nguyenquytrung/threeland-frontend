"use client";
import React, { useEffect, useState } from "react";
import { ArrayBlogs } from "../const";
import Image from "next/image";

import post1 from '@/assets/images/blogs/post1.png';

import BlogItem from '@/components/blogs/blog-item';

const BlogList = () => {
  const [chooseBlogs, setChooseBlogs] = useState<any>({
    id: 1,
    stt: "01",
    time: "June 28, 2018",
    share: "1k",
    title: "Vietnamese Coffee: Discover the World's Best Coffee",
    content:
      "Tasting coffee in Vietnam is an experience that we highly recommend to our readers. This simple drink is more than simply a source of energy for the day; it is an essential component of Vietnamese culture. The strong but delicious fragrance of freshly brewed coffee can be found on practically every street in Vietnam, whether at roadside vendors or trendy cafés.",
    name: "Peter Rowardson",
    image: post1
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
      <div className="py-10 flex"><BlogItem item={chooseBlogs} /></div>
    </div>
  );
};
export default BlogList;
