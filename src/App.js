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

const options = [
  { value: "atlanta", label: "Atlanta, GA" },
  { value: "chicago", label: "Chicago, IL" },
  { value: "dallas", label: "Dallas, TX" },
  { value: "nashville", label: "Nashville, TN" },
  { value: "newyork", label: "New York, NY" },
];

const apiKey = "8733fce90b624d638e9205638252207";

export default function App() {
  const [locations, setLocations] = useState(options);
  const [selectedOption, setSelectedOption] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  function handleChange(selectedOption) {
    setSelectedOption(selectedOption);
  }

  useEffect(function () {
    async function fetchWeatherData() {
      try {
        setIsLoading(true);
        //setError("");
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Atlanta&units=metric`
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
        <CurrentBox>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <>
              <CurrentWeather weatherData={weatherData} />
              <AirConditions weatherData={weatherData} />
              <TodaysForecast />
            </>
          )}
          {error && <ErrorMessage error={error} />}
        </CurrentBox>

        <WeeklyBox>
          <WeeklyForecast />
        </WeeklyBox>
      </Main>
    </>
  );
}
