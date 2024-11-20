import IconWeather from "../IconWeather/IconWeather";
import "./WeatherOutput.css";



function WeatherOutput({ weather }) {


 

  const now = new Date()
  const hoursAndMinutes = now.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });


  return (
    <div className="weather-output">
      <div className="weather-output_container">
        <p className="weather-output_city">{weather[0].name}</p>
        <p>{hoursAndMinutes}</p>
        <p className="weather-output_temp">
          <IconWeather className="weather-output_temp_icon" weather={weather} />
          {weather[0].temp}°C
        </p>

        <p>{weather[0].clouds}</p>
        <p className="weather-output_wind"> Ветер {weather[0].wind}</p>
      </div>
    
    </div>
  );
}
export default WeatherOutput;
  