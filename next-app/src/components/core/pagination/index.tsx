"use client";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/core/ui/pagination';
import BasePagination from '@/lib/data/pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {
    className?: string,
    pagination: BasePagination
}

const scrollHeight = 700;

export function PaginationComp({ className, pagination }: Props) {

    const [page, setPage] = useState(pagination.meta.current_page);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { push } = useRouter();
    const params = new URLSearchParams(searchParams);

    useEffect(() => {
        const page = params.get('page');
        if (!page || page == '1') {
            params.delete('page');
            setPage(1);
            return;
        }
        setPage(Number(page));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.get('page')]);

    useEffect(() => {
        if (!page || page == 1) {
            params.delete('page');
            push(`${pathname}?${params}`, { scroll: false });
            return;
        }
        params.set('page', String(page));

        push(`${pathname}?${params}`, { scroll: false });
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handlePrev = () => {
        if (page === 1) return;
        setPage(prev => prev - 1);
        window.scrollTo({top: scrollHeight, behavior: 'smooth'});
    }

    const handleNext = () => {
        if (page === pagination.meta.last_page) return;
        setPage(prev => prev + 1);
        window.scrollTo({top: scrollHeight, behavior: 'smooth'});
    }

    const handleMove = (p: number) => {
        if (p === page) return;
        setPage(p);
        window.scrollTo({top: scrollHeight, behavior: 'smooth'});
    }

    return (
        <Pagination className={className}>
            <PaginationContent>
                {pagination.meta.links?.map((v, idx) => (
                    <PaginationItem key={idx}>
                        {idx === 0 && <PaginationPrevious onClick={handlePrev} className={page === 1 ? ' cursor-not-allowed opacity-70' : ' cursor-pointer'} />}
                        {idx === ((pagination.meta.links?.length ?? 0) - 1) && <PaginationNext onClick={handleNext} className={page === pagination.meta.last_page ? ' cursor-not-allowed opacity-70' : ' cursor-pointer'} />}
                        {v.label === '...' && <PaginationEllipsis />}
                        {
                            (idx > 0 && idx < (pagination.meta.links?.length ?? 0) - 1 && v.label !== '...') &&
                            <PaginationLink onClick={() => handleMove(Number(v.label))} isActive={v.active} className={v.active ? ' cursor-not-allowed' : 'cursor-pointer'}>{v.label}</PaginationLink>
                        }
                    </PaginationItem>
                ))}
            </PaginationContent>
        </Pagination>
    );
}
