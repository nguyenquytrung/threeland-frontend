import Image from "next/image";
import React from "react";

const InputBook = ({ image, placeholder, title }) => {
  return (
    <div>
      <h4 className="font-medium text-[14px] mt-5 mb-2">{title}</h4>
      <div className="relative w-full">
        <input
          type="text"
          placeholder=""
          className="w-full border border-gray-300 rounded-md pl-2 py-2"
          id="textInput"
        />
        <label
          htmlFor="textInput"
          className="absolute inset-y-0 left-0 pl-3 flex items-center"
        >
          <Image src={image} className="h-5 w-5" alt="" />
          <span className="pl-2 text-gray-400">{placeholder}</span>
        </label>
      </div>
    </div>
  );
};

export default InputBook;
