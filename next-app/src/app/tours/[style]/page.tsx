import Banner from '@/components/core/banner';
import RecommendTour from '@/components/pages/style/recommend-tour';
import GotQuestion from '@/components/pages/destination/got-question';
import routes from '@/configs/apiRoutes';
import Style from '@/lib/models/style';
import Helper from '@/lib/utils/helper';
import { Metadata } from 'next';

export async function generateMetadata({
    params,
}: {
    params: { style: string };
}): Promise<Metadata> {
    const style = await getStyle(params.style);

    return {
        title: style.meta_title ?? style.name,
        applicationName: 'Threeland Travel',
        description: style.meta_description,
        keywords: style.meta_keywords,
    };
}

const getStyle = async (slug: string): Promise<Style> => {
    try {
        const apiUrl = Helper.apiRoutes(routes.styles.detail + slug);

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

export const revalidate = 0;

const Page = async ({ params, searchParams }: { params: { style: string }, searchParams: { [key: string]: string | string[] | undefined } }) => {

    const style = await getStyle(params.style);

    return (
        <main className=''>
            <Banner
                title='Talk to our local expert directly'
                url='tour-style-banner.png'
                titleWidth='760px'
            />

            {/* Recommend Tour Section */}
            <RecommendTour style={style} searchParams={searchParams} />

            {/* Got Question Section */}
            <GotQuestion />
        </main>
    );
};

export default Page;
