import { useEffect } from 'react';

const WeatherFetch = () => {

    const [cityData, setCityData] = useState([]);

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=6e342b0a499de812ed62d8017b901b40`);
        const data = await res.json();
        setCityData(data);
        console.log(data);
    }


}

export default WeatherFetch