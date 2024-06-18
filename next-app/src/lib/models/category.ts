import Model from "./model";

class Category extends Model {
    public id?: number;
    public name?: string;
    public description?: string;
    public slug?: string;
    public avatar?: string;
    public detail?: string;
    public created_at?: string;
    public meta_title?: string;
    public meta_description?: string;
    public meta_keyword?: string;
    public meta_page_topic?: string;
    public blogs_count?: number;
}

export default Category;