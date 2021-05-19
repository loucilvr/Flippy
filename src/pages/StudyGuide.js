import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import flashCards from "../flashCards";
import Button from "../components/Button";
import Flashcard from "../components/Flashcard";

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
    const { showQuestion, showAnswer, currentCard, questionNum } = this.state;
    return (
      <>
        <h1 className="title">Flippy</h1>
        <div className="navigate">
          <Button handleClick={this.navigateToHome} variant="secondary">
            Home
          </Button>
          <Button handleClick={this.startOver} variant="secondary">
            Start Over
          </Button>
        </div>
        <div className="questionNum">{questionNum}/100</div>
        <Flashcard
          handleClick={this.toggleAnswer}
          showQuestion={showQuestion}
          showAnswer={showAnswer}
          currentCard={currentCard}
          flashCards={flashCards}
          questionNum={questionNum}
        />
        <div className="buttonsContainer">
          <Button variant="secondary" handleClick={this.randomize}>
            Randomize
          </Button>
          <div className="prevNextButtons">
            <Button variant="secondary" handleClick={this.showPreviousCard}>
              Previous
            </Button>
            <Button variant="primary" handleClick={this.showNextCard}>
              Next
            </Button>
          </div>
        </div>

        <div className="info">
          <h3>Online Resources</h3>
          <a href="https://github.com/loucilvr/Flippy" target="_blank">View Flippy Source Code</a>
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
