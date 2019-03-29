import React from "react";

const CharacterInfo = ({character}) => {
	const characterInformation = [
		["Born: ", "birth_year"],
		["Height: ", "height"],
		["Gender: ", "gender"],
		["Eye Color: ", "eye_color"],
		["Hair Color: ", "hair_color"]
	];
	return characterInformation.map(a => {
		return <li>{`${a[0]}${character[a[1]]}`}</li>;
	});
}

export default CharacterInfo;
