import React, { useEffect, useState } from 'react'
// import hotbg from './Components/hot.jpg';
import cold from './Components/cold.jpg';
import Description from './Components/Description';
import getFormatData from './WeatherFetch';


const App = () => {

  const [weather,setWeather]=useState(null);
  const [unit,setUnits]=useState("metric");
  const [city,setCity]=useState("Paris")
  useEffect(()=>{
    const fetch=async()=>
    {
    const data=await getFormatData(city,unit);
    setWeather(data);
    console.log(data);
    }
    fetch();
  },[unit,city])

//   const handleClick=(e)=>
//   {
// const button=e.currentTarget;
// const currentUnit=button.innerText.slice(1);
// const isCelcius=currentUnit==="C";
// button.innerText=isCelcius ? "F" :"C";
// setUnit(isCelcius ? 'metric' :"imperial" )

//   }
const handleUnitClick = (e) => {
  const button = e.currentTarget;
  const currentUnit = button.innerText.slice(1);

  const isCelsius = currentUnit === "C";
  button.innerText = isCelsius ? "°F" : "°C";
  setUnits(isCelsius ? "metric" : "imperial");
};
const enterKeyPressed = (e) => {
  if (e.keyCode === 13) {
    setCity(e.currentTarget.value);
    e.currentTarget.blur();
  }

  }
  return (
    <div className="app" style={{backgroundImage:`url(${cold})`}}>
    <div className='overlay'>
      {
        weather && (
      <div className='container'>
        <div className='section section__inputs'>
        <input
                onKeyDown={enterKeyPressed}
                type="text"
                name="city"
                placeholder="Enter City..."
              />          <button onClick={(e)=>handleUnitClick(e)}>°C</button>
        </div>
        <div className='section section__temprature'>
          <div className='icon'>
            <h3>{weather.name}, {weather.country}</h3>
            <img src={weather.iconUrl} alt="weather icon"/>
            <h3>{weather.description}</h3>
          </div>
<div className='temperature'>
  <h1>
    {`${Math.round(weather.temp)} ${unit==='metric' ? '°C' :"°F"}`}
  </h1>
</div>
      </div>
{/* description */}
        <div>
          <Description weather={weather} unit={unit}/>

                  </div>
      
      </div>)
}
      </div>     
      </div>

  )
}

export default App
