// const apiKey = import.meta.env.VITE_API_KEY;
const apiKey = "8fe0c69dc9b6fb0e1a1fe601dc27d431";

export const getWeatherInfo = async(city, country) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ city },${ country }&appid=${ apiKey }`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err) {
        return [];
    }
}