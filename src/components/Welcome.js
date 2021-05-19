import React from "react";
import { Link, withRouter } from "react-router-dom";

const Welcome = ({ history }) => {
  const navigateToCards = () => history.push("/study");
  return (
    <div className="welcome">
      <h1 className="title">Welcome to Flippy</h1>
      <p>
        Begin flipping through your flash cards by clicking the button below.
      </p>
      <button onClick={navigateToCards} className="startStudying">
        Start Studying
      </button>
    </div>
  );
};

export default withRouter(Welcome);
