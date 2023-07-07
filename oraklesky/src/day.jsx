import React from 'react';
import { getDateFromString } from './config';


// Componenet to display the weather for a single day
const Day = ({dayInfo}) => {
    console.log(dayInfo)
    return (
        <div className="day">
            <h1>{date}</h1>
        </div>
    )
}

export default Day;