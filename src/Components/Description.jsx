import React from 'react'
import './Description.css';
import  {FaArrowCircleDown, FaArrowUp, FaWind} from 'react-icons/fa';
import {BiHappy} from 'react-icons/bi';
import {MdCompress,MdOutlineWaterDrop} from 'react-icons/md';
const Description = ({weather,units}) => {
 
      const tempUnit=units==='metric' ?'°C':"°F"
      const windUnit=units==='metric' ? 'm/s' :'m/h'
     let card=[
          {
               id:1,
               icons:<FaArrowCircleDown/>,
               title:"min",
               data:Math.round(weather.temp_min),
               unit:tempUnit,
          },
          {
               id:2,
               icons:<FaArrowUp/>,
               title:"max",
               data:Math.round(weather.temp_max),
               unit:tempUnit,
          },
          {
               id:3,
               icons:<BiHappy/>,
               title:"feels like",
               data:weather.temp_feels_like,
               unit:tempUnit,
          },
          {
               id:4,
               icons:<MdCompress/>,
               title:"pressure",
               data:weather.pressure,
               unit:"hPa",
          },
          {
               id:5,
               icons:<MdOutlineWaterDrop/>,
               title:"humidity",
               data:weather.humidity,
               unit:"%",
          },
          {
               id:6,
               icons:<FaWind/>,
               title:"wind speed",
               data:weather.speed,
               unit:windUnit,
          },
     ];
  return (
    <div>
        <div className='section section__description'>
          {
card.map(({id,icons,title,data,unit})=>(
     <div className='card' key={id}>
     <div className='description__card-icon'>
          {icons}
          <small>{title}</small>
          </div>
          <h2>{data} {unit}</h2> 
          </div>   

)
)
               
          }
      
</div>
</div>
  )
}

export default Description