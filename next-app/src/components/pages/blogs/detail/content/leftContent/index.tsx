"use client";

import DotSvg from '@/svg/dotSvg';
import Image from 'next/image';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Facebook from '@/svg/facebookSocial';
import In from '@/svg/inSocial';
import Thread from '@/svg/threadSocial';
import Twitter from '@/assets/images/twitter.png';
import Comments from './comments';
import Blog from '@/lib/models/blog';
import DOMPurify from 'isomorphic-dompurify';
import React from 'react';
import Form from './form';

type Props = {
    blog: Blog,
}

const Index = ({ blog }: Props) => {
    
    const url = encodeURIComponent(process.env.NEXT_PUBLIC_BASE_URL + `blogs/${blog.slug}`);

    const scrollTo = (id: string) => {
        document.querySelector(`#${id}`)?.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <div className='lg:max-w-[1128px]'>
            <p className='leading-[35px] pb-10 text-justify'>
                {blog.description}
            </p>
            <div className='lr-[200px]'>
                <div className='h-[1px] bg-[#E9ECEF]' />
                <div className='py-5'>
                    <p className='font-bold text-[24px]'>TABLE OF CONTENTS</p>
                    {blog.tableContent?.map((item, idx) => (
                        <React.Fragment key={item.id}>
                            <div className='flex mx-10 my-5'>
                                <p className='text-[20px] w-[30px] h-[30px] text-[#FFF] rounded-[20px] bg-[#0066B3] text-center'>
                                    {idx + 1}
                                </p>
                                <div>
                                    <p className='text-[20px] mx-5 text-[#0066B3] mb-5 cursor-pointer' onClick={() => scrollTo(item.id)}>
                                        {item.name}
                                    </p>
                                    {item.children?.map((child) => (
                                        <div className='mx-5 flex' key={child.id}>
                                            <div className='w-2 h-2 self-center'>
                                                <DotSvg color='#0066B3' />
                                            </div>
                                            <p className='mx-5 text-[20px] text-[#0066B3]'>
                                                {child.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                <div className='h-[1px] bg-[#E9ECEF]' />
            </div>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.detail ?? '') }}></div>
            <div className='h-[1px] bg-[#E9ECEF] my-10' />
            <div className='flex gap-4 flex-wrap mb-6'>
                <p className='text-[24px] font-semibold pr-5'>Share: </p>
                <a className='self-center flex bg-[#3B5998] h-[48px] px-7 rounded-[4px]' href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank">
                    <div className='w-[24px] h-[24px] self-center bg-[#FFF] p-[7.5px] rounded-[20px]'>
                        <Facebook />
                    </div>
                </a>
                <a className='self-center flex bg-[#d3d3d3] h-[48px] px-7 rounded-[4px]' href={`https://twitter.com/share?url=${url}`} target='_blank'>
                    <div className='self-center rounded-[20px]'>
                        <Image src={Twitter} alt='twitter' width={22} />
                    </div>
                </a>
                <a className='self-center flex bg-[#FF0000] h-[48px] px-7 rounded-[4px]' href={`https://pinterest.com/pin/create/button/?url=${url}`} target='_blank'>
                    <div className='w-[24px] h-[24px] self-center bg-[#FFF] p-[7.5px] rounded-[20px]'>
                        <Thread />
                    </div>
                </a>
                <a className='self-center flex bg-[#007BB6] h-[48px] px-7 rounded-[4px]' href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${blog.meta_title}&source=${process.env.NEXT_PUBLIC_BASE_URL}`} target='_blank'>
                    <div className=' self-center rounded-[20px]'>
                        <In />
                    </div>
                </a>

                <Form blog={blog} />
            </div>

            <Comments blog={blog} />
        </div>
    );
};

export default Index;
