import { useState, useEffect } from 'react';
import { getWeatherInfo } from '../helpers/queries';

export const useFetchWeather = (infoSubmitedForm) => {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getWeather = async () => {
            setIsLoading(true);

            const response = await getWeatherInfo(infoSubmitedForm);
            if (!response?.ok) {
                setError(response?.message);
            } else {
                setWeatherInfo(response?.weatherInfo);
                setError(null);
            }

            setIsLoading(false);
        };

        if (Object.keys(infoSubmitedForm).length !== 0) {
            getWeather();
        }
    }, [infoSubmitedForm]);

    return {
        weatherInfo,
        isLoading,
        error,
    };
};
