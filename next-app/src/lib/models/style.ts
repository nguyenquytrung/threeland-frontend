import Model from "./model";

class Style extends Model {
    public id?: number;
    public name?: string;
    public slug?: string;
    public avatar?: string;
    public icon?: string;
    public overview?: string;
    public meta_title?: string;
    public meta_description?: string;
    public meta_keywords?: string;
    public country_style?: string;
    public is_public?: string;
    public order?: string;

    public tours_count?: number;
}

export default Style;