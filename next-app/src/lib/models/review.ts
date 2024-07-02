import Model from "./model";

class Review extends Model {
    public id?: number;
    public tour_id?: number;
    public title?: string;
    public content?: string;
    public author?: string;
    public avatar?: string;
    public score?: number;
}

export default Review;