import React from 'react'

function WeatherCard({weatherData ,error,localTime }) {



    const kelvinToCelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(2); 
      };

  return (
    <div className='bg-gradient-to-b from-[#020024] to-[#090979] h-screen'>
        {error && <p className='text-white text-xl'>{error}</p>}
        {weatherData ?(
            <div className='text-white w-1/3 h-auto mt-8 mx-auto p-6 backdrop-blur-0 border-2 border-white rounded-lg' 
            style={{
                background: 'linear-gradient(90deg, rgba(70,153,252,1) 0%, rgba(0,9,249,1) 100%)',
              }}
                >
                <div>
                <img 
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                alt="Weather icon" className='w-60 mx-auto'
                />
                </div>
                <h1 className='text-5xl font-bold text-center'>{kelvinToCelsius(weatherData.main.temp)}°C</h1>
                <h3 className='text-2xl font-semibold text-center mt-2'>{weatherData.name}</h3>
                <div className='flex justify-between mt-3 p-3'>
                    <div>
                        <h2 className='text-2xl font-semibold'>Humidity:</h2>
                        <h3 className='text-xl'>{weatherData.main.humidity}%</h3>
                    </div>

                    <div>
                        <h2  className='text-2xl font-semibold'>Wind Speed:</h2>
                        <h3 className='text-xl'>{weatherData.wind.speed}km/h</h3>
                    </div>
                    <h2>Time Local : {localTime}</h2>
                </div>

            </div>
            


        ) : ( 
            <h1 className="text-white text-3xl font-bold text-center p-5 mt-5">No data available</h1>


        )}








    </div>
  )
}

export default WeatherCard