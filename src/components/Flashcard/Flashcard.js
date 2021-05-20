import React from "react";

const Flashcard = ({ handleClick, showAnswer, questionNum, flashCard }) => (
  <div
    data-testid="flashcard"
    className="flashCard paper"
    onClick={handleClick}
  >
    <div className="cardContent">
      {flashCard && <p className="question">{flashCard.question}</p>}
      {showAnswer && <p className="answer">{flashCard && flashCard.answer}</p>}
      <br />
      {!showAnswer && questionNum <= 5 && (
        <p className="actionHint">Click to see answer</p>
      )}
      {showAnswer && flashCard && flashCard.link && (
        <a href={flashCard && flashCard.link} target="_blank">
          {flashCard && flashCard.linkLabel}
        </a>
      )}
    </div>
  </div>
);

export default Flashcard;
