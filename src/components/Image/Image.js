import React from 'react';
import'./Image.css';
import photo from '../../assets/images/Drone.jpg'


function Image() {
  return <div className='image_component'>
      <img src={photo} alt='Drone.jpg' className='img'/>
  </div>;
}

export default Image;