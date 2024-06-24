'use client';

import Image from 'next/image';

import ArrowDown from '@/assets/images/blogs/arrow_left_alt.svg';

import BlogItem from '@/components/pages/blogs/blog-item';
import Pagination from '@/lib/data/pagination';
import { useState } from 'react';
import Categories from '../categories';
import Category from '@/lib/models/category';
import Blog from '@/lib/models/blog';
import Helper from '@/lib/utils/helper';
import routes from '@/configs/apiRoutes';
import Link from 'next/link';

type Props = {
  initialList: Pagination;
  categories: Category[];
};

const Index = ({ initialList, categories }: Props) => {
  const [list, setList] = useState<Pagination>(new Pagination(initialList));
  const [loading, setLoading] = useState(false);
  const [categoryId, setCategoryId] = useState(0);

  const onViewMore = async () => {
    setLoading(true);
    const res = await fetch(
      Helper.apiRoutes(routes.blogs.list) +
        `?cursor=${list.meta.next_cursor}&category=${categoryId}`,
    );
    setLoading(false);
    if (!res.ok) {
      console.log(res.statusText);
      throw new Error('Server Error');
    }
    const data = await res.json();
    const newList = new Pagination(data);
    newList.data = [...list.data, ...newList?.data];
    setList(newList);
  };

  const onChangeCategory = async (catId: number) => {
    if (categoryId === catId) return;

    setCategoryId(catId);

    setLoading(true);
    const res = await fetch(
      Helper.apiRoutes(routes.blogs.list) + `?category=${catId}`,
    );
    setLoading(false);
    if (!res.ok) {
      console.log(res.statusText);
      throw new Error('Server Error');
    }
    const data = await res.json();
    setList(new Pagination(data));
  };

  return (
    <div
      className={`flex justify-between lg:flex-row flex-col px-[24px] sm:px-[50px] lg:px-[100px] mt-20`}
    >
      <div className='lg:mr-[clamp(1rem,3vw,5rem)]'>
        <p className='text-[48px] font-bold'>All articles</p>
        <div className='grid lg:grid-cols-1 grid-cols-2 gap-6'>
          {list?.data?.map((item: Blog) => (
            <Link
              key={item.id}
              className={`py-10 flex min-[1760px]:flex-row flex-col items-center lg:items-start`}
              href={`/blogs/${item.slug}`}
            >
              <BlogItem
                item={item}
                classNameAvt={`w-[557px] h-[300px] object-cover min-[1441px]:mr-10`}
              />
            </Link>
          ))}
        </div>
        <div className='flex justify-center m-4 my-20'>
          {list.hasMoreCursor() && (
            <button
              className='hover:bg-[#f1f1f1] transition-all flex border-[1px] px-5 py-3 border-[#E6E8E8] rounded-[8px] cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed'
              onClick={() => onViewMore()}
              disabled={loading}
            >
              <p className='text-center text-[18px]'>View more</p>
              <Image
                src={ArrowDown}
                alt='x-mark'
                className='w-3 h-3 mx-2 self-center'
              />
            </button>
          )}
        </div>
      </div>
      <Categories
        categories={categories}
        categoryId={categoryId}
        onChange={onChangeCategory}
      />
    </div>
  );
};

export default Index;
