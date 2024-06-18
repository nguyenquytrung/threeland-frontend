
const Helper = {
    apiRoutes(path: string): string {
        let url = process.env.NEXT_PUBLIC_BASE_API as string;
        url += path.replace(/^[/\\]+|[/\\]+$/g, '');

        return url;
    }
}

export default Helper;