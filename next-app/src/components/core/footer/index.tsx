import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '@/assets/images/logo-nobackground.svg';
import CallingImage from '@/assets/images/call-calling.svg';
import EmailImage from '@/assets/images/email-footer.svg';
import LocationImage from '@/assets/images/loc-footer.svg';
import SendEmailButtonImage from '@/assets/images/send-email-button.svg';
import FbImage from '@/assets/images/fb-footer-2.svg';
import TwitterImage from '@/assets/images/twitter-footer.svg';
import IgImage from '@/assets/images/ig-footer.svg';
import TiktokImage from '@/assets/images/tiktok-footer.svg';
import SnapchatImage from '@/assets/images/snapchat-footer.svg';

// Pay
import MasterCardImage from '@/assets/images/mastercard.svg';
import PayPalImage from '@/assets/images/paypal.svg';
import EbayImage from '@/assets/images/eBay.svg';
import GpayImage from '@/assets/images/google-pay.svg';
import MonobankImage from '@/assets/images/monobank.svg';
import DiscoverImage from '@/assets/images/discover.svg';
import WesternUnionImage from '@/assets/images/western-union.svg';
import PayoneerImage from '@/assets/images/payoneer.svg';
import ApplePayImage from '@/assets/images/applePay.svg';
import AmericanExpressImage from '@/assets/images/american-express.svg';
import AmazonImage from '@/assets/images/amazon.svg';
import AliPayImage from '@/assets/images/aliPay.svg';
import BitPayImage from '@/assets/images/bitPay.svg';
import BitCoinImage from '@/assets/images/bitcoin.svg';

const Footer = () => {
  return (
    <footer className='min-[1440px]:h-[579px] bg-[#0066B3]'>
      <div className='max-w-[1910px] px-[50px] xl:px-[100px] py-8 mx-auto'>
        <div className='min-[540px]:flex justify-between lg:justify-normal gap-6 pt-2 pb-4'>
          <Image src={LogoImage} alt='logo' />
          <div className='lg:flex w-fit items-center justify-center gap-[clamp(1rem,3vw,2.5rem)] lg:flex-1 mt-6 min-[540px]:mt-0'>
            <div className='flex gap-2 items-center w-fit'>
              <Image src={CallingImage} alt='calling' />
              <p className='text-white font-semibold text-[18px] min-w-max'>
                +84 24 3926 2056
              </p>
            </div>
            <div className='flex gap-2 items-center w-fit'>
              <Image src={EmailImage} alt='calling' />
              <p className='text-white font-semibold text-[18px]'>
                help@threeland.com
              </p>
            </div>
            <div className='flex gap-2 items-center w-fit'>
              <Image src={LocationImage} alt='calling' />
              <p className='text-white font-semibold text-[18px]'>
                125 Hong Ha, Ba Dinh, Hanoi, Vietnam
              </p>
            </div>
          </div>
        </div>
        <hr className='opacity-[0.4] bg-[#E6E8E8]' />

        <div className='md:flex gap-[clamp(3rem,4vw,16rem)] text-white pt-8 justify-between pb-6'>
          <div className='grid grid-cols-1 min-[540px]:grid-cols-2 min-[1180px]:grid-cols-4 gap-10 min-[540px]:gap-[clamp(0.5rem,3vw,3rem)]'>
            <div className='flex flex-col gap-4'>
              <h5 className='text-[24px] font-medium'>TO KNOW</h5>
              <Link href='' className='text-[18px] font-light hover:underline'>
                Why Travel With Us
              </Link>
              <Link
                href='/careers/all'
                className='text-[18px] font-light hover:underline'
              >
                Jobs At Threeland
              </Link>
              <Link href='' className='text-[18px] font-light hover:underline'>
                Blogs
              </Link>
              <Link href='' className='text-[18px] font-light hover:underline'>
                Contact Us
              </Link>
            </div>

            <div className='flex flex-col gap-4'>
              <h5 className='text-[24px] font-medium'>TO EXPLORE</h5>
              <Link href='' className='text-[18px] font-light hover:underline'>
                Vietnam
              </Link>
              <Link href='' className='text-[18px] font-light hover:underline'>
                Laos
              </Link>
              <Link href='' className='text-[18px] font-light hover:underline'>
                Cambodia
              </Link>
              <Link href='' className='text-[18px] font-light hover:underline'>
                Myanmar
              </Link>
              <Link href='' className='text-[18px] font-light hover:underline'>
                Travel Guide
              </Link>
            </div>

            <div className='flex flex-col gap-4'>
              <h5 className='text-[24px] font-medium min-w-max'>
                TO EXPERIENCE
              </h5>
              <Link href='' className='text-[18px] font-light hover:underline'>
                Vietnam Tours
              </Link>
              <Link href='' className='text-[18px] font-light hover:underline'>
                Laos Tours
              </Link>
              <Link href='' className='text-[18px] font-light hover:underline'>
                Cambodia Tours
              </Link>
              <Link href='' className='text-[18px] font-light hover:underline'>
                Myanmar Tours
              </Link>
              <Link href='' className='text-[18px] font-light hover:underline'>
                Vietnam Cambodia Tours
              </Link>
            </div>

            <div className='flex flex-col gap-4'>
              <h5 className='text-[24px] font-medium'>USEFUL LINKS</h5>
              <Link href='' className='text-[18px] font-light hover:underline'>
                Download Brochure
              </Link>
              <Link href='' className='text-[18px] font-light hover:underline'>
                Photo Stock
              </Link>
              <Link
                href='/page/privacy-policy'
                className='text-[18px] font-light hover:underline'
              >
                Privacy
              </Link>
              <Link
                href='/page/threeland-travel-terms-conditions'
                className='text-[18px] font-light hover:underline'
              >
                Terms & Conditions
              </Link>
              <Link
                href='/page/faqs'
                className='text-[18px] font-light hover:underline'
              >
                FAQs
              </Link>
            </div>
          </div>

          <div className='flex-1 max-w-max mt-10 md:mt-0'>
            <p className='text-[18px] mb-1'>Subscribe for Latest Newsletter</p>
            <div className='flex items-center gap-3 mb-3'>
              <input
                type='text'
                className='max-w-[398px] rounded-[24px] text-black px-4 h-[44px] flex-1'
              />
              <div role='button' className='min-w-[44px]'>
                <Image src={SendEmailButtonImage} alt='send-email-button' />
              </div>
            </div>
            <p className='text-[14px] font-extralight mb-7'>
              By clicking the SUBSCRIBE button, you are agreeing to our{' '}
              <Link href=''>Privacy & Cookie Policy</Link>
            </p>
            <p className='text-[14px] mb-5'>WE ACCEPT</p>
            <div className='grid grid-cols-8 gap-2 w-fit'>
              <Image src={MasterCardImage} alt='pay' />
              <Image src={PayPalImage} alt='pay' />
              <Image src={EbayImage} alt='pay' />
              <Image src={GpayImage} alt='pay' />
              <Image src={MonobankImage} alt='pay' />
              <Image src={DiscoverImage} alt='pay' />
              <Image src={WesternUnionImage} alt='pay' />
              <Image src={PayoneerImage} alt='pay' />
              <Image src={ApplePayImage} alt='pay' />
              <Image src={AmericanExpressImage} alt='pay' />
              <Image src={AmazonImage} alt='pay' />
              <Image src={AliPayImage} alt='pay' />
              <Image src={BitPayImage} alt='pay' />
              <Image src={BitCoinImage} alt='pay' />
            </div>
          </div>
        </div>

        <hr className='opacity-[0.4] bg-[#E6E8E8]' />
        <div className='min-[1160px]:flex items-center text-white pt-10'>
          <div>
            <p className='font-extralight mb-4'>
              Copyright Threeland Travel © 2024
            </p>
            <p className='font-extralight text-wrap'>
              <Link href='' className='underline'>
                Privacy Center{'  '}
              </Link>
              {'  '}|{'  '}
              <Link href='' className='underline'>
                Privacy & Cookie Policy
              </Link>
              {'  '}|{'  '}
              <Link href='' className='underline'>
                Manage Cookies
              </Link>
              {'  '}|{'  '}
              <Link href='' className='underline'>
                Terms & Conditions
              </Link>
              {'  '}|{'  '}
              <Link href='' className='underline'>
                Copyright Notice
              </Link>
              {'  '}|{'  '}
              <Link href='' className='underline'>
                Imprint
              </Link>
            </p>
          </div>

          <div className='flex items-center min-[1160px]:justify-center flex-1 gap-4 mt-4 min-[1160px]:mt-0'>
            <p className='font-medium text-[14px]'>SOCIALS</p>
            <Image src={FbImage} alt='social' />
            <Image src={TwitterImage} alt='social' />
            <Image src={IgImage} alt='social' />
            <Image src={TiktokImage} alt='social' />
            <Image src={SnapchatImage} alt='social' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
