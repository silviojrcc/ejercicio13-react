import { useState, useEffect } from "react";
import { getWeatherInfo } from "../helpers/queries";

export const useFetchWeather = ( infoSubmitedForm ) => {

    const [weatherInfo, setWeatherInfo] = useState({});
    const [isLoading, setIsLoading] = useState( true );

    const getWeather = async() => {
        const response = await getWeatherInfo(infoSubmitedForm);
        setWeatherInfo(response);
        setIsLoading(false);
    }

    useEffect(() => {
        if (Object.keys(infoSubmitedForm).length !== 0) {
            getWeather();
        }
    }, [infoSubmitedForm]);

    return {
        weatherInfo,
        isLoading
    }
  

}
