"use client";
import iconVali from "@/assets/images/destination/iconVali.jpg";
import ArrowLeft from "@/svg/arrow_left";
import ArrowRight from "@/svg/arrow_right";
import SeeMoreImage from "@/assets/images/see-more.svg";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { relatedTourListDetail } from "../const";

const Index = () => {
  const slider = useRef(null);

  const settingsCustomerReview = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClickPrev = () => {
    // @ts-ignore
    slider?.current?.slickPrev();
  };

  const handleClickNext = () => {
    // @ts-ignore
    slider?.current?.slickNext();
  };
  return (
    <div className="2xl:mx-[600px] xl:mx-[300px] lg:mx-[200px] md:mx-[100px] sm:mx-[50px] mx-5 text-[#555] mt-10">
      <div className="flex justify-center text-[#555] py-10">
        <Image
          src={iconVali}
          alt="who-we-are"
          className="flex-1 w-[100%] max-w-[40px] h-[40px] object-cover  self-center"
        />
        <h3 className="text-center text-[36px] px-5">Recommended Tours</h3>
      </div>

      <Slider
        className="relative gap-2"
        ref={slider}
        {...settingsCustomerReview}
      >
        {relatedTourListDetail.map((item, index) => (
          <div key={index} className="p-3">
            <div className="relative rounded-[24px] bg-[#F7F7F7] h-full pb-5 overflow-hidden">
              <div className="flex justify-center relative">
                <Image
                  src={item?.image}
                  alt="see-more"
                  className={"object-cover max-h-[300px] rounded-[8px]"}
                />
                <h5 className="left-5 bottom-2 uppercase font-bold absolute text-[#fff] text-[22px] leading-[32px]">
                  {item.name}
                </h5>
              </div>

              <div className="flex items-start mt-2 justify-center">
                <p className="flex-1 text-[#6A7373] text-[12px] 2xl:text-[16px] text-center border-b-[1px] border-[#869791] font-bold">
                  {item?.info}
                </p>
                <p className="flex-1 text-[#6A7373] text-[12px] 2xl:text-[16px] text-center border-b-[1px] border-[#869791] font-bold">
                  VIETNAM
                </p>
              </div>
              <div className="flex justify-between mt-2 mx-10 h-[30px]">
                <div className="flex items-center gap-2 w-fit">
                  <p className="font-light text-[12px] 2xl:text-[16px]">
                    {item.time}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[30px] text-[#0066b3]">
                    {item?.amount ? `$${item?.amount}` : ""}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 my-3 mx-10 text-center">
                <p className="flex gap-2 items-center">{item.content}</p>
              </div>

              <div className="flex justify-center">
                <div
                  role="button"
                  className="flex gap-2 items-center justify-center bg-[#0066B3] rounded-full p-[10px 24px 10px 24px] w-[177px] h-[48px] text-white mt-8"
                >
                  <span>See more</span>
                  <Image src={SeeMoreImage} alt="see-more" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex justify-center text-[20px] p-5 gap-x-5">
        <div
          onClick={handleClickPrev}
          className="px-4 py-4 border-[2px] border-[#F3F3F3] bg-[#869791] z-50 rounded-[30px] cursor-pointer"
        >
          <ArrowLeft color={"#fff"} />
        </div>
        <div
          onClick={handleClickPrev}
          className="px-4 py-4 border-[2px] border-[#F3F3F3] bg-[#869791] z-50 rounded-[30px] cursor-pointer"
        >
          <ArrowRight color={"#fff"} />
        </div>
      </div>
    </div>
  );
};

export default Index;
