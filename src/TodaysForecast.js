export default function TodaysForecast({
  weatherData: { current, location, forecast },
}) {
  return (
    <div className="todays-forecast">
      <div className="label">
        <h2>Today's Forecast</h2>
        <h3>1 available forecast</h3>
      </div>
      <div className="forecast">
        <p>21:00</p>
        <img src={current.condition.icon} alt="weather icon" />
        <p>{forecast.forecastday[0].hour[21].temp_f} °F</p>
      </div>
    </div>
  );
}
