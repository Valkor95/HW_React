import {Button, Col, Image} from "react-bootstrap";

const EmojiVote = ({ emoji, votes, onVote, emojiMap }) => {
    return (
        <Col xs="auto" className='d-flex align-items-center flex-column row-gap-2'>
            <Image src={`../publick/img/${emojiMap[emoji]}`} rounded alt={emoji} style={{width: '50px', height: '50px'}}/>
            <p>Votes: {votes}</p>
            <Button variant='success' onClick={() => onVote(emoji)}>Vote</Button>
        </Col>
    );
};

export default EmojiVote;