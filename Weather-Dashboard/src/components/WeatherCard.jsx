import React from 'react'
import { useState } from 'react';

function WeatherCard({weatherData ,error,localTime }) {

    const[LightMode,setLightMode]=useState(false);



    const kelvinToCelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(2); 
      };

      const formatTime = (timestamp, timezone) => {
        const date = new Date((timestamp + timezone) * 1000); 
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
      };

      const formatVisibility = (visibility) => {
        return `${(visibility / 1000).toFixed(1)} km`; 
      };


  return (
    <div className=''>
             <div className='bg-[#0F172A] h-screen'>
        {error && <p className=' text-2xl mt-5 text-center text-red-500 font-semibold '>{error}</p>}
        {weatherData ?(
            <div className='w-11/12 h-screen p-5 ml-12 flex gap-10'  >
                                    {/* weather card !!! */}
                <div className='bg-[#1F293B] w-3/12 border-2 border-white rounded-lg h-auto text-white font-sans p-12 m-5  ' >
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" className='w-24 mx-auto' />
                    <h1 className='text-6xl font-semibold text-start mt-6' >{kelvinToCelsius(weatherData.main.temp)}C°</h1>
                    <h3 className='text-lg font-medium mt-3'>{weatherData.weather[0].description}</h3>
                    <hr className=' w-40 mt-10 border rounded-xl bg-white'/>
                    <div className='flex items-center gap-2 mt-4'>
                        <img src='./icons/gps.png' className= 'w-9 h-9'/>
                        <h2 className='text-lg font-semibold mt-1'>{weatherData.name}</h2>
                    </div>
                    <div className='flex items-center gap-5 mt-5'>
                        <img src='./icons/calendar.png' className='w-8 h-8' />
                        <h2>{localTime}</h2>
                    </div>
                </div>
                            {/*  weather card infos!!! */}

                <div className='w-6/12  text-white grid grid-cols-2 grid-rows-3 '>
                    <div className='flex gap-5 items-center   border border-black rounded-md p-5 m-5 h-32 bg-[#1F293B]'>
                        <img src="./icons/wind.png" alt="" className='w-9' />
                        <div >
                            <h1 className='text-lg font-semibold text-gray-300'>Wind Speed :</h1>
                            <h2 className='text-2xl text-white font-bold'>
                                {weatherData.wind.speed} KM/h
                            </h2>
                        </div>
                    </div>

                    <div className='flex gap-5 items-center   border border-black rounded-md p-5 m-5 h-32 bg-[#1F293B]'>
                        <img src="./icons/weather.png" alt="" className='w-9' />
                        <div >
                            <h1 className='text-lg font-semibold text-gray-300'>Humidity :</h1>
                            <h2 className='text-2xl text-white font-bold'>
                                {weatherData.main.humidity} %
                            </h2>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center   border border-black rounded-md p-5 m-5 h-32 bg-[#1F293B]'>
                        <img src="./icons/air.png" alt="" className='w-9' />
                        <div >
                            <h1 className='text-lg font-semibold text-gray-300'>Pressure :</h1>
                            <h2 className='text-2xl text-white font-bold'>
                                {weatherData.main.pressure} hPa
                            </h2>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center   border border-black rounded-md p-5 m-5 h-32 bg-[#1F293B]'>
                        <img src="./icons/low-visibility.png" alt="" className='w-9' />
                        <div >
                            <h1 className='text-lg font-semibold text-gray-300'>Visibility :</h1>
                            <h2 className='text-2xl text-white font-bold'>
                            {formatVisibility(weatherData.visibility)} KM
                            </h2>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center   border border-black rounded-md p-5 m-5 h-32 bg-[#1F293B]'>
                        <img src="./icons/sunset.png" alt="" className='w-9' />
                        <div >
                            <h1 className='text-lg font-semibold text-gray-300'>Sunset :</h1>
                            <h2 className='text-2xl text-white font-bold'>
                            {formatTime(weatherData.sys.sunset, weatherData.timezone)}
                            </h2>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center   border border-black rounded-md p-5 m-5 h-32 bg-[#1F293B]'>
                        <img src="./icons/sunrise.png" alt="" className='w-9' />
                        <div >
                            <h1 className='text-lg font-semibold text-gray-300'>Sunrise :</h1>
                            <h2 className='text-2xl text-white font-bold'>
                            {formatTime(weatherData.sys.sunrise, weatherData.timezone)}
                            </h2>
                        </div>
                    </div>
                    
                </div>
                
                


            </div>
            


        ) : ( 
            <h1 className="text-white text-3xl font-bold text-center p-5 mt-5">No data available</h1>


        )}








        </div>
    </div>
   
  )
}

export default WeatherCard