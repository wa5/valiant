import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cards1 from '../../components/cards/diffCards/Cards1'
import Navbar1 from '../../components/navbar/diffNavbars/Navbar1'
import Sliders1 from '../../components/sliders/diffSliders/Sliders1'
import img1 from '../../static/img/1.jpg'
import img2 from '../../static/img/2.jpg'
import img3 from '../../static/img/3.jpg'



function Home() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                    <Navbar1/>
                    </Col>
                </Row>
                <br/>
            <Row>
                <Col>

                <Sliders1/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                <Cards1  img={img1}/>
                </Col>
                <Col>
                <Cards1 img={img2}/>
                </Col>
                <Col>
                <Cards1 img={img3}/>
                </Col>
            </Row>
               
            </Container>
        </div>
    )
}

export default Home
