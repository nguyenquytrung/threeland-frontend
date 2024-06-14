    "use client";
    import Image from "next/image";
    import React, { useRef } from "react";
    import Slider from "react-slick";
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';
    import LeftSliderWhiteImage from '@/assets/images/left-slider-white.svg';
    import RightSliderWhiteImage from '@/assets/images/right-slider-white.svg';
    import TourItem from "@/components/pages/destination-detail/TourItem"
    const Tour = () => {
    const slider = useRef();
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
            title: "Essential Vietnam with Sapa",
            address: "Saigon – Mekong Delta – Hoi An – Hue – Hanoi – Sapa – Halong Bay",
            time: "8Day 9Night",
            vote: 4.5,
            review: 2500,
            price: 150,
            oldPrice: 200,
            image:""
        },
        {
            title: "Essential Vietnam with Sapa",
            address: "Saigon – Mekong Delta – Hoi An – Hue – Hanoi – Sapa – Halong Bay",
            time: "8Day 9Night",
            vote: 4.5,
            review: 2500,
            price: 150,
            oldPrice: 200,
            image:""
        },
        {
            title: "Essential Vietnam with Sapa",
            address: "Saigon – Mekong Delta – Hoi An – Hue – Hanoi – Sapa – Halong Bay",
            time: "8Day 9Night",
            vote: 4.5,
            review: 2500,
            price: 150,
            oldPrice: 200,
            image:""
        },
        {
            title: "Essential Vietnam with Sapa",
            address: "Saigon – Mekong Delta – Hoi An – Hue – Hanoi – Sapa – Halong Bay",
            time: "8Day 9Night",
            vote: 4.5,
            review: 2500,
            price: 150,
            oldPrice: 200,
            image:""
        }
    ]
    return (
        <>
        <div className=" mx-20 py-5 bg-white ">
            <div>
            <h4 className="font-bold text-[48px]">
            YOU WILL ALSO LIKE
            </h4>
            </div>
            <div className="flex grid-cols-4 gap-4">
            {data.map((item, index) => (
                <TourItem key={index}/>
            ))}
            </div>
            <div className="ml-5 py-5">
            <button className="border border-white border-solid p-2 rounded-[25px] flex items-center">
            </button>
            </div>
        </div>
        </>
    );
    };

    export default Tour;
