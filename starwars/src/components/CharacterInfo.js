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
		const charTrait = a[0];
		const detail = character[a[1]];
		return <li>{`${charTrait}${detail}`}</li>;
	});
}

export default CharacterInfo;
