export default function AirConditions({
  weatherData: {
    current: { humidity, cloud, wind_mph, feelslike_f },
  },
}) {
  return (
    <div className="air-conditions">
      <div className="label">
        <h2>Air Conditions</h2>
      </div>
      <div className="entry-section">
        <p className="bold">Real Feel</p>
        <p>{feelslike_f} °F</p>
      </div>
      <div className="entry-section">
        <p className="bold">Wind</p>
        <p>{wind_mph} mph</p>
      </div>
      <div className="entry-section">
        <p className="bold">Clouds</p>
        <p>{cloud}%</p>
      </div>
      <div className="entry-section">
        <p className="bold">Humidity</p>
        <p>{humidity}%</p>
      </div>
    </div>
  );
}
