export default function CurrentWeather({ weatherData: { current, location } }) {
  return (
    <div className="current-weather">
      <div className="label">
        <h2>Current Weather</h2>
      </div>
      <div className="entry-section">
        {/* {console.log(locationData?.location)} */}
        <p>{location.name}</p>
        <p>{location.localtime}</p>
      </div>
      <div className="entry-section">
        <p>{current.temp_f} °F</p>
        <p>{current.condition?.text}</p>
      </div>
      <div className="entry-section">
        <img src={current.condition.icon} alt="weather icon" />
      </div>
    </div>
  );
}

// location, date, temp, condition
