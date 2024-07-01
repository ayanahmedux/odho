import React from 'react'
import Card1 from '../images/icon_40px_1.png';
import Card2 from '../images/icon_40px_2.png';
import Card3 from '../images/icon_40px_3.png';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Cards() {
    return (
     <div className='cards-sec'>
   <Container>
            <Row>
                <Col xs lg="4">
                    <div className='main-card-wrapper'>
                    <Card>
                        <Card.Img variant="top" src={Card1} />
                        <Card.Body>
                            <Card.Title>Fair Play</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button className='go-somewhere' >READ MORE</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>

                <Col xs lg="4">
                <div className='main-card-wrapper'>
                    <Card>
                        <Card.Img variant="top" src={Card2} />
                        <Card.Body>
                            <Card.Title>Creative Art</Card.Title>
                            <Card.Text>
                            Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                            </Card.Text>
                            <Button className='go-somewhere' >READ MORE</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>

                <Col xs lg="4">
                    <div className='main-card-wrapper'>
                    <Card>
                        <Card.Img variant="top" src={Card3} />
                        <Card.Body>
                            <Card.Title>Slick Features</Card.Title>
                            <Card.Text>
                            Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                            </Card.Text>
                            <Button className='go-somewhere' >READ MORE</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>
            </Row>
        </Container>
     </div>
    );
}

export default Cards;