import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { MdAir } from "react-icons/md";
import { IoSpeedometer } from "react-icons/io5";
import { BsFillSunriseFill } from "react-icons/bs";
import { BsSunsetFill } from "react-icons/bs";

type Props = {}

export interface WeatherDetailsProps{
    visibility:string;
    humidity:string;
    windSpeed:string;
    airPressure:string;
    sunrise:string;
    sunset:string;
}

export default function FWDetails(props:WeatherDetailsProps){
    
    const {
        visibility = "25km",
        humidity = "61%",
        windSpeed = "7 km/h",
        airPressure = "1012 hPa",
        sunrise = "6.20",
        sunset = "18:48"
    } = props;

    return(
        <>
        <SingleWeatherDetails icon = {<FaRegEye />} information="Visibility"  value={visibility}/>
        <SingleWeatherDetails icon = {<FaDroplet />} information="Humidity"  value={humidity}/>
        <SingleWeatherDetails icon = {<MdAir />} information="Wind Speed"  value={windSpeed}/>
        <SingleWeatherDetails icon = {<IoSpeedometer />} information="Air Pressure"  value={airPressure}/>
        <SingleWeatherDetails icon = {<BsFillSunriseFill />} information="Sunrise"  value={sunrise}/>
        <SingleWeatherDetails icon = {<BsSunsetFill />} information="Sunset"  value={sunset}/>
        </>
    )
}

export interface SingleWeatherDetailsProps{
    information:string
    icon:React.ReactNode
    value:string
}

function SingleWeatherDetails(props: SingleWeatherDetailsProps){
    return(
        <div className="flex flex-col justify-center gap-2 items-center text-xs font-semibold text-black/80">
            <p className="whitespace-nowrap">{props.information}</p>
            <div className="text-3xl">{props.icon}</div>
            <p>{props.value}</p>
        </div>
    )
}