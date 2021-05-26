import React from "react";
import { ThemConsumer } from "./Context";
export default function SwitchButton({ isDarkMode, changeMode }) {
  return (
    <ThemConsumer>
      {(themObj) => {
        return (
          <button
            className={`btn ${themObj.isDarkMode ? "btn-dark" : "btn-light"}`}
            onClick={() => themObj.changeMode()}
          >
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        );
      }}
    </ThemConsumer>
  );
}
