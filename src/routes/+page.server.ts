import type { Actions } from './$types';

export const load = (async ({ parent }) => {
	let result = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
	// let countries = await result.json();
	return {
		countries: await result.json()
	}
});
