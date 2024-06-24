import React from 'react';
import Image from 'next/image';
import ReliabilityAndSecurity from '@/assets/images/faqs/reliability-and-security.jpeg';
import PaymentAndDeposit from '@/assets/images/faqs/payment-and-deposit.jpeg';
import AmendmentCancellation from '@/assets/images/faqs/amendment-cancellation.jpeg';
import VisaPassport from '@/assets/images/faqs/visa-passport.jpeg';
import CustomizedSpecialTour from '@/assets/images/faqs/customized-special-tour.jpeg';
import HowToBook from '@/assets/images/faqs/how-to-book.jpeg';
import Link from 'next/link';

const faqs = [
  { id: 0, name: 'Reliability and security', url: ReliabilityAndSecurity },
  { id: 1, name: 'Payment and deposit', url: PaymentAndDeposit },
  { id: 2, name: 'Amendment & cancellation', url: AmendmentCancellation },
  { id: 3, name: 'Visa & passport', url: VisaPassport },
  { id: 4, name: 'Customized & special tour', url: CustomizedSpecialTour },
  { id: 5, name: 'How to book', url: HowToBook },
];

const Page = () => {
  return (
    <main className='py-[clamp(1rem,3vw,3rem)]'>
      <div className='max-w-[1680px] mx-auto px-[24px] sm:px-[50px] lg:px-[100px]'>
        <h1 className='text-center font-bold text-[clamp(0.5em,4vw,3em)] mb-4'>
          FAQs
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 min-[1130px]:grid-cols-3 gap-8'>
          {faqs.map((item) => (
            <Link href={'/faqs'} key={item.id} className='relative h-[230px]'>
              <Image
                src={item.url}
                alt='faqs'
                className='h-full object-cover w-full'
              />
              <div className='absolute inset-0 grid place-items-center'>
                <div className='bg-[rgba(255,255,255,0.8)] p-6 w-fit min-w-[70%] text-[#0066B3]'>
                  <p className='uppercase text-center'>{item.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
