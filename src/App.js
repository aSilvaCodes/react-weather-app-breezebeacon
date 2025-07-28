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
  { value: "los%20angeles", label: "Los Angeles, CA" },
  { value: "san%20francisco", label: "San Francisco, CA" },
  { value: "miami", label: "Miami, FL" },
  { value: "houston", label: "Houston, TX" },
  { value: "seattle", label: "Seattle, WA" },
  { value: "boston", label: "Boston, MA" },
  { value: "phoenix", label: "Phoenix, AZ" },
  { value: "denver", label: "Denver, CO" },
  { value: "san%20diego", label: "San Diego, CA" },
  { value: "philadelphia", label: "Philadelphia, PA" },
  { value: "portland", label: "Portland, OR" },
  { value: "las%20vegas", label: "Las Vegas, NV" },
  { value: "san%20antonio", label: "San Antonio, TX" },
  { value: "washington", label: "Washington, DC" },
  { value: "austin", label: "Austin, TX" },
  { value: "charlotte", label: "Charlotte, NC" },
  { value: "minneapolis", label: "Minneapolis, MN" },
  { value: "tampa", label: "Tampa, FL" },
  { value: "orlando", label: "Orlando, FL" },
  { value: "saint%20louis", label: "Saint Louis, MO" },
  { value: "atlanta", label: "Atlanta, GA" },
  { value: "chicago", label: "Chicago, IL" },
  { value: "dallas", label: "Dallas, TX" },
  { value: "nashville", label: "Nashville, TN" },
  { value: "new%20york", label: "New York, NY" },
  { value: "detroit", label: "Detroit, MI" },
  { value: "cleveland", label: "Cleveland, OH" },
  { value: "columbus", label: "Columbus, OH" },
  { value: "indianapolis", label: "Indianapolis, IN" },
  { value: "jacksonville", label: "Jacksonville, FL" },
  { value: "kansas%20city", label: "Kansas City, MO" },
  { value: "raleigh", label: "Raleigh, NC" },
  { value: "memphis", label: "Memphis, TN" },
  { value: "baltimore", label: "Baltimore, MD" },
  { value: "milwaukee", label: "Milwaukee, WI" },
  { value: "oklahoma%20city", label: "Oklahoma City, OK" },
  { value: "albuquerque", label: "Albuquerque, NM" },
  { value: "tucson", label: "Tucson, AZ" },
  { value: "fresno", label: "Fresno, CA" },
  { value: "sacramento", label: "Sacramento, CA" },
  { value: "long%20beach", label: "Long Beach, CA" },
  { value: "mesa", label: "Mesa, AZ" },
  { value: "virginia%20beach", label: "Virginia Beach, VA" },
  { value: "new%20orleans", label: "New Orleans, LA" },
  { value: "san%20jose", label: "San Jose, CA" },
];

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export default function App() {
  const [locations, setLocations] = useState(options);
  const [selectedOption, setSelectedOption] = useState({
    value: "atlanta",
    label: "Atlanta, GA",
  });
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
    console.log(selectedOption);
    setSelectedOption(selectedOption);
  }

  useEffect(
    function () {
      async function fetchWeatherData() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${selectedOption.value}&days=3&aqi=no&alerts=no`
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
    },
    [selectedOption]
  );

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
