import React from 'react';
import {useState, useEffect} from 'react';
import dummyData from './dummydata.js'

import './App.css';
import Day from './day'
import ErrorBox from './ErrorBox'

const API_KEY = process.env.REACT_APP_API_KEY

function App() {

  // Hooks
    // useSate
      // State to hold weather data
  const [weatherData, setWeatherData] = useState({
    city: '',
    days: [],
    timezone: ''
  })
      // State to hold current city
  const [city,  setCity] = useState('')
      // State to hold error message
  const [error, setError] = useState(false)
    // useEffect
      // useEffect to grab weather data on page load
      useEffect(() => {{
        console.log(dummyData.days)
      }})

  // Functions
    // Async function to grab weather data from API
  const getWeatherData = async ( city ) => {
    console.log(API_KEY)
    if(!city) {
      setError(true)
    } else {
      setError(false)
      const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=${API_KEY}`
      try {
        const response = await fetch(`${API_URL}`)
        const data = await response.json()
        setWeatherData({
        city: data.resolvedAddress,
        days: data.days,
        timezone: data.timezone
      })
      } catch (error) {
        console.log(error)
      }
    }    
}

  return (
    <div className="App">
      <h1>OrakleSky</h1>
      <div className='error-container'>
        <ErrorBox status={error} errorMessage={'Please enter a city'}/>
      </div>
      
      <input 
        placeholder='Enter city name'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={() => getWeatherData(city)}>
        Get Weather
      </button>

      <div className='weatherInformation'>
        <h1>
          {/* Conditional to render address if there is active data from api or not */}
            {
              !weatherData.resolvedAddress 
              ? (
                  <h2>{dummyData.resolvedAddress}</h2>
              ) : (
                  <h2>{weatherData.resolvedAddress}</h2>
              )
            }
          </h1>
        <div className='days'>
          {/* Conditional to render day information if there is data from active data from api or not */}
        {
          weatherData.days.length > 0 
          ? (
            <div className='days-container'>
              {weatherData.days.map((day) => {
                 return <Day dayInfo={day} />
              })}
            </div>
          ) : (
            <div className='empty-days-container'>
              {dummyData.days.map((day) => {
                  return <Day dayInfo={day} />
              })}
            </div>
          )
        }
      </div>
      </div>
      
    </div>
  );
}

export default App;


