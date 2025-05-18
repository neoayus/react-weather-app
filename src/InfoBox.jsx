// Card Component Presq.
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// iCONS : 
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./InfoBox.css"

export default function InfoBox({Info}){
    // let initial_image = "https://images.unsplash.com/photo-1641970304088-2b016b4a883b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot = "https://images.unsplash.com/photo-1661278931649-f4a11b82201b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold = "https://images.unsplash.com/photo-1542267207-f8127b454605?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain = "https://images.unsplash.com/photo-1563389843516-4a7b39dce10d?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    // let icons = {
        
    // }
    return(
        <div className="InfoBox">
            {/* <h1>WeatherInfo - {Info.weather}</h1> */}
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={Info.humidity > 80 ? rain : (Info.temp > 15) ? hot : cold  }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {Info.city} 
                        &nbsp;&nbsp;
                        {Info.humidity > 80 ? <ThunderstormIcon/> : (Info.temp > 15) ? <WbSunnyIcon/> : <AcUnitIcon/> }
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary'}} component={"span"} >
                            <div>Temperature = {Info.temp}&deg;C </div>
                            <div>Humidity = {Info.Humidity}&deg;C</div>
                            <div>Min Temp = {Info.tempMin}&deg;C </div>
                            <div>Max Temp = {Info.tempMax}&deg;C </div>
                            <div>The Weather can be described as {Info.weather} and Feels like {Info.feelsLike}&deg;C </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
