import React from "react";
export const WeatherImg = ({ main }) => {
  let imageSource;
  switch (main) {
    case "Clouds":
      imageSource = "./assets/cloudy.svg";
      break;
    case "Clear":
      imageSource = "./assets/clear-day.svg";
      break;
    case "Rain":
      imageSource = "./assets/rain.svg";
      break;
    default:
      imageSource = "../assets/mist.svg";
      break;
  }
  return <img src={imageSource} alt={main} width={120} height={120} />;
};
