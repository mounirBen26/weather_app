import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider, Typography } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';
import { BiWind } from "react-icons/bi";
import { FaTemperatureHalf, FaSun, FaDroplet } from 'react-icons/fa6';
import {WiHumidity,WiWindDeg} from 'react-icons/wi'
import Search from './search';
import BrowserPosition from './browserPosition';


export const PositionContext = createContext(null)


const Weather = () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const [weather, setWeather] = useState(null);
    const [dayWeather, setDayWeather] = useState(null);
    const [inputCity, setInputCity] = useState('');
    const URL = `https://api.weatherapi.com/v1/current.json?key=41b6c1d0b8f741919a2214615230406&q=${inputCity}&aqi=no`;
    const forcastURL = `https://api.weatherapi.com/v1/forecast.json?key=41b6c1d0b8f741919a2214615230406&q=${inputCity}&days=1&aqi=no&alerts=no`
    
    //GET WEATHER NOW
    useEffect(() => {
        const getWeatherNow = async () => {
            try{
                const response = await fetch(URL)
                if(response.ok){
                    const data = await response.json()
                    setWeather(data)
                } else {
                    console.log('error11')
                }
                

            } catch (error) {
                console.log('error1',error)
            }

        }
        getWeatherNow()
        

    }, [inputCity]);
   
    //DAY FORCAST
    useEffect(() => {
        
            const getWeatherDay = async () => {
                try {
                    const response = await (fetch(forcastURL))
                    if(response.ok){
                        const data = await response.json()
                    console.log('=>=>=>',data)
                    setDayWeather(data.forecast.forecastday[0].hour)
                    } else{
                        console.log('error22')
                    }
                    

                } catch (error){
                    console.log('error2',error)
                }
            }
            getWeatherDay()
   

    }, [inputCity])
    function getCity(item) {
        if (item) {
            setInputCity(item)
        }
    }
   
    const browserCity = (item) => {
        console.log('--|||-', item)
        setInputCity(item)
    };
    useEffect(()=>{
        browserCity()
    },[])

    return (
        <div>
            <PositionContext.Provider value={{browserCity, getCity}}>
                <BrowserPosition />
                <Search />
                {/* <BrowserPosition browserCity={browserCity} />
                <Search getCity={getCity} /> */}
            </PositionContext.Provider>
            
            
            {weather && (
                <div>
                    <Typography sx={{fontWeight:'500', marginLeft:'18px',fontFamily:'revert-layer'}}>Current Weather: Last Update {weather.current.last_updated.split(' ')[1]}</Typography>
                    <Grid container spacing={2} style={{margin:"10px 0 40px 0"}}>
                        <Grid item xs={8} spacing={2}>
                            <Grid xs={12}>
                                <Typography variant='h5' sx={{ fontWeight: 600,fontSize:"30px",color:'white',fontFamily:'revert-layer' }}> {weather.location.name}, {weather.location.country}</Typography>
                            </Grid>
                            <Grid xs={12}>
                                <Typography variant='h4' sx={{ fontWeight: 700 ,color:'white',fontFamily:'revert'}}>{weather.current.temp_c}° </Typography>
                            </Grid>

                        </Grid>
                        <Grid xs={4} style={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems: 'center'}}>
                            <img src={weather.current.condition.icon} style={{ width: 120, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',borderRadius:'30%',backgroundColor: '#bae0c4' }} />
                            <p style={{color:'white',fontSize:'18px',fontWeight:'500'}}>{weather.current.condition.text}</p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ backgroundColor: '#dfe0e2', borderRadius: '25px', paddingLeft: 3, paddingBottom: 3, paddingTop: 3,display:'flex',flexDirection:'row',justifyContent:'center', alignItems: 'center' }}>
                        <Grid xs={4} sx={{ fontWeight: 700, color: '#403c3c', fontSize: '13px' }}>
                            <FaTemperatureHalf />Real Feel
                            <Typography><span style={{ fontSize: '22px', fontWeight: "700", color: 'black' }}>{weather.current.feelslike_c}</span></Typography>
                        </Grid>
                        <Grid xs={4} sx={{ fontWeight: 700, color: '#403c3c', fontSize: '13px', paddingBottom: '8px' }}>
                            <BiWind size='18px' /> Wind
                            <Typography><span style={{ fontSize: '22px', fontWeight: "700", color: 'black' }}> {weather.current.wind_kph} km/h</span></Typography>
                        </Grid>
                        <Grid xs={4} sx={{ fontWeight: 700, color: '#403c3c', fontSize: '13px' }}>
                            <FaDroplet />   Chance Of Rain
                            <Typography><span style={{ fontSize: '22px', fontWeight: "700", color: 'black' }}>{weather.current.precip_in}%</span></Typography>
                        </Grid>
                        <Grid xs={4} sx={{ fontWeight: 700, color: '#403c3c', fontSize: '13px' }}>
                            <FaSun /> UV Index
                            <Typography><span style={{ fontSize: '22px', fontWeight: "700", color: 'black' }}>{weather.current.uv}</span></Typography>
                        </Grid>
                        <Grid xs={4} sx={{ fontWeight: 700, color: '#403c3c', fontSize: '13px' }}>
                            <WiHumidity size='18px'  /> Humidity  
                            <Typography><span style={{ fontSize: '22px', fontWeight: "700", color: 'black' }}>{weather.current.humidity}%</span></Typography>
                        </Grid>
                        <Grid xs={4} sx={{ fontWeight: 700, color: '#403c3c', fontSize: '13px' }}>
                            <WiWindDeg size='18px' /> Wind Direction
                            <Typography><span style={{ fontSize: '18px', fontWeight: "700", color: 'black' }}>{weather.current.wind_dir}</span></Typography>
                        </Grid>

                    </Grid>

                    {/*                     
                    
                    {/* Add more properties as needed */}

                </div>
            )}
           <Grid container spacing={2} style={{ backgroundColor: '#dfe0e2', borderRadius: '25px', marginTop: '15px', display: 'flex' }}>
  {dayWeather && dayWeather.slice(13, 19).map((it) => {
    return (
      <Grid item xs={2} style={{ fontWeight: '600', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <p>{it.time.split(' ')[1]} </p>
        <img src={it.condition.icon} style={{ width: 55, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',borderRadius:'30%',backgroundColor: '#bae0c4' }}  />
        <p>{it.temp_c}°</p>
      </Grid>
    );
  })}
</Grid>
        <p style={{fontSize:"10px"}}>2023 | Benlazreg Hacene, mounir.bmh@hotmail.fr</p>
        </div>
    );
}

export default Weather;
