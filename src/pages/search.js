import { Typography } from '@mui/material';
import  React ,{useState,useEffect, useContext} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { PositionContext } from './weather';


export default function Search() {
  const [city,setCity ] = useState("null");
  
  const { getCity } = useContext(PositionContext);

  //handlechange
  function handleChange(e){
    console.log('____',e.target.value);
    setCity(e.target.value)
    console.log('.....',city)
    
  }
  //handleSubmit
  function handleSubmit(e){
    e.preventDefault();
    getCity(city)
  }


  useEffect(()=>{
    setCity(city)
    // getCity(city)
  },[city])
  return (
    <Box component='form'
    onSubmit={handleSubmit}
      sx={{
        width: 1200,
        maxWidth: '100%',
        paddingTop:'20px',
        paddingBottom:'20px',
      }}
    >
      <TextField fullWidth label="Search for cities" id="fullWidth" sx={{boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}  onChange={handleChange} />
    </Box>
  );
}


