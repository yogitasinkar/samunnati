import React from 'react'
import { Container } from 'reactstrap';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


const Reports = () => {
    return (
        <Container className='my-5'>
        <h3 className='text-center'>REPORTS</h3>
        <Row className='my-5'>
            <Col sm="4">
                <Card body>
                <CardTitle tag="h5">Report Title</CardTitle>
                <CardText>Report Description</CardText>
                <Button color="info">Download</Button>
                </Card>
            </Col>
            <Col sm="4">
                <Card body>
                <CardTitle tag="h5">Report Title</CardTitle>
                <CardText>Report Description</CardText>
                <Button color="info">Download</Button>
                </Card>
            </Col>
            <Col sm="4">
                <Card body>
                <CardTitle tag="h5">Report Title</CardTitle>
                <CardText>Report Description</CardText>
                <Button color="info">Download</Button>
                </Card>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col sm="4">
                <Card body>
                <CardTitle tag="h5">Report Title</CardTitle>
                <CardText>Report Description</CardText>
                <Button color="info">Download</Button>
                </Card>
            </Col>
            <Col sm="4">
                <Card body>
                <CardTitle tag="h5">Report Title</CardTitle>
                <CardText>Report Description</CardText>
                <Button color="info">Download</Button>
                </Card>
            </Col>
            <Col sm="4">
                <Card body>
                <CardTitle tag="h5">Report Title</CardTitle>
                <CardText>Report Description</CardText>
                <Button color="info">Download</Button>
                </Card>
            </Col>
        </Row>
        </Container>
    )
}

export default Reports
