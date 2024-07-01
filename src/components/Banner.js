import React from 'react';
import Bannerbulb from '../images/header_image_200px.png';

const Banner = () => {
  return (
    <div className='banner-sec'>
      <div className='image-wrapper-banner'>
      <div className='parent-bulb-container'>
      <img src={Bannerbulb} className='Ban-bulb' alt="Banner Bulb" />
      </div>
      <div className='Banner-heading'>
        <h1>
        We are Designers <br/>
        and Great Coder
        </h1>
      </div>
      <div className='Banner-button'>
        <a href=''><button className='install-app' >Install our App For Free</button></a>
      </div>
      </div>
     
    </div>
  );
};

export default Banner;
