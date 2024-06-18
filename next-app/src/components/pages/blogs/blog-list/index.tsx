"use client";

import BlogItem from '@/components/pages/blogs/blog-item';
import Blog from '@/lib/models/blog';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
    blogs: Blog[],
}

const BlogList = ({ blogs }: Props) => {
    const [chooseBlogs, setChooseBlogs] = useState<Blog>(blogs[0]);

    return (
        <div
            className={`flex max-[1180px]:flex-col justify-end px-[24px] sm:px-[50px] lg:px-[100px] relative py-10`}
        >
            {/* <div></div> */}

            <div
                className={`min-[1180px]:mr-[clamp(1rem,clamp(2vw,3vw,4vw),5rem)] max-[944px]:self-center`}
            >
                <div className={`flex min-[1180px]:flex-col`}>
                    {blogs.map((blog, index) =>
                        <div
                            onClick={() => setChooseBlogs(blog)}
                            key={blog.id}
                            className={`flex justify-end py-3`}
                        >
                            {chooseBlogs.id === blog.id ? (
                                <>
                                    <div
                                        className={`hidden min-[1181px]:block w-[clamp(40px,4vw,62px)] h-[2px] rounded-[5px] bg-[#C4C4C4] self-center mr-6`}
                                    ></div>

                                    <div
                                        role='button'
                                        className='text-[#0066B3] text-[32px] self-center font-bold justify-end'
                                    >
                                        {index + 1}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='hidden min-[1181px]:block w-[62px] h-[2px] rounded-[5px] self-center mr-6'></div>
                                    <div
                                        role='button'
                                        className='text=[#6A7373] self-center text-[14px]'
                                    >
                                        {index + 1}
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {chooseBlogs && <Link
                href={`/blogs/${chooseBlogs.slug}`}
                role='button'
                className={`flex min-[945px]:flex-row flex-col items-center min-[945px]:items-start`}
            >
                <BlogItem item={chooseBlogs} />
            </Link>}
        </div>
    );
};
export default BlogList;
