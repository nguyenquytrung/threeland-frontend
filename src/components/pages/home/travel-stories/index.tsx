import React from 'react';
import Image from 'next/image';
import UserCommentImage from '@/assets/images/user-comment-bg.svg';
import TalkImage from '@/assets/images/talk-icon.svg';
import UserVoteImage from '@/assets/images/user-vote.svg';
import UserCommentAvatarImage from '@/assets/images/user-comment-avatar.jpeg';

const TravelStories = () => {
  return (
    <section className="text-white bg-center bg-no-repeat bg-cover bg-[url('/travel-stories-bg.png')] min-[974px]:min-h-[581px] flex flex-col items-center justify-center px-[24px] py-[3rem]">
      <h3 className='text-[clamp(26px,3vw,40px)] min-[1360px]:text-[56px] font-semibold leading-[54px]'>
        Threeland Travel Stories
      </h3>
      <p className='text-[18px] mt-4'>
        What people says about Golobe facilities
      </p>
      <div className='flex flex-wrap min-[974px]:flex-nowrap justify-center gap-[clamp(1rem,2vw,4rem)] mt-[4rem] sm:px-[50px] min-[1200px]:px-[100px]'>
        <div className='min-w-[240px]'>
          <div className='relative'>
            <Image src={UserCommentImage} alt='user-comment' />
            <div className='absolute top-0 right-0 left-0 pt-4 px-6 2xl:pt-8 2xl:px-10'>
              <Image src={TalkImage} alt='talk' />
              <div className='flex gap-4 items-center mt-3'>
                <Image
                  src={UserVoteImage}
                  alt='user-vote'
                  className='w-[clamp(16px,2vw,24px)]'
                />
                <Image
                  src={UserVoteImage}
                  alt='user-vote'
                  className='w-[clamp(16px,2vw,24px)]'
                />
                <Image
                  src={UserVoteImage}
                  alt='user-vote'
                  className='w-[clamp(16px,2vw,24px)]'
                />
                <Image
                  src={UserVoteImage}
                  alt='user-vote'
                  className='w-[clamp(16px,2vw,24px)]'
                />
                <Image
                  src={UserVoteImage}
                  alt='user-vote'
                  className='w-[clamp(16px,2vw,24px)]'
                />
              </div>
              <p className='mt-1 2xl:mt-3 text-[#474747] text-[12px] leading-[17px] 2xl:leading-[20px] font-extralight line-clamp-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem. consectetur
                adipiscing elit. nibh lectus feugiat nunc{' '}
              </p>
            </div>
          </div>

          <div className='flex gap-5 mt-4 ml-7'>
            <Image
              src={UserCommentAvatarImage}
              alt='user-avatar'
              width={56}
              className='object-cover rounded-full h-[56px]'
            />
            <div className=''>
              <p className='text-[18px] leading-[28px] font-medium'>
                Jane Cooper
              </p>
              <span className='text-[14px]'>CEO, ABC Corporation</span>
            </div>
          </div>
        </div>

        <div className='min-w-[240px]'>
          <div className='relative'>
            <Image src={UserCommentImage} alt='user-comment' />
            <div className='absolute top-0 right-0 left-0 pt-4 px-6 2xl:pt-8 2xl:px-10'>
              <Image src={TalkImage} alt='talk' />
              <div className='flex gap-4 items-center mt-3'>
                <Image
                  src={UserVoteImage}
                  alt='user-vote'
                  className='w-[clamp(16px,2vw,24px)]'
                />
                <Image
                  src={UserVoteImage}
                  alt='user-vote'
                  className='w-[clamp(16px,2vw,24px)]'
                />
                <Image
                  src={UserVoteImage}
                  alt='user-vote'
                  className='w-[clamp(16px,2vw,24px)]'
                />
                <Image
                  src={UserVoteImage}
                  alt='user-vote'
                  className='w-[clamp(16px,2vw,24px)]'
                />
                <Image
                  src={UserVoteImage}
                  alt='user-vote'
                  className='w-[clamp(16px,2vw,24px)]'
                />
              </div>
              <p className='mt-1 2xl:mt-3 text-[#474747] text-[12px] leading-[17px] 2xl:leading-[20px] font-extralight line-clamp-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem. consectetur
                adipiscing elit. nibh lectus feugiat nunc{' '}
              </p>
            </div>
          </div>

          <div className='flex gap-5 mt-4 ml-7'>
            <Image
              src={UserCommentAvatarImage}
              alt='user-avatar'
              width={56}
              className='object-cover rounded-full h-[56px]'
            />
            <div className=''>
              <p className='text-[18px] leading-[28px] font-medium'>
                Jane Cooper
              </p>
              <span className='text-[14px]'>CEO, ABC Corporation</span>
            </div>
          </div>
        </div>

        <div className='min-w-[240px]'>
          <div className='relative'>
            <Image src={UserCommentImage} alt='user-comment' />
            <div className='absolute top-0 right-0 left-0 pt-4 px-6 2xl:pt-8 2xl:px-10'>
              <Image src={TalkImage} alt='talk' />
              <div className='flex gap-4 items-center mt-3'>
                <Image
                  src={UserVoteImage}
                  alt='user-vote'
                  className='w-[clamp(16px,2vw,24px)]'
                />
                <Image
                  src={UserVoteImage}
                  alt='user-vote'
                  className='w-[clamp(16px,2vw,24px)]'
                />
                <Image
                  src={UserVoteImage}
                  alt='user-vote'
                  className='w-[clamp(16px,2vw,24px)]'
                />
                <Image
                  src={UserVoteImage}
                  alt='user-vote'
                  className='w-[clamp(16px,2vw,24px)]'
                />
                <Image
                  src={UserVoteImage}
                  alt='user-vote'
                  className='w-[clamp(16px,2vw,24px)]'
                />
              </div>
              <p className='mt-1 2xl:mt-3 text-[#474747] text-[12px] leading-[17px] 2xl:leading-[20px] font-extralight line-clamp-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem. consectetur
                adipiscing elit. nibh lectus feugiat nunc{' '}
              </p>
            </div>
          </div>

          <div className='flex gap-5 mt-4 ml-7'>
            <Image
              src={UserCommentAvatarImage}
              alt='user-avatar'
              width={56}
              className='object-cover rounded-full h-[56px]'
            />
            <div className=''>
              <p className='text-[18px] leading-[28px] font-medium'>
                Jane Cooper
              </p>
              <span className='text-[14px]'>CEO, ABC Corporation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelStories;
