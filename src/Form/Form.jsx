import { useState } from "react";
import WeatherOutput from "../WeatherOutput/WeatherOutput";
import WeatherOutputDay from "../WeatherOutputDay/WeatherOutputDay";
import "./Form.css";



const API_KEY = "8fc0650b566bb96bbd6190060f44807a";
const COUNTRY_CODE = "643";

function Form() {
  const [place, setPlace] = useState("");
  const [weather, setWeather] = useState("{}");

  const searchWeather = async (event) => {
    event.preventDefault();
    const responseCity = await fetch(
      `https://ru.api.openweathermap.org/geo/1.0/direct?q=${place},${COUNTRY_CODE}&appid=${API_KEY}`
    );
    const nameCity = await responseCity.json();
    let lat = nameCity[0].lat;
    let lon = nameCity[0].lon;
    console.log(nameCity);

    const responseWeather = await fetch(
      `https://ru.api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=ru&units=metric`
    );
    const data = await responseWeather.json();

    setWeather([
      {
        id: 1,
        name: data.city.name,
        date: data.list[0].dt_txt,
        temp: Math.ceil(data.list[0].main.temp),
        clouds: data.list[0].weather[0].description,
        wind: data.list[0].wind.speed + "м/с",
      },

      {
        id: 2,
        date: data.list[8].dt_txt,
        temp: Math.ceil(data.list[8].main.temp),
        clouds: data.list[8].weather[0].description,
        wind: data.list[8].wind.speed + "м/с",
      },

      {
        id: 3,
        date: data.list[16].dt_txt,
        temp: Math.ceil(data.list[16].main.temp),
        clouds: data.list[16].weather[0].description,
        wind: data.list[16].wind.speed + "м/с",
      },

      {
        id: 4,
        date: data.list[24].dt_txt,
        temp: Math.ceil(data.list[23].main.temp),
        clouds: data.list[24].weather[0].description,
        wind: data.list[24].wind.speed + "м/с",
      },
    ]);

    console.log(data);
  };
  return (
    <>
      <form action="" className="form">
        <input
          className="form_inp"
          type="text"
          placeholder="Введите название города"
          onChange={(event) => setPlace(event.target.value)}
        />
        <button className="form_btn" type="submit" onClick={searchWeather}>
          <img className="form_btn_img" src="icons8-поиск-50.png" alt="" />
        </button>
      </form>
     

    {weather[0].name !== undefined ?(
      <>
      <WeatherOutput weather={weather} />
      <WeatherOutputDay weather={weather} />
      </>
    ): null}
    </>
  )     
   
}
export default Form;