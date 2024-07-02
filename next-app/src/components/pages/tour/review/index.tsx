"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftSliderWhiteImage from '@/assets/images/left-slider-white.svg';
import RightSliderWhiteImage from '@/assets/images/right-slider-white.svg';
import ReviewItem from "./Item"
import Pen from "@/assets/images/pen.svg";
import ReviewModel from "@/lib/models/review";

type Props = {
    reviews: ReviewModel[],
}

const Review = ({ reviews }: Props) => {
    const slider = useRef<any>()
    const settingsSellingTour = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
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
        <>
            <div className="flex items-center justify-between mx-20 px-4 py-5">
                <div>
                    <h4 className="font-bold text-[48px] text-white">Customer Reviews
                        <span className="font-bold text-[24px] ml-2">({reviews.length} review)</span></h4>
                </div>
                <div className="flex">
                    <button
                        className="justify-center mr-[20px] px-[24px] py-[10px] gap-[8px] border-[#fff] border-[2px] rounded-[43px] flex items-center"
                        onClick={handleClickPrev}><Image src={LeftSliderWhiteImage} alt="left" /></button>
                    <button
                        className=" justify-center px-[24px] py-[10px] gap-[8px] border-[#fff] border-[2px] rounded-[43px] flex items-center"
                        onClick={handleClickNext}>Next<Image src={RightSliderWhiteImage} alt="right" /></button>
                </div>
            </div>
            <div className="slider-tour ml-20">
                <Slider
                    ref={slider}
                    {...settingsSellingTour}
                    nextArrow={<button>next</button>}
                >
                    {reviews.map((item) => (
                        <ReviewItem review={item} key={item.id} />
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
