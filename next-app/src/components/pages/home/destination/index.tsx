import Helper from "@/lib/utils/helper";
import Destination from "./Destination";
import routes from "@/configs/apiRoutes";
import Country from "@/lib/models/country";

const getData = async () => {
    try {
        const apiUrl = Helper.apiRoutes(routes.countries.home);

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
    const countries: Country[] = await getData();

    return (
        <>
            <Destination countries={countries} />
        </>
    )
}

export default Index;