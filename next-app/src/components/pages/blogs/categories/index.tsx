"use client";

import Category from '@/lib/models/category';

type Props = {
  categories: Category[],
  categoryId: number,
  onChange: (categoryId: number) => void,
}

const Index = ({ categories, categoryId, onChange }: Props) => {

  return (
    <div className='lg:min-w-[clamp(300px,30vw,500px)]'>
      <div className='px-5 text-[24px] text-[#FFFFFF] bg-[#0066B3] h-[70px] leading-[70px]'>
        <p className='font-medium'>CATEGORIES</p>
      </div>
      <div className='border-[2px] border-[#E6E8E8] px-2'>
        {categories.map((item: Category) => (
          <div key={item.id} className='flex py-5 cursor-pointer' onClick={() => onChange(item.id ?? 0)}>
            <p className='flex-1 text-[20px] text-[#4A4A4A] font-medium'>
              {item.name}
            </p>
            <p>({item.blogs_count})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
