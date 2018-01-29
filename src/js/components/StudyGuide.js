import React, { Component } from 'react';

const json = require('../../cards.json');
const cards = JSON.parse(JSON.stringify(json));

export default class StudyGuide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showQuestion : true,
            showAnswer : false,
            card: 0,
        }
        this.flipCard = this.flipCard.bind(this);
        this.showNextCard = this.showNextCard.bind(this);
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
            card : this.state.card + 1})
        if (this.state.card > cards.length) {
            this.setState({ card: 0 });
        }
    }

    randomize() {
        let min = Math.ceil(0);
        let max = Math.floor(cards.length);
        var cardNum = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        this.setState({
            showQuestion: true,
            showAnswer: false,
            card: cardNum
        });
    }

    startOver(){
        location.reload()
    }

    render() {
        return(
            <div>
                 <div className="questionCard" key={this.state.card}>
                     <div onClick={this.flipCard}>
                         { this.state.showQuestion && cards[this.state.card].question }
                         { this.state.showAnswer && cards[this.state.card].answer }
                     </div>
                 </div>
                <div className="navigate">
                 <input type="submit" name="name"
                        className="startOver" value="Start Over"
                        onClick={ this.startOver }></input>
                 <input type="submit" name="name"
                        className="startOver" value="Randomize"
                        onClick={ this.randomize }></input>
                 <input type="submit" name="name"
                        className="nextCard" value="Next Question"
                        onClick={ this.showNextCard }></input>
                </div>
            </div>
        )
    }
}