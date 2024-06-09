import Image from 'next/image';

import Avatar from '@/assets/images/blogs/avt.png';

import TimeAndShare from '@/components/blogs/blog-item/timeAndShare';
import AvatarInfo from '@/components/blogs/blog-item/AvatarInfo';

const Index = ({
  item,
  classNameAvt,
  theme = 'light',
  isContent = true,
}: any) => {
  return (
    <>
      <Image
        src={item?.image}
        alt='see-more'
        className={
          classNameAvt ||
          'object-cover min-[945px]:w-[clamp(500px,38vw,700px)] h-[379px] rounded-[8px] mr-[clamp(1rem,2vw,2.5rem)]'
        }
      />
      <div className='flex-1 self-center mt-5 min-[945px]:max-w-[670px]'>
        <TimeAndShare item={item} theme={theme} />
        <p
          className={`hover:underline my-5 text-[clamp(26px,2vw,32px)] text-[${
            theme === 'dark' ? '#FFF' : '#6A7373'
          }] font-bold`}
        >
          {item?.title}
        </p>
        {isContent ? (
          <p
            className={`line-clamp-[4] text-[16px] text-[${
              theme === 'dark' ? '#FFF' : '#6A7373'
            }] leading-[24px]`}
          >
            {item?.content}
          </p>
        ) : null}
        <div
          style={{
            backgroundColor: theme === 'dark' ? '#f3f3f3' : '#E5E5E5',
          }}
          className={`h-[1px] my-4`}
        />
        <AvatarInfo image={Avatar} name={item.name} theme={theme} />
      </div>
    </>
  );
};

export default Index;
