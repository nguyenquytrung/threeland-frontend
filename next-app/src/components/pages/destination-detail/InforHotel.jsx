import React from 'react'
import Adress from "@/assets/images/adrress-icon-blue.svg";
import Image from 'next/image'
import hotelIcon from "@/assets/images/hotel.svg"
import Link from 'next/link';
const InforHotel = () => {
  return (
    <div className='mx-[20px] p-4'>
        <div className='w-full  bg-white rounded-[16px] '>
        <div className='flex items-center px-4 mb-2'>
        <Image className='w-[17px] mr-2' src={Adress} alt=''/>
        <p>Destination:</p>
        <h2 className=' ml-4 font-bold text-[24px]'>Ha Noi</h2>
        </div>
        <div className='flex items-center px-4 mb-2'>
        <Image className='w-[17px] mr-2' src={hotelIcon} alt=''/>
        <p>Deluxe:</p>
        <h2 className=' ml-2'>La Regina Royal Cruise La Regina Classic
         <Link className='text-[#0066B3] text-[14px] ml-1 decoration-slice underline' href="/">Xem thêm</Link></h2>
        </div>
        <div className='flex items-center px-4 mb-2'>
        <Image className='w-[17px] mr-2' src={hotelIcon} alt=''/>
        <p>Luxury:</p>
        <h2 className=' ml-2'>Era cruise
         <Link className='text-[#0066B3] text-[14px] ml-1 decoration-slice underline' href="/">Xem thêm</Link></h2>
        </div>
    </div>
    </div>
  )
}

export default InforHotel