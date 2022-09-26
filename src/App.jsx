import React, { useState, useEffect } from "react"
import axios from "axios";
import './App.css'
import CardWheather from './components/CardWheather'
import Loading from "./components/Loading";

function App() {
  const apiKey = "b6338e21c6080d0d84d992e13af47450";
  const [coords, setCoords] = useState()
  const [wheather, setWheather] = useState()
  const [units, setUnits] = useState("metric")

  useEffect(() => {
   navigator.geolocation.getCurrentPosition((position)=>{
      setCoords({
          lat:position.coords.latitude,
          lon:position.coords.longitude
      })

      
  })
  }, [])


  useEffect(() => {
    if (coords && units) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}&units=${units}&lang={af}`
       axios.get(URL)
          .then(res=>setWheather(res.data))
          .catch(err=>console.log(err)) 
    }
  }, [coords,units])  


  /* Function of change the units */
  const changeUnits = ()=>{
    if (units === "metric") {
      setUnits("imperial")
    }else{
      setUnits("metric")
    }
  }

console.log(wheather);
  return (
    <div className="App">
       {
        wheather ?
        <div className="card-container">
          <CardWheather wheather={wheather} changeUnits={changeUnits} units={units}/>
        </div>
        :
         <Loading />
      } 
      
    </div>
  )
}

export default App
