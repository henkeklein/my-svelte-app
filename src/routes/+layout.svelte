<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<ul class="d-flex flex-lg-row flex-column justify-content-center mb-3 mt-4 ps-0 text-center text-nowrap">
			<li class="px-3 mx-1">
				<!-- <a class="c-social-media-icon" target="_blank" href="https://www.tiktok.com/@stickerapp">
				<img class="max-width-none" src="https://stickerapp.henkle.dev.stickerapp.com/static/images/svg/social-icon-tiktok.svg" alt="tiktok" />
				</a> -->
			</li>
            </ul>
	</footer>
</div>
