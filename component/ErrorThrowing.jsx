// ErrorThrowingComponent.js
import React from "react";

class ErrorThrowing extends React.Component {
  handleClick = () => {
    throw new Error("This is a test error!");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}  >Throw Error</button>
      </div>
    );
  }
}

export default ErrorThrowing;
