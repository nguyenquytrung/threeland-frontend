import React, { useState } from "react";

import BlogList from "@/components/blogs/blog-list";
import BannerBlog from "@/components/blogs/banner-blog";
import Tag from "@/components/blogs/tag";
import ViewedArticles from "@/components/blogs/viewed-articles";
import Tour from "@/components/blogs/tour";
import AllArticles from "@/components/blogs/all-articles";
import Categories from "@/components/blogs/categories";

const Page = () => {
  return (
    <main>
      <BannerBlog />

      <BlogList />

      <Tag />

      <ViewedArticles />

      <Tour />

      <div className="flex mx-[100px] mt-20">
        <AllArticles /> 
        <Categories />
      </div>      
    </main>
  );
};

export default Page;
