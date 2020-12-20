const FetchData = async (endpoint) => {
	const res = await fetch(endpoint);
	const data = await res.json();

	return data;
}

export default FetchData;