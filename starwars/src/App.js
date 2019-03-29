import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
	console.log(this.state)
    const {starwarsChars} = this.state;
    function createCharacterImages(character, i) {
	return <img src={character.url} key={i} alt={character.name} />;
    }
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
	{starwarsChars.map(createCharacterImages)}
      </div>
    );
  }
}

export default App;
