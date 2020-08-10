import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchBox = ({onCityClick}) => {
    const [cityName, setCityName] = useState('');

    const submitCityName = (e) => {
        e.preventDefault();
        if(!cityName) return;
        console.log(cityName);
        onCityClick(cityName);
        setCityName('');
      }

    return (

        <Form onSubmit={submitCityName} >
            <Form.Control className="p-4 text" size="sm" type="text" placeholder="City's name" 
            value={cityName} onChange={e => setCityName(e.target.value)} />
        </Form>
    )
}

export default SearchBox;