import React from "react";

import people from "./data/got.json";

class People extends React.Component {
  render() {
    let { searchTerm, handleChange } = this.props;
    let allPeople = people.reduce((acc, cv) => {
      acc = acc.concat(cv.people);
      return acc;
    }, []);

    let filteredPeople = allPeople.filter((person) =>
      person.name.toLowerCase().includes(searchTerm)
    );
    return (
      <>
        <input
          placeholder="Search"
          className="search"
          value={searchTerm}
          onChange={handleChange}
        />
        <ul className="people">
          {filteredPeople.map((sp) => (
            <SinglePerson {...sp} />
          ))}
        </ul>
      </>
    );
  }
}

function SinglePerson(props) {
  return (
    <li className="card">
      <div className="info">
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
      </div>
      <p>{props.description}</p>
      <a href={props.wikiLink}>Learn More!</a>
    </li>
  );
}

export default People;
