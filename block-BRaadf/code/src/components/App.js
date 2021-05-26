import React, { createContext } from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import { ThemProvider } from "./Context";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    console.log("datk");
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };

  render() {
    let { isDarkMode } = this.state;
    console.log(ThemProvider);
    return (
      <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <ThemProvider
          value={{
            isdarkMode: this.state.isDarkMode,
            changeMode: this.changeMode,
          }}
        >
          <Header />
          <Main />
          <SwitchButton />
        </ThemProvider>
      </div>
    );
  }
}

export default App;
