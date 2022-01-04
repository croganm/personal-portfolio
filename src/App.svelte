<script>
import Portfolio from "./Portfolio.svelte";
</script>

<main>
	<Portfolio></Portfolio>
</main>

<style global lang="scss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
	
	body {
		@apply bg-neutral-800
	}
	main {
		width: 100vw;
		margin: auto;
		height: 0;
		font-family: 'Roboto', Arial, Helvetica, sans-serif;
		max-width: 1400px;
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}
</style>