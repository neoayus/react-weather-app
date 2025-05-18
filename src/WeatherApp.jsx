import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "",
        // feelslike: 24.84,
        // temp: 25.00, 
        // tempMin: 23.55,
        // tempMax: 44.44, 
        // humidity: 55.55,
        // weather: "windy",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <>
            <h2 style={{textAlign: "center"}}>this that weather app</h2>
            <SearchBox updateInfo={updateInfo}/>
            {weatherInfo.city == "" ? "" : <InfoBox Info={weatherInfo}/>}
            {/* <InfoBox Info={weatherInfo}/> */}
        </>
    ) 
}