import TourItem from '../../tour/TourItem';
import Tour from '@/lib/models/tour';
import Helper from '@/lib/utils/helper';
import routes from '@/configs/apiRoutes';

const getData = async (): Promise<Tour[]> => {
    try {
        const apiUrl = Helper.apiRoutes(routes.tours.mekongTours);

        const res = await fetch(apiUrl, {
            next: {
                revalidate: 3600,
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

const BestTourInHalong = async () => {

    const tours = await getData();

    return (
        <section className='px-[24px] sm:px-[50px] lg:px-[100px] pb-[2rem] pt-[clamp(1rem,7vw,7rem)]'>
            <div className='grid min-[560px]:grid-cols-2 min-[878px]:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8'>
                {tours.map((tour) => (
                    <TourItem tour={tour} key={tour.id} />
                ))}
            </div>
            {/* <div className='hover:bg-[#f1f1f1] transition-all flex w-fit mx-auto mt-6 border-[1px] px-5 py-3 border-[#E6E8E8] rounded-[8px] cursor-pointer'>
                <p className='text-center text-[18px]'>View more</p>
                <Image
                    src={ArrowDown}
                    alt='x-mark'
                    className='w-3 h-3 mx-2 self-center'
                />
            </div> */}
        </section>
    );
};

export default BestTourInHalong;
