import React from "react";
import { Link, withRouter } from "react-router-dom";
import articles from "./data/articles.json";

class Articles extends React.Component {
  render() {
    let { searchTerm, handleChange } = this.props;
    let filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm)
    );
    return (
      <>
        <input
          placeholder="Search"
          className="search"
          value={searchTerm}
          onChange={handleChange}
        />
        <ul className="articles">
          {filteredArticles.map((article) => (
            <li>
              <Link to={"articles/" + article.slug}>
                <h3>{article.title}</h3>
              </Link>
              <small>{article.author}</small>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withRouter(Articles);
