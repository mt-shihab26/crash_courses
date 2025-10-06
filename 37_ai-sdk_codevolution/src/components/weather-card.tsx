export const WeatherCard = ({
    weather,
}: {
    weather: {
        location: {
            name: string;
            country: string;
            localtime: string;
        };
        current: {
            temp_c: number;
            condition: {
                text: string;
                code: number;
            };
        };
    };
}) => {
    return (
        <div className="border border-blue-200 rounded-lg my-2 bg-gradient-to-br from-blue-50 to-blue-100 shadow-md w-full">
            <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                            {weather.location.name}
                        </h3>
                        <p className="text-sm text-gray-600">{weather.location.country}</p>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">
                            {weather.current.temp_c}°C
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-sm text-gray-700">
                            {weather.current.condition.text}
                        </span>
                    </div>
                    <div className="text-xs text-gray-500">
                        {new Date(weather.location.localtime).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
