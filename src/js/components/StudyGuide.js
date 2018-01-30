import React, { Component } from 'react';

const json = require('../../cards.json');
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
        this.flipCard = this.flipCard.bind(this);
        this.showNextCard = this.showNextCard.bind(this);
        this.showPreviousCard = this.showPreviousCard.bind(this);
        this.startOver = this.startOver.bind(this);
        this.randomize = this.randomize.bind(this);

    }

     flipCard() {
        console.log('hi')
        this.setState({
            showQuestion : !this.state.showQuestion,
            showAnswer : !this.state.showAnswer })
    }

    showNextCard(){
        this.setState({
            showQuestion : true,
            showAnswer : false,
            prevCard: this.state.currCard,
            currCard : this.state.currCard + 1})
        if (this.state.currCard > cards.length) {
            this.setState({ currCard: 0 });
        }
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
                 <div className="questionCard" key={this.state.currCard} onClick={this.flipCard}>
                         { this.state.showQuestion && cards[this.state.currCard].question }
                         { this.state.showAnswer && cards[this.state.currCard].answer }
                 </div>
                <div className="navigate">
                 <input type="submit" name="name"
                        className="resetRandomizeBtns" value="Start Over"
                        onClick={ this.startOver }></input>
                 <input type="submit" name="name"
                        className="resetRandomizeBtns" value="Randomize"
                        onClick={ this.randomize }></input>
                <input type="submit" name="name"
                        className="prevNextCardBtn" value="NEXT"
                        onClick={ this.showNextCard }></input>
                <input type="submit" name="name"
                        className="prevNextCardBtn" value="PREVIOUS "
                        onClick={ this.showPreviousCard }></input>
                </div>
            </div>
        )
    }
}