"use client";
import { useState } from "react";
import { ArrayBlogs, arrayTags } from "../const";
import Image from "next/image";

import ArrowDown from "@/assets/images/blogs/arrow_left_alt.svg";

import BlogItem from '@/components/blogs/blog-item';

const Tag = () => {
  const [chooseBlogs, setChooseBlogs] = useState<any>({
    id: 1,
    stt: "01",
    time: "June 28, 2018",
    share: "1k",
    title: "Vietnamese Coffee: Discover the World's Best Coffee",
    content:
      "Coffee in Vietnam is more than simply a drink; it is a way of life. So, if you want to visit this lovely nation, you will encounter this style of life....",
    name: "By: Peter Rowardson",
  });

  const [tag, setTag] = useState({
    id: 1,
    name: "All",
  });

  const setTagChoose = (item: any) => {
    setTag(item);
  };

  const page = Math.floor(arrayTags.length / 4) + 1;

  return (
    <div className="mx-[100px]">
      <p className="text-[48px] font-bold text-[#071516]">
        Ultimate Travel Guides In Indochina
      </p>
      <div className="flex mt-4 mb-7">
        {arrayTags.map((item, index) => (
          <p
            onClick={() => setTagChoose(item)}
            className={`border-[${
              tag.id === item.id ? "#0066B3" : "#9CA1A2"
            }] mr-3 text-[${
              tag.id === item.id ? "#FFFFFF" : "#9CA1A2"
            }] rounded-[5px] border-[1px] px-4 py-1 bg-[${
              tag.id === item.id ? "#0066B3" : "#ffffff"
            }] cursor-pointer`}
            key={`${item.id}${index}`}
          >
            {item.name}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-10 auto-rows-max">
        {ArrayBlogs.map((item, index) => (
          <div key={item.id} className="py-10">
            <BlogItem item={item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center m-4 my-20">
        <div className="flex border-[1px] px-5 py-3 border-[#E6E8E8] rounded-[8px] cursor-pointer">
          <p className="text-center text-[18px]">View more</p>
          <Image
            src={ArrowDown}
            alt="x-mark"
            className="w-3 h-3 mx-2 self-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Tag;
