import Review from "@/lib/models/review";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import React from "react";
//@ts-ignore
import ReactStars from 'react-stars'

type Props = {
    review: Review
}

const ReviewItem = ({ review }: Props) => {
    
    const ratingChanged = (newRating: number) => {

    }
    return (
        <div className="p-[40px] mt-2 rounded-xl bg-white max-h-[360px] max-w-[400px] text-black">
            <div>
                <div className=" line-clamp-4" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(review.content ?? '')}}></div>
                <div className="pt-6">
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        value={review.score}
                        activeColor="#ffd700"
                        edit={false}
                        half={false}
                    />
                </div>
                <div className="flex pt-6">
                    <Image
                        className="w-[56px] h-[56px] rounded-[50%] object-cover"
                        src={review.avatar ?? ''}
                        alt={review.author ?? ''}
                        width={56}
                        height={56}
                    />
                    <div className="pl-4 flex flex-col justify-center">
                        <h2 className="font-bold text-[20px]">{review.author}</h2>
                        {/* <p>{desc}</p> */}
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
