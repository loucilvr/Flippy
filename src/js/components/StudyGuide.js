import React, { Component } from 'react';

const json = require('../../cards.json');
const cards = JSON.parse(JSON.stringify(json));

export default class StudyGuide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "showAnswer" : false
        }
        this.showAnswer = this.showAnswer.bind(this);
    }

    showAnswer(props) {
        this.setState({ showAnswer : !this.state.showAnswer })
    }

    render() {
        console.log(json);

        return(
            <div>
                { cards.map((e,i) =>
                    <div className="questionCard" key={i} onClick={event => this.showAnswer(i)}>
                        <div> { e.question }</div>
                        { this.state.showAnswer && <Answer id={i} answer={ e.answer }/> }
                    </div>
                )}
            </div>
        )
    }
}
//
// class Cards extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             showAnswer: false
//         }
//         this.showAnswer = this.showAnswer.bind(this);
//     }
//
//     showAnswer(props) {
//         this.setState({ showAnswer : true })
//     }
//
//     render(props) {
//
//         return(
//             <div className="questionCard">
//                <div> { this.props.question }</div>
//                 { this.state.showAnswer && <Answer answer={ this.props.answer }/> }
//             </div>
//         )
//     }
// }

class Answer extends Component {
    render() {
        return (
            <div className="answerText"> Answer: {this.props.answer } </div>
        )
    }
}