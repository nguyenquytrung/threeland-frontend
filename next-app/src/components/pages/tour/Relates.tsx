import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TourItem from "./TourItem"
import Tour from "@/lib/models/tour";
import Helper from "@/lib/utils/helper";
import routes from "@/configs/apiRoutes";

const getData = async (id: number): Promise<Tour[]> => {
    try {
        const apiUrl = Helper.apiRoutes(routes.tours.relates + id);
        console.log(apiUrl);

        const res = await fetch(apiUrl, {
            next: {
                revalidate: 0,
            }
        });

        if (!res.ok) {
            console.error(
                `Error fetching data: ${res.statusText} (status: ${res.status})`,
            );
            throw new Error('Server Error');
        }

        return res.json()
    } catch (error) {
        console.log(error);
        throw error;
    }
};

type Props = {
    id: number
}

const Relates = async ({ id }: Props) => {
    const tours = await getData(id);

    return (
        <>
            <div className=" mx-20 py-5 bg-white ">
                <div>
                    <h4 className="font-bold text-[48px]">
                        YOU WILL ALSO LIKE
                    </h4>
                </div>
                <div className="flex grid-cols-4 gap-4">
                    {tours.map((tour, index) => (
                        <TourItem key={index} tour={tour} />
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

export default Relates;
