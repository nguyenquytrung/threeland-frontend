'use client';
import { useRef } from 'react';
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
import LocationImage from '@/assets/images/location-2.svg';
import ClockImage from '@/assets/images/clock.svg';
import StarImage from '@/assets/images/star.svg';
import LocationHeImage from '@/assets/images/he-loc.svg';
import ClockHeImage from '@/assets/images/he-clock.svg';
import StarHeImage from '@/assets/images/he-star.svg';
import ExploreTourImage from '@/assets/images/explore-tour.svg';
import LeftSliderImage from '@/assets/images/left-slider.svg';
import RightSliderImage from '@/assets/images/right-slider.svg';
import LeftSliderWhiteImage from '@/assets/images/left-slider-white.svg';
import RightSliderWhiteImage from '@/assets/images/right-slider-white.svg';
import VietnamFlagImage from '@/assets/images/vietnam-flag.svg';
import VietnamTextImage from '@/assets/images/vietnam-text.png';
import DanangCardImage from '@/assets/images/danang-card.png';
import HanoiCardImage from '@/assets/images/hanoi-card.png';
import HagiangCardImage from '@/assets/images/hagiang-card.png';
import NinhbinhCardImage from '@/assets/images/ninhbinh-card.png';
import HE1Image from '@/assets/images/he-1.png';
import HE2Image from '@/assets/images/he-2.png';
import HE3Image from '@/assets/images/he-3.png';
import HE4Image from '@/assets/images/he-4.png';
import Popular1Image from '@/assets/images/popular-1.png';
import Popular2Image from '@/assets/images/popular-2.png';
import Popular3Image from '@/assets/images/popular-3.png';
import Popular4Image from '@/assets/images/popular-4.png';
import ExploreColorImage from '@/assets/images/explore-color.svg';
import SeparateImage from '@/assets/images/separate-white.svg';
import PopularSaleImage from '@/assets/images/popular-sale.svg';
import UserCommentImage from '@/assets/images/user-comment-bg.svg';
import TalkImage from '@/assets/images/talk-icon.svg';
import UserVoteImage from '@/assets/images/user-vote.svg';
import UserCommentAvatarImage from '@/assets/images/user-comment-avatar.jpeg';
import TourByTheme1Image from '@/assets/images/tbt-1.png';
import TourByTheme2Image from '@/assets/images/tbt-2.png';
import TourByTheme3Image from '@/assets/images/tbt-3.png';
import TourByTheme4Image from '@/assets/images/tbt-4.png';
import TourByTheme5Image from '@/assets/images/tbt-5.png';
import FamilyTourImage from '@/assets/images/family-tour.svg';
import FoodTourImage from '@/assets/images/food-tour.svg';
import BeachVacationsImage from '@/assets/images/beach-vacations.svg';
import HoneymoonImage from '@/assets/images/honeymoon.svg';
import LuxuryToursImage from '@/assets/images/luxury-tours.svg';
import Partner1Image from '@/assets/images/partner-1.png';
import Partner2Image from '@/assets/images/partner-2.png';
import Partner3Image from '@/assets/images/partner-3.png';
import Partner4Image from '@/assets/images/partner-4.png';
import Partner5Image from '@/assets/images/partner-5.png';
import Partner6Image from '@/assets/images/partner-6.png';

const slideImagesSellingTour = [
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

const slideImagesHighLightedExperiences = [
  {
    url: HE1Image,
    caption: 'Slide 1',
  },
  {
    url: HE2Image,
    caption: 'Slide 2',
  },
  {
    url: HE3Image,
    caption: 'Slide 3',
  },
  {
    url: HE4Image,
    caption: 'Slide 3',
  },
];

const slideImagesPopular = [
  {
    url: Popular1Image,
    caption: 'Slide 1',
  },
  {
    url: Popular2Image,
    caption: 'Slide 2',
  },
  {
    url: Popular3Image,
    caption: 'Slide 3',
  },
  {
    url: Popular4Image,
    caption: 'Slide 3',
  },
];

const slideImagesTourByTheme = [
  {
    url: TourByTheme1Image,
    caption: 'Slide 1',
    icon: FamilyTourImage,
  },
  {
    url: TourByTheme2Image,
    caption: 'Slide 2',
    icon: FoodTourImage,
  },
  {
    url: TourByTheme3Image,
    caption: 'Slide 3',
    icon: BeachVacationsImage,
  },
  {
    url: TourByTheme4Image,
    caption: 'Slide 3',
    icon: LuxuryToursImage,
  },
  {
    url: TourByTheme5Image,
    caption: 'Slide 3',
    icon: HoneymoonImage,
  },
];

const slideImagesPartners = [
  {
    url: Partner1Image,
    caption: 'Slide 1',
  },
  {
    url: Partner2Image,
    caption: 'Slide 2',
  },
  {
    url: Partner3Image,
    caption: 'Slide 3',
  },
  {
    url: Partner4Image,
    caption: 'Slide 3',
  },
  {
    url: Partner5Image,
    caption: 'Slide 3',
  },
  {
    url: Partner6Image,
    caption: 'Slide 3',
  },
];

export default function Home() {
  const slider = useRef(null);
  const settingsSellingTour = {
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

  const settingsHighLightedExperiences = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: '10px',
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

  const settingsTourByTheme = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: '10px',
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

  const settingsPartners = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
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

  const handleClickPrev = () => {
    // @ts-ignore
    slider?.current?.slickPrev();
  };

  const handleClickNext = () => {
    // @ts-ignore
    slider?.current?.slickNext();
  };

  return (
    <main className=''>
      <Banner />

      {/* Best Travel Agency Vietnam Section */}
      <section className='relative px-[100px] 2xl:max-w-[1584px] w-full h-[827px] flex gap-8 items-center mx-auto mt-[6rem]'>
        <div>
          <h3 className='text-[40px] min-[1360px]:text-[56px] font-semibold min-[1360px]:leading-[69.44px] mb-4'>
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

      {/* Why Threeland Section */}
      <section className='max-w-[1910px] px-[100px] mx-auto mt-[9rem]'>
        <h3 className='text-[56px] font-semibold leading-[45px] mb-[3rem]'>
          Why Threeland
        </h3>
        <div className='flex gap-[5rem] items-start'>
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

      {/* Top selling tour Section */}
      <section className='mt-[8rem] bg-[#F3F5F6]'>
        <div className='pl-[24px] 2xl:pl-[108px] py-[6rem] mx-auto'>
          <p className='text-[#090B19] tracking-[4px] mb-4'>SALE TOUR</p>
          <h3 className='text-[56px] font-semibold leading-[54px] mb-[3rem]'>
            Top selling tour
          </h3>
          <div className='flex overflow-hidden'>
            <div className='w-fit text-white'>
              <div className='px-6 pb-6 h-fit min-[1800px]:w-[500px] min-[1800px]:h-[550px] min-w-[400px] max-w-[500px] bg-[#0066B3]'>
                <div className='relative w-[66px] h-[77px] ml-10'>
                  <Image src={SaleImage} alt='sale' className='absolute' />
                  <span className='z-10 absolute bottom-9 w-full text-center text-[20px] font-semibold'>
                    -30%
                  </span>
                </div>
                <h3 className='text-[26px] 2xl:text-[40px] min-[1800px]:text-[48px] font-medium min-[1800px]:leading-[55.2px] mt-4'>
                  Essential Vietnam with Sapa
                </h3>
                <div className='flex gap-2 items-start mt-5'>
                  <Image src={LocationImage} alt='location' />
                  <p className='font-light'>
                    Saigon – Mekong Delta – Hoi An – Hue – Hanoi – Sapa – Halong
                    Bay
                  </p>
                </div>
                <div className='flex mt-4'>
                  <div className='flex items-center gap-2 w-fit'>
                    <Image src={ClockImage} alt='location' />
                    <p className='font-light'>8Day 9Night</p>
                  </div>
                  <div className='flex items-center gap-2 flex-1 justify-center'>
                    <Image src={StarImage} alt='location' />
                    <p className='font-light'>4.8 (3454 reviews)</p>
                  </div>
                </div>
                <p className='mt-4 font-light opacity-90 ml-6 leading-[25.6px] 2xl:text-[16px] text-[14px]'>
                  Lorem ipsum dolor sit amet, consecteturadipiscing elit. Mauris
                  accumsan urna eupharetra elementum. Suspendisse potenti.
                </p>
                <hr className='mt-4 2xl:mt-8 ml-6 bg-[#FFFFFF4D]' />
                <div className='flex justify-between mt-6 pl-2 2xl:pl-10 2xl:pr-5'>
                  <p className='flex gap-2 items-center'>
                    <span className='text-[36px] font-medium'>$150</span>
                    <span className='line-through text-[18px] font-extralight mt-1'>
                      $320/d
                    </span>
                  </p>
                  <div
                    role='button'
                    className='flex items-center justify-center gap-3 h-[48px] w-[181px] rounded-[24.85px] border-[0.8px] border-[white]'
                  >
                    <p className='text-[18px] font-extralight'>Explore tour</p>
                    <Image src={ExploreTourImage} alt='explore-tour' />
                  </div>
                </div>
              </div>

              <div className='flex items-center gap-3 mt-10'>
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
            <div className='w-[calc(100%-400px)] min-[1800px]:w-[calc(100%-500px)]'>
              <Slider
                ref={slider}
                {...settingsSellingTour}
                nextArrow={<button>next</button>}
              >
                {slideImagesSellingTour.map((slideImage, index) => (
                  <div key={index} className={`flex justify-center px-2`}>
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

      {/* Destination Section */}
      <section className="text-white bg-[url('/vietnam-3-people.png')] h-[905px] pt-[12rem]">
        <div className='max-w-[1910px] px-[100px] mx-auto w-full h-full flex justify-between'>
          <div className='min-w-[500px] flex-1'>
            <p className='tracking-[5px] text-[32px] font-extralight'>
              Destination
            </p>
            <Image src={VietnamFlagImage} alt='vietnam-flag' className='mt-6' />
            <Image src={VietnamTextImage} alt='vietnam-text' className='mt-8' />
            <div className='flex items-center gap-3 mt-20'>
              <div
                role='button'
                onClick={handleClickPrev}
                className='rounded-[43px] border-[##EEEEEE] border w-[68px] h-[48px] flex items-center justify-center'
              >
                <Image src={LeftSliderWhiteImage} alt='left-slider' />
              </div>
              <div
                role='button'
                onClick={handleClickNext}
                className='rounded-[43px] border-[##EEEEEE] border w-[115px] h-[48px] flex gap-2 items-center justify-center'
              >
                <p className='text-white'>Next</p>
                <Image src={RightSliderWhiteImage} alt='left-slider' />
              </div>
            </div>
          </div>

          <div className='w-[1020px]'>
            <p className='text-[18px] text-justify leading-[28.8px] font-extralight'>
              Vietnam is an exciting country for tourism and investment.
              Bustling street life, delicious cuisine and majestic scenery all
              await you. A country constantly in motion, Vietnam always balances
              young urban culture with traditional values. In the city, ancient
              temples are just a turn away from modern shops. In the
              countryside, life still flows along the rivers and harvests. This
              contrast between old and new makes up a large part of Vietnam's
              appeal. Another reason to visit Vietnam is its natural beauty. The
              North has majestic mountains and beautiful limestone bays. The
              Central Coast Road leads to historical relics and romantic
              beaches. In the South, the sleepless life of Ho Chi Minh City and
              the riverside villages in the Mekong Delta will make you want to
              linger forever.
            </p>
            <div
              role='button'
              className='flex items-center justify-center mt-10 gap-3 h-[48px] w-[181px] rounded-[24.85px] border-[0.8px] border-[white]'
            >
              <p className='text-[18px] font-extralight'>Explore tour</p>
              <Image src={ExploreTourImage} alt='explore-tour' />
            </div>
            <div className='flex gap-4 mt-[4rem]'>
              <div className=''>
                <Image src={DanangCardImage} alt='explore-tour' />
                <p className='text-[24px] mt-4'>DA NANG</p>
              </div>
              <div className=''>
                <Image src={HanoiCardImage} alt='explore-tour' />
                <p className='text-[24px] mt-4'>DA NANG</p>
              </div>
              <div className=''>
                <Image src={HagiangCardImage} alt='explore-tour' />
                <p className='text-[24px] mt-4'>DA NANG</p>
              </div>
              <div className=''>
                <Image src={NinhbinhCardImage} alt='explore-tour' />
                <p className='text-[24px] mt-4'>DA NANG</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted experiences in 2024 Section */}
      <section className='pt-[4rem] max-w-[1910px] px-[100px] pb-[8rem]'>
        <div className='flex justify-between mb-[2rem] pr-[1rem]'>
          <h3 className='text-[56px] font-semibold leading-[54px]'>
            Highlighted experiences in 2024
          </h3>
          <div className='flex items-center gap-3'>
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
        <div className='flex gap-2 mb-8'>
          <div
            role='button'
            className='w-[107px] h-[48px] flex items-center justify-center border border-[#9CA1A2] text-[#9CA1A2] rounded-[8px]'
          >
            <span>Private</span>
          </div>
          <div
            role='button'
            className='w-[107px] h-[48px] text-white flex items-center justify-center bg-[#0066B3] rounded-[8px]'
          >
            Group
          </div>
        </div>

        <Slider
          className='gap-2'
          ref={slider}
          {...settingsHighLightedExperiences}
          nextArrow={<button>next</button>}
        >
          {slideImagesHighLightedExperiences.map((slideImage, index) => (
            <div key={index} className='w-[411px] pr-4'>
              <div className='relative rounded-[24px] bg-[#F7F7F7] h-full p-3 pb-5 overflow-hidden'>
                <div className='p-1'>
                  <h5 className='font-medium 2xl:text-[22px] leading-[32px]'>
                    Highlights of Singapore 3 Weeks
                  </h5>
                  <div className='flex gap-2 items-start mt-4'>
                    <Image src={LocationHeImage} alt='location' />
                    <p className='font-light text-[#6A7373] text-[12px] 2xl:text-[16px]'>
                      Saigon – Mekong Delta – Hoi An – Hue – Hanoi – Sapa –
                      Halong Bay
                    </p>
                  </div>
                  <div className='flex mt-4'>
                    <div className='flex items-center gap-2 w-fit'>
                      <Image src={ClockHeImage} alt='location' />
                      <p className='font-light text-[12px] 2xl:text-[16px]'>
                        8Day 9Night
                      </p>
                    </div>
                    <div className='flex items-center gap-2 flex-1 justify-center'>
                      <Image src={StarHeImage} alt='location' />
                      <p className='font-light text-[12px] 2xl:text-[16px]'>
                        4.8 (3454 reviews)
                      </p>
                    </div>
                  </div>
                  <p className='flex gap-2 items-center my-4'>
                    <span className='text-[26px] 2xl:text-[36px] font-medium'>
                      $150
                    </span>
                    <span className='line-through 2xl:text-[18px] font-extralight mt-1'>
                      $320/d
                    </span>
                  </p>
                </div>
                <Image
                  className='w-full'
                  key={index}
                  src={slideImage.url}
                  alt={slideImage.caption}
                />
                <div
                  role='button'
                  className='absolute mx-auto left-0 right-0 bottom-[-16px] bg-[#F7F7F7] rounded-full p-4 w-fit'
                >
                  <Image src={ExploreColorImage} alt='explore-color' />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Popular multi - country tours Section */}
      <section className='relative text-white h-[720px] min-[1700px]:h-[880px] 2xl:h-[800px]'>
        <div className='bg-[#0066B3] h-[397px] top-0 right-0 left-0'></div>
        <div className='absolute top-0 bottom-0 left-0 right-0 pt-[4rem] max-w-[1910px] px-[100px] pb-[8rem]'>
          <div className='flex justify-between pr-[1rem]'>
            <h3 className='text-[56px] font-semibold leading-[54px]'>
              Popular multi - country tours
            </h3>
            <div className='flex items-center gap-3'>
              <div
                role='button'
                onClick={handleClickPrev}
                className='rounded-[43px] border-[white] border w-[68px] h-[48px] flex items-center justify-center'
              >
                <Image src={LeftSliderWhiteImage} alt='left-slider' />
              </div>
              <div
                role='button'
                onClick={handleClickNext}
                className='rounded-[43px] border-[white] border w-[115px] h-[48px] flex gap-2 items-center justify-center'
              >
                <p className='text-[white]'>Next</p>
                <Image src={RightSliderWhiteImage} alt='left-slider' />
              </div>
            </div>
          </div>
          <p className='text-[18px] font-extralight my-4 mb-[5rem]'>
            What people says about Golobe facilities
          </p>
          <Slider
            className='gap-2'
            ref={slider}
            {...settingsHighLightedExperiences}
            nextArrow={<button>next</button>}
          >
            {slideImagesPopular.map((slideImage, index) => (
              <div key={index} className='w-[411px] pr-4'>
                <div className='relative h-full overflow-hidden'>
                  <div className='absolute h-[50%] left-0 right-0 bottom-0 bg-card-title p-4 flex flex-col justify-end'>
                    <div className='h-fit mt-auto'>
                      <h5 className='text-[22px]'>Azure Paradise Estate</h5>
                      <div className='flex flex-wrap'>
                        <div className='flex gap-2'>
                          <Image src={LocationImage} alt='location' />
                          <p className='font-extralight text-[12px] 2xl:text-[16px] mt-[1px]'>
                            Los Angeles
                          </p>
                        </div>
                        <Image
                          src={SeparateImage}
                          alt='location'
                          className='mx-2'
                        />
                        <div className='flex gap-2'>
                          <Image src={ClockImage} alt='location' />
                          <p className='font-extralight text-[12px] 2xl:text-[16px] mt-[1px]'>
                            8Day 9Night
                          </p>
                        </div>
                        <Image
                          src={SeparateImage}
                          alt='location'
                          className='mx-2'
                        />
                        <div className='flex gap-2'>
                          <Image src={StarImage} alt='location' />
                          <p className='font-extralight text-[12px] 2xl:text-[16px] mt-[1px]'>
                            4.8
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-4 my-4'>
                        <p className='flex gap-2 items-center'>
                          <span className='text-[26px] 2xl:text-[36px] font-medium'>
                            $240
                          </span>
                          <span className='line-through 2xl:text-[18px] font-extralight mt-1'>
                            $320/d
                          </span>
                        </p>
                        <div className='relative flex items-center justify-center align-middle'>
                          <Image src={PopularSaleImage} alt='popular-sale' />
                          <p className='absolute mx-auto right-0 left-0 text-center'>
                            -30%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image
                    className='w-full'
                    key={index}
                    src={slideImage.url}
                    alt={slideImage.caption}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Threeland Travel Stories Section */}
      <section className="text-white bg-[url('/travel-stories-bg.png')] min-h-[581px] flex flex-col items-center justify-center">
        <h3 className='text-[56px] font-semibold leading-[54px]'>
          Threeland Travel Stories
        </h3>
        <p className='text-[18px] mt-4'>
          What people says about Golobe facilities
        </p>
        <div className='flex flex-wrap xl:flex-nowrap gap-[4rem] mt-[4rem] px-[100px]'>
          <div className='min-w-[300px]'>
            <div className='relative'>
              <Image src={UserCommentImage} alt='user-comment' />
              <div className='absolute top-0 right-0 left-0 pt-4 px-6 2xl:pt-8 2xl:px-10'>
                <Image src={TalkImage} alt='talk' />
                <div className='flex gap-4 items-center mt-3'>
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                </div>
                <p className='mt-1 2xl:mt-3 text-[#474747] text-[12px] leading-[17px] 2xl:leading-[20px] font-extralight'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                  consectetur adipiscing elit. nibh lectus feugiat nunc{' '}
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

          <div className='min-w-[300px]'>
            <div className='relative'>
              <Image src={UserCommentImage} alt='user-comment' />
              <div className='absolute top-0 right-0 left-0 pt-4 px-6 2xl:pt-8 2xl:px-10'>
                <Image src={TalkImage} alt='talk' />
                <div className='flex gap-4 items-center mt-3'>
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                </div>
                <p className='mt-1 2xl:mt-3 text-[#474747] text-[12px] leading-[17px] 2xl:leading-[20px] font-extralight'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                  consectetur adipiscing elit. nibh lectus feugiat nunc{' '}
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

          <div className='min-w-[300px]'>
            <div className='relative'>
              <Image src={UserCommentImage} alt='user-comment' />
              <div className='absolute top-0 right-0 left-0 pt-4 px-6 2xl:pt-8 2xl:px-10'>
                <Image src={TalkImage} alt='talk' />
                <div className='flex gap-4 items-center mt-3'>
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                </div>
                <p className='mt-1 2xl:mt-3 text-[#474747] text-[12px] leading-[17px] 2xl:leading-[20px] font-extralight'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                  consectetur adipiscing elit. nibh lectus feugiat nunc{' '}
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

      <section className='pt-[4rem] max-w-[1910px] px-[100px] pb-[10rem]'>
        <p className='text-[24px] tracking-[6px]'>TRAVEL</p>
        <div className='flex justify-between items-center mt-4 pr-[1rem]'>
          <h3 className='text-[56px] font-semibold leading-[54px]'>
            Tours by theme
          </h3>
          <div className='flex items-center gap-3'>
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
          className='gap-2 mt-[4rem]'
          ref={slider}
          {...settingsTourByTheme}
          nextArrow={<button>next</button>}
        >
          {slideImagesTourByTheme.map((slideImage, index) => (
            <div key={index} className='relative pr-4'>
              <Image
                src={slideImage.url}
                alt={slideImage.caption}
                className='rounded-[8px]'
              />
              <div className='absolute bottom-0 left-0 w-[60%] min-w-[158px] p-[1rem] backdrop-blur-sm bg-white/70 rounded-bl-[8px] rounded-tr-[8px]'>
                <Image src={slideImage.icon} alt='tour-theme-icon' />
                <h5 className='text-[20px] font-medium leading-[27px] text-[#071516] mt-4'>
                  Family tours
                </h5>
                <p className='text-[#394445] text-[14.18px] leading-[19.5px] font-extralight'>
                  32 Tours
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className='max-w-[1608px] px-[100px] mx-auto text-white'>
        <div className='flex jutify-between items-center gap-4 bg-[#0066B3] rounded-[24px] w-full h-[196px] px-[48px] xl:px-[96px]'>
          <h3 className='text-[36px] 2xl:text-[48px] font-normal max-w-[50%] leading-[56px]'>
            Subscribe for Latest Newsletter
          </h3>
          <form className='flex flex-1 gap-2'>
            <input
              type='text'
              placeholder='Your e-mail...'
              className='flex-1 text-[#646A69] max-w-[422px] h-[56px] rounded-[200px] px-[20px]'
            />
            <div
              role='button'
              className='flex items-center justify-center h-[56px] w-[155px] bg-white rounded-[200px] text-[#0066B3]'
            >
              <span className='text-[18px] font-medium'>Get in touch</span>
            </div>
          </form>
        </div>
      </section>

      <section className='mt-10 bg-[#F3F5F6]'>
        <div className='max-w-[1474px] px-[100px] mx-auto'>
          <Slider
            className='mt-[4rem]'
            ref={slider}
            {...settingsPartners}
            nextArrow={<button>next</button>}
          >
            {slideImagesPartners.map((slideImage, index) => (
              <div key={index} className='relative h-[154px] pr-4'>
                <div className='h-full flex items-center justify-center'>
                  <Image
                    src={slideImage.url}
                    alt={slideImage.caption}
                    className='rounded-[8px]'
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
}
