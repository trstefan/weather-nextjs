// fetch Londong weather
export const getWeatherData = async () => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
  );
  const response = await data.json();
  return response;
};

//fetch query weather
export const getQueryWeatherData = async (query) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
  );
  const responce = await data.json();
  return responce;
};
