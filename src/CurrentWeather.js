export default function CurrentWeather({ weatherData }) {
  return (
    <div className="current-weather">
      <div className="label">
        <h2>Current Weather</h2>
      </div>
      <div className="entry-section">
        {/* {console.log(locationData?.location)} */}
        <p>{weatherData.location?.name}</p>
        <p>Today 21 Jul</p>
      </div>
      <div className="entry-section">
        <p>{weatherData.current?.temp_f} °F</p>
        <p>{weatherData.current.condition?.text}</p>
      </div>
      <div className="entry-section">
        <img src={weatherData.current.condition?.icon} alt="weather icon" />
      </div>
    </div>
  );
}

// location, date, temp, condition
