import BlogItem from '@/components/pages/blogs/blog-item';
import TimeAndShare from '@/components/pages/blogs/blog-item/timeAndShare';
import routes from '@/configs/apiRoutes';
import Blog from '@/lib/models/blog';
import Helper from '@/lib/utils/helper';
import Link from 'next/link';

type Props = {
  title?: string;
  data?: Blog[];
};

const getData = async () => {
  const res = await fetch(Helper.apiRoutes(routes.blogs.highlights));
  if (!res.ok) {
    console.log(res.statusText);
    throw new Error('Server Error');
  }
  const data = await res.json();

  return data.mostViewed;
};

const Index = ({ data = [], title = 'Most viewed articles' }: Props) => {
  // const data: Blog[] = await getData();

  return (
    <div className={`min-[1439px]:flex-row flex-col flex`}>
      <div className='bg-[#0066B3] flex-1 pl-[100px] pr-[24px] 2xl:pr-[100px] pt-[50px]'>
        <p className='text-[clamp(30px,3vw,48px)] 2xl:text-[48px] font-bold text-[#FFF]'>
          {title}
        </p>
        {data?.map(
          (item, index) =>
            index > 0 && (
              <Link
                href={`/blogs/${item.slug}`}
                key={item.id}
                className={`xl:flex-row gap-4 flex-col max-[1440px]:items-center flex my-7`}
              >
                <BlogItem
                  item={item}
                  classNameAvt={`w-[276px] h-[216px] object-cover rounded-[8px] min-[1441px]:mr-10`}
                  theme={'dark'}
                  isContent={false}
                />
              </Link>
            ),
        )}
      </div>

      {data[0] && (
        <section
          className={`flex-1 justify-center overflow-hidden text-[#FFFFFF]`}
          style={{
            background: data[0].avatar ? `url(${data[0].avatar ?? ''})` : '',
          }}
        >
          <div
            className={`flex max-[144px]:h-[700px] flex-col justify-end p-20 h-full`}
          >
            <TimeAndShare item={data[0]} theme='dark' size='normal' />
            <Link
              href={data[0] && `/blogs/${data[0].slug}`}
              className='text-[36px] font-medium cursor-pointer hover:underline'
            >
              {data[0].name}
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  let data = [];
  try {
    data = await getData();
  } catch (error) {
    console.error('Error fetching data');
  }
  return {
    props: { data },
  };
}

export default Index;
