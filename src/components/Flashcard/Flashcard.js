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
        {showQuestion && flashCards && flashCards[currentCard].question}
      </p>
      <p className="answer">
        {showAnswer && flashCards && flashCards[currentCard].answer}
      </p>
      <br />
      {!showAnswer && questionNum <= 5 && (
        <p className="actionHint">Click to see answer</p>
      )}
      {showAnswer && flashCards && flashCards[currentCard].link && (
        <a
          href="https://www.govtrack.us/congress/members/FL#representatives"
          target="_blank"
        >
          www.govtrack.us
        </a>
      )}
    </div>
  </div>
);

export default Flashcard;
