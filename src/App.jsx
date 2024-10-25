import {Component} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: {
                angry: JSON.parse(localStorage.getItem('angryVotes'))|| 0,
                love: JSON.parse(localStorage.getItem('loveVotes'))|| 0,
                sad: JSON.parse(localStorage.getItem('sadVotes'))|| 0,
                smile: JSON.parse(localStorage.getItem('smileVotes'))|| 0,
                thinking: JSON.parse(localStorage.getItem('thinkingVotes'))|| 0,
            },
            showResults: false
        };
    }

    handleVote = (emoji) => {
        this.setState(prevstate => {
            const newVotes = {
                ...prevstate.votes,
                [emoji]: prevstate.votes[emoji] + 1
            };
            localStorage.setItem(`${emoji}Votes`, JSON.stringify(newVotes[emoji]));
            return {votes: newVotes};
        })
    }

    handleShowResults = () => {
        this.setState({showResults: true});
    }

    getWinnerEmoji = () => {
        const {votes} = this.state;
        const maxVotes = Math.max(...Object.values(votes));
        const winner = Object.keys(votes).find(key => votes[key] === maxVotes);
        return winner;
    }

    render() {
        const {votes, showResults} = this.state;
        const emojiMap = {
            angry: 'angry.png',
            love: 'love.png',
            sad: 'sad.png',
            smile: 'smile.png',
            thinking: 'thinking.png'
        };

        return (
            <Container fluid className='m-5' >
                <Row className='d-flex justify-content-center mb-3'>
                    <Col xs='auto'>
                        <h3>Голосування за найкращий смайлик</h3>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center column-gap-3 mb-4'>
                    {Object.keys(votes).map((emoji, index) => (
                        <Col key={index} xs="auto" className='d-flex align-items-center flex-column row-gap-2'>
                            <Image src={`../publick/img/${emojiMap[emoji]}`} rounded alt={emoji} style={{width: '50px', height: '50px'}}/>
                            <p>Votes: {votes[emoji]}</p>
                            <Button variant='success' onClick={() => this.handleVote(emoji)}>Vote</Button>
                        </Col>
                    ))}


                </Row>

                <Row className='d-flex justify-content-center mb-3'>
                    <Col xs='auto'>
                        <Button variant='primary' onClick={this.handleShowResults}>Show results</Button>
                    </Col>
                </Row>

                {showResults && (
                    <Row className='d-flex justify-content-center mb-3'>
                        <Col xs='auto'>
                            <h3>Результати голосування:</h3>
                            <Image src={`../publick/img/${emojiMap[this.getWinnerEmoji()]}`} rounded alt='winner' style={{width: '50px', height: '50px'}}/>
                            <p>Переможець: {this.getWinnerEmoji()}</p>
                        </Col>
                    </Row>
                )}
            </Container>
        );
    }
}

export default App;