class Pagination {
    data?: any;
    links?: Object;
    meta: {
        current_page: number;
        from?: number;
        last_page: number;
        per_page: number;
        to?: number;
        total: number;
        next_cursor?: string | null;
    }

    constructor(data: any) {
        this.data = data.data;
        this.links = data.links;
        this.meta = data.meta;
    }

    hasPaginate(): boolean {
        return this.meta.total > this.meta.per_page;
    }

    hasMore(): boolean {
        return this.data.length == this.meta.per_page;
    }

    hasMoreCursor(): boolean {
        return !!this.meta?.next_cursor;
    }

    formatToAntPagination(pagination: any) {
        pagination.total = this.meta.total;
        pagination.current = this.meta.current_page;
        pagination.pageSize = this.meta.per_page;
        pagination.has_more = this.meta.current_page < this.meta.last_page;
        
        return pagination;
    }

    setData(data: any) {
        this.data = data;
        return this;
    }
}

export default Pagination;
