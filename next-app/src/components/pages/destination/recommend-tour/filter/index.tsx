import Image from 'next/image';
import React from 'react';

import FilterByImage from '@/assets/images/filter-by.svg';
import Helper from '@/lib/utils/helper';
import routes from '@/configs/apiRoutes';
import DESTINATION_COUNTRY, { FilterOption } from '@/configs/destinationCountries';
import FilterItem from '@/components/core/filter-item';

type Props = {
    className?: string;
    countryId: DESTINATION_COUNTRY;
};

type DataResponse = {
    durations: FilterOption[],
    destinations: FilterOption[],
    travelStyles: FilterOption[],
    styles: FilterOption[],
    prices: FilterOption[],
}

const getData = async (countryId: DESTINATION_COUNTRY): Promise<DataResponse> => {
    try {
        const apiUrl = Helper.apiRoutes(routes.destinations.filterConfig + countryId);

        const res = await fetch(apiUrl, {
            next: {
                revalidate: 0
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

const Filter = async ({ className = '', countryId }: Props) => {

    const { durations, destinations, travelStyles, prices, styles } = await getData(countryId);

    return (
        <div className={`max-w-[414px] min-w-[256px] ${className}`}>
            <div className='flex items-center gap-2 bg-[#0066B3] p-3 text-white'>
                <Image src={FilterByImage} alt='filter-by' />
                <p className='text-[20px]'>Filter by</p>
            </div>

            <div className='flex flex-col gap-6 p-5 pt-3 border border-[#F3F3F3]'>
                <FilterItem title='DURATION' options={durations} searchKey={'duration'} allowSelectMultiple={false} />
                <FilterItem title='DESTINATION' options={destinations} defaultShow={4} searchKey={'destination'} />
                <FilterItem title='TRAVEL STYLE' options={travelStyles} searchKey={'travel_style'} />
                <FilterItem
                    title='PRICE PER PAX'
                    options={prices} range={{
                        title: 'Yout Budget',
                        from: 'Min',
                        to: 'Max',
                        fromKey: 'price_from',
                        toKey: 'price_to',
                    }}
                    searchKey={'price_type'}
                    allowSelectMultiple={false}
                />
                <FilterItem title='THEME' options={styles} searchKey={'style'} />
            </div>
        </div>
    );
};

export default Filter;
