import BlogList from '@/components/pages/blogs/blog-list';
import BannerBlog from '@/components/pages/blogs/banner-blog';
import Tag from '@/components/pages/blogs/tag';
import ViewedArticles from '@/components/pages/blogs/viewed-articles';
import Tour from '@/components/pages/blogs/tour';
import AllArticles from '@/components/pages/blogs/all-articles';
import RelatedTour from '@/components/pages/blogs/related-tour';
import Helper from '@/lib/utils/helper';
import routes from '@/configs/apiRoutes';
import { Suspense } from 'react';

const getData = async () => {
  const res = await fetch(Helper.apiRoutes(routes.blogs.data));
  if (!res.ok) {
    console.log(res.statusText);
    throw new Error('Server Error');
  }
  const data = await res.json();

  return {
    highlights: data.highlights,
    mostViewed: data.mostViewed,
    list: data.list,
    categories: data.categories ?? [],
  };
}

const Page = async () => {
  const data = await getData();

  return (
    <main>
      <BannerBlog isDetail={false} />

      <BlogList blogs={data.highlights} />

      <Tag initialList={data.list} />

      <Suspense fallback={<div>Loading...</div>}>
        <ViewedArticles />
      </Suspense>

      <Tour />

      <AllArticles initialList={data.list} categories={data.categories} />

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
