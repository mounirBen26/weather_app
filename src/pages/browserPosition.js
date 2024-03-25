import {useEffect, useState, useContext } from 'react';
import { PositionContext } from './weather';

const BrowserPosition = () => {
    const [curIP,setCurIP ] = useState('')
    const [curCity,setCurCity] = useState('')
    const APIFY_URL = 'https://api.ipify.org?format=json';
    // const city_API_URL = 'http://ip-api.com/json'
    const city_API_URL = 'https://ipinfo.io/'
    const token = '189aa3ef16683c';

    //get browserCity context
    const { browserCity } = useContext(PositionContext);


    useEffect(()=>{
        fetch(APIFY_URL)
        .then(response=>{
            if(response.ok){
                return response.json()
            }else {
                throw new Error('Network response was not ok.');
            }     
        })
        .then(data=>{
            setCurIP(data.ip)
        })
        .catch(error=>{
            console.log('error',error)
        })}
        ,
        [curIP]);
        useEffect(()=>{
            fetch(city_API_URL + curIP +'?token='+ token)
            .then(response=>{
                if(response.ok){
                    return response.json()
                }else {
                    throw new Error('Network response was not ok.');
                }     
            })
            .then(data=>{
                setCurCity(data.city)
                browserCity(curCity)
            })
            .catch(error=>{
                console.log('error',error)
            })}
            ,
            [curCity])

    
    return null

}
export default BrowserPosition;