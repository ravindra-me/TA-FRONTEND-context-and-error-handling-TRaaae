import React from "react";
import { Error } from "./App";
class SectionTwo extends React.Component {
  handleClick = () => {
    throw new Error("An error occured!");
  };
  render() {
    try {
      return (
        <div className="box s1-c">
          <h2>Throw Error</h2>
          <p className="small">
            Clicking this button will call a function. Inside that function an
            error is thrown. That will make the component gets unmounted. Fix it
            using error boundary. Make this component display `An error
            occured!`
          </p>
          <button className="error" onClick={this.handleClick}>
            Click to Throw an Error
          </button>
        </div>
      );
    } catch (error) {
      return console.log(error);
    }
  }
}

export default SectionTwo;
