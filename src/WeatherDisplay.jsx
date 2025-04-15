import './WeatherDisplay.css'

function getWeatherIcon(description) {
    const desc = description.toLowerCase()
    if (desc.includes("cloud")) return "☁️"
    if (desc.includes("rain")) return "🌧"
    if (desc.includes("clear")) return "☀️"
    if (desc.includes("snow")) return "❄️"
    if (desc.includes("storm") || desc.includes("thunder")) return "⛈"
    if (desc.includes("mist") || desc.includes("fog")) return "🌫"
    return "🌤🌈"

}

function WeatherDisplay(props) {
    const { temp, feelsLike, description, name, humidity, cod, message } = props

    if (cod !== 200) {
        return(
            <small className="error">{message}</small>
        )
    }

    return(
        <div className="weather-display">
            <div className="weather-icon">{getWeatherIcon(description)}</div>
            <h1 className="temp">{temp}°</h1>
            <h3>{name}</h3>
            <div className="weather-details">
                <small>Feels Like: {feelsLike}°</small>
                <small>Humidity level: {humidity}%</small>
            </div>
            <p className="description">{description}</p>

        </div>
    )
}

export default WeatherDisplay