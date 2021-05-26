import React from "react";
const ThemContext = React.createContext();
const ThemProvider = ThemContext.Provider;
const ThemConsumer = ThemContext.Consumer;
export { ThemConsumer, ThemProvider };
