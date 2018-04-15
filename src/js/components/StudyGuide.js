import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import json from '../../cards.json';

const data = json;

export default class StudyGuide extends Component {
    // test
    // componentDidUpdate(){
    //     console.log(this.state.currCard);
    // }
    constructor(props) {
        super(props);
        this.state = {
            showQuestion : true,
            showAnswer : false,
            prevCard: null,
            currCard: 0,
        }
        this.toggleAnswer = this.toggleAnswer.bind(this);
        this.showNextCard = this.showNextCard.bind(this);
        this.showPreviousCard = this.showPreviousCard.bind(this);
        this.startOver = this.startOver.bind(this);
        this.randomize = this.randomize.bind(this);
    }

     toggleAnswer() {
        this.setState({
            showAnswer : !this.state.showAnswer })
    }

    showNextCard() {
        var nextCard = this.state.currCard + 1;
        if (this.state.currCard === (data.cards.length - 1)) {
            this.setState({currCard: 0});
        } else {
            this.setState({
                showQuestion: true,
                showAnswer: false,
                prevCard: this.state.currCard,
                currCard: nextCard
            });
        }
    }

    showPreviousCard(){
        const oldCard = this.state.currCard - 1;
        if (oldCard < 0) {
            this.setState({ currCard: 0 });
        } else {
            this.setState({
                showQuestion: true,
                showAnswer: false,
                prevCard: this.state.currCard,
                currCard: oldCard
            });
        }
    }

    randomize() {
        let min = Math.ceil(0);
        let max = Math.floor(data.cards.length);
        var cardNum = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        if (cardNum >= data.cards.length || cardNum === 'undefined') {
            this.randomize();
        }
        console.log(cardNum);
        this.setState({
            showQuestion: true,
            showAnswer: false,
            prevCard: this.state.currCard,
            currCard: cardNum
        });
    }

    startOver(){
        location.reload()
    }

    render() {
        return(
            <div>
                <h1 className="title">Flippy</h1>
                    <div className="navigate">
                    <Link to="/">
                        <input type="submit"
                           className="actionBtn"
                           value="Home"
                       />
                    </Link>
                    <input type="submit"
                           className="actionBtn"
                           value="Start Over"
                           onClick={ this.startOver }></input>
                    </div>
                <div className="flashCards">
                <div className="flashCard paper" onClick={this.toggleAnswer}>
                           <span className="question">
                               { this.state.showQuestion && data.cards[this.state.currCard].question }</span>
                            <h2 className="answer">
                                { this.state.showAnswer && data.cards[this.state.currCard].answer }
                            </h2>
                            <br/>
                            {  this.state.showAnswer && data.cards[this.state.currCard].link
                                && <a href="https://www.govtrack.us/congress/members/FL#representatives" target="_blank">
                                www.govtrack.us</a> }
                     </div>

                    <div className="navigate">
                        <input type="submit" name="name"
                           className="prevNextCardBtn" value="NEXT"
                           onClick={ this.showNextCard }></input>
                        <input type="submit" name="name"
                           className="prevNextCardBtn" value="PREVIOUS "
                           onClick={ this.showPreviousCard }></input>
                        <input type="submit" name="name"
                            className="actionBtn" value="Randomize"
                            onClick={ this.randomize }></input>
                        </div>
                </div>
                <div className="info">
                    Online Resources:<br/>
                    <a href="https://www.uscis.gov/citizenship/teachers/educational-products/100-civics-questions-and-answers-mp3-audio-english-version"
                       target="_blank">
                    USCIS - Full View of Citizenship Exam Questions
                    </a><br/>
                    <a href="https://www.uscis.gov/citizenship/learners/study-test"
                       target="_blank">
                    Info on Studying for the Citizenship Test
                    </a>
                </div>
            </div>
        )
    }
}