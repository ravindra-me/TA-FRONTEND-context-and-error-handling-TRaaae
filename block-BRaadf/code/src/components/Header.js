import { ThemConsumer } from "./Context";

function Header({ isDarkMode }) {
  return (
    <ThemConsumer>
      {(themObj) => {
        return (
          <h1
            className={`heading ${
              themObj.isDarkMode ? "heading-dark" : "heading-light"
            }`}
          >
            {themObj.isDarkMode ? "Dark Mode" : "Light Mode"}
          </h1>
        );
      }}
    </ThemConsumer>
  );
}

export default Header;
