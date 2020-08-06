import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import WeatherFetch from './WeatherFetch';

const SearchBox = ({cityData}) => {
    const [cityName, setCityName] = useState('');

    const submitCityName = (e) => {
        e.preventDefault();
        if(!cityName) return;
        console.log(cityName);
        cityData(cityName);
        setCityName('');
      }

    return (

        <Form onSubmit={submitCityName}>
            <Form.Control size="sm" type="text" placeholder="City's name" 
            value={cityName} onChange={e => setCityName(e.target.value)} />
        </Form>
    )
}

export default SearchBox;