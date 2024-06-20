import TimeAndShare from '@/components/pages/blogs/blog-item/timeAndShare';
import Blog from '@/lib/models/blog';

type Props = {
  isDetail?: boolean;
  blog?: Blog;
};

const BannerBlog = ({ isDetail, blog }: Props) => {
  return (
    <section
      className={`flex ${
        isDetail ? '' : 'justify-center'
      } relative bg-banner-1 h-[calc(100vh-69px)] xl:h-[calc(100vh-144px)] 2xl:h-[650px] overflow-hidden bg-cover text-[#FFFFFF]`}
      style={{
        background: `url(${blog?.banner ?? '/blogs/backgroundBlog.png'})`,
      }}
    >
      {isDetail ? (
        <div className='flex flex-col justify-center max-w-[1313px] px-[24px] sm:px-[50px] lg:px-[100px]'>
          <TimeAndShare item={blog} theme='dark' />
          <p
            className={`text-[clamp(30px,4vw,64px)] 2xl:text-[64px] min-w-[1/2] font-bold leading-[clamp(36px,5vw,64px)] py-5`}
          >
            {blog?.name}
          </p>
        </div>
      ) : (
        <div className='flex flex-col justify-center'>
          <div
            className={`text-[69px] text-center font-bold py-2 w-[1200px] max-[1000px]:w-[600px]`}
          >
            Talk To Our Local Expert Directly
          </div>
          <div className='text-center font-normal text-[18px] mx-30 py-2'>
            We are a real estate agency that will help you find the best
            residence you dream of, let’s discuss for your dream house?
          </div>
          <div className='flex justify-center py-2'>
            <div
              role='button'
              className='hover:bg-[#015391] transition-all bg-[#0066B3] w-[200px] h-[48px] text-[white] rounded-[8px] flex items-center justify-center'
            >
              <span className='text-[16px] font-semibold'>
                Get Free Advice Now
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BannerBlog;
