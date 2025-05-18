import { useState } from "react"
import { TextField } from "@mui/material"
import Button from '@mui/material/Button'

import "./SearchBox.css"

export default function SearchBox(){
    let [city, setCity] = useState(""); 

    let api_url = "https://api.openweathermap.org/data/2.5/weather?"
    const api_key = "84dc4240bb164c5b2bea3df507df0911" ;

    
    let getWeatherInfo = async () => {
        // https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=84dc4240bb164c5b2bea3df507df0911
        let response = await fetch(`${api_url}q=${city}&appid=${api_key}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = { 
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
    }

    // ?q={city name}&appid={API key}

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    };
    return(
        <div className="SearchBox">
            <h3>Search for the Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">Search </Button>
            </form>
        </div>
    )
}