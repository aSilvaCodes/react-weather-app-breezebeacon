export default function ForecastEntry({ dayOfWeek, forecast }) {
  return (
    <div className="forecast-entry">
      <div className="entry-container">
        <div className="entry-section">
          <p>{dayOfWeek}</p>
          <p>{forecast.day.condition.text}</p>
        </div>
        <div className="entry-section">
          <div className="icon-stat">
            <svg
              width="20"
              height="20"
              fill="#dee2e6"
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-143b2d6"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ThermostatIcon"
            >
              <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1h-2z"></path>
            </svg>
            <p>
              <span>{forecast.day.avgtemp_f} °F</span>
            </p>
          </div>
          <div className="icon-stat">
            <svg
              width="20"
              height="20"
              fill="#dee2e6"
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-143b2d6"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="FilterDramaIcon"
            >
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"></path>
            </svg>
            <p> {forecast.day.daily_chance_of_rain}%</p>
          </div>
        </div>
        <div className="entry-section">
          <div className="icon-stat">
            <svg
              width="20"
              height="20"
              fill="#dee2e6"
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-143b2d6"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="AirIcon"
            >
              <path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"></path>
            </svg>
            <p>{forecast.day.maxwind_mph} mph</p>
          </div>
          <div className="icon-stat">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="dee2e6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 3.53 2.61 6.44 6 6.93V19h2v-3.07c3.39-.49 6-3.4 6-6.93C19 5.13 15.87 2 12 2z"
                fill="#dee2e6"
              />
              <path
                d="M12 10.5a1.5 1.5 0 0 1-1.5-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5z"
                fill="#dee2e6"
              />
              <text
                x="12"
                y="17"
                font-size="8"
                fill="#dee2e6"
                text-anchor="middle"
                dy=".3em"
              >
                %
              </text>
            </svg>
            <p>{forecast.day.avghumidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
