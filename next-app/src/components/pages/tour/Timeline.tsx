import TimelineStep from "./TimelineStep";
import Itinerary from "@/lib/models/itinerary";

type Props = {
  itineraries: Itinerary[],
}

const Timeline = ({ itineraries } : Props) => {
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 col-span-2">
        {itineraries.map((itinerary) => (
          <TimelineStep key={itinerary?.id} itinerary={itinerary} />
        ))}
      </ol>
    </>
  );
};
export default Timeline;
