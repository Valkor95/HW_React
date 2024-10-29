import {Col, Image, Row} from "react-bootstrap";

const Results = ({winner}) => {
    return (
            <Row className='d-flex justify-content-center mb-3'>
                <Col xs='auto' className='d-flex align-items-center flex-column row-gap-2'>
                    {winner ? (
                        <>
                            <h3>Результати голосування:</h3>
                            <Image src={`../publick/img/${winner}.png`}
                                   rounded alt='winner'
                                   style={{width: '50px', height: '50px'}}/>
                            <p>Переможець: {winner}</p>
                        </>
                    ) : (
                        <p>No votes yet!</p>
                    )}
                </Col>
            </Row>

    );
};

export default Results;
