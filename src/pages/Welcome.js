import React from "react";
import { withRouter } from "react-router-dom";
import Button from "../components/Button";
import "../components/Button/Button.css";

const Welcome = ({ history }) => {
  const navigateToCards = () => history.push("/study");
  return (
    <div className="welcome">
      <h1 className="title">Welcome to Flippy</h1>
      <p>
        Begin flipping through your flash cards by clicking the button below.
      </p>
      <Button handleClick={navigateToCards} variant="primary">
        Start Studying
      </Button>
    </div>
  );
};

export default withRouter(Welcome);
