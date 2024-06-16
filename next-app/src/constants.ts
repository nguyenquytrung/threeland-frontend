import TopSellingTourImage from '@/assets/images/tour-style-tooltip/tour-style.png';
import DayTripsImage from '@/assets/images/tour-style-tooltip/day-trips.png';
import CityBreaksImage from '@/assets/images/tour-style-tooltip/city-breaks.png';
import ThemeToursImage from '@/assets/images/tour-style-tooltip/theme-tours.png';
import ClassicToursImage from '@/assets/images/tour-style-tooltip/classic-tours.png';
import CruisesAndSeaImage from '@/assets/images/tour-style-tooltip/cruises-and-sea.png';
import HoneymoonImage from '@/assets/images/tour-style-tooltip/honeymoon.png';
import NatureAndWildlifeImage from '@/assets/images/tour-style-tooltip/nature-and-wildlife.png';
import DailyDepartureImage from '@/assets/images/tour-style-tooltip/daily-departure.png';
import BeachHolidaysImage from '@/assets/images/tour-style-tooltip/beach-holidays.png';
import ActiveAdventureImage from '@/assets/images/tour-style-tooltip/active-adventure.png';
import SpecialToursImage from '@/assets/images/tour-style-tooltip/special-tours.png';
import VietnamTourImage from '@/assets/images/tour-style-tooltip/vietnam-tour.jpeg';
import LaosTourImage from '@/assets/images/tour-style-tooltip/laos-tour.jpeg';
import CambodiaTourImage from '@/assets/images/tour-style-tooltip/cambodia-tour.jpeg';
import MyanmarTourImage from '@/assets/images/tour-style-tooltip/myanmar-tour.jpeg';
import ThailandTourImage from '@/assets/images/tour-style-tooltip/thailand-tour.jpeg';

export const tourStyleTooltip = [
  { id: 0, img: TopSellingTourImage, name: 'Top Selling Tour' },
  { id: 1, img: DayTripsImage, name: 'Day Trips' },
  { id: 2, img: CityBreaksImage, name: 'City Breaks' },
  { id: 3, img: ThemeToursImage, name: 'Theme Tours' },
  { id: 4, img: ClassicToursImage, name: 'Classic Tours' },
  { id: 5, img: CruisesAndSeaImage, name: 'Cruises And Sea' },
  { id: 6, img: HoneymoonImage, name: 'Honeymoon' },
  { id: 7, img: NatureAndWildlifeImage, name: 'Nature And Wildlife' },
  { id: 8, img: DailyDepartureImage, name: 'Daily Departure' },
  { id: 9, img: BeachHolidaysImage, name: 'Beach Holidays' },
  { id: 10, img: ActiveAdventureImage, name: 'Active & Adventure' },
  { id: 11, img: SpecialToursImage, name: 'Special Tours' },
];

export const tourStyleCountriesTooltip = [
  {
    id: 0,
    img: VietnamTourImage,
    name: 'Vietnam Tours',
    route: '/vietnam-tours',
  },
  {
    id: 1,
    img: LaosTourImage,
    name: 'Cambodia Tours',
    route: '/cambodia-tours',
  },
  { id: 2, img: CambodiaTourImage, name: 'Laos Tours', route: '/laos-tours' },
  {
    id: 3,
    img: MyanmarTourImage,
    name: 'Myanmar Tours',
    route: '/myanmar-tours',
  },
  {
    id: 4,
    img: ThailandTourImage,
    name: 'Thailand Tours',
    route: '/thailand-tours',
  },
];

export const extrasTooltip = [
  { id: 0, img: VietnamTourImage, name: 'Halong Bay Cruises' },
  { id: 1, img: LaosTourImage, name: 'Mekong River Cruises' },
  { id: 2, img: CambodiaTourImage, name: 'Hotel Booking' },
  { id: 3, img: MyanmarTourImage, name: 'And-On Service' },
];
