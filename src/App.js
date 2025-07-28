import { useEffect, useState } from "react";
import Select from "react-select";
import CurrentWeather from "./CurrentWeather";
import AirConditions from "./AirConditions";
import TodaysForecast from "./TodaysForecast";
import CurrentBox from "./CurrentBox";
import ForecastEntry from "./ForecastEntry";
import Label from "./Label";
import WeeklyBox from "./WeeklyBox";
import Main from "./Main";
import Logo from "./Logo";
import Time from "./Time";
import NavBar from "./NavBar";
import WeeklyForecast from "./WeeklyForecast";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import AstroData from "./AstroData";

const options = [
  { value: "atlanta", label: "Atlanta, GA" },
  { value: "chicago", label: "Chicago, IL" },
  { value: "dallas", label: "Dallas, TX" },
  { value: "nashville", label: "Nashville, TN" },
  { value: "newyork", label: "New York, NY" },
];

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export default function App() {
  const [locations, setLocations] = useState(options);
  const [selectedOption, setSelectedOption] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return days[date.getDay()];
  }

  function handleChange(selectedOption) {
    setSelectedOption(selectedOption);
  }

  useEffect(function () {
    async function fetchWeatherData() {
      try {
        setIsLoading(true);
        //setError("");
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Chicago&days=3&aqi=no&alerts=no`
        );
        if (!res.ok) {
          throw new Error("failed to fetch weather data");
        }
        const data = await res.json();
        console.log(data);
        setWeatherData(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
    fetchWeatherData();
  }, []);

  return (
    <>
      <NavBar>
        <Logo />
        <Select
          className="location-selector"
          options={locations}
          value={selectedOption}
          onChange={handleChange}
          placeholder="Choose a city..."
        />
        <Time />
      </NavBar>

      <Main>
        {isLoading && <Loader />}
        {!isLoading && !error && (
          <>
            <CurrentBox>
              <CurrentWeather
                weatherData={weatherData}
                getDayOfWeek={getDayOfWeek}
              />
              <AirConditions weatherData={weatherData} />
              <AstroData weatherData={weatherData} />
            </CurrentBox>
            <WeeklyBox>
              <TodaysForecast weatherData={weatherData} />
              <WeeklyForecast
                weatherData={weatherData}
                getDayOfWeek={getDayOfWeek}
              />
            </WeeklyBox>
          </>
        )}
        {error && <ErrorMessage error={error} />}
      </Main>
    </>
  );
}
