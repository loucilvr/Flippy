import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import json from '../../cards.json';

const cards = JSON.parse(JSON.stringify(json));

export default class StudyGuide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showQuestion : true,
            showAnswer : false,
            prevCard: null,
            currCard: 0
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

    showNextCard(){
        var nextCard = this.state.currCard + 1;
        if (nextCard  > cards.length) {
            this.setState({ currCard: 0 });
        } else
        this.setState({
            showQuestion : true,
            showAnswer : false,
            prevCard: this.state.currCard,
            currCard : nextCard
        })
    }

    showPreviousCard(){
        this.setState({
            showQuestion : true,
            showAnswer : false,
            prevCard: this.state.currCard,
            currCard: this.state.prevCard
        })
        if (this.state.currCard > cards.length) {
            this.setState({ currCard: 0 });
        }
    }

    randomize() {
        let min = Math.ceil(0);
        let max = Math.floor(cards.length);
        var cardNum = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
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
                <div className="flashCards">
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
                     <div className="flashCard paper" key={this.state.currCard} onClick={this.toggleAnswer}>
                           <span className="question">
                               { this.state.showQuestion && cards.cards[this.state.currCard].question }</span>
                            <h2 className="answer">
                                { this.state.showAnswer && cards.cards[this.state.currCard].answer }
                            </h2>
                            <br/>
                            {  this.state.showAnswer && cards.cards[this.state.currCard].link
                                && <a href="https://www.govtrack.us/congress/members/FL#representatives">
                                www.govtrack.us</a> }

                     </div>

                    <div className="navigate">
                     <input type="submit" name="name"
                            className="actionBtn" value="Randomize"
                            onClick={ this.randomize }></input>
                    <input type="submit" name="name"
                            className="prevNextCardBtn" value="NEXT"
                            onClick={ this.showNextCard }></input>
                    <input type="submit" name="name"
                            className="prevNextCardBtn" value="PREVIOUS "
                            onClick={ this.showPreviousCard }></input>
                    </div>
                </div>
            </div>
        )
    }
}