import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Skillscounter = () => {
  return (
  <div className='green-section'> 
       <Container  className='' >
     <Row className='skillset-row'>
      <Col sm="3">
       <div className='circle-number'>
        <p className='number'>
        23
        </p>
        <h5 className='pro-color'>professional copywriters</h5>
       </div>
      </Col>
      <Col sm="3">
      <div className='circle-number'>
        <p className='number'>
        65
        </p>
        <h5 className='pro-color'>professional coders</h5>
       </div>
      </Col>
      <Col sm="3">
      <div className='circle-number'>
        <p className='number'>
        98
        </p>
        <h5 className='pro-color'>professional designers</h5>
       </div>
      </Col>
      <Col sm="3">
       <div className='circle-number'>
        <p className='number'>
        45
        </p>
        <h5 className='pro-color'>professional staffmembers</h5>
       </div>
      </Col>
     </Row>
       </Container>
    </div>
  )
}

export default Skillscounter