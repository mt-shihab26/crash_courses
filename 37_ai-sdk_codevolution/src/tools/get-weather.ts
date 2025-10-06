export const getWeather = async (city: string) => {
    console.log("city: ", city);
    if (city.toLowerCase().includes("tokiyo") || city.toLowerCase().includes("tokyo")) {
        return "70F and cloudy";
    }
    if (city.toLowerCase().includes("dhaka")) {
        return "80F and sunny";
    }
    if (city.toLowerCase().includes("gotham")) {
        return "90F and cloudy";
    }
    if (city.toLowerCase().includes("metropolis")) {
        return "90F and cloudy";
    }
    return `Unknown`;
};
