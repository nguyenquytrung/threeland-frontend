import Link from "next/link";
import Image from 'next/image';

import SaleImage from '@/assets/images/sale.svg';

import LocationHeImage from '@/assets/images/he-loc.svg';
import ClockHeImage from '@/assets/images/he-clock.svg';
import SeeMoreImage from '@/assets/images/see-more.svg';
import Tour from "@/lib/models/tour";
import DOMPurify from "isomorphic-dompurify";

type Props = {
    title?: string,
    tours: Tour[],
    description?: string,
}

const ListRecommendTour = ({
    title = 'Top Recommended Vietnam Tour Packages',
    tours,
    description = "Seeking an unforgettable holiday in Vietnam? Check out our 10 best\nVietnam tour packages and get exclusive offers from Threeland travel",
}: Props) => {

    return (
        <div className='flex-1'>
            <h3 className='text-[#394445] text-center text-[32px] leading-[54px] font-semibold'>
                {title}
            </h3>
            <p className='text-[#9CA1A2] text-[18px] leading-[28px] font-extralight text-center mt-2 w-[80%] mx-auto' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description)}}>
                
            </p>

            <div className='flex flex-col gap-6 mt-8'>
                {tours.map((item) => (
                    <div
                        key={item.id}
                        className='relative bg-[#F7F7F7] flex flex-col md:flex-row gap-4 p-3 pr-4 rounded-[24px]'
                    >
                        <div className='absolute w-[66px] h-[77px] ml-10'>
                            <Image src={SaleImage} alt='sale' className='absolute' />
                            <span className='z-10 absolute bottom-9 w-full text-center text-[20px] font-semibold text-white'>
                                -30%
                            </span>
                        </div>
                        <Image
                            src={item.avatar ?? ''}
                            alt='recommend-vietnam-1'
                            className='md:max-w-[50%] w-full object-cover rounded-[16px]'
                            width={489}
                            height={355}
                        />
                        <div className='md:max-w-[50%]'>
                            <h5 className='text-[#1E1E1E] text-[22px] leading-[32px] font-medium'>
                                {item.name}
                            </h5>
                            <div className='flex gap-2 items-start mt-2'>
                                <Image src={LocationHeImage} alt='location' />
                                <p className='font-light text-[#6A7373] text-[12px] 2xl:text-[16px]'>
                                    {item.route}
                                </p>
                            </div>
                            <div className='flex justify-between mt-2'>
                                <div className='flex items-center gap-2 w-fit'>
                                    <Image src={ClockHeImage} alt='location' />
                                    <p className='font-light text-[12px] 2xl:text-[16px]'>
                                        {item.duration}
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-4 my-3'>
                                <p className='flex gap-2 items-center'>
                                    <span className='text-[26px] 2xl:text-[36px] font-medium'>
                                        ${item.price}
                                    </span>
                                </p>
                            </div>

                            <p className='text-[#6A7373] font-light text-justify line-clamp-3'>
                                {item.description}
                            </p>

                            <Link
                                href={`/tour/${item.slug}`}
                                role='button'
                                className='flex gap-2 items-center justify-center hover:bg-[#015391] bg-[#0066B3] rounded-full p-[10px 24px 10px 24px] w-[177px] h-[48px] text-white mt-4'
                            >
                                <span>Explore tour</span>
                                <Image src={SeeMoreImage} alt='see-more' />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* <PaginationComp className='mt-6' /> */}

            {/* <div
          role='button'
          className='mt-6 mx-auto border border-[#E6E8E8] transition-all hover:bg-[#f3f3f3] rounded-[8px] w-[235px] h-[48px] flex gap-2 items-center justify-center'
        >
          <span className='text-[#071516] text-[18px]'>
            View more tour{' '}
            <span className='text-[#9B9B9B] text-[12px]'>(34)</span>
          </span>
          <Image src={RightSliderImage} alt='view-more-tour' />
        </div> */}
        </div>
    )
}

export default ListRecommendTour;