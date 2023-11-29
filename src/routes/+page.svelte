<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import image from '$lib/images/welcome.webp';
	onMount(() => {
	})
  </script>
  
  <main>
	<div class="text-center">
		<img alt="welcome" src={image}/>
	</div>
  </main>