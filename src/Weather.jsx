import { useState } from 'react'
import './Weather.css'
import RadioButton from './RadioButton'
import WeatherDisplay from './WeatherDisplay'

// TODO: style error message, style display


function Weather() {
    const[zip, setZip] = useState('94210')
    const [unit, setUnit] = useState('')
    const [data, setData] = useState(null)

    async function fetchWeather() {
        const apikey = import.meta.env.VITE_OPENWEATHER_API_KEY
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${unit}`
        const response = await fetch(path)
        const json = await response.json()
        // console.log(json)

        const cod = json.cod
        const message = json.message
        if(cod !== 200) {
            setData({ cod, message})
            return
        }

        const temp = json.main.temp
        const feelsLike = json.main.feels_like
        const description = json.weather[0].description
        const name = json.name
        const humidity = json.main.humidity

        setData({
            cod,
            message,
            temp,
            feelsLike, 
            description,
            name,
            humidity
        })
    }

    return(
        <div className='weather'>
            {data && <WeatherDisplay {...data} />}
            <form className='form' onSubmit={e => {
                e.preventDefault()
                fetchWeather()
            }}>
                <div>
                    <input 
                        className='input'
                        placeholder='Enter Zip Code'
                        value={zip}
                        onChange={e => setZip(e.target.value)}
                    />
                    <button className='submit' type='submit'>Submit</button>
                </div>

                <select 
                    value={unit}
                    onChange={e => setUnit(e.target.value)}
                >
                    <option value="metric">Celsius</option>
                    <option value="imperial">Fahrenheit</option>
                    <option value="standard">Kelvin</option>
                </select>

                <RadioButton
                    label="metric"
                    name="unit"
                    checked={unit === "metric"}
                    onChange={() => setUnit("metric")}
                />

                <RadioButton
                    label="imperial"
                    name="unit"
                    checked={unit === "imperial"}
                    onChange={() => setUnit("imperial")}
                />

                <RadioButton
                    label="metric"
                    name="unit"
                    checked={unit === "standard"}
                    onChange={() => setUnit("standard")}
                />


            </form>
        </div>
    )
}

export default Weather