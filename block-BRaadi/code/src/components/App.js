import React from "react";
import Header from "./Header";
import Main from "./Main";
import Error from "./Error";
class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  render() {
    try {
      let { isDarkMode } = this.state;
      return (
        <>
          <Header isDarkMode={isDarkMode} />
          <Main isDarkMode={isDarkMode} />
        </>
      );
    } catch (error) {
      return <Error error={error} />;
    }
  }
}

export default App;
