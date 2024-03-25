import { useState, useEffect } from "react";

const token = '189aa3ef16683c';
const   CurrentPosition = ({browserCity}) => {
    const [curIPP,setCurIPP ] = useState('');
    const [curCityy, setCurCityy] = useState('');

    const APIFY_URL = 'https://api.ipify.org?format=json';
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
            setCurIPP(data.ip)
            console.log('ppp',data.ip)
        })
        .catch(error=>{
            console.log('error',error)
        })}
        ,
        [curIPP]);

    useEffect(() => {
        try {
            fetch('https://ipinfo.io/'+curIPP+'?token='+ token)
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.log('error')
                    }
                })
                .then(data => {
                    console.log('dataa', data.city)
                    setCurCityy(data.city)
                    browserCity(curCityy)
                })

        } catch (error) {
            console.error(error);
        }
    }, [])
    return null
}

export default CurrentPosition;