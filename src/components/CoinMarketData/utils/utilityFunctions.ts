
function formatDate(timestamp) {
	let date = "";

	for (let i = 0; i < timestamp.length; i++) {
		if (timestamp[i] === "T") {
			return date;
		}

		date += timestamp[i];
	}
}

const utilityFunctions = {
    formatDate
}

export default utilityFunctions;