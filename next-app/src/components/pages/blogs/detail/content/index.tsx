import LeftContent from '@/components/pages/blogs/detail/content/leftContent';
import RightContent from '@/components/pages/blogs/detail/content/rightContent';
import RelatedTour from '@/components/pages/blogs/related-tour';
import Blog from '@/lib/models/blog';

type Props = {
  blog: Blog,
}

const Index = ({ blog }: Props) => {

  return (
    <>
      <div
        className={`flex gap-10 xl:flex-row flex-col w-full px-[24px] sm:px-[50px] lg:px-[100px] py-10`}
      >
        <LeftContent blog={blog} />
        <RightContent />
      </div>
      <div className=''>
        <RelatedTour />
      </div>
    </>
  );
};

export default Index;
