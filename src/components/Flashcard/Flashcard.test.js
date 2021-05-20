import React from "react";
import { render } from "@testing-library/react";
import Flashcard from "./Flashcard";

describe("Flashcard", () => {
  it("should render question only by default", () => {
    const { getByText, queryByText } = render(
      <Flashcard
        handleClick={jest.fn()}
        showAnswer={false}
        questionNum={1}
        flashCard={{
          question: "What is the largest state in America (by square miles)?",
          answer: "Alaska (570,641 square miles)",
        }}
      />
    );
    expect(getByText("What is the largest state in America (by square miles)?"))
      .toBeInTheDocument;
    expect(getByText("Click to see answer")).toBeInTheDocument;
    expect(queryByText("Alaska (570,641 square miles)")).not.toBeInTheDocument;
  });

  it("should render answer only", () => {
    const { getByText, queryByText } = render(
      <Flashcard
        handleClick={jest.fn()}
        showAnswer={true}
        questionNum={1}
        flashCard={{
          question: "What is the largest state in America (by square miles)?",
          answer: "Alaska (570,641 square miles)",
        }}
      />
    );
    expect(getByText("What is the largest state in America (by square miles)?"))
      .toBeInTheDocument;
    expect(queryByText("Click to see answer")).not.toBeInTheDocument;
    expect(getByText("Alaska (570,641 square miles)")).toBeInTheDocument;
  });
});
