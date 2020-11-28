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
	},
	'Skill': {
		title: 'TIP',
		body: `
		You’re about to make your first skill choice! Skill choices shape your hero, choose carefully. It could later mean life or death.
		`
	},
	'Personality': {
		title: 'TIP',
		body: `
		Some choices shape your personality. Personality choices will begin to affect your future interactions.
		`
	},
	'Valour': {
		title: 'TIP',
		body: `
		Valour represents your experience as an adventurer. Make choices that increase your skills in the face of adversity.
		`
	},

	'Survival': {
		title: 'TIP',
		body: `
		You’re about to make a skill choice. How do you react in an unknown environment? .
		`
	},
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
	'fireSparks': {
		'particles': {
			'number': {
				'value': 400,
				'density': {
					'enable': true,
					'value_area': 3000
				}
			},
			'color': {
				'value': '#fc0000'
			},
			'shape': {
				'type': 'circle',
				'stroke': {
					'width': 0,
					'color': '#000000'
				},
				'polygon': {
					'nb_sides': 3
				},
				'image': {
					'src': 'img/github.svg',
					'width': 100,
					'height': 100
				}
			},
			'opacity': {
				'value': 0.5,
				'random': true,
				'anim': {
					'enable': false,
					'speed': 1,
					'opacity_min': 0.1,
					'sync': false
				}
			},
			'size': {
				'value': 2,
				'random': true,
				'anim': {
					'enable': true,
					'speed': 5,
					'size_min': 0,
					'sync': false
				}
			},
			'line_linked': {
				'enable': false,
				'distance': 500,
				'color': '#ffffff',
				'opacity': 0.4,
				'width': 2
			},
			'move': {
				'enable': true,
				'speed': 7.8914764163227265,
				'direction': 'top',
				'random': true,
				'straight': false,
				'out_mode': 'out',
				'bounce': false,
				'attract': {
					'enable': false,
					'rotateX': 600,
					'rotateY': 1200
				}
			}
		},
		'interactivity': {
			'detect_on': 'canvas',
			'events': {
				'onhover': {
					'enable': false,
					'mode': 'bubble'
				},
				'onclick': {
					'enable': false,
					'mode': 'repulse'
				},
				'resize': true
			},
			'modes': {
				'grab': {
					'distance': 400,
					'line_linked': {
						'opacity': 0.5
					}
				},
				'bubble': {
					'distance': 400,
					'size': 4,
					'duration': 0.3,
					'opacity': 1,
					'speed': 3
				},
				'repulse': {
					'distance': 200,
					'duration': 0.4
				},
				'push': {
					'particles_nb': 4
				},
				'remove': {
					'particles_nb': 2
				}
			}
		},
		'retina_detect': true
	}
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
	'Day1': '2_Day_1_Master.mp3',
	'Night1': '3_Night_1_Master.mp3'
});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {
	'people': 'party-crowd-daniel_simon.mp3',
	'stomach': 'Stomach Growl - Sound Effect for Editing.mp3',
	'eating': 'BiteIntoAndChewApple.mp3',
	'horse': '497693__leo153__2-horse-carriage.wav',
	'door': '440644__seansecret__violently-closing-wooden-door.wav',
	'cards': '423767__someonecool15__card-shuffling.mp3',
	'creak': '219499__jarredgibb__door-creak.wav',

	'arrowFly': 'Arrow Flying Past 1.wav',
	'arrowFly2': 'Arrow Flying Past 2.wav',
	'arrowFly3': 'Arrow Flying Past 3.wav',

	'pullString': 'Pulling string back (Bow) 1.wav',
	'pullString2': 'Pulling string back (Bow) 15.wav',
	'releaseString': 'Releasing string (Bow) 13.wav',

	'unsheathe': 'Sword Unsheathed Sound Effect - High Quality.mp3',
	'swordWoosh': 'Sword Woosh 1.wav',
	'swordWoosh2': 'Sword Woosh 9.wav',
	'swordWoosh3': 'Sword Woosh 11.wav',
	'dullThud': 'Sword hit armor 1.wav',

	'punch': 'Punch 2.wav',
	'punch2': 'Punch 8.wav',

	'water': 'Water 8.wav',
	'wind': 'wind.mp3',

	'rustle': 'rustle.mp3',
	'rustle2': 'rustle2.mp3',
	'rustle3': 'plastic bag rustle.mp3',
	'rustle4': 'ShakeSmallTarp.mp3',
	'coins': 'RustleOfCoins.mp3',

	'mudRun': 'Footsteps Dirt (Running) 5.wav',
	'footstepsFour': 'footstepsLoop.mp3',
	'bell': 'Bell Sound Effect.mp3'
});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
	'sunsetMountain': 'sunsetMountain.jpg',
	'nightTown': 'ID003_Western-Castle_night.jpg',
	'guild': 'guild.png'
});


// Define the Characters
monogatari.characters({

	'n': {
		name: ''
	},
	'v': {
		name: 'Voice'
	},

	'p': {
		name: '{{player.name}}'
	},



	'm': {
		name: 'Maya',
		directory: 'Maya',
		sprites: {
			angryBlush: 'MayaBlushAngry.png',
			neutralBlush: 'MayaBlushNeutral.png',
			shockBlush: 'MayaBlushShock.png',
			happyBlush: 'MayaBlushHappy.png',
			sadBlush: 'MayaBlushSad.png',

			angry: 'MayaAngry.png',
			happy: 'MayaHappy.png',
			neutral: 'MayaNeutral.png',
			sad: 'MayaSad.png',
			shock: 'MayaShock.png',

			angrySweat: 'MayaSweatAngry.png',
			happySweat: 'MayaSweatHappy.png',
			neutralSweat: 'MayaSweatNeutral.png',
			sadSweat: 'MayaSweatSad.png',
			shockSweat: 'MayaSweatShock.png',

			angryUI: 'MayaUIAngry.png',
			happyUI: 'MayaUIHappy.png',
			shockUI: 'MayaUIShock.png'
		}
	},

	'k': {
		name: 'Kai',
		directory: 'Kai',

		sprites: {
			angryBlush: 'KaiBlushAngry.png',
			neutralBlush: 'KaiBlushNeutral.png',
			shockBlush: 'KaiBlushShock.png',
			happyBlush: 'KaiBlushHappy.png',
			sadBlush: 'KaiBlushSad.png',

			angry: 'KaiAngry.png',
			happy: 'KaiHappy.png',
			neutral: 'KaiNeutral.png',
			sad: 'KaiSad.png',
			shock: 'KaiShock.png',

			angrySweat: 'KaiSweatAngry.png',
			happySweat: 'KaiSweatHappy.png',
			neutralSweat: 'KaiSweatNeutral.png',
			sadSweat: 'KaiSweatSad.png',
			shockSweat: 'KaiSweatShock.png',

			angryCloak: 'KaiCloakAngry.png',
			happyCloak: 'KaiCloakHappy.png',
			neutralCloak: 'KaiCloakNeutral.png',
			sadCloak: 'KaiCloakSad.png',
			shockCloak: 'KaiCloakShock.png',

			angrySweatCloak: 'KaiCloakSweatAngry.png',
			happySweatCloak: 'KaiCloakSweatHappy.png',
			neutralSweatCloak: 'KaiCloakSweatNeutral.png',
			sadSweatCloak: 'KaiCloakSweatSad.png',
			shockSweatCloak: 'KaiCloakSweatShock.png',
		}
	},

	// MOB CHARACTERS
	'w': {
		name: 'Woman'
	},

	'fw': {
		name: 'Freckled Woman'
	},

	'b': {
		name: '{{baker}}',
		sprites: {
			base: 'baker.png'
		}
	},

	'ssl': {
		name: 'Short Scary Lady'
	},

	'oa': {
		name: 'OPTIMISTIC ADVENTURER'
	},

	'wi': {
		name: 'Wick'
	},

	'da': {
		name: 'Doubtful Adventurer'
	},

	'ma': {
		name: 'MEDIATING ADVENTURER'
	},

	'r': {
		name: 'Raina'
	},

	'bp': {
		name: 'Barkeep'
	},

	'ad': {
		name: 'Adventurer'
	},

	'rn': {
		name: 'Reception'
	},

	'om': {
		name: 'Older Man'
	}

});

const joking = 'Playful'
const friendly = 'Friendly'
const assertive = 'Assertive'

monogatari.script({

	// The game starts here.
	'Start': [
		'show scene sunsetMountain',
		'play music Day1 loop',
		'n I was not followed.',
		'n I make sure of it as I set down my satchel, flask, and belongings on the weathered grass, glancing occasionally behind.',
		'n I know I have nothing to hide. Nothing that would be seen as dangerous, or questionable, but I didn’t need the attention.',
		'n From here, the setting sun has only begun to soak the town below in its warm orange hue, and although beautiful, time is running out.',
		'n I steady my breath, ready to pull back my favoured...',

		"show message Skill",

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
		"n I convince myself that I am pushing out a fog from my mind’s eye.",
		"n That I only need practice.",
		"play sound releaseString",
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
		"n My hands wrap around the hilt. The two-sided blade has always been an extension of myself.",
		"It was the only thing I knew best.",
		"play sound swordWoosh",
		"n It’s ingrained now that my left foot steps forward, my right foot back, my knees bent.",
		"n I repeat the mantra as I swivel to strike a non-existent enemy.",
		"n It feels weak.",
		"n I go again, this time my thumb positioned ever so slightly under the gilded hilt, I convince myself that I’m pushing out the fog from my mind’s eye.",
		"n That I only need to practice.",
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
		"n My thumbs trail against the grain and spikes. They were the truest extension of myself.",
		"n Light, but strong enough to do irreversible damage. ",
		'play sound punch',
		"n The last time I entered a fight, I was nearly laughed out, but people seldom know what to do in wild close combat. I thrived on knowing it was my own power.",
		'play sound punch2',
		"n One, two, one, two.",
		"n My fists clench between the carved wood, allowing me to focus and convince myself I was pushing the fog from my mind’s eye.",
		"n That I simply need practice.",
		"n At some point, when I slipped these on, I felt most likely myself, but now…",
		"n I exhale. My chest tightens as I manoeuvre through the space in front.",
		"n My footwork and stamina have gotten sloppy.",
		"jump TalkToMaya"
	],

	'TalkToMaya': [
		"n My own hands don’t feel like they’re mine.",
		"n I try again to focus when a sudden, familiar voice calls out my name:",
		{
			'Input': {
				'Text': 'Enter your name',
				'Validation': (input) => {
					return input.trim().length > 0;
				},
				'Save': (input) => {
					monogatari.storage({ player: { name: input } });
					monogatari.characters({ p: { name: input } })
				},
				'Revert': () => {
					monogatari.storage({ player: { name: '' } });
				},
				'Warning': 'You must enter a name!',

				'Attributes': {
					'placeholder': 'Adel',
					'minlength': 3,
					'maxlength': 20
				}
			}
		},
		"play sound mudRun with loop",
		"v {{player.name}}!",
		"stop sound mudRun with fade 2",
		"n I pivot back, catching the owner of the voice sprinting up the hillside. She waves at me wildly, balancing the bounce in her gait with the bobbing satchel at her hip.",
		"show character m shockSweat with zoomIn",
		"My best friend, Maya.",
		"show character m shock at center",
		"n I rest my stance and meet her a pitiful half way. Her dark curls drop in front of me when she catches up.",
		"n {{player.name}}! I— You— Argh!",
		"m <i>Fire.</i> My throat feels like it’s on fire!",
		"p Maya, did you run up the entire hillside?",
		"p How did you know I was here?",
		// "show character m angryBlush",
		// "m How did you know I was here?",
		"show character m angryBlush",
		"n She waves her hand dismissively, trying to catch her breath.",
		"m Why do— you always— hide when you train?",
		"play sound water",
		"n Maya gasps, reaching out with grabbing hands for my leather-bound flask. I hand it over and once she’s emptied every drop, she returns to her usual rejuvenated spark.",
		"show character m happyUI",
		"p I wasn’t <i>hiding</i>. This is just a good spot to practice.",
		"show character m angryUI",
		"m I looked everywhere for you. If you had just told me you were going to train, I could have been helping with your form!",
		"n She folds her arms assertively.",
		"n Whenever Maya took this stance, I knew I’d offended her in some way. Which was fine, because Maya was always offended.",
		"show character m neutral",
		"m You don’t have to be shy.",
		"m I don’t <i>mind</i> helping you train.",
		"n I raise a brow.",
		"p But you’re not here to train with me, are you?",
		"show character m happy",
		"m Of course not! You clearly need me for something greater.",
		"n As always, there’s a worrying amount of determination in her voice.",
		'jump Flail{{combat.name}}'
	],

	'FlailLongsword': [
		"show character m shock",
		'm I saw how you flailed about with your sword. ',
		"show character m happy",
		'n She mimics me, swaying about an invisible blade. She stops when our eyes connect and I avert my gaze.',
		"show character m neutral",
		"m Sorry.",
		"n I nod, the soreness of her words still reaching me. Maya doesn’t usually take an interest in my training. I thought it only reminded her of what had happened.",
		"p You have a lot of energy for a girl who can barely run up a hill. ",
		"show character m happy",
		"m I have a lot of energy for anyone.",
		"p Must be nice. I think it’s fair to say I’m just a little tired, it is getting late.",
		'jump FlailConcern'
	],

	'FlailFists': [
		"show character m shock",
		"m I saw your shoddy footwork.",
		"m You left yourself wide open for an attack!",
		"show character m happy",
		"n She mimics me, throwing soft punches at my center. I catch her fist, ending the playfulness.",
		"p Don’t think I’m too tired to spar with you and <i>win>/i>.",
		'n Still, it was odd. She didn’t usually take interest in my training. It only reminded her of what had happened.',
		'm With footwork like that, you’d injure yourself just punching air.',
		'p I’m just a little tired, it’s getting late. ',
		'jump FlailConcern'
	],

	'FlailBow': [
		"show character m shock",
		'm The MC I remember could hit a target with their eyes closed. ',
		"show character m shockSweat",
		'm Now, you look like you need about four extra.',
		'p Very funny. I just lost my focus, I’m still a good shot.',
		'm I saw you miss… <i>thrice.</i>',
		'jump FlailConcern'
	],

	'FlailConcern': [
		"show character m neutralSweat",
		"n She sighs, giving me a concerned look. ",
		"m {{player.name}}, I care about you deeply, I do, but you’re getting… too comfortable here.",
		"m You’re practically losing your touch.",
		"p Losing my touch? I’ve done this hundreds of times. ",
		"p I’ve had songs written about me, Maya.",
		"n Tutting, she shakes her head.",
		"show character m shock",
		"m That was an awful birthday present. ",
		"m Wait, don’t deflect from this! I’ve noticed you creeping up here late at night, like some creepy old hermit. ",
		"show character m angry",
		"m You’re too young to be reminiscing glory days, {{player.name}}!",
		"show character m shock",
		"m Last year your {{combat.name}} could do serious damage. You practically tore through every monster you met! ",
		"p That was then. ",
		"n She places a hand tentatively on my shoulder. ",
		"show character m sad",
		"m I know you miss being out there, even if you won’t say it to my face. ",
		"show character m happy",
		"m Which is why I want to help you. ",
		"p Help me… how?",
		"m I got you a gift.",
		"n I think back to the last “gift” Maya presented me. ",
		"show character m shock",
		"m Oh, seriously. Don’t make that face. It’s not the same, and that was an honest mistake!",
		"n I throw her a look. ",
		"p Several tons of manure.",
		"show character m angry",
		"n She folds her arms. ",
		"m It was coming from my heart!",
		"p Uh-huh, definitely smelled like it.",
		"play sound punch",
		"show character m angryBlush",
		"m We’ll never speak of it again. ",
		"show character m neutral",
		"play sound rustle",
		"n Maya reaches into her satchel and pulls out a tightly wound parchment bound by a simple string. ",
		"play sound rustle2",
		"n Unfurled, it reveals a familiar coat of arms. A dragon and lion posed for an attack. ",
		"show character m happy",
		"m It’s an application for the adventurer’s guild. We can make it official!",
		"n The words sink in.",
		"n Maya’s voice begins to feel more distant. ",
		"show character m happyUI",
		"m Think about it! Me and you, back in action. Slaying beasts, saving babies, kissing bards! I don’t think I even have enough B’s. ",
		"m Maya.",
		"show character m happy",
		"m We can start tomorrow— No, today! As soon as the sun rises. ",
		"p Maya, no.",
		"m I know— Wait.",
		"show character m neutral",
		"m What do you mean, no?",
		"p I’m not signing up to this. I’m not doing more “adventures” that end up being more trouble than they’re worth. ",
		"show character m sadSweat",
		"m But— {{player.name}}, we’re adventurers. ",
		"p We <i>were</i> adventurers. ",
		"show character m sad",
		"n But you… you love adventuring. You love helping others!",
		"show character m happy",
		"m {{player.name}}… Just trust me. Once you go, you’ll completely change your mind. I know it. I know <i>you.</i> ",
		"m We have a whole <i>life</i> of adventures waiting for us! One full of no regrets.",
		"show character m neutralSweat",
		"m <i>I</i> don’t want you to regret anything… ",
		"show character m shock",
		"p There isn’t anything to regret. I like it here. It’s peaceful. Do you not like it here?",
		"show character m sad",
		"n Maya’s shoulder’s slump down, and for the first time my larger-than-life companion, looked small. ",
		"m I just thought it was going to be something fun… that we could do together. I put a lot of effort into getting everything set-up and— ",
		"m This is all my fault.",
		"show character m neutral",
		"n She straightens her posture, returning to her usual nonchalant self. ",
		"show character m angrySweat",
		"m That old woman in the guild is very mean, but no matter. ",
		"show character m neutral",
		"play sound rustle",
		"Maya folds the parchment back into her satchel. ",
		"show character m shock",
		"m I know I’m simply destined to grow old and spend all my time haggling with street vendors. ",
		"m I just thought I’d have one more rodeo before I accept my transformation into an old crone. ",
		"show character m happy",
		"n She laughs, but it doesn’t hide her disappointment. I know that I’ve always been like a… ",
		{
			'Choice': {

				'Sister to her': {
					'Text': 'Sister to her',
					'Do': 'jump ChooseSister'
				},
				'Brother to her': {
					'Text': 'Brother to her',
					'Do': 'jump ChooseBrother'
				},
				'Sibling to her': {
					'Text': 'Sibling to her',
					'Do': 'jump ChooseSibling'
				}
			}
		},
	],

	'ChooseSister': [
		function () {
			monogatari.storage().player.gender = 'female'
		},
		"n … sister to her. ",
		'jump AfterGenderChoice'
	],

	'ChooseBrother': [
		function () {
			monogatari.storage().player.gender = 'male'
		},
		"n … brother to her.",
		'jump AfterGenderChoice'
	],

	'ChooseSibling': [
		function () {
			monogatari.storage().player.gender = 'enby'
		},
		"n … sibling to her.",
		'jump AfterGenderChoice'
	],

	'AfterGenderChoice': [
		"n And even though she doesn’t show it, I know I’ve been neglecting her. It’s made things tense. ",
		"n I should…",
		"show message Personality",

		{
			'Choice': {
				'Lighten the mood': {
					'Text': 'Lighten the mood',
					'Do': 'jump LightenTheMoodChoice'
				},
				'Set Boundaries': {
					'Text': 'Set Boundaries',
					'Do': 'jump SetBoundariesChoice'
				},
				'Console her': {
					'Text': 'Console her',
					'Do': 'jump ConsoleHerChoice'
				}
			}
		}
	],

	'LightenTheMoodChoice': [
		function () {
			monogatari.storage()[joking] = 0
			updatePersonality(joking, 1)
			notify(`+${joking}`)
		},
		'n …lighten the mood. I don’t want to sour our relationship. ',
		'p I don’t think cronehood could stop the legendary Maya from having an adventure.',
		'show character m shockUI',
		'm You think so?',
		'm You think so?',
		'play sound wind with volume 40',
		'p Of course! There’ll be legends about you, Maya, no doubt about that. Wait— ',
		'p Do you hear that?',
		'show character m shock',
		'n She listens intensely. ',
		'show character m sad',
		'm I hear nothing.',
		'show character m shockUI',
		'p Shhh! ',
		'p I hear it… ',
		'p There are voices… they’re calling to me… they’re saying...',
		'show character m shock',
		'm What? What are they saying!',
		'n I stand upright as if possessed. My eyes glaze over.',
		'p Maya Maynard, <i>first</i> of her name; queen of vendors, leveller of bargains, keeper of docks! Not to mention, patron saint of tax evasion!',
		'show character m happyUI',
		'p May all <i>fear</i> her royal croneness. ',
		'n Maya immediately assumes the role, curtsying and thanking imaginary civilians around her. Her hand extends for pleasantries as she blesses small would-be children. ',
		'show character m shock',
		'm I suppose these people would be terribly lost without me if I didn’t accept the position.',
		'show character m neutralBlush',
		'n I bow ceremoniously. ',
		'We are forever in your debt, my lady. ',
		'jump Admission'

	],

	'SetBoundariesChoice': [
		function () {
			monogatari.storage()[assertive] = 0
			updatePersonality(assertive, 1)
			notify(`+${assertive}`)
		},
		'n …set boundaries. She always goes too far.',
		'show character m neutral',
		'p Maya, I know you mean well, but I wish you’d ask me first.',
		'p Even if your heart is in the right place I don’t see myself adventuring any time soon. ',
		'show character m shock',
		'm If I had asked you, it wouldn’t have been a surprise!',
		'm That’s how surprises work!',
		'show character m neutral',
		'You can’t control <i>everything</i> in your life. ',
		'p What’s wrong with trying to be in control?',
		'show character m shockSweat',
		'm Nothing! I just—sometimes things happen. ',
		'show character m sadSweat',
		'p We don’t have to agree on this. ',
		'jump Admission'

	],

	'ConsoleHerChoice': [
		function () {
			monogatari.storage()[friendly] = 0
			updatePersonality(friendly, 1)
			notify(`+${friendly}`)
		},
		'n …console her. I know she meant well.',
		'm I think you could still fit in a few things before cronehood hits.',
		'show character m shock',
		'm Such as?',
		'p You know. Ruining lives, smuggling overdue library books, pillaging wishing fountains, wrecking <i>general</i> havoc… ',
		'show character m angryUI',
		'm I do hate that librarian… ',
		'p And every havoc-wrecking crone will need a trusted lookout and sidekick. ',
		'show character m happy',
		'n She grins. ',
		'm So you’re going to be my sidekick?',
		'show character m sad',
		'n But you’re so boring now. ',
		'p That’s why they’ll never suspect it’s me. ',
		'show character m happy',
		'm Her eyes light up at the apparent ingenuity. ',
		'show character m neutral',
		'n You realise should they not believe us, I’d have to double-cross you and leave you for dead. ',
		'p Naturally.',
		'jump Admission'

	],

	'Admission': [
		'show character m happy',
		'm Oh, stop. You’re making me feel bad. ',
		'm You act as though you’re not my best-friend. ',
		'p Maya, I think I might be your only friend.',
		'show character m shock',
		'm That’s not true! I’ve made plenty of friends. ',
		'm So many. You’re just my best one.',
		'p Of course, always.',
		'show character m happy',
		'm And as my best friend, could you at least come down with me to the guild? ',
		'm For moral support?',
		'p This sounds like a trap. ',
		'show character m shock',
		'm What, no! It’s not a trap. ',
		'm I told you that woman is <i>terrifying.</i> ',
		'p Well, when you put it like that. Sure, I couldn’t let you walk into the clutches of an allegedly mean old woman. Not alone. ',
		'show character m sadSweat',
		'n She lowers her voice. ',
		'm But do I have your word?',
		'n I roll my eyes. ',
		'p Yes, Maya. You have my word. ',
		'show character m happy',
		'n She sighs with relief.',
		'm Thank heavens. ',
		'show character m happySweat',
		'm Yes, but I may have told one small teeny <i>tiny</i> white lie. ',
		'p There’s the trap part.',
		'm Not a trap, just a small <i>lie.</i>',
		'p Alright, I’m listening.',
		'show character m shockSweat',
		'm Don’t hurt me and just remember the part where you said you were my friend forever. ',
		'p I’m remembering… ',
		'show character m happySweat',
		'm So, I may have already signed us up for the adventurer’s guild. ',
		'show character m shock',
		'm It might even be possible that if we don’t go, I’ll owe a lot of money. ',
		'm Because of sign-up fee penalties!',

		'show character m sad',
		'm Honestly, you too. Legally your name is already on the paperwork. ',
		'p Oh Maya...',

		'show character m shock',
		'm I didn’t think it was going to be a problem! I was pretty sure you’d want to do it. ',
		'm I also don’t think it’s legal to even charge that much for just paperwork. ',

		'show character m sad',
		'm What does “processing fees” even mean?',
		'p Maya!',

		'show character m shock',
		'p I—When is this happening?',

		'show character m sadSweat',
		'm Tonight. ',

		'n I furrow my brows. ',
		'n The headache coming over me pales in comparison to what Maya has signed me up for.',
		{
			'Conditional': {
				'Condition': function () {
					return checkPersonality()
				},

				[friendly]: 'jump friendlyProtest',
				[joking]: 'jump playfulProtest',
				[assertive]: 'jump assertiveProtest'
			}
		}
	],

	'playfulProtest': [
		'p Cronedom could not come sooner for you.',
		'jump ProtestOver'
	],

	'friendlyProtest': [
		'p Maya… Maybe you should consider becoming a library apprentice.',
		'jump ProtestOver'
	],

	'assertiveProtest': [
		'p After we do this, you’re joining an ethics and economics class. ',
		'p It’ll finally be the last time you get swindled by a fine print. ',
		'jump ProtestOver'
	],

	'ProtestOver': [
		'm You don’t mean that. ',
		'n I throw her a threatening glare and she jumps back. ',
		'show character m sad',
		'p It’ll keep you out of trouble. ',
		'm Just remember you love me and if you don’t want to see me hand over my life savings to a very scary lady, you’ll at least come!',
		'show character m shock',
		'm I’ll see you tonight, bye!',

		'play sound footstepsFour',
		'n I try to stop her, but like the trickster she is, Maya effortlessly slips out of my grasp. ',
		'hide character m with bounceOut',
		'play sound rustle2',
		'n An ache courses through my body. Partly from training, partly from being friends with Maya. ',
		'n Maya’s always been a trouble-maker, but she wasn’t wrong. I have been getting rustier, even while practising every day.',
		'n There’s still some time before tonight. ',
		'n If I practice further, I could redeem some of today. Get some confidence before whatever’s next.',
		'n Or I might just end up worsening my technique. ',
		{
			'Choice': {
				'Push myself and continue training': {
					'Text': 'Push myself and continue training',
					'Do': 'jump PushChoice'
				},
				'Finish training and rest': {
					'Text': 'Finish training and rest',
					'Do': 'jump StopRestChoice'
				}
			}
		}
	],

	'PushChoice': [
		'show message Valour',
		function () {
			increaseValour(5)
			notify(`+5 Valour`)
			monogatari.storage().trained = true
		},
		'n More practice seems like a reasonable decision.',
		'n Going up against local adventurers, even Hwen ones, requires me to be in better shape. ',
		'n I stand upright. Now that the sun has settled, there’s a cool breeze against my cheek. ',
		'n It’s quiet enough to focus.',

		{
			'Conditional': {
				'Condition': function () {
					imgNotify('combat')
					return checkWeapon()
				},
				'bow': 'jump BowPushTrain',
				'sword': 'jump SwordPushTrain',
				'fists': 'jump FistsPushTrain'
			}
		},
	],

	'BowPushTrain': [
		'n The row of trees further back make for decent enough targets. ',
		'n They’re far enough that I can ignore my earlier arrows. The ones now embedded in the soil. ',
		{

			'Choice': {
				'Line up an arrow': {
					'Text': 'Line up an arrow',
					'Do': 'next'
				}
			}
		},

		'play sound pullString3',

		'n The first arrow hits the ground with a humiliating thwack, just like before. ',

		'play sound arrowFly',

		'n The next shot is the same. ',
		'n Victory only comes to me when an arrow finally connects with the base of a tree trunk. ',
		'play sound rustle2',
		'n It almost makes the heat in my upper back worth it. ',
		'n My focus shifts from the posture of my arm and bow, and more on the targets before me. ',
		{
			'Choice': {
				'Keep going': {
					'Text': 'Keep going',
					'Do': 'next'
				}
			}
		},

		'play sound arrowFly2 loop',
		'Every shot after becomes more desperate and wild, I only care about the results. ',
		'stop sound with fade 2',
		'jump PushTrainEnd'
	],

	'SwordPushTrain': [
		'play sound unsheathe',
		'n I point my sword southwards, slipping from a ready position I navigate between offensive and defensive manoeuvres.',
		'play sound swordWoosh2',
		'n One, strike. Two, counterstrike.',
		'play sound dullThud',
		'n Three, raise the hilt besides my temple and strike forward. ',
		{
			'Choice': {
				'Down and across!': {
					'Text': 'Down and across!',
					'Do': 'next'
				}
			}
		},
		'n With every step, I leave no room for interference. ',
		'n Too much force and I’ll send myself flying, too little, and I won’t make a dent. ',
		{
			'Choice': {
				'Keep going': {
					'Text': 'Keep going',
					'Do': 'next'
				}
			}
		},

		'play sound swordWoosh loop',
		'n I resolve to wild swinging, hoping to build mobility and power. ',
		'stop sound with fade 2',
		'n Every ache will make me stronger come tomorrow. ',
		'jump PushTrainEnd'
	],

	'FistsPushTrain': [
		'n I wince, slipping the carved knuckle-dusters back over my fingers. ',
		'n There are aches and pains. I ignore them and envision my target. Focus, {{player.name}}. ',
		{
			'Choice': {
				'Envision': {
					'Text': 'Envision',
					'Do': 'next'
				}
			}
		},
		'play sound rustle',
		'n The stray tree ahead becomes the face, the neck, the stomach, even the small of a would-be enemy’s back. ',
		'n Knees bent and heel raised, I throw my shot.',
		'play sound punch2',
		'n The first punch lacks weight. ',
		{
			'Choice': {
				'Try again': {
					'Text': 'Try again',
					'Do': 'next'
				}
			}
		},
		'play sound punch loop',
		'I cross over to my rear hand, the one I use to guard, and throw continuous punches at the bare bark. ',
		'My knuckles burn.',
		'stop sound with fade 2',
		{
			'Choice': {
				'Keep going': {
					'Text': 'Keep going',
					'Do': 'next'
				}
			}
		},
		'play sound punch2 loop',
		'n I keep going, grazing my hands with attempted uppercuts and wide punches. ',
		'stop sound with fade 2',
		'n Unfurling my bruised hands, I step back. I barely see an indent left behind in the trunk. ',
		'jump PushTrainEnd'
	],

	'PushTrainEnd': [
		'n After more rounds, the warm purple and orange tones of the sky slip into a star-spangled blackness. ',
		// CHANGE BG HERE
		'play sound bell',
		'n In the distance the curfew bells harmonise, stirring the local wildlife. ',
		'play sound rustle3',
		'n Although it’s safe to be out, it would be unwise to stay any longer. ',
		'n I pack up my things and make my way down the hill. ',
		'n Every step is weighted and I wish for nothing more than to throw myself into a hot spring.',
		'n But Maya has made other plans for me. ',

		'jump Evening'
	],

	'StopRestChoice': [
		'show message Valour',
		function () {
			increaseValour(10)
			notify(`+10 Valour`)
		},
		'n It’s best not to risk it. ',
		'n Whatever happens from here on will require my full attention. I’ll find somewhere to rest nearby.',
		'n With my bag slung over my shoulder, I venture back down the hillside towards the town. ',
		'show scene nightTown with fadeIn',
		// SFX: Quiet town ambience
		'n On the other side, the roads are calm with only a few stray stragglers making their way home. ',
		{
			'Choice': {
				'Find the guild': {
					'Text': 'Find the guild',
					'Do': 'next'
				}
			}
		},
		'show character b base with fadeIn',
		'b Warm rye, fresh rye! Squire’s loaves and a baker’s dozen!',
		'b {{player.name}}! Is that you lurking about?',
		'b Don’t be a stranger! I have a gift for you!',
		'n My eyes meet with the enthusiastic figure in the shadows, lifting a lantern towards me. ',
		'n Under the subtle glow, his body sits slumped opposite a butcher’s shop. His cart resting just off the side of the road. ',
		function () {
			monogatari.storage().baker = 'Rohese'
		},
		'p Are you not going home?',
		'b Of course, there’s near no-one to sell to so late, except the drunkards.',
		'play sound rustle4',
		'n From his cart he pulls out an item wrapped in paper and presents it to me. ',
		'b But drunkards don’t appreciate genius. Try this.',
		{
			'Choice': {
				'Politely decline': {
					'Text': 'Politely decline',
					'Do': 'jump FriendlyDecline'
				},
				'Jokingly decline': {
					'Text': 'Jokingly decline',
					'Do': 'jump PlayfulDecline'
				},
				'Assertively decline': {
					'Text': 'Assertively decline',
					'Do': 'jump AssertiveDecline'
				}
			}
		},
	],

	'FriendlyDecline': [
		function () {
			updatePersonality(friendly, 1)
			notify(`+${friendly}`)
		},
		'p I’m not so hungry, but thank you.',
		'jump AfterDecline'
	],

	'PlayfulDecline': [
		function () {

			updatePersonality(joking, 1)
			notify(`+${joking}`)
		},
		'p I try not to make a habit of taking unidentified items from curious street vendors.',
		'jump AfterDecline'
	],

	'AssertiveDecline': [
		function () {
			updatePersonality(assertive, 1)
			notify(`+${assertive}`)
		},
		'I would rather not.',
		'jump AfterDecline'
	],

	'AfterDecline': [
		'b Oh, but it’ll be worth it! ',
		'b You can’t humour an old man? I’ve worked very hard. ',
		'play sound stomach',
		'n I try to protest, but an audible cry from my stomach gives me away. ',
		'n A sheepish smile later, my bottom is firmly planted on the cobblestone floor. ',
		'n There’s still some time. ',
		'n It wouldn’t hurt to give him my attention. ',
		'n Rohese was a baker known for spending too much time in the tavern to make money and putting too many new ideas into his loaves. ',
		'n The sweet smelling ale wafts from the tankard between us. ',
		'p What is this time?',
		'b Ah, that’s the thing. I’m not quite sure yet.',
		'b I had already baked a batch of bread and forgetting myself, I put the same loaves back into the oven. ',
		'p You baked it twice?',
		'b That I did!',
		'play sound rustle3',
		'p Curious, I unwrap my second surprise of the day. The baked good inside is flat, hard, and dusted in flour. ',
		'play sound eating',
		'n One bite and the flattened loaf crunches between my teeth. Its flakiness is surprising and although a little hard, it’s sweet and warm with an unfamiliar spiciness. ',
		'n I devour it in seconds. ',
		'p Rohese! This is— ',
		'b I know!',
		'p It tastes divine!',
		'b I know!',
		'n The excitement in his tired eyes fades. ',
		'b I’m not quite sure what to call it. ',
		'b It’s not quite a loaf. Far too hard and crispy for that. ',
		'p What else have you added to it?',
		'n He taps his nose. ',
		'n Baker’s secret.',
		'play sound bell',
		'n The curfew bell strikes and I remember my arrangement with Maya. ',
		'n Savouring the last flakes on my lips, I give Rohese a knowing look. ',
		'p Rohese, I have to go, but thank you very much for the sample. ',
		'p I think you’re onto something with this double-baked bread.',
		'b Of course I am. ',
		'p Just don’t be out here too late. You’ll end up giving away all your goods without fair payment. ',
		'b Pah, my recipes will keep them coming back. ',
		'n I lick off the last fleck of pastry. ',
		'p You’ve put cinnamon and honey in this, haven’t you? ',
		'b What— Oh, you <i>cheeky</i> little gizzard, c’mere. ',
		'play sound rustle',
		'n He feigns offence, stuffing more neatly wrapped not-loaves into my satchel. ',
		'b That nose of yours will be the death of me. Go on, get out here!',
		'p Rohese, I can’t take these! ',
		'b Pah! I’ll just make more.',
		'b These are unsellable. Consider yourself the trial donkey for my genius invention. ',
		'n I can’t help but laugh. Hwen was always full of small surprises. ',
		'p I’m paying you next time I see you. Will you be alright going home?',
		'n He shoos me again. ',
		'b I don’t need help from a child. ',
		'n I shrug, putting a loaf back into his lap. ',
		'p Just in case you don’t remember this grand idea of yours tomorrow. ',
		'n The flour trickles from my thigh as I rise to leave. ',
		'b {{player.name}}?',
		'p Hm?',
		'b I’m thinking of calling them biscuits. ',
		{
			'Choice': {
				'Sounds good': {

					'Text': 'Sounds Good',
					'Do': 'jump SoundsGood'
				},

				'Keep working on it.': {
					'Text': 'Keep working on it.',
					'Do': 'jump KeepWorkingOnIt'
				}

			}
		},

	],

	'SoundsGood': [
		'p I like it. Sounds good. ',
		'jump FinishedEating'
	],

	'KeepWorkingOnIt': [
		'p Maybe keep working on that one. Not sure it’ll catch on. ',
		'jump FinishedEating'

	],

	'FinishedEating': [
		'play sound footstepsFour',
		'hide character b with fadeOut',
		'n I smile and wave him goodbye, exiting the alley. My body is warm and rested, but there is still some unfinished business tonight.',
		'jump Evening'
	],

	'Evening': [
		'show scene nightTown',
		'play sound bell',
		// SFX: Gate rumbling,
		'n Another low chime echoes through the air. The town gates rumble as they roll back their last bolt. ',
		'n The night watch is about to begin. ',
		'n My pace quickens and I soon find myself standing across from the adventurer’s guild. ',
		'n I wasn’t difficult to locate, considering it was the only one in town. ',
		'n Still, I can’t approach carelessly. I’m not familiar with this part of town. It’s should approach… ',
		'show message Survival',
		{
			'Choice': {
				'Class': 'fadeIn',

				'Fearlessly': {
					'Text': 'Fearlessly and confidently',
					'Do': 'jump Fearlessly'
				},

				'After Observation': {
					'Text': 'After observing my surroundings',
					'Do': 'jump Observation'
				},

				'Like a shadow; inconspicuous': {
					'Text': 'Like a shadow; inconspicuous',
					'Do': 'jump LikeShadow'
				}
			}
		}
	],

	'Fearlessly': [
		function () {
			changeSkill('survival', 'strength')
			notify('+Strength')
		},
		'n …fearlessly and confidently. Whatever is behind those walls is far more of a risk, if I appear weak and feeble. ',
		{
			'Conditional': {
				'Condition': function () {
					return monogatari.storage('trained') === true
				},
				'True': 'n Mustering what strength I can, I march across the road, hiding the tiredness in my gait.',
				'False': 'n I’m warm and refreshed from the goods Rohese gave me as I stride across the road feeling confident about what comes next.',
			}
		},
		'jump EntranceToGuild'
	],

	'Observation': [
		function () {
			changeSkill('survival', 'perception')
			notify('+Perception')
		},
		'n …after observing my surroundings. ',
		'n It’s not that I don’t trust the townspeople of Hwen, but adventurer guilds in any town draw an unsavoury crowd.',
		'n Maya should know this.',
		'n Why she would sign us up after all this time, I can’t tell.',
		'n But there are no immediate causes for concern. ',
		'n No rowdy behaviour or miscreants lingering by the entrance.',
		'n It’s enough for me to cross the narrow road. ',
		'jump EntranceToGuild'
	],

	'LikeShadow': [
		function () {
			changeSkill('survival', 'concealment')
			notify('+Concealment')
		},

		'n …like a shadow; inconspicuous. ',
		'n A new adventurer crowd may excite Maya, but my most natural impulse is to cling to the shadows. ',
		'n I go unnoticed. ',
		'play sound rustle2',
		'n Like ivy, I keep to the edges of the building, only crossing the narrow road when certain there are no immediate eyes on me. ',
		'jump EntranceToGuild'
	],

	'EntranceToGuild': [
		'play sound horse',
		'n The entrance of the guild seems no different from a small tavern. Above its door, I make out the discreet carvings of a dragon and lion. ',
		'n I step aside as dark figures and drunk grunts pass me. ',
		'play sound door',
		'n They stumble through the doors with calculating glances before ducking into the shadows. ',
		"n Whilst most people in Hwen meant no harm, it wasn’t a place the average contractor came for ‘heroic feats’.",
		'n No, it was probably just errands going to the highest bidder. ',
		"n Maybe if we’re lucky, we might gather the lost sheep of a wealthy farmer, or play private investigator for the adulterous couple. ",
		'show character m shock with zoomIn',
		'm How long were you planning to wallow in front of the guild?',
		'p Maya! How long have you been here?',
		'p I was about to go find you.',
		'show character m neutral',
		'm Long enough.',
		'm I wanted to wait, but I wasn’t sure how much longer I could bear seeing you lost in introspective thought. ',
		'show character m angry',
		'm Do you have a whole monologue going on in there?',
		'show character m shock',
		'p You were scared to go in, weren’t you?',
		'show character m shockBlush',
		'm I was not! I— ',
		'show character m sad',
		'm Yes. Yes, I was scared. ',
		'show character m angry',
		'm Which is perfectly reasonable because that woman is <i>very</i> scary. ',
		'n I smirk back at her. ',
		'show character m neutralSweat',
		'p So I’ve heard. ',
		'show character m sadBlush',
		'She nods, fumbling with a loose arrowhead between her fingers.',
		'p So what were you doing instead? Watching me from the shadows?',
		{
			'Conditional': {

				'Condition': function () {
					return monogatari.storage('survival').name
				},

				'Concealment': 'jump MayaConcealment',
				'Strength': 'jump MayaStrength',
				'Perception': 'jump MayaPerception'
			}
		}
	],

	'MayaStrength': [
		'show character m neutral',
		'm Yup, watching you look like a big dummy marching down here like you own the place. ',
		'show character m happy',
		'm I respect it. ',
		'p Can’t let people think they can walk all over me. ',
		'm With arms like those, they wouldn’t dare. ',
		'show character m happyUI',
		'n She flexes, mimicking a hunched and confident walk. ',
		'jump ActuallyEnter'
	],

	'MayaPerception': [
		'show character m shockSweat',
		'm I was curious to see how long you’d stand there waiting. ',
		'p And was your curiosity satisfied?',
		'show character m angrySweat',
		'm No, I only have more questions. ',
		'show character m shockSweat',
		'm Like, why did you spend so long standing in that bush?',
		'm And are you aware you’re not as short as you might think?',
		'm I might have a chance, but I barely come up to your shoulder. ',
		'p I was <i>not</i> standing in a bush. ',
		'n She sighs hopelessly. Her hand over her heart.',

		'm Whatever helps you sleep at night, {{player.name}}.',
		'jump ActuallyEnter'
	],

	'MayaConcealment': [
		'show character m happy',
		'm Hey, great minds think alike!',
		function () {
			if (monogatari.storage('player').gender === 'female') {
				monogatari.storage('player').lord = 'Lady'
				monogatari.storage('player').master = 'Master'
			}

			else if (monogatari.storage('player').gender === 'enby') {
				monogatari.storage('player').lord = 'Ruler'
				monogatari.storage('player').master = 'Sovereign'
			}
		},
		'show character m angry',
		'm Except I wasn’t slinking around like a {{player.lord}} of darkness.',
		'm I wasn’t slinking. I was being cautious.',
		'show character m neutral',
		'm Of course, I expect nothing less from our {{player.master}} of the night.',
		'show character m happy',
		'm We never know who might be lurking, ready to attack!',
		'vibrate 100',
		'n Maya jumps towards me, pointing her small arrowhead at my throat.',
		'jump ActuallyEnter'
	],

	'ActuallyEnter': [
		'n I roll my eyes.',
		'p Are you done being dramatic?',
		'show character m happy',
		// [Maya, sad]
		'show character m sad',
		'n I wait for her to lead the way, but in the darkness, her honey-tinted eyes watch me expectantly.',
		'n Ah.',
		'p I guess I go in first?',
		// [Maya, shock with blush]
		'show character m shockBlush',
		'm Maybe that’s for the best. Your charming, friendly face will probably work wonders on them.',
		'm Sweeten the deal, so to speak.',
		'm You told me my face scares infants.',
		// [Maya, neutral with blush]
		'show character m neutralBlush',
		'm Things change!',

		'p And this has nothing to do with anything you may have said earlier to them?',

		// [Maya, angry with blush]
		'show character m angryBlush',

		'm Of course not.',

		'm In no way does this have anything to do with perceived authority or prior encounters I may or may not have had.',

		'p Noted.',


		// [Maya, neutral]
		'show character m neutral',

		'She stands behind me with an encouraging smile. Her chest puffed out proudly for full effect. ',

		{
			'Choice': {
				'Class': 'fadeIn',
				'Enter the guild': {
					'Text': 'Enter the guild',
					'Do': 'next'
				}
			}
		},

		'hide character m with fadeOut',
		'stop music with fade 3',
		'play music Night1 loop with fade 5',
		'show scene guild with fadeIn',
		'play sound door',
		'play sound people with volume 5 loop',
		'n The guild is small and cramped, with faces of all ages chattering at once. ',
		'n Against the far wall, intimate booths are lit by dim sconce candlelights. Some empty, others serving a crowd.',
		'p So, who do we talk to?',
		'n My voice is lost against the clinking of tankards and warm, boisterous conversation. ',
		'p Hm, Maya? Where was— ',
		'n Behind me, a woman that is not Maya glares. ',
		'p Um… ',

		// SPRITE: Short Scary Lady
		'w Are ye going to sit down, or are ye going to take a number?',
		'n Her accent is thick and guttural. Her unsavoury frown is only intensified by her hunched, small stature. ',
		'ssl I said, are ye setting or taking?',
		'p Neither, sorry. I thought you were someone else. I’ll— ',
		'ssl Pft. I’ve got <i>no</i> time for you fresh-faced babies.',
		'ssl Find a place to sit, or get out of my way. ',

		'n She scoffs, shaking her head and muttering to herself as she wipes the nearby tables. ',
		'n I pick a seat, far, far away from her. ',
		'n No wonder Maya didn’t want to come in first. ',
		'n Leaning back into my seat, I observe the crowd. ',
		'n A hushed conversation just opposite me catches my attention. ',

		{
			'Conditional': {
				'Condition': function () {
					return monogatari.storage('survival').name
				},
				'Strength': 'I lean forward with arms resting on a table. The key to not being noticed is to look like you belong.',
				'Concealment': 'I twist myself to face away from them and avoid drawing attention. ',
				'Perception': 'Two men and a woman are so engrossed in gossip that I don’t have to try hard to hear. '
			}
		},

		'oa <i>Listen</i>, it’s a fortune. ',
		'oa I could repair the fields with that kind of coin.',
		'da It’s a suicide, Wick.',
		'wi I’d like to call it a chance.',
		'da Well, I call it a joke. You think anyone worth their salt would come looking through Hewn?',
		'da And to post a job like <i>that?</i>',
		'wi Why not! There’s good adventurers here.',
		'n The doubtful adventurer pauses, then leaning in very slowly stares into Wick’s eyes.',
		'da Did they drop you on your head as a child?',
		'ma Oh, leave him be, Raina.',
		'ma Neither of you could hack it, it’s a job for professionals.',
		'r And you could do it?',
		'ma I don’t need to.',
		'ma I have prior engagements that leave me too busy for <i>errands</i>.',
		'n The adventurer’s choke on their drinks at the words.',
		'r Ha! You’re just scared. I know how your last engagement with a noble fared.',
		'n The mediating adventurer’s face turns bright red.',

		'show character m happy with zoomIn',
		'm Did you hear?!',
		'p Maya!',

		'show character m shock',
		'p Where did you go?',

		{
			'Choice': {
				'Class': 'fadeIn',
				'I came here for you.': {
					'Text': 'I came here for <i>you.</i>',
					'Do': 'jump ComplainToMaya'
				},
				'I was worried!': {
					'Text': 'I was worried!',
					'Do': 'jump QuestionMaya'
				}
			}
		},
	],

	'ComplainToMaya': [
		// function(){
		// 	imgNotify('combat')
		// },
		'show character m shockSweat',
		'p I came here for you and you’re ditching me at the very first chance.',
		'show character m sad',
		'm I was trying to get us a head start.',
		'show character m angry',
		'n She slides into the seat beside me.',
		'jump Schmooze'
	],

	'QuestionMaya': [
		function () {
			updateRelationship('Maya', 5)
			notify('+5 Maya')
		},
		'p I was worried.',
		'p Where did you run off to?',
		'p Was it because of that woman?',
		'show character m shockSweat',
		'm Oh, no. You saw her too?',
		'n She slides into the free seat beside me.',
		'show character m sadSweat',
		'm Are you OK?',
		'p Wh—Yes, I’m OK.',
		'show character m happyUI',
		'm Great, I need you in your best form.',
		'm I got carried away collecting clues.',
		'm People aren’t saying much, but it smells like something big is going to happen.',
		'm An adventure!',
		'p You managed to collect clues in the space of ten seconds?',
		'show character m neutral',
		'm {{player.name}}. I’m a professional.',
		'jump Schmooze'
	],

	'Schmooze': [
		'show character m shock',
		'm I was right behind you when I overheard the juiciest gossip.',

		'p Overheard or eavesdropped?',
		'm It’s called passing by strategically.',
		'm Let me finish the story!',

		'p OK, OK.',
		'show character m happy',
		'm Right. It sounds like most of the good quests have been stolen, except for this one quest no-one is snatching up.',
		'm Something, something escort noble? Knight? I’m not sure.',

		'p If it’s so good, why does no-one want it?',
		'show character m sad',
		'm Um, I didn’t get that far.',

		'show character m happyUI',
		'm But, I think if we do a little networking we can find something out!',


		'show character m neutral',
		'm Want to join me?',


		'p In… chatting up random, potentially overprotective adventurers?',

		'n She shrugs.',

		'm Practice your people skills.',

		{
			'Choice': {
				'Class': 'fadeIn',

				'Don’t bother': {
					'Text': 'Don’t bother',
					'Do': 'jump DontBother'
				},

				'Refuse, it seems like a hassle': {
					'Text': 'Refuse, it seems like a hassle',
					'Do': 'jump RefuseSharply'
				},

				'Help Maya out, it can’t hurt': {
					'Text': `<i class="fas fa-gem"></i>Help Maya out, it can’t hurt

					`,
					'Do': 'jump CollectIntel',
					'Clickable': function () {
						return document.monetization && document.monetization.state === 'started'
					},
					'Class': 'special tooltip'
				},
			}
		}

	],

	'DontBother': [
		function () {
			increaseValour(10)
			notify('+10 Valour')
		},
		'show character m shock',
		'p I don’t think it’ll be worth the effort.',
		'm Why not?',
		'p Look at it from their perspective.',

		'p Two fresh-faced nosy adventurers come in asking questions about the only good job left?',
		'show character m sad',
		'p We don’t know what this crowd is like, but I don’t see them being very… forthcoming with information.',

		'p At least, not to my face. I guess you seem harmless enough.',
		'show character m angryBlush',
		'm Harmless?!',

		'show character m angry',
		'p You’re good at getting information from people.',
		'p If we both try, we’ll just draw attention to ourselves.',

		'show character m sad',
		'm I thought you were being lazy but that’s a good point.',
		'n She sighs.',

		'm What if I need backup?!',

		{
			'Choice': {
				'“Don’t start any fights…”': {
					'Text': ' “Don’t start any fights…”',
					'Do': 'jump DontStartFights'
				},
				'“Then I’ll come running.”': {
					'Text': '“Then I’ll come running.”',
					'Do': 'jump ThenIllComeRunning'
				}
			}
		}
	],

	'DontStartFights': [
		'p Don’t start any fights and you’ll be fine!',
		'show character m angry',
		'm Why would I start a fight?!',
		'n I give her a look. ',
		'jump AfterBackup'
	],

	'ThenIllComeRunning': [
		'p Then I’ll come running.',
		'show character m neutral',
		'p You got this!',
		'jump AfterBackup'
	],

	'AfterBackup': [
		'p Don’t worry, I’ll hold down the fort.',
		'p Me coming along will only ruin your chances.',

		'show character m shock',
		'm Fine… but keep your ears open for anything useful!',

		'p Yes, Ma’am.',
		'jump Information'
	],

	'RefuseSharply': [
		function () {
			updateRelationship('Maya', -5)
			notify('-5 Maya')

			updatePersonality(assertive, 1)
			setTimeout(() => { notify(`+${assertive}`) }, 2500)
		},

		'p No.',
		'show character m happy',
		'm Great, so—',
		'show character m angry',
		'm What, really?',
		// 'show character m angry',
		'p Maya, I only came down because you got us into this mess.',
		'p I’m not going to escalate it and start making enemies here.',

		'm How would we be making enemies? That doesn’t even make sense.',

		'p Look, we may have done some adventuring in the past, but things have most likely changed a bit.',

		'p People won’t trust us now.',
		'm Some?! I only <i>know</i> you because of adventuring.',

		'p I’m just trying to be rational here. ',
		'show character m sad',
		'm Forget it. I’ll just go alone.',

		'm Just at least wait for me. ',
		'n She gives me one last look, before storming over to a group on the far side.',

		'jump Information'

	],

	'CollectIntel': [
		function () {
			increaseValour(5)
			notify('+5 Valour')

			updatePersonality(friendly, 1)
			updateRelationship('Maya', 10)

			setTimeout(() => { notify(`+${friendly}`) }, 2500)
			setTimeout(() => { notify(`+10 Maya`) }, 5000)
		},

		'show character m happy',
		'p Sure, what’s the worst that could happen?',

		'show character m neutral',
		'm Why do you always assume something bad could happen?',
		'm Have some confidence, {{player.name}}!',

		'p Hey, do you want my help or not?',
		'n She sighs.',

		'm Fine, lets go.',

		'm I’m certain if we put our dashing skills together, we’ll get somewhere, <i>right?</i>',

		'p It sounds probable.',
		'm So, where should we check out first?',

		'jump CollectIntelCheckpoint'

	],

	'CollectIntelCheckpoint': [
		{
			'Choice': {
				'The Bar': {
					'Text': 'The Bar',
					'Do': 'jump TheBar',
					'Condition': function () {
						return !monogatari.storage('bar')
					}
				},
				'The Front Desk': {
					'Text': 'The Front Desk',
					'Do': 'jump FrontDesk',
					'Condition': function () {
						return !monogatari.storage('desk')
					}
				},
				'The Booth Seats': {
					'Text': 'The Booth Seats',
					'Do': 'jump BoothSeats',
					'Condition': function () {
						return !monogatari.storage('booth')
					}
				},
				'Stop Looking': {
					'Text': 'Stop looking',
					'Do': 'jump StopLooking',
					'Clickable': function () {
						return monogatari.storage('booth') && monogatari.storage('desk') && monogatari.storage('bar')
					}
				}
			}
		}
	],

	'TheBar': [

		function () {
			monogatari.storage().bar = true
		},

		'p Maybe the bar?',
		'p That’s where people usually go to spill their secrets?',
		'show character m happy',
		'm Oh, that genius!',
		'n Maya clasps her hands together in delight and makes her way towards the barkeep.',
		'hide character m with fadeOut',
		'play sound coins',
		// SFX: Cup being put down on wooden surface. Or sliding across surface,
		'bp And for you?',
		'p I’m good for now. Thanks.',
		'n He leaves, and Maya takes a swig of her own drink.',

		'show character m sad with fadeIn',
		'm This is terrible.',
		// 'show character m sad with fadeIn',
		'p Yeah, I could tell.',
		// SFX: Cup putting put down aggressively
		'n She puts the tankard down, pretending to forget it was ever there. ',
		// SFX: Cup being put down gently,
		'ad First taste of Ol’ Meggy?',
		'n A tall woman slides into the seat beside us. Her face shadowed by a large hood and thin strands of black hair.',
		'show character m shockUI',
		'm Oh, I only ordered an ale.',
		'ad That’s not what I meant… ',
		'n She nods towards a short woman vigorously sweeping by the front door.',
		'p The owner?',
		'n The speaker looks up with confused blue eyes.',

		'ad Meggy isn’t the owner. The owner is much worse. ',
		'p Oh. ',
		'ad No, she just sort of comes here and cleans. She’s very territorial about it. ',

		'show character m neutral',
		'p …',
		'm …',

		'ad It’s better if you don’t ask.',

		'p Wasn’t even considering it.',

		'n Maya leans in, nudging me forward.',

		'p We—We haven’t gotten familiar with the regulars around here, yet.',

		'ad We?',

		'show character m happy',
		'n Maya pokes her head in front of us, extending her hand. ',

		'm Hello!',

		'm I’m Maya!',

		'ad A duo? How cute.',
		'show character m neutral',

		'n The stranger doesn’t return the greeting, forcing Maya to retract her hand.',
		'n I try to keep the conversation going.',

		'p I’m a little surprised about how busy this place is.',

		'p I didn’t think Hwen would be an adventuring hotspot.',

		'show character m happy',

		'p Right, so is something special happening?',

		'n She looks at us horrified. ',
		'ad You aren’t serious? ',
		'ad You think I’d tell you for free?',

		'p Uh… ',

		'n She rolls her eyes. ',

		'ad The bar is for exchanging.',
		'ad Information?',

		'p Perfect! We’re trying to find out more about—',

		'ad It’s not for free, and a little insulting you’d assume it was.',

		'p Ah… Well, we can pay?',

		'n She smirks. One eyebrow raised in curiosity.',

		'show character m shock',

		'ad I don’t know if you’re stupid or just cute. ',

		'p Uh, thanks?',
		'n The stranger lets out a low whistle, picking her drink up from the table.',

		'ad I don’t know where you usually do things, but when you come to a place like this, turn up with something other than weak points.',

		'n She leaves with an empty smile, far less interested and courteous than before. ',
		'n Did we fail some sort of test?',
		'p Uh… what just happened?',

		'show character m sad',
		'm I don’t… know?',
		'n Maya grabs her drink and downs it in frustration.',

		'show character m angry',
		'm Why is everyone here so mean?!',
		'm  We don’t have any weak points!',

		'p Other than knowing nothing.',
		'show character m shock',
		'm We would know something if people were nicer!',
		'show character m sad',
		'm Let’s just try somewhere else.',

		'jump CollectIntelCheckpoint'
	],


	'FrontDesk': [
		function () {
			monogatari.storage().desk = true
		},

		'p Can’t go wrong with the first line of defence.',
		'show character m shock',
		'm How did I never see the front desk?',
		'n I tap my temple.',
		'show character m neutral',

		'hide character m',
		'n I put myself in line, ready to secure something more official than the odd rumour.',

		'play sound rustle2',
		'n We step forward.',
		'rn Hwen’s Adventurer guild, which expedition are you submitting?',
		'p Oh, we’re not submitting anything. We have some questions.',

		'rn The front desk is for applications and request fulfilment.',
		'p What about general inquiries?',

		'rn We don’t <i>do</i> general inquiries. Try the town crier, next.',
		'show character m shock with fadeIn',
		'm The town crier isn’t back till morning!',

		'rn Then maybe you should try again in the morning.',
		'rn We don’t do general inquiries.',
		'rn <i>Next.</i>',


		'n She looks past us, beckoning the next adventurer forward.',
		'show character m sad',
		'm Let’s just… try somewhere else.',

		'n May turns around in a hurry, searching for another source of information.',
		'jump CollectIntelCheckpoint'
	],

	'BoothSeats': [
		function () {
			monogatari.storage().booth = true
		},

		'show character m neutral',
		'p We could try window seats?',
		'p They seem to be gathering a crowd.',

		'n She nods thoughtfully.',

		'show character m happy',
		'm I’m feeling hopeful. Let’s do it.',
		'play sound footstepsFour',
		'n Up ahead, the dimly lit booths are surrounded by an observant crowd.',

		'play sound cards',
		'n No-one notices our approach. Rather, their scrutiny is focused on two seated players.',

		'n The one closest to us is an older man with stark white hair and a peppered beard, unbothered by the onlookers.',

		'n The other is a woman with a sharp freckled face and beige locks cut just below her chin.',
		'show character m happyUI',

		'm Room for two more?',
		'show character m happy',

		'n No-one looks up.',

		'om It’s a two-person game, bugger off.',
		'show character m angry',

		'n Maya brow twitches at the response.',

		'p That might be the best we’re going to get. We should just go.',
		'show character m sad',

		'n She sighs, taking a half step in the other direction, then stops.',
		'show character m shock',
		'm It’s just, for a two person game you both play so <i>poorly.</i>',

		'p Ma—<i>Ow!</i>',

		'play sound dullThud',
		'show character m neutral',
		'n A dull pain shoots through my toes, a warning to keep my mouth shut.',
		'n But it’s too late.',
		'n The watery eyes and high pitched squeal from having my foot stomped on has already earned me several dubious looks.',
		'om Big words from a small lass.',
		'om I suggest you start learning to mind your own business.',
		'om It’ll save you a lot of trouble.',

		'show character m happy',
		'm Oh, we will.',
		'm We just thought you could use some tips.',

		'n She glances overs over the board.',
		'show character m sadSweat',
		'm It’s the least we could do.',

		'n I regret offering my help.',
		{
			'Conditional': {
				'Condition': function () {
					imgNotify('survival')
					return checkSurvival()
				},
				'perception': 'jump PerceptionBluff',
				'concealment': 'jump ConcealmentBluff',
				'strength': 'jump StrengthBluff'
			}
		}
	],

	'PerceptionBluff': [
		'p Anyone can tell you aren’t playing fairly.',
		'n It’s fortunate that I don’t have to bluff. ',
		'n It takes me glance to notice this game variation heavily favours one player.',
		'fw What do you know?',
		'p Maybe you could help me understand you’ve ended up with so little cards?',
		'n The white-haired gentleman glances at his opponent’s deck and then scowls.',
		'om You’ve been cheating!',
		'fw You believe these bumpkin kids?',
		'fw Trust your dusty mind to not remember losing three fights in a row.',
		'n The old man frowns, taking calculating looks between the two decks.',
		'om Then… how is it I’ve acquired so many tokens and not cards?',
		'n The younger woman curses. Her full attention is now on me.',
		'fw If you must know, his mind is not quite what it used to be.',
		'fw I was <i>letting</i> him win.',
		'jump AfterBluff'
	],

	'StrengthBluff': [
		'show character m angry',
		'n Maya stands behind my squared shoulders. It’s time for a good sheriff, bad sheriff routine.',
		'n Except, I don’t remember which of us is the good sheriff.',
		'p We’ll help for the right price.',
		'show character m neutral',

		'om Is that a threat?',

		function () {
			checkGender()
		},

		'Leia, this {{player.man}} is threatening us.',
		'n Leia’s eyes trail up and down my frame with an unhidden distaste. ',
		'm No, no we’re not threatening you!',

		'fw Then why does your friend here, look like {{player.heis}} built to crush skills?',
		'm That’s just how {{player.he}} stand{{player.s}}!',
		'jump AfterBluff'
	],

	'ConcealmentBluff': [
		'p Bold move.',
		'n I slip myself between Maya and the elderly player. ',
		// SFX: Cards on table
		'n Sensing my presence, he fumbles with the cards and drops the deck with shaking hands.',

		'om Oh, bugger. Where do you get off creeping up on an old man?',

		'n The woman laughs, but the rest of the crowd turns to me with a scowl. ',
		'fw Next time try to keep your nose out of other’s business, kid.',

		'fw We’re quite fine with the way things are.',


		'om No, I suddenly feel rather unsafe here. Do we have to continue?',

		'show character m shock',
		'fw No, I suppose we don’t.',
		'jump AfterBluff'
	],

	'AfterBluff': [
		'fw Next time, if you want to play the bluffing game, try to actually be good at it.',
		// SFX: Cards on table, chair scraping,
		'n She throws down the rest of the card and begins helping the old man out of his seat.',

		'fw Let’s go, father.',
		'vibrate 100',
		'She clips my shoulder on the way out. ',
		'jump CollectIntelCheckpoint'
	],

	'StopLooking': [
		'p Maybe, we should call it a night?',
		'show character m shock',
		'm What? No, we just got here!',
		'p Yeah, two hours ago.',
		'p Any longer and we’ll start aggravating people. ',
		'p You said it yourself, we’re <i>rusty.</i>',

		'show character m sad',
		'm No… no, something smells fishy here. ',
		'p Yeah, Maya. That’s the smell of people.',

		'show character m angry',
		'm Sometimes you are so rude.',

		'show character m neutral',
		'm OK, alternative plan! You sit down; I have something I want to check.',

		'show character m happyUI',
		'm Great!',

		'hide character m with fadeOut',
		'n Maya bounces off in the other direction, leaving me in a corner away from the rest of the guild. ',

		// SFX: Crowd Laughing,

		'n I expect her to be shooed away, but after a risky joke or two she fits right in. ',
		'n Are my people skills that awful?',

		'n …Is that even something I can fix?',

		'jump Information'
	],


	'Information': [
		'show character m angryBlush with fadeIn',
		'n When Maya returns her face is flush and a little out of breath. ',

		'm I got some information.',

		'p That fast?',

		'n She throws herself into the seat beside me. ',
		'show character m happy',

		'm I know a few tricks or two when it comes to making people talk.',

		'p Maya, what did you do…?',

		'show character m neutral',
		'm Nothing I wouldn’t do again.',

		'm Focus, {{player.name}}!',

		'show character m angry',
		'm What’s more important is how this whole thing is turning out to be a dud.',

		'm It’s so frustrating. ',

		'm Whatever froufrou prestigious quest is registered with the guild doesn’t matter.',
		'show character m shock',

		'm It’s a glorified notice board.',

		'p Why can’t we just… put in a request?',

		'p Put our names down officially for it, move on, get called in the next day.',

		'p All this running around is… ',

		{
			'Choice': {
				'“not what I expected.”': {
					'Text': '“not what I expected.”',
					'Do': 'jump NotWhatIExpected'
				},

				'“not the cardio I asked for.”': {
					'Text': '“not the cardio I asked for.” ',
					'Do': 'jump NotTheCardio'
				},

				'"“impractical.”': {
					'Text': '“impractical.”',
					'Do': 'jump Impractical'
				}
			}
		}
	],

	'NotWhatIExpected': [
		function () {
			updatePersonality(friendly, 1)
			notify(`+${friendly}`)
		},

		'p …not what I expected.',

		'show character m sad',

		'm I’m sorry.',
		'p No, it’s OK. I’m just wondering if there’s something more useful we could do?',

		'p I imagined we’d sign up and it’d be first come, first serve. ',

		'jump Answer'
	],

	'NotTheCardio': [
		function () {
			updatePersonality(joking, 1)
			notify(`+${joking}`)
		},

		'show character m sad',
		'p …not the cardio I asked for. ',
		'p Don’t get me wrong, it’s been uh, fun but I already trained pretty hard today. ',
		'p My legs aren’t what they used to be.',

		'show character m shock',
		'm You’re only older than me by six months!',

		'show character m neutral',
		'p And I feel <i>every day</i> of it. ',

		'p If you want some advice, six months from now isn’t looking so great for you either, so how about we start wrapping this up?',

		'jump Answer'

	],

	'Impractical': [
		function () {
			updatePersonality(assertive, 1)
			notify(`+${assertive}`)
		},

		'show character m sad',
		'p …impractical.',
		'p I’m not an expert, but if you’re running a profitable establishment, there should be some order to it all.',
		'p Surely everyone else doesn’t waste their time like this?',
		'jump Answer'
	],

	'Answer': [
		'show character m sad',
		'm I don’t like it either. ',
		'm Even if we put in a request, from the sound of it, no-one would respond.',

		'show character m angry',
		'm The front desk <i>obviously</i> has favourites. They don’t even try to hide it. ',
		'm We’re at the bottom of the food-chain.',

		'show character m neutral',
		'p Then we pick a different quest.',
		'm <i>Or</i>, we find the contractor ourselves!',

		'p Doesn’t that defeat the purpose of the guild?',

		'show character m happy',
		'm If we didn’t come here, we wouldn’t have known about the quest. Purpose fulfilled. ',

		'm So, all we do now is… find this noble contractor and convince him to hire us.',

		'show character m shock',
		'm They’re probably here… watching… lurking… scoping out the competition.',

		'show character m neutral',
		'm If we find them, it’s faster, more efficient and shows initiative!',

		'p Uh huh… ',

		'show character m happy',
		'm It won’t be hard!',

		{
			'Conditional': {
				'Condition': function () {
					// imgNotify('combat')
					return checkWeapon()
				},

				'bow': 'jump BowAnswer',
				'fists': 'jump CloseAnswer',
				'sword': 'jump CloseAnswer'

			}
		},

	],

	'BowAnswer': [
		'm After all, we’re both deadly with a bow.',
		'jump AfterAnswer'
	],

	'CloseAnswer': [
		'm After all, between us, we’ve got range and close combat perfected.',
		'jump AfterAnswer'
	],

	'AfterAnswer': [

		'm We just show them much better it is to hire a duo. A butt-kicking pair of adventurers with no flaws. ',

		'show character m shock',

		'm Oh, maybe you should…',

		'p Not talk?',

		'show character m neutralBlush',
		'm I was going to say work on your social skills.',

		'p Don’t worry, I’ll take baby steps. One person at a time. ',

		'hide character m with fadeOut',

		'n Maya pats me on the shoulder and leaves to disappear back into the fray.',

		'n I try to stay alert, but it’s already been such a long day. ',
		'n My head feels like a weight between my shoulders as I stare off into the distance. The conversations muddling together. ',

		// VFX: Fading in and out of black like tired eyes?,

		'n I snap back to attention, realising I’ve been staring at one person this whole time.',
		'show character k neutralCloak at center with fadeIn',


	]




});