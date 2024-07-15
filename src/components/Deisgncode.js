import React from 'react'
import icon1 from '../images/icon_24px_1.png';
import icon2 from '../images/icon_24px_2.png';
import { Col, Container, Row } from 'react-bootstrap'

const Deisgncode = () => {
  return (
    <div className='design-code-section'>
        <Container fluid>
            <Row>
                <Col lg='6' className='designcode-col' >
                 <div className='design-code-content'>
                    <h2>  Design & Code</h2>
                    <p>
                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus
                    </p>
                    <a href='#'><button className='box-button'> READ MORE </button></a>

                 </div>
                </Col>
                <Col lg='6' className='backimage'>
                 <div className=''>
                  <img src=''/>
                  <h2>  <img src={icon1} alt='' /> Clean Code</h2>
                  <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id...
                  </p>
                  <h2> <img src={icon2} alt='' /> User Dashboard</h2>
                  <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id...
                  </p>
                 </div>
                 </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Deisgncode