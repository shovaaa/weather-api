import { Container, Row, Col } from "react-bootstrap"

const WeatherFetch = ({ temp, cityName, main, icon, feels_like, temp_min, temp_max, pressure, humidity }) => {

    return (
        <Container>
            <Row className="mt-4">
                <Col> <h3>Weather detail of {cityName}: </h3> </Col>
            </Row>
            <Row>
                <Col>Today the sky looks: {main} <img className="ml-1" style={{width: "60px"}, {height: "60px"}} src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" /></Col>
            </Row>
            <Row>
                <Col><p>Temperature: {temp} </p></Col>
                <Col><p>Feels Like: {feels_like}</p></Col>
            </Row>
            <Row>
                <Col><p>Temperature min: {temp_min}</p></Col>
                <Col><p>Temperature max: {temp_max}</p></Col>
            </Row>
            <Row>
                <Col><p>Pressure: {pressure}</p></Col>
                <Col><p>Humidity: {humidity}</p></Col>
            </Row>
        </Container>
    )
}

export default WeatherFetch