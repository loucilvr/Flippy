import React from "react";
import { fireEvent, render } from "@testing-library/react";
import StudyGuide from "./StudyGuide";
import { MemoryRouter } from "react-router-dom";

describe("Study Guide", () => {
  const testFlashCards = [
    {
      question: "What is the largest state in America (by square miles)?",
      answer: "Alaska (570,641 square miles)",
    },
    {
      question: "What is the smallest state in America (by square miles)?",
      answer: "Rhode Island (1,034 square miles)",
    },
  ];

  const defaultRenderer = () =>
    render(
      <MemoryRouter>
        <StudyGuide flashCards={testFlashCards} />
      </MemoryRouter>
    );

  it("should render expected elements and question by default", () => {
    const { getByText, getByTestId } = defaultRenderer();
    expect(getByText("Flippy")).toBeInTheDocument;
    expect(getByText("Home")).toBeInTheDocument;
    expect(getByText("Start Over")).toBeInTheDocument;
    expect(getByText("1/2")).toBeInTheDocument;
    expect(getByTestId("flashcard")).toBeInTheDocument;
    expect(getByText("Previous")).toBeInTheDocument;
    expect(getByText("Next")).toBeInTheDocument;
    expect(getByText("Randomize")).toBeInTheDocument;
    expect(getByText("What is the largest state in America (by square miles)?"))
      .toBeInTheDocument;
    expect(getByText("Click to see answer")).toBeInTheDocument;
  });

  it("should show answer when card is clicked", () => {
    const { getByText, getByTestId, queryByText } = defaultRenderer();
    fireEvent.click(getByTestId("flashcard"));
    expect(
      queryByText("What is the largest state in America (by square miles)?")
    ).not.toBeInTheDocument;
    expect(queryByText("Click to see answer")).not.toBeInTheDocument;
    expect(getByText("Alaska (570,641 square miles)")).not.toBeInTheDocument;
  });

  it("should show question when card is clicked after an answer is shown", () => {
    const { getByText, getByTestId, queryByText } = defaultRenderer();
    fireEvent.click(getByTestId("flashcard"));
    fireEvent.click(getByTestId("flashcard"));

    expect(queryByText("Click to see answer")).not.toBeInTheDocument;
    expect(queryByText("Alaska (570,641 square miles)")).not.toBeInTheDocument;
    expect(getByText("What is the largest state in America (by square miles)?"))
      .toBeInTheDocument;
    expect(getByText("Click to see answer")).toBeInTheDocument;
  });

  it("should show expected following question when Next is clicked", () => {
    const { getByText, queryByText } = defaultRenderer();
    fireEvent.click(getByText("Next"));

    expect(getByText("2/2")).toBeInTheDocument;
    expect(queryByText("Alaska (570,641 square miles)")).not.toBeInTheDocument;
    expect(
      getByText("What is the smallest state in America (by square miles)?")
    ).toBeInTheDocument;
    expect(getByText("Click to see answer")).toBeInTheDocument;
  });

  it("should show expected previous question when Previous is clicked", () => {
    const { getByText } = defaultRenderer();
    fireEvent.click(getByText("Next"));
    fireEvent.click(getByText("Previous"));

    expect(getByText("1/2")).toBeInTheDocument;
    expect(getByText("What is the largest state in America (by square miles)?"))
      .toBeInTheDocument;
    expect(getByText("Click to see answer")).toBeInTheDocument;
  });

  it("should start over when user is at the end of flashcards and Next is clicked", () => {
    const { getByText } = defaultRenderer();
    fireEvent.click(getByText("Next"));

    expect(getByText("2/2")).toBeInTheDocument;
    fireEvent.click(getByText("Next"));
    expect(getByText("1/2")).toBeInTheDocument;
  });

  it("should go backwards when user is at the beginning of flashcards and Previous is clicked", () => {
    const { getByText } = defaultRenderer();
    fireEvent.click(getByText("Previous"));
    expect(getByText("2/2")).toBeInTheDocument;

    fireEvent.click(getByText("Previous"));
    expect(getByText("1/2")).toBeInTheDocument;
  });
});
