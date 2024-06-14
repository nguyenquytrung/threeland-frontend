import TimnelineIcon from "@/assets/images/timelineIcon.svg";
import Image from "next/image";
import TimelineStep from "@/components/pages/destination-detail/TimelineStep";
import HaNoiArrival from "@/assets/images/hanoi-arrival.png";
const data = [
  {
    id: 1,
    date: "Day 1",
    image: HaNoiArrival,
    title: "HANOI – ARRIVAL",
    meals: "Meals:",
    mealsContent: "No meal included on this day.",
    hotel: "Overnight hotel in Hanoi:",
    hotelContent: "La Jardin Hotel Haute Couture",
    content: `Welcome to Hanoi The Capital City of Vietnam! Upon arrival, welcomed by the local tour guide and transferred to downtown to check in the hotel. 
The rest of the day is at your leisure to freshen up after a long flight and reset your bio-clock before gearing up for an interesting exploration ahead. The charming 
city of Hanoi with more than 1000 years old offers so many things for visitors to explore including 
of numerous cultural and historical sites, tree-lines streets and green lakes, strolling in the old quarters with series of local vendors selling multiple of goods, 
tasting wide selection of street foods like Pho (noodle) or Bun Cha, Banh Mi and different kinds of spring roll, check out the art gallery and some certain chill coffee shops, 
or just simply relax on a Cyclo around the streets to see the hectic pace of local life`,
  },
  {
    id: 2,
    date: "Day 2",
    image: HaNoiArrival,
    title: "HANOI CITY TOUR – NIGHT TRAIN TO LAO CAI",
    meals: "Meals:",
    mealsContent: "No meal included on this day.",
    hotel: "Overnight hotel in Hanoi:",
    hotelContent: "La Jardin Hotel Haute Couture",
    content: `Welcome to Hanoi The Capital City of Vietnam! Upon arrival, welcomed by the local tour guide and transferred to downtown to check in the hotel. 
The rest of the day is at your leisure to freshen up after a long flight and reset your bio-clock before gearing up for an interesting exploration ahead. The charming 
city of Hanoi with more than 1000 years old offers so many things for visitors to explore including 
of numerous cultural and historical sites, tree-lines streets and green lakes, strolling in the old quarters with series of local vendors selling multiple of goods, 
tasting wide selection of street foods like Pho (noodle) or Bun Cha, Banh Mi and different kinds of spring roll, check out the art gallery and some certain chill coffee shops, 
or just simply relax on a Cyclo around the streets to see the hectic pace of local life`,
  },
  {
    id: 3,
    date: "Day 3",
    image: HaNoiArrival,
    title:
      "LAO CAI – BAC HA – TREKING THRU THE HILL TRIBE VILLAGES TO LUNG PHINH",
    meals: "Meals:",
    mealsContent: "No meal included on this day.",
    hotel: "Overnight hotel in Hanoi:",
    hotelContent: "La Jardin Hotel Haute Couture",
    content: ``,
  },
  {
    id: 4,
    date: "Day 4",
    image: HaNoiArrival,
    title: "LUNG PHINH – THAI GIANG PHO",
    meals: "Meals:",
    mealsContent: "No meal included on this day.",
    hotel: "Overnight hotel in Hanoi:",
    hotelContent: "La Jardin Hotel Haute Couture",
    content: ``,
  },
  {
    id: 5,
    date: "Day 5",
    image: HaNoiArrival,
    title: "05 SAN CHU VAN – BAN LIEN",
    meals: "Meals:",
    mealsContent: "No meal included on this day.",
    hotel: "Overnight hotel in Hanoi:",
    hotelContent: "La Jardin Hotel Haute Couture",
    content: ``,
  },
  {
    id: 6,
    date: "Day 6",
    image: HaNoiArrival,
    title: "BAN LIEN – BAC HA – WEEKLY MARKET – NIGHT TRAIN BACK HANOI",
    meals: "Meals:",
    mealsContent: "No meal included on this day.",
    hotel: "Overnight hotel in Hanoi:",
    hotelContent: "La Jardin Hotel Haute Couture",
    content: ``,
  },
  {
    id: 7,
    date: "Day 7",
    image: HaNoiArrival,
    title: "LAN HA BAY/HA LONG BAY – NINH BINH",
    meals: "Meals:",
    mealsContent: "No meal included on this day.",
    hotel: "Overnight hotel in Hanoi:",
    hotelContent: "La Jardin Hotel Haute Couture",
    content: ``,
  },
  {
    id: 8,
    date: "Day 8",
    image: HaNoiArrival,
    title: "NINH BINH – TAM COC – BICH DONG – NIGHT TRAIN TO HUE",
    meals: "Meals:",
    mealsContent: "No meal included on this day.",
    hotel: "Overnight hotel in Hanoi:",
    hotelContent: "La Jardin Hotel Haute Couture",
    content: ``,
  },
  {
    id: 9,
    date: "Day 9",
    image: HaNoiArrival,
    title: "HUE – SIGHTSEEING",
    meals: "Meals:",
    mealsContent: "No meal included on this day.",
    hotel: "Overnight hotel in Hanoi:",
    hotelContent: "La Jardin Hotel Haute Couture",
    content: ``,
  },
];
const Timeline = () => {
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 col-span-2">
        {data.map((tour) => (
          <TimelineStep key={tour?.id} tour={tour} />
        ))}
      </ol>
    </>
  );
};
export default Timeline;
