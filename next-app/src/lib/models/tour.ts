import Image from "./image";
import Itinerary from "./itinerary";
import Model from "./model";
import Review from "./review";
import Style from "./style";

export enum TYPE {
    PRIVATE = 1,
    GROUP = 2,
}


class Tour extends Model {
    public id?: number;
    public name?: string;
    public slug?: string;
    public description?: string;
    public duration?: string;
    public tag?: string;
    public file?: string;
    public map?: string;
    public banner?: string;
    public include?: string;
    public exclude?: string;
    public note?: string;
    public meta_title?: string;
    public meta_description?: string;
    public meta_keywords?: string;
    public highlight?: string;
    public style_id?: string;
    public country_id?: string;
    public is_public?: string;
    public is_highlight?: string;
    public is_new?: string;
    public avatar?: string;
    public order?: string;
    public price?: string;
    public discount?: string;
    public activities?: string;
    public route?: string;
    public itineary_brief?: string;
    public overview?: string;
    public type?: TYPE;

    public countries_count?: number;
    public images?: Image[];
    public style?: Style;
    public itineraries?: Itinerary[];
    public reviews?: Review[];
}

export default Tour;