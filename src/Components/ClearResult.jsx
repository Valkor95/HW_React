import React from 'react';
import {Button, Col} from "react-bootstrap";

const ClearResult = ({onClear}) => {
    return (
        <Col xs='auto' className='d-flex justify-content-center mt-3'>
            <Button variant='danger' onClick={onClear}>Очистити результати</Button>
        </Col>
    );
};

export default ClearResult;