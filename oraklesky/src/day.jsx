import React from 'react';
import { getDateFromString } from './config';



const Day = ({dayInfo}) => {
    console.log(dayInfo)
    let date = new Date(dayInfo.datetime);
    return (
        <div className="day">
            <h1>{date}</h1>
        </div>
    )
}

export default Day;