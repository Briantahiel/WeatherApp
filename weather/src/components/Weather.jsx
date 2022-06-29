import React from 'react'
import { useState } from 'react'
import axios from "axios"
import "../components/Weather.css"
import Fade from 'react-reveal/Fade'

function Weather() {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    
    // location needs to be located (with an input then) into the url
    // &units=imperial are required
    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=`)

    const searchLocation = (e) => {
        // Once enter key is pressed axios function is triggered
        if(e.key === 'Enter')
        axios.get(url)
        .then((res) => {
            setData(res.data)
            console.log(res.data)
        })
        .catch(error => console.log(error))
    }
  return (
    <>
        <div className="search">
            <input 
            type="text" 
           /* Setting the value of the input to the state of location. */
            value={location}
           
            /* Setting the value of the input to the state of location. */
            onChange={e => setLocation(e.target.value)}
            /* Triggering the searchLocation function when the enter key is pressed. */
            onKeyPress={searchLocation}
            placeholder='Enter your location'/>
        </div>
        <div className="container">
                   <Fade left cascade>
                    <div className="container_top">
                   
                            {data.name ? <p>{data.name}</p> : null}
        
                            {data.main ? <p>{data.sys.country}</p> : null}
             
                            {data.main ? <p>{data.main.temp./* Rounding the temperature to the nearest
                            whole number. */
                            toFixed()}°F</p> : null}
            
                            {data.weather ? <p>{data.weather[0].main}</p> : null}
                           
                    </div>
                      </Fade>   
               
     
             
            {data.name != undefined && 
           
                    <div className="container_bottom">  
                 <Fade bottom>    
                        <div className="information">
                            <div className="temp">
                                {data.main ? <p>{data.main.temp_max} °F</p> : null}
                                <p>Max Temp</p>
                            </div>
                            <div className="humidity">
                                {data.main ? <p>{data.main.humidity}%</p> : null}
                                <p>Humidity</p>
                            </div>
                            <div className="wind">
                                {data.wind? <p>{data.wind.speed} MPH</p> : null}
                                <p>Wind</p>
                            </div>
                        </div> 
                      </Fade>     
                        </div>}
                        
                  </div>  
                  
               
        
   
    </>
 
  )
}

export default Weather