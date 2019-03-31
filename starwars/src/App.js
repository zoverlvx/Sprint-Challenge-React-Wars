import React, { Component } from 'react';
import {useFetch} from "./hooks";
import CharacterInfo from "./components/CharacterInfo";
import './App.css';

function App() {
	const [data, loading] = useFetch("https://swapi.co/api/people/");
	
    const style = {border: "2px solid white", width: "50%", backgroundColor: "white", margin: "5px"}
    function createCharacterCards(character, i) {
		return (
	    	<div style={style}>
		    	<h1 style={{color: "silver"}} key={character.name}>{character.name}</h1>
		    	<ul style={{listStyleType: "none", padding: "0"}}>
					<CharacterInfo character={character} />
		    	</ul>
	    	</div>
		)
    }

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
		<div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			{loading ? "Loading..." : data.results.map(createCharacterCards)}
		</div>
      </div>
    );
}

export default App;
