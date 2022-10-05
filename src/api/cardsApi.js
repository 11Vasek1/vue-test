export async function getFullInfo(amount = 1) {
	const url = `https://randomuser.me/api/?results=${amount}`;
	const answer = await fetch(url);
	const json = await answer.json();
	const persons = json.results;

	return persons;
}
