import Model from "./model";

class Comment extends Model {
    public id?: number;
    public name?: string;
    public title?: string;
    public content?: string;
    public created_at?: string;
}

export default Comment;