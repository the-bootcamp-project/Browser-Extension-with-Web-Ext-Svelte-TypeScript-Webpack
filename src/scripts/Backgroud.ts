import browser from 'webextension-polyfill'

const onCreated = () => {
	console.log('Context Menu')
}
browser.contextMenus.create({
	id: 'copy-link-to-clipboard',
	title: 'Copy link to clipboard',
	contexts: ['all']
})

browser.menus.create(
	{
		id: 'remove-me',
		title: browser.i18n.getMessage('menuItemRemoveMe'),
		contexts: ['all']
	},
	onCreated
)

browser.menus.create(
	{
		id: 'separator-1',
		type: 'separator',
		contexts: ['all']
	},
	onCreated
)

browser.menus.create(
	{
		id: 'greenify',
		type: 'radio',
		title: browser.i18n.getMessage('menuItemGreenify'),
		contexts: ['all'],
		checked: true,
		icons: {
			'16': 'icons/paint-green-16.png',
			'32': 'icons/paint-green-32.png'
		}
	},
	onCreated
)

browser.menus.create(
	{
		id: 'bluify',
		type: 'radio',
		title: browser.i18n.getMessage('menuItemBluify'),
		contexts: ['all'],
		checked: false,
		icons: {
			'16': 'icons/paint-blue-16.png',
			'32': 'icons/paint-blue-32.png'
		}
	},
	onCreated
)

browser.menus.create(
	{
		id: 'separator-2',
		type: 'separator',
		contexts: ['all']
	},
	onCreated
)

const checkedState = true

browser.menus.create(
	{
		id: 'check-uncheck',
		type: 'checkbox',
		title: browser.i18n.getMessage('menuItemUncheckMe'),
		contexts: ['all'],
		checked: checkedState
	},
	onCreated
)

console.log('Hello world from Backgroud Script')

export {}
