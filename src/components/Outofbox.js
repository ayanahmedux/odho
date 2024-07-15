import React from 'react'
import Boximage from '../images/image_245px_1.png'
import { Col, Container, Row } from 'react-bootstrap'

const Outofbox = () => {
    return (
        <div className='out-bossection'>
            <Container>
                <Row>
                    <Col sm='6'>
                       <div className='box-content'>
                       <h2>Think out of the Box</h2>
                        <p>
                            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                        </p>
                          <a href='#'><button className='box-button'> READ MORE </button></a>
                       </div>

                    </Col>
                    <Col sm='6'>
                     <div className='box-image'>
                        <img src={Boximage} alt=''/>
                     </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Outofbox