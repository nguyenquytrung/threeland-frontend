'use client';
import Image from "next/image";
import LeftSliderImage from '@/assets/images/left-slider.svg';
import RightSliderImage from '@/assets/images/right-slider.svg';
import { useRef } from "react";
import { OurTeamActivitiesList } from "../const";

import DotSvg from '@/svg/dotSvg';
import ClockSvg from '@/svg/clockSvg';
import SeeMore from '@/svg/seeMore';
import Slider from 'react-slick';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Index = () => {
    const slider = useRef(null);

    const handleClickPrev = () => {
        // @ts-ignore
        slider?.current?.slickPrev();
    };

    const handleClickNext = () => {
        // @ts-ignore
        slider?.current?.slickNext();
    };

    const settingsCustomerReview = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='px-[24px] min-[900px]:px-[100px] relative'>
            <div>
                <div className="flex self-center">
                    <h1 className="min-[900px]:text-[56px] text-[28px] font-bold">Our activities</h1>
                    <div className='flex items-center gap-3 flex flex-1 justify-end'>
                        <div
                            role='button'
                            onClick={handleClickPrev}
                            className='rounded-[43px] border-[#9CA1A2] border w-[68px] h-[48px] flex items-center justify-center'
                        >
                            <Image src={LeftSliderImage} alt='left-slider' />
                        </div>
                        <div
                            role='button'
                            onClick={handleClickNext}
                            className='rounded-[43px] border-[#9CA1A2] border w-[115px] h-[48px] flex gap-2 items-center justify-center'
                        >
                            <p className='text-[#071516]'>Next</p>
                            <Image src={RightSliderImage} alt='left-slider' />
                        </div>
                    </div>
                </div>
                <Slider
                    className='mt-[2rem] mb-20 relative'
                    ref={slider}
                    {...settingsCustomerReview}
                >
                    {OurTeamActivitiesList.map((item, index) => (
                        <div key={index}>
                            <div
                                style={{ paddingLeft: index === 0 ? '0px' : '20px' }}
                                className='relative h-full pb-5 overflow-hidden'>
                                <div className='flex justify-center'>
                                    <Image
                                        src={item?.image}
                                        alt='see-more'
                                        className={'object-cover h-[240px] rounded-[8px]'}
                                    />
                                </div>
                                <div className='flex my-4'>
                                    <div className='w-2 h-2 self-center'>
                                        <DotSvg color={'#6A7373'} />
                                    </div>
                                    <div className='w-6 h-6 mx-2 self-center'>
                                        <ClockSvg color={'#6A7373'} />
                                    </div>
                                    <p
                                        className={`text-['#6A7373'] self-center`}
                                    >
                                        {item?.time}
                                    </p>
                                </div>
                                <div className='flex gap-4 my-3'>
                                    <p className="text-[24px] font-medium">{item.title}</p>
                                </div>
                                <div className='flex gap-4 my-3'>
                                    <p className="text-[16px] leading-[24px] text-justify">{item.content}</p>
                                </div>

                                <div
                                    role='button'
                                    className={`flex gap-2 items-center justify-center bg-[${index === 0 ? '#0066B3' : '#fff'}]  border-[${index === 0 ? '0px' : '1px'}] border-[#9CA1A2] rounded-full p-[10px 24px 10px 24px] w-[177px] h-[48px] text-[${index === 0 ? '#fff' : '#071516'}] mt-4`}
                                >
                                    <span>Explore tour</span>
                                    <SeeMore theme={index === 0 ? 'dark' : 'light'} />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    )
}

export default Index;