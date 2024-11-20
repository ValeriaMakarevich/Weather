
import "./WeatherOutputDay.css";

function WeatherOutputDay({ weather }) {

  return (
    <div className="weather-output-day">
      <div className="weather-output-day_item">
        <p>
          {new Date(weather[1].date).toLocaleString("ru-RU", {
            weekday: "long",
          })}
        </p>
      
        <p>{weather[1].temp}°C</p>
        <p>{weather[1].clouds}</p>
      </div>
      <div className="weather-output-day_item">
        <p>
          {new Date(weather[2].date).toLocaleString("ru-RU", {
            weekday: "long",
          })}
        </p>
        
        <p>
          {weather[2].temp}°C
        </p>
        <p>{weather[2].clouds}</p>
      </div>
      <div className="weather-output-day_item">
        <p>
          {new Date(weather[3].date).toLocaleString("ru-RU", {
            weekday: "long",
          })}
        </p>
       
        <p>
          {weather[3].temp}°C
        </p>
        <p>{weather[3].clouds}</p>
      </div>
    </div>
  );
}
export default WeatherOutputDay;
