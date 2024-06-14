import Image from "next/image";

import cotCoHaNoi from "@/assets/images/destination/Hanoi-Flag-Tower.jpg";
import iconActivities from "@/assets/images/destination/iconActiviti.jpg";
import icon1 from "@/assets/images/destination/icon1.png";
import icon2 from "@/assets/images/destination/icon2.png";
import icon3 from "@/assets/images/destination/icon3.png";
import icon4 from "@/assets/images/destination/icon4.png";

const Index = () => {
  return (
    <div className="min-[1500px]:mx-[30%] 2xl:mx-[20%] xl:mx-[15%] lg:mx-[10%] md:mx-[5%] sm:mx-[3%] mx-5 text-[#555] mt-10">
      <div className="flex justify-center">
        <Image
          src={iconActivities}
          alt="who-we-are"
          className="flex-1 w-[100%] max-w-[40px] h-[40px] object-cover  self-center"
        />
        <h3 className="text-center text-[36px] px-5">Activities</h3>
      </div>
      <div className="flex justify-center">
        <Image
          src={cotCoHaNoi}
          alt="who-we-are"
          className="flex-1 w-[100%] max-w-[30px] h-[30px] object-cover"
        />
        <p className="px-5 text-center leading-10">
          Our pick: Spend 2 day exploring Hanoi old quarter, then enjoying two
          or three days in Halong Bay for sea cruising, and taking one or
          two-day discovery of Ninh Binh karst and water land with bamboo rowing
          boat.
        </p>
      </div>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center mt-10 gap-x-5">
        <div className="flex flex-1 flex-col text-center">
          <Image
            src={icon1}
            alt="who-we-are"
            className="flex-1 w-[100%] max-w-[40px] max-h-[40px] object-cover self-center mb-5"
          />
          <p className="font-bold">HUB FOR OVERLAND</p>
          <p className="leading-10">
            Beside many choices for Hanoi city tour, departure for venturing
            into mountains, countryside and coastal areas.
          </p>
        </div>
        <div className="flex flex-1 flex-col text-center">
          <Image
            src={icon2}
            alt="who-we-are"
            className="flex-1 w-[100%] max-w-[40px] max-h-[40px] object-cover self-center mb-5"
          />
          <p className="font-bold">CULTURE VISITS IN HANOI</p>
          <p className="leading-10">
            Best Hanoi culture tours are inclusive of the best museums, most
            ancient temples, and city lakes for hang-around.
          </p>
        </div>
        <div className="flex flex-1 flex-col text-center">
          <Image
            src={icon3}
            alt="who-we-are"
            className="flex-1 w-[100%] max-w-[40px] max-h-[40px] object-cover self-center mb-5"
          />
          <p className="font-bold">NIGHTLIFE IN HANOI</p>
          <p className="leading-10">
            Night life after a city tour in Hanoi at the Old Quarter with bars,
            pubs, on-street shows, contemplation of daily traditional My village
            and Water puppetry shows.
          </p>
        </div>
        <div className="flex flex-1 flex-col text-center">
          <Image
            src={icon4}
            alt="who-we-are"
            className="flex-1 w-[100%] max-w-[40px] max-h-[40px] object-cover self-center mb-5"
          />
          <p className="font-bold">MICE AND THEME TOURS</p>
          <p className="leading-10">
            First class services for MICE. Departure for theme tours,
            educational tours, charity and meditation tours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
