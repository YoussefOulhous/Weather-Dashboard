import React, { useState } from 'react'
import Header from './components/SearchBar'
import axios, { Axios } from 'axios'
import WeatherCard from './components/WeatherCard';

function App() {

  const [city ,setcity] = useState('');
  const [weatherData , setweatherData] = useState(null);
  const [error , seterror] = useState(null)
  const [localTime, setLocalTime] = useState(null);

  const API_KEY =  "e570d7b0e267d7ff73d7c97ae4dac82d" ;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const fetchingWeatherData  = async (city) => {

    setweatherData(null);
    seterror(null)

  
    try{
      const response = await axios.get(API_URL);
      const timezoneOffset = response.data.timezone;
      const utcTime = new Date().getTime(); 
      const localTime = new Date(utcTime + timezoneOffset * 1000); 
      setLocalTime(localTime.toLocaleString());
      setweatherData(response.data);
    }
    catch(error){
      seterror("Failed to fetch weather data. Please check the city name or try again later!")
    }

    console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)

    useEffect(() => {
      const interval = setInterval(refreshData, 60000);
      return () => clearInterval(interval);
    }, []);

  }


  return (
    <div className='bg-[#0F172A] h-screen sm:bg-[#0F172A] '>
      <Header setcity={setcity} fetchingWeatherData={fetchingWeatherData} city={city} />
      <WeatherCard  weatherData={weatherData} error={error} city={city} localTime={localTime}/>



    </div>
  )
}

export default App