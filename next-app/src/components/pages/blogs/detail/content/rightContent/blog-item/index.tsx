import Image from 'next/image';

import TimeAndShare from './time-share';
import Blog from '@/lib/models/blog';

type Props = {
  item: Blog,
  classNameAvt?: string,
  theme?: string,
  isContent?: boolean,
}

const BlogItem = ({
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
        className={
          classNameAvt ||
          'object-cover min-[945px]:w-[clamp(500px,38vw,700px)] h-[379px] rounded-[8px]'
        }
        width={500}
        height={500}
      />
      <div className='flex-1 min-[945px]:max-w-[670px]'>
        <TimeAndShare item={item} theme={theme} />
        <p
          className={`my-5 line-clamp-[2] text-[16px] text-[${
            theme === 'dark' ? '#FFF' : '#6A7373'
          }] font-bold`}
        >
          {item?.name}
        </p>
        {isContent ? (
          <p
            className={`line-clamp-[4] text-[16px] text-[${
              theme === 'dark' ? '#FFF' : '#6A7373'
            }] leading-[24px]`}
          >
            {item?.description}
          </p>
        ) : null}
        <div
          style={{
            backgroundColor: theme === 'dark' ? '#f3f3f3' : '#E5E5E5',
          }}
          className={`h-[1px] my-4`}
        />
        {/* <AvatarInfo image={Avatar} name={item.name} theme={theme} /> */}
      </div>
    </>
  );
};

export default BlogItem;
