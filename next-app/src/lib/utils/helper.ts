const Helper = {
    apiRoutes(path: string): string {
        let url = (process.env.NEXT_PUBLIC_BASE_API ??
            'http://localhost:3000/') as string;
        url += path.replace(/^[/\\]+|[/\\]+$/g, '');

        return url;
    },

    objectToParams(obj = {}) {
        let s = []
        for (const key in obj) {
            let val: any = obj[key as keyof typeof obj];
            if (!val && val != 0) {
                val = ''
            }
            s.push(`${key}=${val}`);
        }

        return '?' + s.join('&');
    },
};

export default Helper;
