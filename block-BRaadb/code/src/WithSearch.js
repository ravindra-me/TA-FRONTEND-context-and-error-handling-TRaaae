import React from "react";
class WithSearch extends React.Component {
  state = {
    searchTerm: "",
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ searchTerm: value });
  };
  render() {
    return this.props.render(this.state.searchTerm, this.handleChange);
  }
}

export default WithSearch;
