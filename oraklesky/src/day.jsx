import React from 'react';


// Componenet to display the weather for a single day
const Day = ({dayInfo}) => {
   const date = dayInfo.datetime
   const description = dayInfo.description
    return (
        <div className="day-container"> 
            <div>
                <h1>{date}</h1>
            </div>
            <div className='temps'>
                <p>Temp: {dayInfo.temp}</p>
                <p>Feels Like: {dayInfo.feelslike}</p>
            </div>
            <div>
                <h2>{}</h2>
            </div>
        </div> 
    )
}

export default Day;