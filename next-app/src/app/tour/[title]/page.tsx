import Image from 'next/image';
import React from 'react';
import DetailImage from '@/assets/images/Detail_content1.png';
import DetailImage2 from '@/assets/images/Detai.content2.png';
import DetailImage3 from '@/assets/images/Detai_content3.png';
import DetailImage4 from '@/assets/images/Detai.content4.png';
import HightLightImage from '@/assets/images/hightlight.jpg';

import Clock from '@/assets/images/clock.svg';
import Star from '@/assets/images/star.svg';
import Adress from '@/assets/images/adress.svg';
import '@/styles/DetailDestination.css';
import plane from '@/assets/images/plane.svg';
import users from '@/assets/images/users.svg';
import calendar from '@/assets/images/calendar.svg';
import Next from '@/assets/images/next-button.svg';
import prev from '@/assets/images/prev.svg';
import DescriptionDetail from '@/components/pages/destination-detail/DescriptionDetail';
import InputBook from '@/components/pages/destination-detail/InputBook';
import arrow from '@/assets/images/arrow-top-right.svg';
import TimeLine from '@/components/pages/destination-detail/Timeline';
import map from '@/assets/images/map.svg';
import Hotels from '@/components/pages/destination-detail/Hotels';
import Tour from '@/components/pages/destination-detail/Tour';
import OurTerms from '@/components/pages/destination-detail/OurTerms';
import Review from '@/components/pages/destination-detail/Review';

const Page = () => {
  return (
    <div className='bg-[white] pt-2 max max-w-screen'>
      <section className='relative flex items-center max-w-[1680px] px-[24px] sm:px-[50px] lg:px-[100px] mx-auto w-full'>
        <div className='grid grid-cols-5 w-full'>
          <div className=' col-span-3 '>
            <Image
              layout='responsive'
              src={DetailImage}
              className='rounded-[8px] max-h-[500px] object-cover'
              alt='Picture of the author'
            />
          </div>
          <div className='col-span-2 ml-2'>
            <Image
              layout='responsive'
              src={DetailImage2}
              className='rounded-[8px] max-h-[245px] object-cover'
              alt='Picture of the author'
            />
            <div className='flex mt-2'>
              <Image
                layout='responsive'
                src={DetailImage3}
                className='rounded-[8px] max-h-[244px] object-cover'
                alt='Picture of the author'
              />
              <Image
                layout='responsive'
                src={DetailImage4}
                className='rounded-[8px]  max-h-[244px] object-cover ml-2'
                alt='Picture of the author'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='relative max-w-[1680px] px-[24px] sm:px-[50px] lg:px-[100px] mx-auto w-full pt-4 grid grid-cols-5'>
        <div className='col-span-3 pt-4'>
          <div className='flex items-center w-full'>
            <Image src={Clock} alt='Clock-detail' />
            <p className='ml-2 text-customGray  mr-5 text-[18px]'>
              9Day 9Night
            </p>
            <Image src={Star} alt='Star-detail' />
            <p className='ml-2 text-customGray text-[18px]'>
              4.8 (3454 reviews)
            </p>
          </div>
          <p className='text-[32px] font-semibold text-[#394445] pt-2'>
            Highlights of Vietnam from North to South 12 days
          </p>
          <div className='flex items-center mt-2'>
            <Image src={Adress} alt='Star-detail' />
            <p className='text-customGray ml-2 text-[24px]'>
              Saigon – Mekong Delta – Hoi An – Hue – Hanoi – Sapa – Halong Bay
            </p>
          </div>
          <div className='flex items-center mt-2'>
            <p className='text-[#0066B3] text-[40px] font-bold'>$150</p>
            <p className='text-[#707070] text-[18px] ml-2'>$320/d</p>
            <button className='rounded-[16.5px] bg-[#FF7A00] ml-5 text-[white] px-4 py-2'>
              Top Selling Tours
            </button>
          </div>
          <div className='flex flex-wrap mt-6'>
            <input
              type='radio'
              id='Description_Detail'
              name='radio_detail'
              className='hidden'
              defaultChecked
            />
            <input
              type='radio'
              id='Highlights_Detail'
              name='radio_detail'
              className='hidden'
            />
            <input
              type='radio'
              id='Itinerary_Detail'
              name='radio_detail'
              className='hidden'
            />
            <input
              type='radio'
              id='Review_Detail'
              name='radio_detail'
              className='hidden'
            />

            <label htmlFor='Description_Detail' className='tab-label '>
              Description
            </label>
            <label htmlFor='Highlights_Detail' className='tab-label '>
              Highlights
            </label>
            <label htmlFor='Itinerary_Detail' className='tab-label '>
              Itinerary
            </label>
            <label htmlFor='Review_Detail' className='tab-label '>
              Review
            </label>

            <div className='tab-content'>
              <h2 className='font-bold text-[48px]'>Description</h2>
              <p className='text-[18px] leading-[28.8px] text-justify'>
                Explore the real Vietnam by trekking in the remote areas,
                staying at villages and living with the hill tribal people to
                share their real life, experience their hospitality and
                contemplate miraculous scenery outside the town. Within 15 days,
                this fascinating hiking trip surely brings you many joyful
                experiences with beautiful landscapes and exciting activities.
                Besides hiking, you will know about country by traveling from
                North to South, it is the best direction to turn back time from
                modern daily life to the traditional culture and history of
                Vietnam. Then overnight cruise to discover the magnificent
                beauty of this “Descending-dragon” bay at Lan Ha Bay/ Ha Long
                Bay and enjoy the beauty and life at Hue and Ho Chi Minh city.
                Our trips will allow you to discover the country natural beauty
                and distinct culture, as well as meet the people who live in
                harmony in these beautiful places.
              </p>
            </div>
            <div className='tab-content'>Nội dung của tab 2</div>
            <div className='tab-content'>Nội dung của tab 3</div>
            <div className='tab-content'>Nội dung của tab 4</div>
          </div>
          <div className=' grid grid-cols-4 p-[20px]'>
            <div className='grid grid-cols-1 gap-y-10'>
              <DescriptionDetail
                image={Clock}
                title='Duration'
                description='13 days & 12 nights'
              />
              <DescriptionDetail
                image={users}
                title='Travel styles'
                description='13 days & 12 nights'
              />
            </div>
            <div className='grid grid-cols-1 gap-y-10'>
              <DescriptionDetail
                image={plane}
                title='Trainsport'
                description='13 days & 12 nights'
              />
              <DescriptionDetail
                image={users}
                title='Group size'
                description='13 days & 12 nights'
              />
            </div>
            <div className='grid grid-cols-1 gap-y-10'>
              <DescriptionDetail
                image={plane}
                title='Minimum Age'
                description=' least 8 years old'
              />
              <DescriptionDetail
                image={calendar}
                title='Best Time To Go'
                description='From March to October'
              />
            </div>
          </div>
        </div>
        <div className='col-span-2 pl-16'>
          <div className='w-full rounded-[30px] shadow-[0_0_20px_10px_rgba(0,0,0,.15)] p-8'>
            <div className='p-4'>
              <h2 className=' font-bold text-[32px] leading-2'>Departures</h2>
              <div className='flex w-full items-center justify-between text-[16px]'>
                <Image src={prev} alt='prev' />
                <p>November 2021</p>
                <Image src={prev} alt='next-button' className='rotate-180' />
              </div>
              <div className='flex mt-5 text-center justify-between '>
                <div className='flex-1 flex flex-col items-center gap-3'>
                  <p>Su</p>
                  <p className='opacity-0'>v</p>
                  <p>7</p>
                  <p>14</p>
                  <p>21</p>
                  <p>28</p>
                </div>
                <div className='flex-1 flex flex-col items-center gap-3'>
                  <p>Mo</p>
                  <p>1</p>
                  <p>8</p>
                  <p>15</p>
                  <p>22</p>
                  <p>29</p>
                </div>
                <div className='flex-1 flex flex-col items-center gap-3'>
                  <p>Tu</p>
                  <p>2</p>
                  <p>9</p>
                  <p>16</p>
                  <p>23</p>
                  <p>30</p>
                </div>
                <div className='flex-1 flex flex-col items-center gap-3'>
                  <p>We</p>
                  <p>3</p>
                  <p>10</p>
                  <p>17</p>
                  <p>24</p>
                </div>
                <div className='flex-1 flex flex-col items-center gap-3'>
                  <p>Th</p>
                  <p>4</p>
                  <p>11</p>
                  <p>18</p>
                  <p>25</p>
                </div>
                <div className='flex-1 flex flex-col items-center gap-3'>
                  <p>Fr</p>
                  <p>5</p>
                  <p>12</p>
                  <p>19</p>
                  <p>26</p>
                </div>
                <div className='flex-1 flex flex-col items-center gap-3'>
                  <p>Sa</p>
                  <p>6</p>
                  <p>13</p>
                  <p>10</p>
                  <p>27</p>
                </div>
              </div>
              <InputBook
                image={plane}
                placeholder='Departure'
                title='Departure City'
              />
              <InputBook
                image={users}
                placeholder='Departure'
                title='Passengers'
              />
              <div className='flex justify-between mt-5 pl-2 items-center '>
                <h4 className='text-[24px] text-[#9CA1A2] font-medium'>
                  Total
                </h4>
                <h2 className='text-[#0066B3] text-[40px] font-bold'>$150</h2>
              </div>
              <div className='flex justify-end mb-4'>
                <button className='rounded-[6px] px-[5px] py-[6px] border-[1px] bg-[#0066B3] text-white flex items-center gap-[10px] mr-2'>
                  USD
                </button>
                <button className='rounded-[6px] px-[5px] py-[6px] border-[1px] flex items-center gap-[10px] mr-2'>
                  AUD
                </button>
                <button className='rounded-[6px] px-[5px] py-[6px] border-[1px] flex items-center gap-[10px] mr-2'>
                  EUR
                </button>
                <button className='rounded-[6px] px-[5px] py-[6px] border-[1px] flex items-center gap-[10px] mr-2'>
                  GBP
                </button>
              </div>
              <button
                className=' bg-[#0066B3] gap-[10px] px-[27px] py-[12px] w-full
               rounded-[24.85px] border-[0.8px] text-[18px] text-white flex justify-center items-center'
              >
                Book now
                <div className='w-[37px] h-[37px] bg-white flex text-center justify-center rounded-full'>
                  <Image src={arrow} alt='' className='w-[21.48px] h-auto ' />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#F9F9F9] pt-2'>
        <div className='relative items-center max-w-[1680px] px-[24px] sm:px-[50px] lg:px-[100px] mx-auto w-full block'>
          <h2 className='text-[48px] font-bold mb-4 '>Highlights</h2>
          <div className='flex gap-[24px] items-center'>
            <Image
              src={HightLightImage}
              alt=''
              className='h-[819px] w-auto rounded-[8px]'
            />
            <div className='Highlights-text text-[18px] gap-[40px] text-justify leading-[28.8px]'>
              <p>
                Wrap up in Hanoi and explore the fascinating Old Quarter and its
                hundreds of specialty shops selling silk clothing, lacquerware,
                embroidered linens, furniture, bamboo, and a paradise of
                Vietnamese foods from street food to upscale restaurants.
              </p>
              <p>
                Visit Bac Ha, a quiet and less touristic far north town and home
                to different ethnic tribal groups, attracted by the highland
                tribes, iconic rice paddies and forest treks. The whole area is
                blessed with awe-inspiring natural beauty. 
              </p>
              <p>
                Trek through terraced rice fields in remote villages,
                contemplate the breathtaking view of mountain ranges, admire the
                scenic beauty of waterfall, valleys and hills.
              </p>
              <p>
                 Indulging in local culture and experience the daily activities
                of the hill tribe people
              </p>
              <p>
                A leisure cruise in Ha Long Bay – one of the world’s new seven
                wonders where its’ 1,600 islands and islets form a spectacular
                seascape of limestone pillars. Join numerous water and onboard
                activities such as swimming, kayaking, sunbathing, cooking
                class, taichi on sundeck, ect.
              </p>
              <p>
                 Leisurely sitting on a sampan boat on Ngo Dong River to visit
                Tam Coc, admiring the beautiful landscape of rice filed,
                limestone mountain in the close distance. 
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='relative max-w-[1680px] px-[24px] sm:px-[50px] lg:px-[100px] mx-auto w-full pt-4'>
        <h2 className='text-[48px] font-bold leading-[62.5px] mt-4 mb-4'>
          Itinerary
        </h2>
        <div className=' grid grid-cols-3'>
          <div className='col-span-2'>
            <TimeLine />
          </div>
          <Image className='ml-6' layout='reponse' src={map} alt='' />
        </div>
      </section>
      <section className='bg-[#F9F9F9] relative px-[24px] mx-auto w-full pb-4'>
        <OurTerms />
      </section>
      <section className='bg-[#F9F9F9] relative px-[24px] mx-auto w-full pt-2'>
        <Hotels />
      </section>
      <section className='bg-[#0066B3] text-white '>
        <Review />
      </section>
      <section className='bg-[#ffff] relative px-[24px] mx-auto w-full pt-2'>
        <Tour />
      </section>
    </div>
  );
};

export default Page;
