import Destination from "./destination";
import Model from "./model";

class Country extends Model {
    public id?: number;
    public name?: string;
    public slug?: string;
    public area?: string;
    public population?: string;
    public language?: string;
    public currency?: string;
    public weather?: string;
    public timezone?: string;
    public meta_title?: string;
    public meta_description?: string;
    public exp_description?: string;
    public exp_content?: string;
    public activities_description?: string;
    public activities_content?: string;
    public destination_description?: string;
    public map?: string;
    public banner?: string;
    public flag?: string;
    public order?: string;
    public is_public?: string;

    public destinations?: Destination[];
}

export default Country;