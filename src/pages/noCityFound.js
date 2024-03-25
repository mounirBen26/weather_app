import { Typography } from '@mui/material';
import React from 'react';
import {FaTreeCity} from 'react-icons/fa6';

export const NoCityFound = () => {
    return(
        <Typography variant='h3'><FaTreeCity />No city Found</Typography>
    )
}