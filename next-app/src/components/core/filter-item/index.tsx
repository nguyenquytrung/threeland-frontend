'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import RightArrowImage from '@/assets/images/right-slider-white.svg';
import { FilterOption } from '@/configs/destinationCountries';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Range = {
    title: string;
    from: string;
    to: string;
    fromKey?: string;
    toKey?: string;
};

type Props = {
    options: FilterOption[];
    title: string;
    defaultShow?: number;
    range?: Range;
    searchKey: string;
    allowSelectMultiple?: boolean;
};

const FilterItem = ({
    options,
    title,
    defaultShow,
    range,
    searchKey,
    allowSelectMultiple = true,
}: Props) => {

    const [isShowFull, setIsShowFull] = useState(false);
    const [selectedValues, setSelectedValues] = useState<number[]>([]);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const params = new URLSearchParams(searchParams);

    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);
    
    const showedOptions =
        defaultShow && !isShowFull ? options.slice(0, defaultShow) : options;

    const handleToggle = () => {
        setIsShowFull(!isShowFull);
    };

    useEffect(() => {
        if (!!range?.fromKey) {
            const from = params.get(range.fromKey);
            if (from) setFrom(Number(from));
        }
        if (!!range?.toKey) {
            const to = params.get(range.toKey);
            if (to) setTo(Number(to));
        }
        const values = params.get(searchKey);
        if (!values?.length) {
            params.delete(searchKey);
            return;
        }
        const v = values.split(',').map(v => Number(v));
        setSelectedValues(allowSelectMultiple ? v : [v[0]]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!selectedValues.length) {
            params.set(searchKey, '');
            params.delete('page');
            replace(`${pathname}?${params}`, { scroll: false });
            return;
        }
        const val = allowSelectMultiple ? selectedValues.join(',') : String(selectedValues[0]);
        params.set(searchKey, val);
        params.delete('page');

        replace(`${pathname}?${params}`, { scroll: false });
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedValues]);

    const handleChange = (checked: boolean, value: number) => {
        // params.delete('page');
        if (checked) {
            setSelectedValues(prev => allowSelectMultiple ? [...prev, value] : [value]);
            return;
        }
        setSelectedValues(prev => [...prev.filter(i => i !== value)]);
    }

    const handleChangeRange = () => {
        // params.delete('page');
        if (String(from) === params.get(range?.fromKey ?? '') && String(to) === params.get(range?.to ?? '')) return;

        if (from > 0) {
            params.set(range?.fromKey ?? '', String(from));
        } else {
            params.delete(range?.fromKey ?? '');
        }
        if (to > 0) {
            params.set(range?.toKey ?? '', String(to));
        } else {
            params.delete(range?.toKey ?? '');
        }

        replace(`${pathname}?${params}`, { scroll: false });
    }

    return (
        <div className=''>
            <h5 className='text-[20px] font-medium'>{title}</h5>
            <div className='mt-3 flex flex-col gap-3'>
                {showedOptions.map((item) => (
                    <div key={item.value} className='flex gap-2 items-center'>
                        <input type='checkbox' checked={selectedValues.includes(item.value)} onChange={(e) => handleChange(e.target.checked, item.value)} />
                        <p className='text-[#4A4A4A]'>{item.label}</p>
                        {item.count !== undefined && (
                            <p className='ml-auto text-[#9CA1A2]'>({item.count})</p>
                        )}
                    </div>
                ))}
            </div>
            {defaultShow && (
                <div
                    role='button'
                    onClick={handleToggle}
                    className='text-[#01B7F2] text-[13px] hover:underline mt-2'
                >
                    {isShowFull
                        ? `Hide ${options.length - defaultShow}`
                        : `Show ${options.length - defaultShow} more`}
                </div>
            )}
            {range && (
                <div className='mt-2'>
                    <p className='text-[14px] text-[#4A4A4A]'>{range.title}</p>
                    <div className='flex flex-wrap items-center gap-2 mt-2'>
                        <input
                            type='text'
                            className='text-[14px] border border-[#D2D6D9] rounded-[4px] h-[36px] w-[128px] max-w-[128px] px-2'
                            placeholder={range.from}
                            value={from > 0 ? from : ''}
                            onChange={(e) => setFrom(Number(e.target.value))}
                        />
                        <span className='text-[14px]'>to</span>
                        <input
                            type='text'
                            className='text-[14px] border border-[#D2D6D9] rounded-[4px] h-[36px] w-[128px] max-w-[128px] px-2'
                            placeholder={range.to}
                            value={to > 0 ? to : ''}
                            onChange={(e) => setTo(Number(e.target.value))}
                        />
                        <div
                            role='button'
                            className='bg-[#0066B3] w-[36px] h-[36px] rounded-[4px] flex items-center justify-center'
                            onClick={handleChangeRange}
                        >
                            <Image src={RightArrowImage} alt='right' />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterItem;
