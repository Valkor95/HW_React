import {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Results from "./Components/Results.jsx";
import EmojiVotes from "./Components/EmojiVotes.jsx";
import ClearResult from "./Components/ClearResult.jsx";

const candidates = [
    {
        key: 'angry',
        localStorageKey: 'angryVotes',
        count: 0,
        url: 'angry.png',
    },
    {
        key: 'love',
        localStorageKey: 'loveVotes',
        count: 0,
        url: 'love.png',
    },
    {
        key: 'sad',
        localStorageKey: 'sadVotes',
        count: 0,
        url: 'sad.png',
    },
    {
        key: 'smile',
        localStorageKey: 'smileVotes',
        count: 0,
        url: 'smile.png',
    },
    {
        key: 'thinking',
        localStorageKey: 'thinkingVotes',
        count: 0,
        url: 'thinking.png',
    },
];

const App = () => {


    return (
        <Container fluid className='m-5' >
            <Row className='d-flex justify-content-center mb-3'>
                <Col xs='auto'>
                    <h3>Голосування за найкращий смайлик</h3>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center column-gap-3 mb-4'>
                {votes.map((emoji, index) => (
                    <EmojiVotes
                        key={index}
                        emoji={emoji}
                        onVote={() => this.handleVote(emoji.key)}
                    />
                ))}


            </Row>

            <Row className='d-flex justify-content-center mb-3'>
                <Col xs='auto'>
                    <Button variant='primary' onClick={this.handleShowResults}>Show results</Button>
                </Col>
            </Row>

            {showResults &&
                (<>
                        <Results
                            winner={this.getWinnerEmoji()}/>
                        <ClearResult onClear={this.handleClearResult}/>
                    </>
                )}
        </Container>
    );
};

export default App;