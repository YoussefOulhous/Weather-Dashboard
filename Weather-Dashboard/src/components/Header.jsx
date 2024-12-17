import React from 'react'

function Header({setcity ,city , fetchingWeatherData}) {

  const handleSearch = (e) =>{
    setcity(e.target.value)
  }

  const handleSearchButtonClick = () => {
    if (city) {
      fetchingWeatherData(city);
    } else {
      seterror('Please enter a city name.');
    }
  };




  return (
    <div className='flex justify-around p-5 mx-auto'>

      <div className='flex gap-3 items-center border w-40 h-13 p-2 rounded-md '>
        <img src="./public/icons/weather-app.png" alt="" className='w-10'/>
        <h1 className='text-xl text-white  font-bold'>My Weather</h1>
      </div>

      <div className='flex gap-3 items-center'>
        <input type="text" className='w-80 h-13 rounded-lg border-2 border-gray-600 p-4 text-xl font-semibold 'placeholder='Search' onChange={handleSearch} />
        <button className='w-12 h-12 bg-white rounded-full border-2 border-gray-600 hover:bg-blue-400 duration-200 delay-75' onClick={handleSearchButtonClick} ><img src="./public/icons/search.png" className='w-6 mx-auto' alt="" /></button>
      </div>

      <div>

      <button className='w-14 h-14 bg-white rounded-full  border-2 border-gray-600  items-center flex justify-center hover:bg-blue-400 duration-200 delay-75'><img src="./public/icons/light-mode.png"  alt="" className='w-9'  /></button>

      </div>

      

    </div>
  )
}

export default Header