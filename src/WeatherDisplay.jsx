import './WeatherDisplay.css'

function WeatherDisplay(props) {
    const { temp, feelsLike, description, name, humidity, cod, message } = props

    if (cod !== 200) {
        return(
            <small>{message}</small>
        )
    }

    return(
        <div className="weather-display">
            <h1>{temp}</h1>
            <h3>{name}</h3>
            <div className="weather-details">
                <small>Feels Like: {feelsLike}</small>
                <small>Humidity level: {humidity}</small>
            </div>
            <p>{description}</p>

        </div>
    )
}

export default WeatherDisplay