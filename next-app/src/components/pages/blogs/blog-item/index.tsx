"use client";
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
        src={item.avatar ?? ''}
        alt='see-more'
        className={
          classNameAvt ||
          'object-cover min-[945px]:w-[clamp(500px,38vw,700px)] h-[379px] rounded-[8px] mr-[clamp(1rem,2vw,2.5rem)]'
        }
        width={500}
        height={500}
      />
      <div className='flex-1 self-center mt-5 min-[945px]:max-w-[670px]'>
        <TimeAndShare item={item} theme={theme} />
        <p
          className={`hover:underline my-5 text-[clamp(26px,2vw,32px)] text-[${
            theme === 'dark' ? '#FFF' : '#6A7373'
          }] font-bold cursor-pointer`}
        >
          {item.name}
        </p>
        {isContent ? (
          <p
            className={`line-clamp-[4] text-[16px] text-[${
              theme === 'dark' ? '#FFF' : '#6A7373'
            }] leading-[24px]`}
          >
            {item.description}
          </p>
        ) : null}
      </div>
    </>
  );
};

export default Index;
