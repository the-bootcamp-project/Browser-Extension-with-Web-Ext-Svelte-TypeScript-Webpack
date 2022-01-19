import browser from 'webextension-polyfill'

function handleShown() {
	console.log('panel is being shown')
}
function handleHidden() {
	console.log('panel is being hidden')
}

browser.devtools.panels
	.create('My Panel', 'icons/star.png', 'devtools.html')
	.then(newPanel => {
		newPanel.onShown.addListener(handleShown)
		newPanel.onHidden.addListener(handleHidden)
	})
	.catch(err => {
		console.log(err)
	})
