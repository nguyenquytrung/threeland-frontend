
import ListRecommendTour from '@/components/list-recommend-tour';
import DESTINATION_COUNTRY from '@/configs/destinationCountries';
import dynamic from 'next/dynamic';

import { PaginationComp } from '@/components/core/pagination';
import Helper from '@/lib/utils/helper';
import routes from '@/configs/apiRoutes';
import Pagination from '@/lib/data/pagination';

const Filter = dynamic(() => import('./filter'), {
        loading: () => <div>Loading...</div>
    }
)

type Props = {
    title?: string;
    countryId: DESTINATION_COUNTRY,
    searchParams: { [key: string]: string | string[] | undefined }
}

const getData = async (countryId: DESTINATION_COUNTRY, searchParams: { [key: string]: string | string[] | undefined }): Promise<Pagination> => {
    try {
        const apiUrl = Helper.apiRoutes(routes.tours.destination + countryId) + Helper.objectToParams(searchParams);

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

const RecommendTour = async ({
    title = 'Top Recommended Vietnam Tour Packages',
    countryId,
    searchParams,
}: Props) => {
    const pagination = await getData(countryId, searchParams);

    return (
        <section className='flex gap-6 px-[24px] sm:px-[50px] lg:px-[100px] 2xl:max-w-[1584px] mx-auto w-full py-10'>
            <Filter
                className='hidden min-[1180px]:block w-[30%]'
                countryId={countryId}
            />
            <div className='flex-1'>
                <ListRecommendTour title={title} tours={pagination.data} />
                <PaginationComp pagination={pagination} className='mt-4' />
            </div>
        </section>
    );
};

export default RecommendTour;
