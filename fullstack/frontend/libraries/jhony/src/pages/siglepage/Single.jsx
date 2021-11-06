import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Form from '../../components/classees/Form'

function Single() {
    return (
        <>
<Container>
    <Row>
        <Col>
    <h1>hello im single page</h1>
        </Col>
        <Col><Form/></Col>
    </Row>

</Container>
        </>
  
    )
}

export default Single
