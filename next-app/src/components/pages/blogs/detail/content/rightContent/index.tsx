import Image from 'next/image';
import Facebook from '@/svg/facebookSocial';
import Thread from '@/svg/threadSocial';
import Gmail from '@/svg/gmailSvg';
import Twitter from '@/assets/images/twitter.png';
import List from './list';
import { Suspense } from 'react';
import Form from './form';

const Index = () => {

    return (
        <div className='2xl:min-w-[clamp(300px,34vw,552px)] sm:min-w-[350px]'>
            <p className='text-[32px] font-semibold pb-5'>Follow Us</p>
            <div className='flex flex-wrap gap-5 pb-10'>
                <div className='p-2 w-[72px] h-[72px] px-[17px] py-[15px] bg-[#F8F9FA] rounded-[40px] cursor-pointer'>
                    <div className='bg-[#3B5998] w-[40px] h-[40px] py-[10px] px-[15px] rounded-[20px]'>
                        <Facebook color='#fff' width={10} height={20} />
                    </div>
                </div>
                <div className='p-2 w-[72px] h-[72px] px-[17px] py-[15px] bg-[#F8F9FA] rounded-[40px] cursor-pointer'>
                    <div className='bg-[#d3d3d3] w-[40px] h-[40px] py-[10px] px-[11px] rounded-[20px]'>
                        <Image src={Twitter} alt='twitter' width={22} />
                    </div>
                </div>
                <div className='p-2 w-[72px] h-[72px] px-[17px] py-[15px] bg-[#F8F9FA] rounded-[40px] cursor-pointer'>
                    <div className='bg-[#3B5998] w-[40px] h-[40px] py-[10px] px-[13px] rounded-[20px]'>
                        <Thread color='#fff' width={15} height={20} />
                    </div>
                </div>
                <div className='p-2 w-[72px] h-[72px] px-[17px] py-[15px] bg-[#F8F9FA] rounded-[40px] cursor-pointer'>
                    <div className='bg-[#fff] w-[40px] h-[40px] py-[10px] px-[10px] rounded-[20px]'>
                        <Gmail color='#fff' width={10} height={20} />
                    </div>
                </div>
            </div>
            <p className='text-[32px] font-medium pb-5'>
                Subscribe to our newsletter
            </p>
            <Form />
            <div className=''>
                <p className='text-[32px] font-medium mt-[4rem]'>
                    Most viewed articles
                </p>
                <Suspense fallback={<div>Loading...</div>}>
                    <List />
                </Suspense>
            </div>
        </div>
    );
};

export default Index;
