"use client";

import { postComment } from "@/app/action";
import { useRef, useState } from "react";
import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '@/components/core/ui/dialog';
import Comment from '@/assets/images/blogs/comment.svg';
import Blog from "@/lib/models/blog";
import SeeMoreImage from '@/assets/images/see-more.svg';
import Swal from "@/lib/sweetalert";

type Props = {
    blog: Blog,
}

const Form = ({ blog }: Props) => {

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLFormElement>(null);

    const submit = async (data: FormData) => {
        setLoading(true);
        const res = await postComment(data);
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
        setOpen(false);
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Thank you for your comment. We will review it and display it shortly.",
            confirmButtonColor: '#0066B3'
        });
        ref.current?.reset();
    }

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div
                        role='button'
                        className='flex gap-2 items-center justify-center hover:bg-[#015391] bg-[#0066B3] rounded-full p-[10px 24px 10px 24px] px-3 h-[48px] text-white ml-auto'
                    >
                        <span>Write a comment</span>
                        <Image src={Comment} alt='comment' />
                    </div>
                </DialogTrigger>
                <DialogContent className='bg-white md:rounded-[32px] p-0 overflow-hidden border-0 max-w-[749px]'>
                    <div className='bg-[rgba(0,102,179,1)] p-6'>
                        <h3 className='text-white text-[24px]'>Write a comment</h3>
                    </div>
                    <form className='px-5 pb-8 text-[11px]' action={submit} ref={ref}>
                        <input hidden name='id' value={blog.id} readOnly />
                        <label className='font-extralight'>FULL NAME</label>
                        <br />
                        <input
                            type='text'
                            placeholder='Full Name'
                            className='h-[32px] rounded-[4px] border border-[rgba(205,208,208,1)] mt-2 w-full px-2 mb-6'
                            maxLength={60}
                            name='name'
                            required
                        />
                        <label className='font-extralight'>TITLE</label>
                        <br />
                        <input
                            type='text'
                            placeholder='Title'
                            className='h-[32px] rounded-[4px] border border-[rgba(205,208,208,1)] mt-2 w-full px-2 mb-6'
                            maxLength={150}
                            name="title"
                            required
                        />
                        <label className='font-extralight'>CONTENT</label>
                        <br />
                        <textarea
                            placeholder='Content'
                            className='min-h-[100px] rounded-[4px] border border-[rgba(205,208,208,1)] mt-2 w-full p-2 mb-6'
                            name="content"
                            required
                        />
                        <button className='flex gap-3 items-center justify-center w-full rounded-[24.85px] bg-[rgba(0,102,179,1)] p-2 disabled:opacity-75 disabled:cursor-not-allowed' disabled={loading}>
                            <span className='text-white text-[18px]'>Send</span>
                            <Image src={SeeMoreImage} alt='see-more' />
                        </button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Form;