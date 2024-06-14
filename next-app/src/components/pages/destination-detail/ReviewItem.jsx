import Image from "next/image";
import React from "react";
import ReactStars from 'react-stars'
const ReviewItem = ({ props }) => {
  const { id, content, star, avatar, desc, name } = props;
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
    <div className="p-[40px] mt-2 rounded-xl bg-white max-h-[360px] max-w-[400px] text-black">
      <div>
        <p>{content}</p>
        <div className="pt-6">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          value={2}
          activeColor="#ffd700"
        />
        </div>
        <div className="flex pt-6">
          <Image className="w-[56px] h-[56px] rounded-[50%] object-cover" src={avatar} alt="" />
          <div className="pl-4">
            <h2 className="font-bold text-[20px]">{name}</h2>
            <p>{desc}</p>
          </div>
        </div>
        <div>
          </div>
      </div>
    </div>
  );
};

export default ReviewItem;
