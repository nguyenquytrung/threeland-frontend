'use client'
import React from 'react';

import BlogList from '@/components/blogs/blog-list';
import BannerBlog from '@/components/blogs/banner-blog';
import Tag from '@/components/blogs/tag';
import ViewedArticles from '@/components/blogs/viewed-articles';
import Tour from '@/components/blogs/tour';
import AllArticles from '@/components/blogs/all-articles';
import Categories from '@/components/blogs/categories';
import RelatedTour from '@/components/blogs/related-tour';
import useSize from '@/components/core/hook/useSize';

const Page = () => {
  const windowsize = useSize();
  return (
    <main>
      <BannerBlog />

      <BlogList />

      <Tag />

      <ViewedArticles />

      <Tour />

      <div className={`flex ${windowsize.innerWidth < 1440 ? 'flex-col' : 'mr-10'} mx-[100px] mt-20`}>
        <AllArticles />
        <Categories />
      </div>

      <RelatedTour />
      {/* <Banner
        url='blogs-banner.png'
        defaultForm={false}
        title='Talk to our local expert directly'
        subTitle='We are a real estate agency that will help you find the best residence you dream of, let’s discuss for your dream house?'
      >
        <div
          role='button'
          className='mt-5 text-white h-[48px] w-[201px] rounded-[8px] bg-[rgba(0,102,179,1)] grid place-items-center'
        >
          <span>Get free advice now</span>
        </div>
      </Banner> */}
    </main>
  );
};

export default Page;
