<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import image from '$lib/images/welcome.webp';

	let types = [
		{ name: 'Trivia', value: 'trivia' },
		{ name: 'Math', value: 'math' },
		{ name: 'Date', value: 'date' },
		{ name: 'Year', value: 'year' }
	];
	let selectedType: string = '';
	let selectedNumber: number = 0;
	let output: string = '';
	onMount(() => {});

	function handleSubmit() {
		output = '';
		console.log(selectedNumber, selectedType);
		fetch(`http://numbersapi.com/${selectedNumber}/${selectedType}`).then((result: any) => {
			return result.text()
		}).then((text: string) => {
			output = text
		}).catch(e => {
			console.error(e);
			output = '';
		})
	}
</script>

<main>
	<div class="d-flex align-items-center justify-content-center">
		<img alt="welcome" src={image} />
	</div>
	<div class="d-flex align-items-center justify-content-center">
		<select class="btn btn-outline-secondary dropdown-toggle" bind:value={selectedType}>
			{#each types as type}
				<option value={type.value}>
					{type.name}
				</option>
			{/each}
		</select>
		<input
			type="number"
			class="form-control w-25"
			bind:value={selectedNumber}
			aria-label="Text input with dropdown button"
		/>
		<button class="btn btn-outline-primary" on:click={handleSubmit} type="button">Go</button>
	</div>
	{#if output !== ''}
	<hr>
		<h4 class="d-flex align-items-center justify-content-center">
			{output}
		</h4>
	{/if}
</main>
