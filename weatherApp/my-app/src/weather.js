import React, { useState } from 'react'
import axios from 'axios'

export function Weather() {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();
    function handleCityChange(event){
        setCity(event.target.value)
    }
    async function fetchWeather(){
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'ac43eec0cc7185ec9b8b7f0ddbd25509'}`);
            console.log(response);
            setWeather(response);

        } catch (error) {
            console.log('Error Fatching Weather Data', error);
        }
    }
    function handleClick(){
        fetchWeather();
    }
  return (
    <div className='weather-container'>
        <input type='text' placeholder='Enter City Name' value={city} onChange={handleCityChange}/>
        <button onClick={handleClick}>Get Weather</button>
        {weather && <>
        <div className='wether-info'>
            <h3>{weather.data.name}</h3>
            <p>Temp is :-round({weather.data.main.temp-(278)})</p>
            <p>{weather.data.weather[0].description}</p>
        </div>
        </>}
    </div>
  )
}

export default Weather