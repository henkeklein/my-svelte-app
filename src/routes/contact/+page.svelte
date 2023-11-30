<script lang="ts">
	import type { PageData } from '../$types';
	import { onMount } from 'svelte';
	export let data: PageData;
	let selectedCountry: string = '';
	let loading: boolean = false;
	let country: any = undefined;
	onMount(() => {
		data.countries.sort(function (a: any, b: any) {
			if (a.name.common < b.name.common) {
				return -1;
			}
			if (a.name.common > b.name.common) {
				return 1;
			}
			return 0;
		});
	});

	function handleSubmit() {
		country = undefined;
		loading = true;
		fetch(`https://restcountries.com/v3.1/name/${selectedCountry}`)
			.then((resp) => {
				return resp.json();
			})
			.then((resultCountry) => {
				loading = false;
				country = resultCountry[0];
			});
	}

	function numberWithCommas(x: number) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	}
</script>

<main>
	{#if !data || loading}
		<span class="loader"></span>
	{:else}
		<div class="d-flex align-items-center justify-content-center">
			<select
				class="btn btn-outline-secondary dropdown-toggle"
				bind:value={selectedCountry}
				on:change={handleSubmit}
			>
				{#each data.countries as country}
					<option class="text-start" value={country.name.common}>
						{country.name.common}
					</option>
				{/each}
			</select>
		</div>
		{#if country}
			<hr />
			<div
				class="pb-3 d-flex align-items-center justify-content-center"
				style="background: transparent;"
			>
				<img width="300" height="200" src={country.flags.png} alt={country.flags.alt || 'cc'} />
			</div>
			<div class="table-responsive">
				<table
					class="table table-dark table-striped table-bordered table-hover d-flex align-items-center justify-content-center"
				>
					<tbody>
						<tr>
							<td>Name</td>
							<td>{country.name.common}</td>
						</tr>
						<tr>
							<td>Capital</td>
							<td>{country.capital ? country.capital[0] : ''}</td>
						</tr>
						<tr>
							<td>Population</td>
							<td>{numberWithCommas(country.population)}</td>
						</tr>
						<tr>
							<td>Region</td>
							<td>{country.region}</td>
						</tr>
						<tr>
							<td>Currencies</td>
							<td>{Object.keys(country.currencies).toString()}</td>
						</tr>
						<tr>
							<td>Google maps</td>
							<td
								><a class="d-block" target="_blank" href={country.maps.googleMaps}>
									Google maps
								</a></td
							>
						</tr>
					</tbody>
				</table>
			</div>
		{/if}
	{/if}
</main>
