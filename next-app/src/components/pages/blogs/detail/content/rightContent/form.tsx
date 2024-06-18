"use client";

import { subscribe } from "@/app/action";
import Swal from "@/lib/sweetalert";
import { useRef, useState } from "react";

const Form = () => {

    const [loading, setLoading] = useState(false);
    const ref = useRef<HTMLFormElement>(null);

    const submit = async (data: FormData) => {
        setLoading(true);
        const res = await subscribe(data, navigator.userAgent);
        setLoading(false);
        if (!res) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                confirmButtonColor: '#0066B3'
            });
            return;
        }
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Your information has been saved!",
            confirmButtonColor: '#0066B3'
        });
        ref.current?.reset();
    }

    return (
        <form action={submit} ref={ref}>
            <div className='flex my-8'>
                <input
                    type='email'
                    placeholder='Enter your email'
                    className='h-[70px] w-full rounded-[4px] px-2 pl-9 border-[1px] border-[#CDD0D0]'
                    name="email"
                    required
                />
            </div>
            <button
                role='button'
                className='bg-[#0066B3] h-[70px] text-[white] rounded-[4px] flex items-center justify-center w-full disabled:opacity-75 disabled:cursor-not-allowed'
                disabled={loading}
            >
                <p className='text-[18px] tracking-[5px]'>SUBSCRIBE</p>
            </button>
        </form>
    )
}

export default Form;