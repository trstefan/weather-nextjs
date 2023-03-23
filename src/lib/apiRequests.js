//const API_KEY = process.env.WEATHER_API;

// fetch Londong weather
export const getWeatherData = async () => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&appid=2e02a840dcc04882208c47a7ddd45db7}&units=metric`
  );
  const response = await data.json();
  return response;
};

//fetch query weather
export const getQueryWeatherData = async (query) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=2e02a840dcc04882208c47a7ddd45db7&units=metric`
  );
  const responce = await data.json();
  return responce;
};
