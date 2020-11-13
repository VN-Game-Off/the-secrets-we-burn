'use strict';

// const { default: SettingsScreen } = require("./Settings");

/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:
monogatari.registerComponent(Menu)
monogatari.registerComponent(Skills)
// monogatari.registerComponent(ElementNew);

// monogatari.registerComponent(FinalSave);
const key = config.VAL

// monogatari.component('quick-menu').removeButton('Save');
// monogatari.component ('quick-menu').removeButton ('Load');
// monogatari.component ('quick-menu').removeButton ('Back');
// monogatari.component ('quick-menu').removeButton ('AutoPlay');
// monogatari.component ('quick-menu').removeButton ('Skip');

// ElementNew.addEventListener('mousedown', function (event) {
// 	console.log('clicked')
// })


// function distractionFree() {
// 	if (monogatari.global('playing')) {
// 		// Check if the distraction free is currently enabled
// 		if (monogatari.global('distraction_free') === true) {
// 			// monogatari.element ().find ('[data-component="quick-menu"] [data-action="distraction-free"] [data-string]').text (monogatari.string ('Hide'));
// 			// monogatari.element ().find ('[data-component="quick-menu"] [data-action="distraction-free"] [data-icon]').replaceWith ('<span class="fas fa-eye" data-action="distraction-free"></span>');
// 			monogatari.element().find('[data-component="new-menu"]').removeClass('transparent');
// 			monogatari.element().find('[data-component="text-box"]').show();
// 			monogatari.global('distraction_free', false);
// 		} else {
// 			// monogatari.element ().find ('[data-component="quick-menu"] [data-action="distraction-free"] [data-string]').text (monogatari.string ('Show'));
// 			// monogatari.element ().find ('[data-component="quick-menu"] [data-action="distraction-free"] [data-icon]').replaceWith ('<span class="fas fa-eye-slash" data-action="distraction-free"></span>');
// 			monogatari.element().find('[data-component="new-menu"]').addClass('transparent');
// 			monogatari.element().find('[data-component="text-box"]').hide();
// 			monogatari.global('distraction_free', true);
// 		}
// 	}
// }

document.addEventListener('mousedown', function (event) {
	event.stopPropagation()
	// const textbox = document.getElementsByTagName('text-box')[0]
	// const menu = document.querySelector('new-menu')
	if (monogatari.global('distraction_free') === true) {
		monogatari.distractionFree();
		// const comp = monogatari.component("new-menu")
		// console.log(comp)
		// monogatari.component('new-menu').removeButton('Hide')
	}
	else {
		// menu.style.display = "inline-block";
	}
})

const more = {
	string: 'More',
	icon: 'fas fa-bars icon',
	data: {
		action: 'open-screen',
		open: 'menu'
	}
}



const buttonsWithIcons = [

	{
		string: 'Start',
		icon: 'fas fa-play icon',
		data: {
			action: 'start',
		}
	},

	{
		string: 'Load',
		icon: 'fas fa-redo icon',
		data: {
			action: 'open-screen',
			open: 'load'
		}
	},

	{
		string: 'Settings',
		icon: 'fas fa-cog icon',
		data: {
			action: 'open-screen',
			open: 'settings'
		}
	},

	{
		string: 'SocialMedia',
		icon: 'fas fa-share-alt icon',
		data: {
			action: 'open-screen',
			open: 'help'
		}
	},

	{
		string: 'Help',
		icon: 'fas fa-question-circle icon',
		data: {
			action: 'open-screen',
			open: 'help'
		}
	},



]

monogatari.translation('English', {
	'Stats': 'Stats',
	'Menu': 'Menu',
	'Shop': 'Shop',
	'SocialMedia': 'Social Media',
	'More': 'More',
	'BackupRestore': 'Backup & Restore',
	'History': 'History',
	'MainMenu': 'Main Menu',
	'Skills': 'Skills'
})


monogatari.storage({
	skills: {
		combat: {
			img: '',
			name: '',
			desc: ''
		},
		survival: {
			img: '',
			name: '',
			desc: ''
		},
		interpersonal: {
			img: '',
			name: '',
			desc: ''
		},
	}
})



$_ready(() => {
	// 2. Inside the $_ready function:
	// $_('[data-ui="quick-menu"] [data-action="back"]').remove ();

	// console.log(menu)
	monogatari.component('save-screen').template(() => {
		return `
				<button class="top left" data-action="back"><span class="fas fa-arrow-left"></span></button>
				<h2 data-string="Save"></h2>
				<div class="horizontal horizontal--center">
					<input type="text" placeholder="Save Slot Name" data-input="slotName" data-content="slot-name" required>
					<button data-string="Save" data-action="save">Save</button>
				</div>
				<div data-ui="slots" data-content="slots" class="row row--spaced padded">
				<slot-container label=${monogatari.setting('SaveLabel')} type="save"></slot-container>
				</div>
			`
	})

	monogatari.component('dialog-log').template(() => {
		return `
			<button class="close-right" data-action="dialog-log"><span class="fas fa-times"></span></button>
			<div class="modal__content">
			<h2 data-string="History"></h2>
				<div data-content="log">
					<div class="text--center padded" data-string="NoDialogsAvailable" data-content="placeholder">No dialogs available. Dialogs will appear here as they show up.</div>
					</div>
			</div>
		`
	})

	monogatari.init('#monogatari').then(() => {
		// 3. Inside the init function:

		// Remove Quick Menu Buttons
		monogatari.component('quick-menu').removeButton('Back');
		monogatari.component('quick-menu').removeButton('Save');
		monogatari.component('quick-menu').removeButton('Load');
		monogatari.component('quick-menu').removeButton('Settings');
		monogatari.component('quick-menu').removeButton('Quit');
		// monogatari.component('quick-menu').removeButton('Log');
		monogatari.component('quick-menu').removeButton('AutoPlay');
		// monogatari.component('quick-menu').addButton('Skip');

		// Remove Main Menu buttons
		monogatari.component('main-menu').removeButton('Load');
		monogatari.component('main-menu').removeButton('Help');
		monogatari.component('main-menu').removeButton('Settings');
		monogatari.component('main-menu').removeButton('Start');


		buttonsWithIcons.map((item) => {
			monogatari.component('main-menu').addButton(item);
		})


		// monogatari.component('main-menu').addButton(pauseMenuButton);
		// monogatari.component('main-menu').addButton(settingsButton);
		monogatari.component('quick-menu').addButton(more);

	});

});
