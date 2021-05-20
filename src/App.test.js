import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";

describe("App", () => {
  it("renders with expected elements for landing page", () => {
    const { getByText } = render(<App />);
    expect(getByText("Welcome to Flippy")).toBeInTheDocument;
    expect(getByText("Start Studying")).toBeInTheDocument;
  });

  it("renders flash card elements when user clicks Start Studying", () => {
    const { getByText, queryByText, getByTestId } = render(<App />);
    fireEvent.click(getByText("Start Studying"));
    expect(queryByText("Welcome to Flippy")).not.toBeInTheDocument;
    expect(queryByText("Start Studying")).not.toBeInTheDocument;

    expect(getByText("Home")).toBeInTheDocument;
    expect(getByText("Start Over")).toBeInTheDocument;
    expect(getByTestId("flashcard")).toBeInTheDocument;
    expect(getByText("Randomize")).toBeInTheDocument;
    expect(getByText("Previous")).toBeInTheDocument;
    expect(getByText("Next")).toBeInTheDocument;
    expect(getByTestId("footer")).toBeInTheDocument;
  });

  it("renders expected elements when user navigates back to Home", () => {
    const { getByText, queryByText, getByTestId, queryByTestId } = render(
      <App />
    );
    fireEvent.click(getByText("Home"));

    expect(queryByText("Home")).not.toBeInTheDocument;
    expect(queryByText("Start Over")).not.toBeInTheDocument;
    expect(queryByTestId("flashcard")).not.toBeInTheDocument;
    expect(queryByText("Randomize")).not.toBeInTheDocument;
    expect(queryByText("Previous")).not.toBeInTheDocument;
    expect(queryByText("Next")).not.toBeInTheDocument;
    expect(queryByTestId("footer")).not.toBeInTheDocument;

    expect(getByText("Welcome to Flippy")).toBeInTheDocument;
    expect(getByText("Start Studying")).toBeInTheDocument;
  });
});
