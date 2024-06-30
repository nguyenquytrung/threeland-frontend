import React from 'react';
import Image from 'next/image';
import Job1 from '@/assets/images/careers/job-1.jpeg';
import Job2 from '@/assets/images/careers/job-2.jpeg';
import ClockImage from '@/assets/images/he-clock.svg';
import LocationBlackImage from '@/assets/images/contact/contact-us-loc-black.svg';
import Facebook from '@/components/svg/facebookSocial';
import Thread from '@/components/svg/threadSocial';
import Gmail from '@/components/svg/gmailSvg';
import Twitter from '@/assets/images/twitter.png';
import Link from 'next/link';

const careers = [
  {
    id: 0,
    thumb: Job1,
    name: 'Senior Tour Operator',
    type: 'Full time',
    location: 'Hanoi - Viet Nam',
    description:
      'Threeland Travel is a South East Asia DMC, founded in Jan-2003 and specialised in Tours / Travel Services in Vietnam, Laos, Cambodia, Thailand and Myanmar. We are looking for your joining if you are as Dynamic, Young, Proactive as our present colleagues',
  },
  {
    id: 1,
    thumb: Job2,
    name: 'Sales Inbound - Tour Consultant',
    type: 'Full time',
    location: 'Hanoi - Viet Nam',
    description:
      'Threeland Travel is a South East Asia DMC, founded in Jan-2003 and specialised in Tours / Travel Services in Vietnam, Laos, Cambodia, Thailand and Myanmar. We are looking for your joining if you are as Dynamic, Young, Proactive as our present colleagues',
  },
];

const Page = () => {
  return (
    <main className='py-[clamp(1rem,3vw,3rem)]'>
      <div className='max-w-[1680px] mx-auto px-[24px] sm:px-[50px] lg:px-[100px]'>
        <h1 className='text-center font-bold text-[clamp(0.5em,4vw,3em)] mb-4'>
          THREELAND CAREERS
        </h1>
        <div className='font-extralight flex flex-col gap-3'>
          <p>
            We value the skills, strengths and perspectives of our diverse team
            and provide a safe and enjoyable workplace. Being a member of
            Threeland, you can expect a career growth in almost prospects and
            have great chance to work in a multi-cultural and multi-national
            companies as our client speak English, German, Spanish, Portuguese
            and some other European languages
          </p>
          <h5 className='text-[20px]'>WHY WORK FOR US</h5>
          <p className='pl-4'>
            <li>
              Working in the fast growing organization with annual growth ratio
              50%. Transparent business system, clear development strategy,
              frequent expansion of markets and new business.
            </li>
            <li>
              Friendly and supportive working environment. Young, active,
              devoted members.
            </li>
            <li>
              Annual minimum income from 18-22 months of salary, including
              salary, bonus and allowance, not including Special Bonus. Senior
              members from 2nd year will have significant high income.
            </li>
            <li>
              Annual evaluation of salary and benefit, with smart system of KPI
              and staff review, on monthly, quarterly and yearly basis,
              guarantee fair evaluation among members.
            </li>
            <li>
              Punctual salary payment on the last working day of the month.
            </li>
            <li>
              Social and health insurance, Great support to maternity and
              feeding mothers.
            </li>
            <li>
              Both internal and external training, promotion chances for senior
              and loyal members from 3rd year.
            </li>
            <li>
              Offices&apos; location in center, easy access from living quarters
              in the City. Big bus stations and bus stops nearby.
            </li>
            <li>
              Summer and winter vacation, family fund support depending on the
              working time of each member.
            </li>
            <li>
              Funny activities, theme parties in frequency: flashmob dance, Yoga
              class, mid-autumn festival, team birthday, celebration…
            </li>
          </p>
          <div className=''>
            <h5 className='text-[20px]'>VACANCIES ARE AVAILABLE:</h5>
            <div className='flex flex-col gap-20 mt-4'>
              {careers.map((item) => (
                <div key={item.id} className='flex gap-8 w-fit'>
                  <Image src={item.thumb} alt='job' className='w-[30%]' />
                  <div className='max-w-[500px]'>
                    <h5 className='text-[32px] font-medium'>{item.name}</h5>
                    <div className='flex gap-10'>
                      <div className='flex gap-1'>
                        <Image src={LocationBlackImage} alt='location' />
                        <span>{item.location}</span>
                      </div>
                      <div className='flex gap-1'>
                        <Image src={ClockImage} alt='location' />
                        <span>{item.type}</span>
                      </div>
                    </div>

                    <p className='mt-8'>{item.description}</p>

                    <div className='flex justify-between mt-10'>
                      <Link
                        href={`/career/${item.name
                          .toLowerCase()
                          .replaceAll('-', '')
                          .replaceAll('  ', ' ')
                          .trim()
                          .replaceAll(' ', '-')}`}
                        role='button'
                        className='bg-[#0066B3] hover:bg-[#015391] py-2 px-8 text-white'
                      >
                        READ MORE
                      </Link>

                      <div className='flex flex-wrap gap-2'>
                        <div
                          role='button'
                          className='bg-[#3B5998] w-[40px] h-[40px] py-[10px] px-[15px] rounded-[20px]'
                        >
                          <Facebook color='#fff' width={10} height={20} />
                        </div>
                        <div
                          role='button'
                          className='bg-[#d3d3d3] w-[40px] h-[40px] py-[10px] px-[11px] rounded-[20px]'
                        >
                          <Image src={Twitter} alt='twitter' width={22} />
                        </div>
                        <div
                          role='button'
                          className='bg-[#3B5998] w-[40px] h-[40px] py-[10px] px-[13px] rounded-[20px]'
                        >
                          <Thread color='#fff' width={15} height={20} />
                        </div>
                        <div
                          role='button'
                          className='bg-[#fff] w-[40px] h-[40px] py-[10px] px-[10px] rounded-[20px]'
                        >
                          <Gmail color='#fff' width={10} height={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
