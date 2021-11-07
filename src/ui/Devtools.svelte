<script lang="ts">
	import { Button } from '@bootcamp-project/svelte-components'
	export let svButton = Button

	let name: string = 'world';
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<svButton/>
</main>
