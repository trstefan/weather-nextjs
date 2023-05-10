import React, { useState } from "react";
import Image from "next/image";
import { WeatherImg } from "./WeatherImg";

import styles from "@/styles/WeatherFeed.module.css";
import { getQueryWeatherData } from "@/lib/apiRequests";
import wind from "../../public/assets/wind.svg";
import humidity from "../../public/assets/humidity.svg";

const WeatherFeed = ({ weather }) => {
  const [defaultWeather, setDefaultWeather] = useState(weather);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const searchWeatherData = async (e) => {
    e.preventDefault();
    if (!query) return;
    const queryWeather = await getQueryWeatherData(query);
    if (queryWeather.cod === "404") {
      setError("City not found");
      setQuery("");
      return;
    }
    setError("");
    setQuery("");
    setDefaultWeather(queryWeather);
  };

  const tempToRender = defaultWeather?.weather[0]?.main;

  return (
    <div className={styles.weather__card}>
      <div className={styles.weather__header}>
        <form onSubmit={searchWeatherData} className={styles.form}>
          <input
            type="text"
            value={query}
            placeholder="Enter Location"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </form>
        {error && <div className={styles.error}>{error}</div>}
      </div>

      {!error && defaultWeather && (
        <div className={styles.weather__card__result}>
          <div className={styles.weather__main}>
            <h1>{defaultWeather?.main.temp.toFixed(1)} &#8451;</h1>
            <WeatherImg main={tempToRender} />
            <h2>{tempToRender}</h2>
            <h2>
              {defaultWeather?.name} - {defaultWeather?.sys.country}
            </h2>
          </div>
          <div className={styles.weather__stats}>
            <div className={styles.weather__stat}>
              <h2>{defaultWeather.main.feels_like.toFixed(1)} &#8451;</h2>
              <Image
                priority
                src="./assets/thermometer.svg"
                alt="thermometer"
                width={50}
                height={50}
              ></Image>
              <h3>Feels like</h3>
            </div>
            <div className={styles.weather__stat}>
              <h2>{defaultWeather.wind.speed.toFixed(1)} m/s</h2>
              <Image priority src={wind} alt="wind speed"></Image>
              <h3>Wind</h3>
            </div>
            <div className={styles.weather__stat}>
              <h2>{defaultWeather.main.humidity.toFixed(1)} %</h2>
              <Image priority src={humidity} alt="humidity"></Image>
              <h3>Humidity</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherFeed;
