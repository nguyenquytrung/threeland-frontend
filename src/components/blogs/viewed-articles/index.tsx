"use client";

import { url } from "inspector";
import { ArrayBlogs } from "../const";

import BlogItem from "@/components/blogs/blog-item";

import TimeAndShare from '@/components/blogs/blog-item/timeAndShare'

const Index = () => {
  return (
    <div className="flex h-[930px]">
      <div className="bg-[#0066B3] flex-1 px-[100px] pt-[50px]">
        <p className="text-[48px] font-bold text-[#FFF]">
          Most viewed articles
        </p>
        {ArrayBlogs.map(
          (item, index) =>
            index < 3 && (
              <div key={item.id} className="flex my-7">
                <BlogItem
                  item={item}
                  classNameAvt="w-[276px] h-[216px] object-cover rounded-[8px]"
                  theme={'dark'}
                  isContent={false}
                />
              </div>
            )
        )}
      </div>

      <section
        className={`bg-[url('/blogs/bg.png')] flex-1 justify-center overflow-hidden text-[#FFFFFF]`}
      >
        <div className="flex flex-col justify-end p-20 h-full">
          <TimeAndShare item={ArrayBlogs[0]} theme='dark' size='normal' />
          <p className="text-[36px] font-medium">Interesting Facts About Hanoi You Probably Didn&apos;t Know!</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
