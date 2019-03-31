import {useState, useEffect} from "react";

function useFetch(url) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	async function fetchUrl() {
		const res = await fetch(url);
		const json = await res.json();

		setData(json);
		setLoading(false);
	}

	useEffect( () => {
		fetchUrl();
	}, []);
	return [data, loading];
}

export {useFetch};
