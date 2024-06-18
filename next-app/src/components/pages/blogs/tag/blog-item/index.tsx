import Image from 'next/image';

import TimeAndShare from '@/components/pages/blogs/blog-item/timeAndShare';
import Blog from '@/lib/models/blog';

type Props = {
  item: Blog,
  classNameAvt?: string,
  theme?: string,
  isContent?: boolean,
}

const Index = ({
  item,
  classNameAvt,
  theme = 'light',
  isContent = true,
}: Props) => {
  return (
    <>
      <Image
        src={item?.avatar ?? ''}
        alt='see-more'
        width={500}
        height={500}
        className={`object-cover min-[945px]:w-[clamp(500px,38vw,700px)] rounded-[8px] mr-[clamp(1rem,2vw,2.5rem)] ${classNameAvt}`}
      />
      <div className='flex-1 self-center mt-5 min-[945px]:max-w-[670px]'>
        <TimeAndShare item={item} theme={theme} />
        <p
          className={`hover:underline my-5 text-[clamp(18px,2vw,24px)] text-[${
            theme === 'dark' ? '#FFF' : '#6A7373'
          }] font-bold`}
        >
          {item?.name}
        </p>
        {isContent ? (
          <p
            className={`line-clamp-[3] text-[16px] text-[${
              theme === 'dark' ? '#FFF' : '#6A7373'
            }] leading-[24px]`}
          >
            {item?.description}
          </p>
        ) : null}
        {/* <div
          style={{
            backgroundColor: theme === 'dark' ? '#f3f3f3' : '#E5E5E5',
          }}
          className={`h-[1px] my-4`}
        /> */}
        {/* <AvatarInfo image={Avatar} name={item.name} theme={theme} /> */}
      </div>
    </>
  );
};

export default Index;
