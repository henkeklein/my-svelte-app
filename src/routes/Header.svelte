<script>
	import { page } from '$app/stores';
	import image from '$lib/images/linkedin.png';
</script>

<header class="d-flex justify-content-center py-3">
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
			<div class="collapse navbar-collapse w-100" id="navbarText">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item fs-5">
						<a class="nav-link" aria-current="page" href="/">Home</a>
					</li>
					<hr />
					<li class="nav-item fs-5">
						<a class="nav-link" href="/about">About</a>
					</li>
					<hr />
					<li class="nav-item fs-5">
						<a class="nav-link" href="/playground">Playground</a>
					</li>
					<hr />
					<li class="nav-item">
						<a class="nav-link" target="_blank" href="https://www.linkedin.com/in/henrik-klein-95a1a9a5/">
							<img src={image} alt="linkedin" width="30" height="25" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>
