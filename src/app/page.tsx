'use client';
import Image from 'next/image';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Banner from '@/components/core/banner';
import BestTravelImage from '@/assets/images/best-travel.png';
import SeeMoreImage from '@/assets/images/see-more.svg';
import TicketImage from '@/assets/images/ticket.svg';
import HotAirBalloonImage from '@/assets/images/hot-air-balloon.svg';
import DiamondImage from '@/assets/images/diamond.svg';
import MedalImage from '@/assets/images/medal.svg';
import SellingTour1Image from '@/assets/images/selling-tour-1.png';
import SellingTour2Image from '@/assets/images/selling-tour-2.png';
import SellingTour3Image from '@/assets/images/selling-tour-3.png';
import SaleImage from '@/assets/images/sale.svg';

const slideImages = [
  {
    url: SellingTour1Image,
    caption: 'Slide 1',
  },
  {
    url: SellingTour2Image,
    caption: 'Slide 2',
  },
  {
    url: SellingTour3Image,
    caption: 'Slide 3',
  },
];

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 1441,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <main className=''>
      <Banner />

      <section className='relative px-[24px] 2xl:max-w-[1432px] 2xl:px-0 w-full h-[827px] flex gap-8 items-center mx-auto mt-[6rem]'>
        <div>
          <h3 className='text-[56px] font-semibold leading-[69.44px] mb-4'>
            Best Travel Agency Vietnam
          </h3>
          <p className='font-light text-justify mb-6'>
            With two decades of experience in Indochina, Threeland Travel prides
            ourselves on the profound knowledge of our expert in-country
            consultants. As a dedicated destination management company and
            Vietnam Travel Agency, we are the preferred choice for clients and
            partners looking for an operator with specialist advice for crafting
            a one-of-a-kind experience. Threeland is currently working
            hand-in-hand with more than 1,800 agencies worldwide, welcoming 25%
            of our total traffic being repeated guests every year. We commit to
            transform your travel requests into dream-like adventures that
            brings you the most authentic and exciting travel experiences at
            superior service quality.
          </p>
          <div
            role='button'
            className='flex gap-2 items-center justify-center bg-[#0066B3] rounded-full p-[10px 24px 10px 24px] w-[177px] h-[48px] text-white mb-[3rem]'
          >
            <span>See more</span>
            <Image src={SeeMoreImage} alt='see-more' />
          </div>
        </div>
        <Image src={BestTravelImage} alt='best-travel' className='h-full' />
        <div className='absolute flex gap-[8rem] items-center w-[930px] h-[167px] bg-[#0066B3] bottom-[-1.5rem] text-white px-[4rem]'>
          <div>
            <h4 className='text-[48px] font-semibold leading-[57.6px]'>4+</h4>
            <p className='text-[24px]'>Destination</p>
          </div>
          <div>
            <h4 className='text-[48px] font-semibold leading-[57.6px]'>
              1800+
            </h4>
            <p className='text-[24px]'> Agencies worldwide</p>
          </div>
          <div>
            <h4 className='text-[48px] font-semibold leading-[57.6px]'>70+</h4>
            <p className='text-[24px]'>Professional</p>
          </div>
        </div>
      </section>

      <section className='max-w-[1758px] px-[24px] mx-auto mt-[6rem]'>
        <h3 className='text-[56px] font-semibold leading-[45px] mb-[3rem]'>
          Why Threeland
        </h3>
        <div className='flex gap-[5rem] items-center'>
          <div className='max-w-[344px]'>
            <Image src={TicketImage} alt='ticket' />
            <h5 className='text-[24x] font-semibold my-4 leading-[27px]'>
              Best Price Guaranteed
            </h5>
            <p className='text-justify font-extralight text-[#888888]'>
              Be recognized as the rate winner in many markets. Answering and
              consultations must be given within 24hrs.
            </p>
          </div>

          <div className='max-w-[344px]'>
            <Image src={HotAirBalloonImage} alt='ticket' />
            <h5 className='text-[24x] font-semibold my-4 leading-[27px]'>
              Best Price Guaranteed
            </h5>
            <p className='text-justify font-extralight text-[#888888]'>
              Dedicated teamwork with more than 70 professional, enthusiastic &
              best travel agent for vietnam & regional offices.
            </p>
          </div>

          <div className='max-w-[344px]'>
            <Image src={DiamondImage} alt='ticket' />
            <h5 className='text-[24x] font-semibold my-4 leading-[27px]'>
              Best Price Guaranteed
            </h5>
            <p className='text-justify font-extralight text-[#888888]'>
              A wide selection from 5-star hotels to comfy homestay & customized
              service for flexible group from FIT to MICE group.
            </p>
          </div>

          <div className='max-w-[344px]'>
            <Image src={MedalImage} alt='ticket' />
            <h5 className='text-[24x] font-semibold my-4 leading-[27px]'>
              Best Price Guaranteed
            </h5>
            <p className='text-justify font-extralight text-[#888888]'>
              Longstanding experience in 2 decades, financial stability with
              High Travel Liability Insurance Package of USD 1,000,000.
            </p>
          </div>
        </div>
      </section>

      <section className='mt-[6rem] bg-[#F3F5F6]'>
        <div className='pl-[24px] 2xl:pl-[108px] py-[6rem] mx-auto'>
          <p className='text-[#090B19] tracking-[4px] mb-4'>SALE TOUR</p>
          <h3 className='text-[56px] font-semibold leading-[54px] mb-[3rem]'>
            Top selling tour
          </h3>
          <div className='flex overflow-hidden'>
            <div className='w-fit text-white'>
              <div className='px-6 h-[450px] min-[1800px]:w-[500px] min-[1800px]:h-[550px] min-w-[400px] max-w-[500px] bg-[#0066B3]'>
                <div className='relative w-[66px] h-[77px] ml-10'>
                  <Image src={SaleImage} alt='sale' className='absolute' />
                  <span className='z-10 absolute bottom-9 w-full text-center text-[20px] font-semibold'>
                    -30%
                  </span>
                </div>
                <h3 className='text-[32px] 2xl:text-[48px] font-medium 2xl:leading-[55.2px] mt-4'>
                  Essential Vietnam with Sapa
                </h3>
              </div>
            </div>
            <div className='w-[calc(100%-400px)] min-[1800px]:w-[calc(100%-500px)]'>
              <Slider {...settings} nextArrow={<button>next</button>}>
                {slideImages.map((slideImage, index) => (
                  <div className={`flex justify-center px-2`}>
                    <Image
                      className='w-full'
                      key={index}
                      src={slideImage.url}
                      alt={slideImage.caption}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
