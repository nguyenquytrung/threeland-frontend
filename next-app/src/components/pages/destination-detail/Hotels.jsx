import React from "react";
import hotel from "@/assets/images/hotelImage.jpg";
import Image from "next/image";
import InforHotel from "@/components/pages/destination-detail/InforHotel";
const Hotels = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className=" relative">
          <div className="p-4 mx-[20px] mt-[40px]">
          <h2 className="text-[56px] font-bold">The Hotel</h2>
          <p className="opacity-[60%]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat.
          </p>
          </div>
          <div className="container-hotel">
            <input
              type="radio"
              name="toggle"
              id="label1"
              className="radio hidden"
              defaultChecked
            />
            <input
              type="radio"
              name="toggle"
              id="label2"
              className="radio hidden"
            />
            <input
              type="radio"
              name="toggle"
              id="label3"
              className="radio hidden"
            />
            <div className="min-h-[420px] content-hotel">
            <div id="content-OurTerm-1" className="hidden">
              <InforHotel />
            </div>
            <div id="content-OurTerm-2" className="hidden">
              <InforHotel />
              <InforHotel />
              <InforHotel />
            </div>
            <div id="content-OurTerm-3" className="hidden">
              <InforHotel />
              <InforHotel />
            </div>
            </div>
            <div className="text-center mt-[10px] mb-10 w-full flex justify-center items-center">
              <label
                id="label-check-1"
                htmlFor="label1"
                className="w-[14px] h-[14px] border-[1px] block rounded-full mx-2 cursor-pointer"
              ></label>
              <label
                id="label-check-2"
                htmlFor="label2"
                className="w-[14px] h-[14px] border-[1px] block rounded-full mx-2 cursor-pointer"
              ></label>
              <label
                id="label-check-3"
                htmlFor="label3"
                className="w-[14px] h-[14px] border-[1px] block rounded-full mx-2 cursor-pointer"
              ></label>
            </div>
          </div>
        </div>
        <Image src={hotel} className="h-full w-auto" alt="" />
      </div>
    </>
  );
};

export default Hotels;
