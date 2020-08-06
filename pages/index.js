import SearchBox from "../components/SearchBox";
import WeatherFetch from "../components/WeatherFetch";
import { useState } from 'react';

const Index = () => {
  const [findCityData, setFindCityData] = useState('');

  const cityData = (cityName) => {
      setFindCityData(cityName);
  }




  return (
    <div>
      <p>Welcome to the Weather API</p>
      <SearchBox cityData={cityData} />
    </div>
  )
}

export default Index;