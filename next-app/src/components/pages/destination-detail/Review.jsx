  "use client";
  import Image from "next/image";
  import React, { useRef } from "react";
  import Slider from "react-slick";
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  import LeftSliderWhiteImage from '@/assets/images/left-slider-white.svg';
  import RightSliderWhiteImage from '@/assets/images/right-slider-white.svg';
  import ReviewItem from "@/components/pages/destination-detail/ReviewItem"
  import Avartar from "@/assets/images/avt.jpg";
  import Pen from "@/assets/images/pen.svg";

  const Review = () => {
    const slider = useRef()
    const settingsSellingTour = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: false,
    };
    const data = [
      {
        id: 1,
        content:"“Flow transformed my energy use. Efficient, green tech, outstanding service!”",
        star:4,
        avatar: Avartar,
        name: 'Jenny Wilson',
        desc: 'Solar energy service'
      },
      {
        id: 2,
        content:"“Flow transformed my energy use. Efficient, green tech, outstanding service!”",
        star:4,
        avatar: Avartar,
        name: 'Jenny Wilson',
        desc: 'Solar energy service'
      },
      {
        id: 3,
        content:"“Flow transformed my energy use. Efficient, green tech, outstanding service!”",
        star:4,
        avatar: Avartar,
        name: 'Jenny Wilson',
        desc: 'Solar energy service'
      },
      {
        id: 4,
        content:"“Flow transformed my energy use. Efficient, green tech, outstanding service!”",
        star:4,
        avatar: Avartar,
        name: 'Jenny Wilson',
        desc: 'Solar energy service'
      },
      {
        id: 5,
        content:"“Flow transformed my energy use. Efficient, green tech, outstanding service!”",
        star:4,
        avatar: Avartar,
        name: 'Jenny Wilson',
        desc: 'Solar energy service'
      },
      {
        id: 6,
        content:"“Flow transformed my energy use. Efficient, green tech, outstanding service!”",
        star:4,
        avatar: Avartar,
        name: 'Jenny Wilson',
        desc: 'Solar energy service'
      }
    ]
    const handleClickPrev = () => {
      // @ts-ignore
      slider?.current?.slickPrev();
    };

    const handleClickNext = () => {
      // @ts-ignore
      slider?.current?.slickNext();
    };
    return (
      <>
      <div className="flex items-center justify-between mx-20 px-4 py-5">
        <div>
        <h4 className="font-bold text-[48px] text-white">Customer Reviews
      <span className="font-bold text-[24px] ml-2">(15 review)</span></h4>
        </div>
        <div className="flex">
      <button 
      className="justify-center mr-[20px] px-[24px] py-[10px] gap-[8px] border-[#fff] border-[2px] rounded-[43px] flex items-center"
      onClick={handleClickPrev}><Image src={LeftSliderWhiteImage} alt="left"/></button>
        <button
        className=" justify-center px-[24px] py-[10px] gap-[8px] border-[#fff] border-[2px] rounded-[43px] flex items-center"
        onClick={handleClickNext}>Next<Image src={RightSliderWhiteImage} alt="right"/></button>
        </div>
      </div>
      <div className="slider-tour ml-20">
      <Slider
      ref={slider}
      {...settingsSellingTour}
      nextArrow={<button>next</button>}
    >
      {data.map((item, index) => (
        <ReviewItem props={item} key={index}/>
      ))}
    </Slider>
          <div className="ml-5 py-5">
            <button className="border border-white border-solid p-2 rounded-[25px] flex items-center">
              Write a review
              <Image className="rounded-[50%] ml-2" src={Pen} alt=""></Image>
              </button>
          </div>
      </div>
      </>
    );
  };

  export default Review;
