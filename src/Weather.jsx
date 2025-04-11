import { useState } from 'react'
import './Weather.css'

function Weather() {
    const[zip, setZip] = useState('94210')

    return(
        <div className='weather'>
            <h1>{zip}</h1>
            <form className='form'>
                <input 
                    className='input'
                    placeholder='Enter Zip Code'
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                />
                <button className='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Weather