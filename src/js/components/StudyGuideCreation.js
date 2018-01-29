import React, { Component } from 'react';

import IndexCards from './IndexCards';
import StudyGuide from './StudyGuide';

var studyGuides = [
    {"name": 'Geography',
        "indexCards": [{
            "question": 'What is the capital of Florida?',
            "answer": "Tallahassee"
        }]
    }
];

export default class StudyGuideCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            cardsCreated: false,
            displayIndexCards: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayCards = this.displayCards.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        var name = this.state.value;
        studyGuides.push(name);
        // console.log(studyGuides);
        event.preventDefault();
    }

    displayCards() {
        this.setState({
            cardsCreated: true,
            displayIndexCards: true
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/*<input type="text"*/}
                    {/*className="form"*/}
                    {/*value={this.state.value}*/}
                    {/*onChange={ this.handleChange }*/}
                    {/*placeholder="Example: 'Geography'..."></input>*/}

                    <input type="submit" name="name"
                           className="createStudyGuide" value="Start Studying"
                           onClick={ this.displayCards }></input>
                    {/*{ this.state.cardsCreated && <Success name={this.state.value}/> }*/}
                </form>
                {/*{ this.state.displayIndexCards && <IndexCards/> }*/}
                { this.state.displayIndexCards && <StudyGuide/> }
            </div>

        )
    }
}

class Success extends Component {
    render() {
        return (
            <div>
                <h4>Successfully created study guide for <span className="guideName">{ this.props.name }</span>!</h4>
            </div>
        )
    }
}


