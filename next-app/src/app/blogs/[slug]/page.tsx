import BannerBlog from '@/components/pages/blogs/banner-blog';
import Content from '@/components/pages/blogs/detail/content';
import routes from '@/configs/apiRoutes';
import Blog from '@/lib/models/blog';
import Helper from '@/lib/utils/helper';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog: Blog = await getData(params.slug);

  return {
    title: blog.meta_title,
    applicationName: 'Threeland Travel',
    description: blog.meta_description,
    keywords: blog.meta_keyword,
  }
}

const getData = async (slug: string) => {
  const res = await fetch(Helper.apiRoutes(routes.blogs.detail + slug), {
    next: {
      revalidate: 60 * 10
    }
  });
  if (!res.ok) {
    console.log(res.statusText);
    throw new Error('Server Error');
  }
  return res.json();
}

const Index = async ({ params }: { params: { slug: string } }) => {

  const blog: Blog = await getData(params.slug);

  return (
    <main>
      <BannerBlog isDetail={true} blog={blog} />

      <Content blog={blog} />
    </main>
  );
};

export default Index;
