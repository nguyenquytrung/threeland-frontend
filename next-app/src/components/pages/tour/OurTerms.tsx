"use client";
import Image from "next/image";
import React, { useRef } from "react";
import hiddenIcon from "@/assets/images/iconHidden.svg";
import addIcon from "@/assets/images/addIcon.svg";
import Tour from "@/lib/models/tour";
import DOMPurify from "isomorphic-dompurify";

type Props = {
    tour: Tour,
}

const OurTerms = ({ tour }: Props) => {
    const includedRef = useRef<HTMLDivElement>(null);
    const notIncludeRef = useRef<HTMLDivElement>(null);
    const handleToggleItem = (isShow: boolean) => {
        includedRef.current?.setAttribute(
            "style",
            `display: ${isShow ? "block" : "none"}`
        );
        notIncludeRef.current?.setAttribute(
            "style",
            `display: ${isShow ? "none" : "block"}`
        );
    };
    return (
        <>
            <h2 className="font-bold text-[48px] mx-[20px] p-4">Our terms</h2>
            <div>
                <div className=" mt-2 mx-[20px] p-4">
                    <div className="flex items-center justify-between">
                        <h4 className="text-[#1F1F1F] font-semibold text-[24px]">
                            What’s included
                        </h4>
                        <div className="">
                            <input
                                type="radio"
                                name="inputcheck"
                                className="hidden toggle-checkbox"
                                id="toggle_label1"
                                defaultChecked
                                onChange={(e) => {
                                    handleToggleItem(e.target.checked);
                                }}
                            />
                            <label className="cursor-pointer" htmlFor="toggle_label1">
                                <Image className="hidden" src={hiddenIcon} alt="hidden" />
                                <div className="mr-[10px]">
                                    <Image className="show" src={addIcon} alt="add" />
                                </div>              </label>
                        </div>
                    </div>
                    <hr className="detail_ourterms mt-2 border-[#DADADA] border-[1px]" />
                    <div ref={includedRef} className="min-h-[250px]" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(tour.include ?? '')}}>
                        
                    </div>
                </div>
                <div className=" mt-2 mx-[20px] p-4">
                    <div className="flex items-center justify-between">
                        <h4 className="text-[#1F1F1F] font-semibold text-[24px]">
                            What’s not included
                        </h4>
                        <div className="">
                            <input
                                className="hidden toggle-checkbox"
                                type="radio"
                                name="inputcheck"
                                id="toggle_label2"
                                onChange={(e) => {
                                    handleToggleItem(!e.target.checked);
                                }}
                            />
                            <label className="cursor-pointer" htmlFor="toggle_label2">
                                <Image className="hidden" src={hiddenIcon} alt="hidden" />
                                <div className="mr-[10px]">
                                    <Image className="show" src={addIcon} alt="add" />
                                </div>
                            </label>
                        </div>
                    </div>
                    <hr className="detail_ourterms mt-2 border-[#DADADA] border-[1px]" />
                    <div ref={notIncludeRef} className="hidden min-h-[250px]" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(tour.exclude ?? '')}}>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurTerms;
