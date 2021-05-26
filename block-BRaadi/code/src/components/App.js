import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      <ErrorBoundary FallbackComponent={Error}>
        <Header isDarkMode={isDarkMode} />
        <Main isDarkMode={isDarkMode} />
      </ErrorBoundary>
    );
  }
}

function Error({ error }) {
  return (
    <>
      <p>Somthing went wrong relode page</p>
      <p>{error.message}</p>
    </>
  );
}

export default App;
export { Error };
