
class Model {
    constructor(data = {}) {
        this.bind(data);
    }

    bind(data = {}) {
        if (data) {
            Object.assign(this, data);
        }
        return this;
    }

    static collection<T>(data: Array<any>, type: new (data: any) => T, callback?: CallableFunction): Array<T> {
        const res: Array<T> = [];
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const item = new type(element);
            callback && callback(item);
            res.push(item);
        }

        return res;
    }
}

export default Model;