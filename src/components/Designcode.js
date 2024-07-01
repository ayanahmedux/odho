import React from 'react'
import Design1 from '../images/design-image.png';
import Design2 from '../images/design-image-2.png';
import { Col,Container,Containerfluid, Row } from 'react-bootstrap';

const Designcode = () => {
  return (
    <div className='Design-code-section'>
      <Container fluid className='bg-grd'>
      <Container>
      <Row>
          <Col xs sm='6' className='first-col'>
        <div className='design-section-1'>
        <div className='design-image'>
             <img src={Design1} />
             </div>
             <div className='design-content'>
              <h2>Design & Code</h2>
              <p>
              Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at.
              </p>
             </div>
        </div>
          </Col>
          <Col xs sm='6' className='second-col'>
          <div className='design-section-2'>
          <div className='design-content2'>
              <h2>The Perfect Toolkit</h2>
              <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus.
              </p>
             </div>
             <div className='design-image2'>
             <img src={Design2} />
             </div>
          </div>
          </Col>
        </Row>
      </Container>
      </Container>
    </div>
  )
}

export default Designcode;