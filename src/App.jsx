import React, {Component} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <Container fluid className='m-5' >
                <Row className='d-flex justify-content-center mb-3'>
                    <Col xs='auto'>
                        <h3>Голосування за найкращий смайлик</h3>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center column-gap-3'>
                    <Col xs="auto" className='text-center'>
                        <Image src={'../publick/img/angry.png'} rounded alt='angry' style={{width: '50px', height: '50px'}}/>
                        <p>Vote: 1</p>
                    </Col>
                    <Col xs="auto" className='text-center'>
                        <Image src={'../publick/img/love.png'} rounded alt='angry' style={{width: '50px', height: '50px'}}/>
                        <p>Vote: 1</p>
                    </Col>
                    <Col xs="auto" className='text-center'>
                        <Image src={'../publick/img/sad.png'} rounded alt='angry' style={{width: '50px', height: '50px'}}/>
                        <p>Vote: 1</p>
                    </Col>
                    <Col xs="auto" className='text-center'>
                        <Image src={'../publick/img/smile.png'} rounded alt='angry' style={{width: '50px', height: '50px'}}/>
                        <p>Vote: 1</p>
                    </Col>
                    <Col xs="auto" className='text-center'>
                        <Image src={'../publick/img/thinking.png'} rounded alt='angry' style={{width: '50px', height: '50px'}}/>
                        <p>Vote: 1</p>
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default App;