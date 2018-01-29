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

    }

     flipCard() {
        console.log('hi')
        this.setState({
            showQuestion : !this.state.showQuestion,
            showAnswer : !this.state.showAnswer })
    }

    showNextCard(){
        this.setState({
            showQuestion : !this.state.showQuestion,
            showAnswer : !this.state.showAnswer,
            card : this.state.card + 1})
    }

    startOver(){
        location.reload()
    }

    render() {
        console.log(cards[0].question);

        return(
            <div>
                 <div className="questionCard" key={this.state.card}>
                     <div onClick={this.flipCard}>
                         { this.state.showQuestion && cards[this.state.card].question }
                         { this.state.showAnswer && cards[this.state.card].answer }
                     </div>
                 </div>
                 <input type="submit" name="name"
                        className="startOver" value="Start Over"
                        onClick={ this.startOver }></input>
                 <input type="submit" name="name"
                        className="nextCard" value="Next Question"
                        onClick={ this.showNextCard }></input>
            </div>
        )
    }
}