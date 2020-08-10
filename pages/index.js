import SearchBox from "../components/SearchBox";
import WeatherFetch from "../components/WeatherFetch";
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Index = () => {
  const [cityName, setCityName] = useState('');

  const onCityClick = (cityName) => {
    const getCityData = cityName;
    setCityName(getCityData);
  }

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (cityName) {
      loadData()
    }
  }, [cityName]);


  const loadData = async () => (
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6e342b0a499de812ed62d8017b901b40`)
      .then((res) => res.json())
      .then(data => {
        setWeatherData(data)
      })
  )

  let dataRendering;

  if (weatherData && cityName) {
    dataRendering = < WeatherFetch
      key={weatherData.id}
      main={weatherData.weather[0].main}
      icon={weatherData.weather[0].icon}
      temp={weatherData.main.temp}
      feels_like={weatherData.main.feels_like}
      temp_min={weatherData.main.temp_min}
      temp_max={weatherData.main.temp_max}
      pressure={weatherData.main.pressure}
      humidity={weatherData.main.humidity}
      cityName={cityName} />
  } 

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Welcome to the Weather API</h1>
        </Col>
      </Row>

      <Row className="mx-2">
          <p>Type City's Name and Press Enter</p>
      </Row>

      <Row>
        <Col>
          <SearchBox onCityClick={onCityClick} />
        </Col>
      </Row>

      <Row>
        <Col>
          {dataRendering}
        </Col>
      </Row>

    </Container>
  )
}

export default Index;