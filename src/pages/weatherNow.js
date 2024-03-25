// import React,  {useState, useEffect } from 'react';
// import Search from './search';


// export const WeatherNow = () => {
//     const [weather, setWeather] = useState(null);
//     // const [dayWeather, setDayWeather ] = useState(null);
//     const [inputCity, setInputCity ] = useState(null)
//     const URL = `http://api.weatherapi.com/v1/current.json?key=41b6c1d0b8f741919a2214615230406&q=${inputCity}&aqi=no`;
//     // const forcastURL =`http://api.weatherapi.com/v1/forecast.json?key=41b6c1d0b8f741919a2214615230406&q=${inputCity}&days=1&aqi=no&alerts=no`


//     useEffect(() => {
//         fetch(URL)
//             .then((response) => {
//                 if (response.ok) {
//                     return response.json();
//                 } else {
//                     console.log('error');
//                 }
//             })
//             .then((data) => {
//                 console.log('DATA', data);
//                 setWeather(data);
//             })
//             .catch((error) => {
//                 console.log('error', error.message);
//             });
//     }, [inputCity]);

//     function getCity(item){
//         if(item){
//             setInputCity(item)
//         }


//     return(
//         <div>
//             <h1>weaher now</h1>
//             <Search />
//         </div>
        
//     )
// }