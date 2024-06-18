import routes from '@/configs/apiRoutes';
import BlogItem from './blog-item';
import Helper from '@/lib/utils/helper';
import Blog from '@/lib/models/blog';
import Link from 'next/link';

const getData = async () => {
    const res = await fetch(Helper.apiRoutes(routes.blogs.highlights));
    if (!res.ok) {
        console.log(res.statusText);
        throw new Error('Server Error');
    }
    const data = await res.json();

    return data.mostViewed;
}

const List = async () => {

    const list: Blog[] = await getData();

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-4'>
            {list.map(
                (item, index) =>
                    index < 3 && (
                        <Link
                            key={item.id}
                            className={`flex 2xl:flex-row flex-col gap-4 my-7`}
                            href={`/blogs/${item.slug}`}
                        >
                            <BlogItem
                                item={item}
                                classNameAvt={`2xl:w-[276px] h-[216px] object-cover rounded-[8px]`}
                                isContent={false}
                            />
                        </Link>
                    ),
            )}
        </div>
    )
}

export default List;