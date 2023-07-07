import React from 'react';
import { getDateFromString } from './config';


// Componenet to display the weather for a single day
const Day = ({dayInfo}) => {
   console.log(dayInfo)
   const date = dayInfo.datetime
   const description = dayInfo.description
    return (
        <div className="day-container"> 
            <div>
                <h1>{date}</h1>
            </div>
            <div className='temps'>
                <h2>Temp: {dayInfo.temp}</h2>
                <h2>Feels Like: {dayInfo.feelslike}</h2>
            </div>
            <div>
                <h2>{}</h2>
            </div>
        </div> 
    )
}

export default Day;