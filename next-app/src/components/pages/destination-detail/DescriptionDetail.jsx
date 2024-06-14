import Image from "next/image";
import React from "react";

const DescriptionDetail = ({ image, title, description }) => {
  return (
    <div className="description_details">
      <Image src={image} alt="Clock-detail" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default DescriptionDetail;
