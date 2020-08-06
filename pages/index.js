import SearchBox from "../components/SearchBox";
import WeatherFetch from "../components/WeatherFetch";
import { useState, useEffect } from 'react';

const Index = () => {
  const [findCityData, setFindCityData] = useState('');

  const cityData = (cityName) => {
    setFindCityData(cityName);
  }

  const [cities, setCities] = useState([]);

  useEffect(() => {
      loadData(findCityData)
    
  }, [findCityData]);
  
  const loadData = ({findCityData}) => (
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${findCityData}&appid=6e342b0a499de812ed62d8017b901b40`)
      .then((res) => res.json())
      .then(data =>
        setCities(data.main)
      )
  )
  console.log(cities);

  let dataToRender = undefined;

  if(cities){
    dataToRender = cities.map((data, id) => (
      <WeatherFetch key={id} temp={data.cities.temp} findCityData={findCityData} />
    ))
  } else{
    dataToRender='Loading...';
  }

  return (
    <div>
      <p>Welcome to the Weather API</p>
      <SearchBox cityData={cityData} />
      <div>
        {dataToRender}
      </div>
    </div>
  )
}

export default Index;