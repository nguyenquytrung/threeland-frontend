import React, { useState } from "react";

import BlogList from "@/components/blogs/blog-list";
import BannerBlog from "@/components/blogs/banner-blog";
import Tag from "@/components/blogs/tag";

const Page = () => {
  return (
    <main>
      <BannerBlog />

      <BlogList />

      <Tag />
    </main>
  );
};

export default Page;
