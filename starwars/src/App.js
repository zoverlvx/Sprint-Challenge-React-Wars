import React, { Component } from 'react';
import CharacterInfo from "./components/CharacterInfo";
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
    const {starwarsChars} = this.state;
	console.log(starwarsChars)
    const style = {border: "2px solid white", width: "50%", backgroundColor: "white", margin: "5px"}
    function createCharacterCards(character, i) {
	return (
	    <div style={style}>
		    <h1 style={{color: "silver"}} key={character.name}>{character.name}</h1>
		    <ul style={{listStyleType: "none"}}>
			<CharacterInfo character={character} />
		    </ul>
	    </div>
	)
    }
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
	<div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
		{starwarsChars.map(createCharacterCards)}
	</div>
      </div>
    );
  }
}

export default App;
