import type { Actions } from './$types';

export const load = (async ({ parent }) => {
	let result = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
	let data = await fetch('https://www.freeforexapi.com/api/live');
	let t = await fetch('https://www.freeforexapi.com/api/live?pairs=USDSEK')
	return {
		countries: await result.json(),
		currencies: await data.json(),
		one: await t.json()
	}
});
