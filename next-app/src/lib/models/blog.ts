import Model from "./model";

type TableContent = {
    id: string,
    name: string,
    children: TableContent[],
}

class Blog extends Model {
    public id?: number;
    public name?: string;
    public slug?: string;
    public description?: string;
    public country?: number;
    public avatar?: string;
    public banner?: string;
    public detail?: string;
    public created_at?: string;
    public meta_title?: string;
    public meta_description?: string;
    public meta_keyword?: string;
    public meta_page_topic?: string;
    public comments_count?: number;
    public tableContent?: TableContent[];
}

export default Blog;