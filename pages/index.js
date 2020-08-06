import SearchBox from "../components/SearchBox";
import WeatherFetch from "../components/WeatherFetch";
import { useState, useEffect } from 'react';

const Index = () => {
  const [findCityData, setFindCityData] = useState('');

  const cityData = (cityName) => {
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
        setWeatherData({...data.weather, ...data.main})
        console.log(data)
      })
  )

  let dataRendering;

  if (weatherData && findCityData) {
    dataRendering = < WeatherFetch
      key={weatherData.id}
      temp={weatherData.temp}
      feels_like={weatherData.feels_like}
      temp_min={weatherData.temp_min}
      temp_max={weatherData.temp_max}
      pressure={weatherData.pressure}
      humidity={weatherData.humidity} 
      findCityData={findCityData} />
  } else {
    dataRendering = "Loading..."
  }


  return (
    <div>
      <p>Welcome to the Weather API</p>
      <SearchBox cityData={cityData} />
      <br/>
      <div>
        {dataRendering}
      </div>
    </div>
  )
}

export default Index;