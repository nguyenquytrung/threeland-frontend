import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from './loading';
import ViewedArticles from '@/components/pages/blogs/viewed-articles';
import Helper from '@/lib/utils/helper';
import routes from '@/configs/apiRoutes';

const BlogList = dynamic(() => import('@/components/pages/blogs/blog-list'));
const BannerBlog = dynamic(
  () => import('@/components/pages/blogs/banner-blog'),
  {
    loading: () => <Loading />,
  },
);
const Tag = dynamic(() => import('@/components/pages/blogs/tag'));
const Tour = dynamic(() => import('@/components/pages/blogs/tour'));
const AllArticles = dynamic(
  () => import('@/components/pages/blogs/all-articles'),
);
const Categories = dynamic(() => import('@/components/pages/blogs/categories'));
const RelatedTour = dynamic(
  () => import('@/components/pages/blogs/related-tour'),
);

const getData = async () => {
  try {
    const apiUrl = Helper.apiRoutes(routes?.blogs?.data);
    console.log('API URL:', apiUrl); // Log the API URL to check its correctness

    if (!apiUrl) {
      console.error(
        'API URL is undefined. Check routes.blogs.data and Helper.apiRoutes.',
      );
      throw new Error('Invalid API URL');
    }

    const res = await fetch(apiUrl);

    if (!res.ok) {
      console.error(
        `Error fetching data: ${res.statusText} (status: ${res.status})`,
      );
      throw new Error('Server Error');
    }

    const data = await res.json();

    return {
      highlights: data.highlights ?? [],
      mostViewed: data.mostViewed ?? [],
      list: data.list ?? [],
      categories: data.categories ?? [],
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    // throw error;
  }
};

const Page = async () => {
  const data = await getData();

  return (
    <main>
      <BannerBlog isDetail={false} />

      <BlogList blogs={data?.highlights} />

      <Tag initialList={data?.list} />

      <Suspense fallback={<div>Loading...</div>}>
        <ViewedArticles />
      </Suspense>

      <Tour />

      <AllArticles initialList={data?.list} categories={data?.categories} />

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
