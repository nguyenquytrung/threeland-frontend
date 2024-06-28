import routes from "@/configs/apiRoutes";
import Helper from "@/lib/utils/helper";
import ToursByTheme from "./ToursByTheme";
import Style from "@/lib/models/style";

const getData = async () => {
    try {
        const apiUrl = Helper.apiRoutes(routes.styles.home);

        const res = await fetch(apiUrl);

        if (!res.ok) {
            console.error(
                `Error fetching data: ${res.statusText} (status: ${res.status})`,
            );
            throw new Error('Server Error');
        }

        return res.json()

    } catch (error) {
        console.log(error);
        throw error;
    }
};

const Index = async () => {

    const data: Style[] = await getData();

    return (
        <>
            <ToursByTheme styles={data} />
        </>
    )
}

export default Index;