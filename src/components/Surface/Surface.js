import React, { useCallback, useState } from 'react';
import './Surface.css';
import info1 from '../../assets/icons/info1.png';
import info2 from '../../assets/icons/info2.png';
import envelope from '../../assets/icons/envelope.png';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { useEventCallback } from '@mui/material';
import {quantity1} from '../Infobox/Infobox'
import { MContext } from '../ContextObject/contextObject';








function Surface() {
    return <div className='surface'>
        
        <label className='shipto'>Ship to <u>South Africa</u> by Express UPS Sav…</label>
        <lable className='leadtime'>Lead Time 10 days</lable>
        <img src={info1} className='info1'></img>
        <lable className='shippingtime'>Shipping time 6-10 days</lable>
        <img src={info2} className='info2'></img>

        <button className='loginbtn'>
            <label className='login'>Login to Purchase</label>
        </button>

        <button className='contactbtn'>
            <img src={envelope} className='mail'></img>
            <label className='contact'>Contact the Supplier</label>
        </button>

        <div className='totalZAR'></div>
        
    </div>
  }
  
  export default Surface;