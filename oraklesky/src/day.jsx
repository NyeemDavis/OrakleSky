import React from 'react';
import {formatDate} from './utils.js';


// Componenet to display the weather for a single day
const Day = ({dayInfo}) => {
   const date = dayInfo.datetime
   const description = dayInfo.description
    return (
        <div className="day-container"> 
            <div>
                <h2>{formatDate(date)}</h2>
            </div>
            <div className='temps'>
                <p>Temp: {dayInfo.temp}</p>
                <p>Feels Like: {dayInfo.feelslike}</p>

                <p>High: {dayInfo.tempmax}</p>
                <p>Low: {dayInfo.tempmin}</p>
            </div>
            <div>
                <h2>{}</h2>
            </div>
        </div> 
    )
}

export default Day;