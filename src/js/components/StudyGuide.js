import React, { Component } from 'react';

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
        var studyguide = [
            {
                "id": 1,
                "question" : "Who is the current President of the United States?",
                "answer" : "Donald Trump"
            }, {
                "id": 2,
                "question" : "What is the supreme law of the land?",
                "answer" : "The Constitution - The Founding Fathers of the United States wrote the Constitution in 1787"
            }, {
                "id": 3,
                "question" : "What does the Constitution do?",
                "answer" : "(1) sets up the government " +
                "(2) defines the government " +
                "(3) protects basic rights of Americans"
            }, {
                "id": 4,
                "question" : "The idea of self-government is in the first three words of the Constitution. What are these words?",
                "answer" : "We the people"
            }, {
                "id": 5,
                "question" : "What is an amendment?",
                "answer" : "a change/addition to the Constitution"
            }, {
                "id": 6,
                "question" : "What do we call the first ten amendments to the Constitution?",
                "answer" : "Bill of Rights"
            }
        ];
        return(
            <div>
                { studyguide.map((e,i) =>
                    <div className="questionCard" key={i} onClick={ this.showAnswer }>
                        <div> { e.question }</div>
                        { this.state.showAnswer && <Answer answer={ e.answer }/> }
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