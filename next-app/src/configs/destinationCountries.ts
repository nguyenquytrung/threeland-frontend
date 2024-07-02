
enum DESTINATION_COUNTRY {
    VIETNAM = 1,
    LAOS = 2,
    CAMBODIA = 3,
    MYANMAR = 4,
    THAILAND = 6,
}

export type FilterOption = {
    label: string;
    value: number;
    count?: number;
}

export default DESTINATION_COUNTRY;