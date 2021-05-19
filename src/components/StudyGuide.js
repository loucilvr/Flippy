import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import flashCards from "../flashCards";

class StudyGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuestion: true,
      showAnswer: false,
      currentCard: 0,
      questionNum: 1,
    };
    this.toggleAnswer = this.toggleAnswer.bind(this);
    this.showNextCard = this.showNextCard.bind(this);
    this.showPreviousCard = this.showPreviousCard.bind(this);
    this.startOver = this.startOver.bind(this);
    this.randomize = this.randomize.bind(this);
    this.navigateToHome = this.navigateToHome.bind(this);
  }

  toggleAnswer() {
    this.setState({
      showAnswer: !this.state.showAnswer,
    });
  }

  showNextCard() {
    const nextCard = this.state.currentCard + 1;
    const questionCard = nextCard + 1;
    if (this.state.currentCard === flashCards.length - 1) {
      this.setState({ currentCard: 0, questionNum: 1 });
    } else {
      this.setState({
        showQuestion: true,
        showAnswer: false,
        currentCard: nextCard,
        questionNum: questionCard,
      });
    }
  }

  showPreviousCard() {
    const prevCard = this.state.currentCard - 1;
    const questionCard = prevCard + 1;
    if (prevCard < 0) {
      this.setState({ currentCard: 99, questionNum: 99 });
    } else {
      this.setState({
        showQuestion: true,
        showAnswer: false,
        currentCard: prevCard,
        questionNum: questionCard,
      });
    }
  }

  randomize() {
    const min = Math.ceil(0);
    const max = Math.floor(flashCards.length);
    const randomCard = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    if (randomCard >= flashCards.length || randomCard === "undefined") {
      this.randomize();
    }
    const questionCard = randomCard + 1;
    this.setState({
      showQuestion: true,
      showAnswer: false,
      currentCard: randomCard,
      questionNum: questionCard,
    });
  }

  startOver() {
    location.reload();
  }

  navigateToHome() {
    this.props.history.push("/");
  }

  render() {
    return (
      <>
        <h1 className="title">Flippy</h1>
        <div className="navigate">
          <button onClick={this.navigateToHome} className="actionBtn">
            Home
          </button>
          <button className="actionBtn" onClick={this.startOver}>
            Start Over
          </button>
        </div>
        <div className="questionNum">{this.state.questionNum}/100</div>
        <div className="flashCard paper" onClick={this.toggleAnswer}>
          <div className="cardContent">
            <p className="question">
              {this.state.showQuestion &&
                flashCards[this.state.currentCard].question}
            </p>
            <p className="answer">
              {this.state.showAnswer &&
                flashCards[this.state.currentCard].answer}
            </p>
            <br />
            {!this.state.showAnswer && this.state.questionNum <= 5 && (
              <p className="actionHint">Click to see answer</p>
            )}
            {this.state.showAnswer && flashCards[this.state.currentCard].link && (
              <a
                href="https://www.govtrack.us/congress/members/FL#representatives"
                target="_blank"
              >
                www.govtrack.us
              </a>
            )}
          </div>
        </div>
        <div className="buttonsContainer">
          <button className="actionBtn" onClick={this.randomize}>
            Randomize
          </button>
          <div className="prevNextButtons">
            <button className="actionBtn" onClick={this.showPreviousCard}>
              Previous
            </button>
            <button className="prevNextCardBtn" onClick={this.showNextCard}>
              Next
            </button>
          </div>
        </div>

        <div className="info">
          <h3>Online Resources:</h3>
          <a
            href="https://www.uscis.gov/citizenship-resource-center/the-2020-version-of-the-civics-test/study-for-the-test-2020-version"
            target="_blank"
          >
            USCIS - Full View of Citizenship Exam Questions
          </a>
        </div>
      </>
    );
  }
}

export default withRouter(StudyGuide);
