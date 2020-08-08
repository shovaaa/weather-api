import SearchBox from "../components/SearchBox";
import WeatherFetch from "../components/WeatherFetch";
import { useState, useEffect } from 'react';

const Index = () => {
  const [findCityData, setFindCityData] = useState('');

  const onCityClick = (cityName) => {
    const getCityData = cityName;
    setFindCityData(getCityData);
  }

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    loadData()
    console.log(findCityData)
  }, [findCityData]);

  const loadData = async () => (
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${findCityData}&appid=6e342b0a499de812ed62d8017b901b40`)
      .then((res) => res.json())
      .then(data => {
        setWeatherData(data)
        console.log(data)
      })
  )

  let dataRendering;

  if (weatherData && findCityData) {
    console.log(weatherData);
    dataRendering = < WeatherFetch
      key={weatherData.id}
      /*
      main={weatherData.weather[0].main}
      icon={weatherData.weather[0].icon}
      */
      temp={weatherData.main.temp}
      feels_like={weatherData.main.feels_like}
      temp_min={weatherData.main.temp_min}
      temp_max={weatherData.main.temp_max}
      pressure={weatherData.main.pressure}
      humidity={weatherData.main.humidity}
      findCityData={findCityData} />
  } else {
    dataRendering = "Type City's Name and Press Enter"
  }


  return (
    <div>
      <p>Welcome to the Weather API</p>
      <SearchBox onCityClick={onCityClick} />
      <br />
      <div>
        {dataRendering}
      </div>
    </div>
  )
}

export default Index;