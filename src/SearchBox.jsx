import { useState } from "react"
import { TextField } from "@mui/material"
import Button from '@mui/material/Button'

import "./SearchBox.css"

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState(""); 
    let [error, setError] = useState(false); 

    let api_url = "https://api.openweathermap.org/data/2.5/weather?"
    const api_key = "84dc4240bb164c5b2bea3df507df0911" ;

    
    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${api_url}q=${city}&appid=${api_key}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            let result = { 
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result ; 
        }catch(err){
            throw new err ; 
        }
    }

    // ?q={city name}&appid={API key}

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false); // error disappears
        } catch (err) {
            setError(true);
        }
    };
    return(
        <div className="SearchBox">
            {/* <h3>Search for the Weather</h3> */}
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
                {error && <p style={{color: "red"}}>Apologies, No such place exist in our API : ( </p>}
            </form>
        </div>
    )
}
