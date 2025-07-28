export default function AstroData({ weatherData: { forecast } }) {
  return (
    <div className="astro-data">
      <div className="label">
        <h2>Astronomical Data</h2>
      </div>
      <div className="entry-section">
        <p className="bold">Sunrise</p>
        <p>{forecast.forecastday[0].astro.sunrise}</p>
      </div>
      <div className="entry-section">
        <p className="bold">Sunset</p>
        <p>{forecast.forecastday[0].astro.sunset}</p>
      </div>
      <div className="entry-section">
        <p className="bold">Moonrise</p>
        <p>{forecast.forecastday[0].astro.moonset}</p>
      </div>
      <div className="entry-section">
        <p className="bold">Moonset</p>
        <p>{forecast.forecastday[0].astro.moonrise}</p>
      </div>
      <div className="entry-section">
        <p className="bold">Moon Phase</p>
        <p>{forecast.forecastday[0].astro.moon_phase}</p>
      </div>
    </div>
  );
}
