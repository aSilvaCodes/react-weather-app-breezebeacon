import Label from "./Label";
import ForecastEntry from "./ForecastEntry";

export default function WeeklyForecast({
  weatherData: { forecast },
  getDayOfWeek,
}) {
  const tomorrow = getDayOfWeek(forecast.forecastday[1].date);
  const dayAfterTomorrow = getDayOfWeek(forecast.forecastday[2].date);
  return (
    <div className="next-two-days">
      <Label>Upcoming Forecasts</Label>
      <ForecastEntry dayOfWeek={tomorrow} forecast={forecast.forecastday[1]} />
      <ForecastEntry
        dayOfWeek={dayAfterTomorrow}
        forecast={forecast.forecastday[2]}
      />
    </div>
  );
}
