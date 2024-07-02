import Model from "./model";

class Itinerary extends Model {
    public id?: string;
    public day?: string;
    public name?: string;
    public detail?: string;
    public tour_id?: string;
    public icon?: string;
    public avatar?: string;
}

export default Itinerary;