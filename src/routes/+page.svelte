<script lang="ts">
	import image from '$lib/images/me.jpg';
</script>

<main>
	<div class="d-flex justify-content-center ps-5 py-3">
		<div class="d-flex" style="height: 200px; background-color: #fff;">
			<div class="vr"></div>
		</div>
		<h1 class="p-5 text-light">Hello, I'm Henrik Klein.<br />I'm a developer.</h1>
		<br>
	</div>
	<div class="d-flex justify-content-center ps-5 py-3">
		<img src={image} alt="cc" width="350" height="300" style="border-radius: 20%;" />
	</div>
</main>
