export default function CurrentWeather({
  weatherData: { current, location, forecast },
  getDayOfWeek,
}) {
  return (
    <div className="current-weather">
      <div className="label">
        <h2>Current Weather</h2>
      </div>
      <div className="entry-section">
        <p className="bold">{location.name}</p>
        <p>{getDayOfWeek(forecast.forecastday[0].date)}</p>
      </div>
      <div className="entry-section">
        <p className="bold">{current.temp_f} °F</p>
        <p>{current.condition.text}</p>
      </div>
      <div className="entry-section">
        <img src={current.condition.icon} alt="weather icon" />
      </div>
    </div>
  );
}

// location, date, temp, condition
