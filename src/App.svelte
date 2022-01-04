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
	
	main {
		width: 100vw;
		margin: 0;
		height: 0;
		font-family: 'Roboto', Arial, Helvetica, sans-serif;
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}
</style>