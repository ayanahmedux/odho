import React from 'react'
import teamimage1 from '../images/team1_135px.png'
import teamimage2 from '../images/team2_135px.png'
import teamimage3 from '../images/team3_135px.png'
import teamimage4 from '../images/team4_135px.png'
import teamimage5 from '../images/team5_135px.png'
import teamimage6 from '../images/team6_135px.png'
import teamimage7 from '../images/team7_135px.png'
import teamimage8 from '../images/team8_135px.png'
import { Col, Container, Row } from 'react-bootstrap'

const Ourteam = () => {
  return (
    <div className='ourteam-section'>
      <Container>
      <h2 className='team-heading'>Our Team</h2>
           <Row className='team-row1'>
            <Col md="3">
             <img src={teamimage1} alt=''/>             
            </Col>
            <Col md="3">
             <img src={teamimage2} alt=''/>             
            </Col>
            <Col md="3">
             <img src={teamimage3} alt=''/>             
            </Col>
            <Col md="3">
             <img src={teamimage4} alt=''/>             
            </Col>
           </Row>
           <Row className='team-row2'>
            <Col md="3">
             <img src={teamimage5} alt=''/>             
            </Col>
            <Col md="3">
             <img src={teamimage6} alt=''/>             
            </Col>
            <Col md="3">
             <img src={teamimage7} alt=''/>             
            </Col>
            <Col md="3">
             <img src={teamimage8} alt=''/>             
            </Col>
           </Row>
     </Container>
    </div>
  )
}

export default Ourteam