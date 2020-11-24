/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {

});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {
	'arrowFly': 'Arrow Flying Past 1.wav',
	'pullString': 'Pulling string back (Bow) 1.wav',
	'pullString2': 'Pulling string back (Bow) 15.wav',
	'arrowFly2': 'Releasing string (Bow) 13.wav',
	'unsheathe': 'Sword Unsheathed Sound Effect - High Quality.mp3',
	'swordWoosh': 'Sword Woosh 1.wav',
	'dullThud': 'Sword hit armor 1.wav',
	'punch': 'Punch 2.wav',
	'punch2': 'Punch 8.wav'
});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {

});


// Define the Characters
monogatari.characters({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	},
	'n': {
		name: ''
	}
});

monogatari.script({

	// The game starts here.
	'Start': [
		'n I was not followed.',
		'n I make sure of it as I set down my satchel, flask and belongings on the weathered grass, glancing occasionally behind.',
		'n I know I have nothing to hide. Nothing that would be seen as dangerous, or questionable, but I didn’t need the attention.',
		'n From here the setting sun had only begun to soak the town below in its warm orange hue, and although beautiful, time is running out.',
		'n I steady my breath, ready to pull back my favoured...',

		{
			'Input': {
				'Text': '<b>TIP:</b> You’re about to make your first skill choice! Skill choices shape your hero, choose carefully. It could later mean life or death.',
				'Class': 'hideInput'
			}
		},

		{
			'Choice': {

				'Bow & Arrow': {
					'Text': 'Bow & Arrow',
					'Do': 'jump BowChoice'
				},
				'Sword': {
					'Text': 'Sword',
					'Do': 'jump SwordChoice'
				},
				'Knuckle-Dusters': {
					'Text': 'Knuckle-Dusters',
					'Do': 'jump KnuckleChoice'
				}
			}
		},

		'end'
	],

	'BowChoice': [
		function () {
			changeSkill('combat', 'bow')
			notify("+Bow and Arrow")
		},
		"n ...bow and arrow.",
		"play sound pullString",
		"n My hands tighten across the grip. The bow was the only weapon I ever found myself proficient in. ",
		"n I remember the mantra I had been telling myself earlier.",
		"n Keep my feet shoulder-width apart. Keep my aim true and steady. My shoulders lowered, not too tense. ",
		"play sound arrowFly",
		"n I take a stance and release.",
		"n It misses.",
		"play sound pullString2",
		"n In the same beat, I reach for my side-belt quiver and draw the next arrow.",
		"n I convince myself that I am pushing out a fog from my mind’s eye. That I only need practice.",
		"play sound arrowFly2",
		"n The arrow falters again.",
		"n And again.",
		"n At one point, when I held a bow, I felt most like myself, but now…",
		"n My aim’s only gotten worse. My draw is weak.",
		"jump TalkToMaya"
	],

	'SwordChoice': [
		function () {
			changeSkill('combat', 'sword')
			notify("+Sword")
		},
		"play sound unsheathe with volume 40",
		"n …sword.",
		"n My hands wrap around the hilt. The two-sided blade has always been an extension of myself. It was the only thing I knew best.",
		"play sound swordWoosh",
		"n It’s ingrained now that my left foot steps forward, my right foot back, my knees bent. I repeat the mantra as I swivel to strike a non-existent enemy.",
		"n It feels weak.",
		"n I go again, this time my thumb positioned ever so slightly under the gilded hilt, I convince myself that I’m pushing out the fog from my mind’s eye. That I only need to practice.",
		"n At some point, when I held my sword, I felt most like myself, but now…",
		"play sound swordWoosh",
		"play sound dullThud",
		"n I shift my weight, guiding the blade with my hand. In my final swing a dull sensation ripples through my arm, and the sword falls.",
		"n My form is stiff. I keep throwing my weight around needlessly.",
		"jump TalkToMaya"
	],

	'KnuckleChoice': [
		function () {
			changeSkill('combat', 'fists')
			notify('+Fist')
		},
		"play sound dullThud",
		"n …knuckle-dusters.",
		"n My thumbs trail against the grain and spikes. They were the truest extension of myself. Light, but strong enough to do irreversible damage. ",
		'play sound punch',
		"n The last time I entered a fight, I was nearly laughed out, but people seldom know what to do in wild close combat. I thrived on knowing it was my own power.",
		'play sound punch2',
		"n One, two, one, two.",
		"n My fists clench between the carved wood, allowing me to focus and convince myself I was pushing the fog from my mind’s eye. That I simply need practice.",
		"n At some point, when I slipped these on, I felt most likely myself, but now…",
		"n I exhale. My chest tightens as I manoeuvre through the space in front.",
		"n My footwork and stamina have gotten sloppy.",
		"jump TalkToMaya"
	],

	'TalkToMaya': [
		"n My own hands don’t feel like they’re mine.",
		"I try again to focus when a sudden, familiar voice calls out my name:",
		{
			'Input': {
				'Text': 'Enter your name',
				'Validation': (input) => {
					return input.trim().length > 0;
				},
				'Save': (input) => {
					monogatari.storage({ player: { name: input } });
				},
				'Revert': () => {
					monogatari.storage({ player: { name: '' } });
				},
				'Warning': 'You must enter a name!'
			}
		}
	]
});