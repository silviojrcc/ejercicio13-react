const apiKey = import.meta.env.VITE_API_KEY;

export const getWeatherInfo = async( infoSubmitedForm ) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ infoSubmitedForm.city },${ infoSubmitedForm.country }&appid=${ apiKey }`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err) {
        return [];
    }
}