import React from 'react'
import Iconimage1 from '../images/icon-image1.png';
import Iconimage2 from '../images/icon-image2.png';
import Iconimage3 from '../images/icon-image3.png';
import Iconimage4 from '../images/icon-image4.png';
import { Col, Container, Row } from 'react-bootstrap';

const Likes = () => {
  return (
    <div className='likes-section' 
     >
        <Container>
            <Row>
                <Col sm='3'>
                  <div className='likes-content'>
                    <img src={Iconimage1} alt='' />
                    <h2>45K+</h2>
                    <p>Likes</p>
                  </div>
                </Col>
                <Col sm='3'>
                <div className='likes-content'>
                    <img src={Iconimage2} alt='' />
                    <h2>359</h2>
                    <p>Likes</p>
                  </div></Col>
                <Col sm='3'>
                <div className='likes-content'>
                    <img src={Iconimage3} alt='' />
                    <h2>5447</h2>
                    <p>Likes</p>
                  </div></Col>
                <Col sm ='3'>
                <div className='likes-content'>
                    <img src={Iconimage4} alt='' />
                    <h2>654K</h2>
                    <p>Likes</p>
                  </div></Col>
            </Row>

        </Container>

     </div>
  )
}

export default Likes