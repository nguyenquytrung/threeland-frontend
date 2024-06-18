"use client";

import { getComments } from '@/app/action';
import Blog from '@/lib/models/blog';
import Comment from '@/lib/models/comment';
import Swal from '@/lib/sweetalert';
import React, { useState } from 'react';

type Props = {
    blog: Blog
}

const Comments = ({ blog }: Props) => {

    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(false);

    const loadComments = async () => {
        if (!blog.id) return;

        setLoading(true);
        const res = await getComments(blog.id);
        setLoading(false);
        if (!res) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
        setComments(res);
    }

    return (
        <>
            <div>
                {comments.map((cmt, index) => (
                    <React.Fragment key={cmt.id}>
                        <div>
                            <h4 className='text-[24px] font-semibold'>{cmt.name}</h4>
                            <p className='text-[18px] font-extralight mt-3'>{cmt.content}</p>
                        </div>
                        {index !== comments.length - 1 && <hr className='my-5' />}
                    </React.Fragment>
                ))}
            </div>
            {(blog.comments_count !== comments.length) && <form action={loadComments}>
                <button
                    role='button'
                    className='bg-[#0066B3] h-[70px] text-[white] rounded-[8px] flex items-center justify-center mt-6 w-full disabled:opacity-75 disabled:cursor-not-allowed'
                    disabled={loading}
                >
                    <p className='sm:text-[24px] sm:tracking-[5px] tracking-[3px]'>
                        VIEW COMMENTS ({blog.comments_count})
                    </p>
                </button>
            </form>}
        </>
    );
};

export default Comments;
