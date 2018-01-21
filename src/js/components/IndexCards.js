import React, { Component } from 'react';

class QAForm extends Component {
    render() {
        return (
            <div>
                <div className="question">
                    <div className="indexCardLabel">Question:</div>
                    <input type="text"
                           className="form"></input>
                </div>
                <div className="answer">
                    <div className="indexCardLabel">Answer:</div>
                    <input type="text"
                           className="form"></input>
                </div>
            </div>
        )}
}

export default class IndexCards extends Component {
    constructor(props){
        super(props);
        this.state = {
            moreCards: false,
            cards: ['']
        }
        this.addCards = this.addCards.bind(this);
    }
    addCards(cardId){
        var cards = this.state.cards
        cards.push(`card ${cardId}`);
        console.log(cards);
        this.setState({
            moreCards: true,
            cards: cards
        });
    }

    render(){
        let cardId = 0;
        cardId++
        return(
            <div className="cardForms">
                <hr/>
                <QAForm key={ cardId }/>
                <input type="button"
                       className="addCards"
                       value="Add Card"
                       onClick={() => this.addCards(cardId)}></input>
            </div>
        )
    }
}