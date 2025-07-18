import React from 'react';
import weatherIcon from './weatherIcon';
import weatherData from './weatherData';
import './WeatherForecast.css';

export default function WeatherForecast({ day, img, imgAlt, conditions, time }) {
  return (
    <div>
      <WeatherData day={day} conditions={conditions} time={time} />
      <WeatherIcon img={img} imgAlt={imgAlt} />
      
    </div>
  );
}
