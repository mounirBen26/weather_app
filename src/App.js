import React, { useEffect, useState } from 'react';
import './App.css';
import { Container } from '@mui/material';
import Weather from './pages/weather';
import CurrentPosition from './pages/currentPosition';

function App() {
  const [currentCity, setCurrentCity] = useState('');



 

  return (
    <Container>
      <Weather  />
    </Container>
  );
}

export default App;
