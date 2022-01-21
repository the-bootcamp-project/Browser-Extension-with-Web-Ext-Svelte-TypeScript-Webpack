import Devtools from './Devtools.svelte'
import '../assets/tailwind.css'
import '../assets/global.css'

const devtools = new Devtools({
	target: document.body
})

export default devtools
