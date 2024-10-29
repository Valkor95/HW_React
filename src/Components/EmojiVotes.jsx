import {Button, Col, Image} from "react-bootstrap";

const EmojiVote = ({emoji, onVote}) => {
    return (
        <Col xs="auto" className='d-flex align-items-center flex-column row-gap-2'>
            <Image src={`../publick/img/${emoji.url}`} rounded alt={emoji.key} style={{width: '50px', height: '50px'}}/>
            <p>Votes: {emoji.count}</p>
            <Button variant='success' onClick={() => onVote(emoji.key)}>Vote</Button>
        </Col>
    );
};

export default EmojiVote;