import React from 'react';
import {useState, useEffect} from 'react';

import './App.css';
import Day from './day'

const API_KEY = 'TWELUJNTMBUCSSD92YR6WB8QE'

function App() {
  const [weatherData, setWeatherData] = useState({
    city: '',
    days: [],
    timezone: ''
  })
  const [city,  setCity] = useState('')


  const getWeatherData = async ( city ) => {
    if(!city) {
      alert ('Please enter a city name')
    } else {
      const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=${API_KEY}`

      const response = await fetch(`${API_URL}`)
      const data = await response.json()
      setWeatherData({
        city: data.resolvedAddress,
        days: data.days,
        timezone: data.timezone
      })
      console.log(data)
    }    
}

  return (
    <div className="App">
      <h1>OrakleSky</h1>
      <input 
        placeholder='Enter city name'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={() => getWeatherData(city)}>
        Get Weather
      </button>

      <div className='days'>
        {
          weatherData.days.length > 0 
          ? (
            <div className='container'>
              {weatherData.days.map((day, index) => {
                 return <Day dayInfo={day} />
              })}
            </div>
          ) : (
            <div className='empty-container'>
              <h1>No data</h1>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
