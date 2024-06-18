'use client';
import { useState } from 'react';
import Image from 'next/image';

import ArrowDown from '@/assets/images/blogs/arrow_left_alt.svg';

import BlogItem from './blog-item';
import Link from 'next/link';
import countries from '@/configs/countries';
import Blog from '@/lib/models/blog';
import Pagination from '@/lib/data/pagination';
import Helper from '@/lib/utils/helper';
import routes from '@/configs/apiRoutes';

type Props = {
  initialList: Pagination,
  onChange?: (id: number) => void,
}

const Tag = ({ initialList, onChange }: Props) => {
  const [tag, setTag] = useState(countries[0]);
  const [list, setList] = useState<Pagination>(new Pagination(initialList));
  const [loading, setLoading] = useState(false);

  const onChangeTag = async (newTag: any) => {
    if (tag.id === newTag.id) return;
    
    setTag(newTag);
    onChange?.(newTag.id);

    setLoading(true);
    const res = await fetch(Helper.apiRoutes(routes.blogs.list) + `?country=${newTag.id}`);
    setLoading(false);
    if (!res.ok) {
      console.log(res.statusText);
      throw new Error('Server Error');
    }
    const data = await res.json();
    setList(new Pagination(data));
  }

  const onViewMore = async () => {
    setLoading(true);
    const res = await fetch(Helper.apiRoutes(routes.blogs.list) + `?cursor=${list.meta.next_cursor}&country=${tag.id}`);
    setLoading(false);
    if (!res.ok) {
      console.log(res.statusText);
      throw new Error('Server Error');
    }
    const data = await res.json();
    const newList = new Pagination(data);
    newList.data = [...list.data, ...newList.data];
    setList(newList);
  }

  return (
    <div className='sm:px-[50px] lg:px-[100px]'>
      <p className='text-[48px] font-bold text-[#071516]'>
        Ultimate Travel Guides In Indochina
      </p>
      <div className='flex flex-wrap mt-4 mb-7'>
        {countries.map((item, index) => (
          <p
            key={`${item.id}${index}`}
            onClick={() => onChangeTag(item)}
            className={`border-[${
              tag.id === item.id ? '#0066B3' : '#9CA1A2'
            }] mr-3 text-[${
              tag.id === item.id ? '#FFFFFF' : '#9CA1A2'
            }] rounded-[5px] border-[1px] px-4 py-1 bg-[${
              tag.id === item.id ? '#0066B3' : '#ffffff'
            }] cursor-pointer uppercase`}
          >
            {item.name}
          </p>
        ))}
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 auto-rows-max`}
      >
        {list.data.map((item: Blog, index: number) => {
          const className = index % 2 ? 'h-[512px]' : 'h-[277px]';

          return (
            <Link href={`/blogs/${item.slug}`} className='' role='button' key={item.id}>
              <BlogItem item={item} classNameAvt={className} />
            </Link>
          )
        })}
      </div>
      <div className='flex justify-center m-4 my-20'>
        {list.hasMoreCursor() &&
          <button
            disabled={loading}
            className='hover:bg-[#f1f1f1] transition-all flex border-[1px] px-5 py-3 border-[#E6E8E8] rounded-[8px] cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed'
            onClick={() => onViewMore()}
          >
            <p className='text-center text-[18px]'>View more</p>
            <Image
              src={ArrowDown}
              alt='x-mark'
              className='w-3 h-3 mx-2 self-center'
            />
          </button>}
      </div>
    </div>
  );
};

export default Tag;
