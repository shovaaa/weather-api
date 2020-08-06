
const WeatherFetch = ({ temp, findCityData, main, feels_like, temp_min, temp_max, pressure, humidity }) => {

    return (
        <div>
            <h1>Weather detail of {findCityData}: </h1>
            <p>Temperature: {temp} </p>
            <p>Feels Like: {feels_like}</p>
            <p>Temperature min: {temp_min}</p>
            <p>Temperature max: {temp_max}</p>
            <p>Pressure: {pressure}</p>
            <p>Humidity: {humidity}</p>

        </div>
    )
}

export default WeatherFetch