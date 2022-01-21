import browser from 'webextension-polyfill'

function handleShown() {
	console.log('Hello World from DevTools')
}
function handleHidden() {
	console.log('Bye-bye, from DevTools')
}

browser.devtools.panels
	.create(browser.i18n.getMessage('extensionName'), 'favicon.ico', 'devtools.html')
	.then(newPanel => {
		newPanel.onShown.addListener(handleShown)
		newPanel.onHidden.addListener(handleHidden)
	})
	.catch(err => {
		console.log(err)
	})
