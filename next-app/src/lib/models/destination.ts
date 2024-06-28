import Model from "./model";

class Destination extends Model {
    public id?: number;
    public name?: string;
    public slug?: string;
    public country_id?: number;
    public meta_title?: string;
    public meta_description?: string;
    public is_capital?: string;
    public is_public?: string;
    public is_highlight?: string;
    public overview?: string;
    public food_and_drink?: string;
    public travel_guide?: string;
    public activities_description?: string;
    public activities_content?: string;
    public overview_image?: string;
    public food_and_drink_image?: string;
    public travel_guide_image?: string;
    public feature_image?: string;
    public banner?: string;
    public order?: string;
}

export default Destination;