import React from "react";

const Flashcard = ({
  handleClick,
  currentCard,
  showQuestion,
  showAnswer,
  questionNum,
  flashCards,
}) => (
  <div className="flashCard paper" onClick={handleClick}>
    <div className="cardContent">
      <p className="question">
        {showQuestion && flashCards[currentCard].question}
      </p>
      <p className="answer">{showAnswer && flashCards[currentCard].answer}</p>
      <br />
      {!showAnswer && questionNum <= 5 && (
        <p className="actionHint">Click to see answer</p>
      )}
      {showAnswer && flashCards[currentCard].link && (
        <a href={flashCards[currentCard].link} target="_blank">
          {flashCards[currentCard].linkLabel}
        </a>
      )}
    </div>
  </div>
);

export default Flashcard;
