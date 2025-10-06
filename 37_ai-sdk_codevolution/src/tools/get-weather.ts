export const getWeather = async (city: string) => {
    console.log("city: ", city);

    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`,
    );

    const data = await response.json();

    const weather = {
        location: {
            name: data.location.name,
            country: data.location.country,
            localtime: data.location.localtime,
        },
        current: {
            temp_c: data.current.temp_c,
            condition: {
                text: data.current.condition.text,
                code: data.current.condition.code,
            },
        },
    };

    return weather;
};
