// Card Component Presq.
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./InfoBox.css"

export default function InfoBox(){
    let initial_image = "https://images.unsplash.com/photo-1641970304088-2b016b4a883b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let Info = {
        city: "Delhi",
        weather: "windy",
    }
    return(
        <div className="InfoBox">
            <h1>WeatherInfo - {Info.weather}</h1>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        // image="/static/images/cards/contemplative-reptile.jpg"
                        image={initial_image}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {Info.city} 
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
