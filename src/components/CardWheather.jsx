import React, { useState, useEffect } from "react"
import axios from "axios";

const CardWheather = ({wheather, changeUnits, units})=>{

    
    return(
        <div className="card" id="cardWheater">
            <div className="card__header">
                <div className="card__header-title">
                    <h1> Wheather App  </h1>
                </div>
                <div className="card__header-subtitle">
                    <h3>Ciudad de {wheather?.name}, {wheather?.sys.country}</h3>
                </div>
            </div>
            <div className="card__body">
                <div className="card__body-col card__body-grades">
                    <img src={`https://openweathermap.org/img/wn/${wheather?.weather[0].icon}@2x.png`} alt="" />
                    <span>{wheather?.main.temp}{units=="metric" ? "°C" : "°F" }</span>
                </div>
                <div className="card__body-col card__body-info">
                    <h4>"{wheather?.weather[0].description}"</h4>
                    <ul>
                        <li>
                        <i className="fa-solid fa-wind"></i>
                            Wind speed:  <span>{wheather?.wind.deg} ms</span>
                        </li>
                        <li>
                        <i className="fa-solid fa-cloud"></i>
                            Clouds: <span>{wheather?.clouds.all}%</span>
                        </li>
                        <li>
                        <i className="fa-solid fa-temperature-three-quarters"></i>
                            Pressure: <span>{wheather?.main.pressure} mb</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card__footer">
                <button onClick={changeUnits}>Degrees to {units=="metric" ? "°F" : "°C" }</button>
            </div>
        </div>
    )
}


export default CardWheather