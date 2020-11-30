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
		You’re about to make a skill choice. How do you react in an unknown environment?
		`
	},

	'Interpersonal': {
		title: 'TIP',
		body: `
		You’re about to make a skill choice! Your social skills may lack, but you excel at…
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
	'fireflies': {
		'particles': {
			'number': {
				'value': 202,
				'density': {
					'enable': true,
					'value_area': 800
				}
			},
			'color': {
				'value': '#e25822'
			},
			'shape': {
				'type': 'circle',
				'stroke': {
					'width': 0,
					'color': '#000000'
				},
				'polygon': {
					'nb_sides': 5
				},
				'image': {
					'src': 'img/github.svg',
					'width': 100,
					'height': 100
				}
			},
			'opacity': {
				'value': 0.9299789953020032,
				'random': true,
				'anim': {
					'enable': true,
					'speed': 1,
					'opacity_min': 0,
					'sync': false
				}
			},
			'size': {
				'value': 2,
				'random': true,
				'anim': {
					'enable': false,
					'speed': 4,
					'size_min': 0.3,
					'sync': false
				}
			},
			'line_linked': {
				'enable': false,
				'distance': 150,
				'color': '#ffffff',
				'opacity': 0.4,
				'width': 1
			},
			'move': {
				'enable': true,
				'speed': 3.017060304327615,
				'direction': 'none',
				'random': true,
				'straight': false,
				'out_mode': 'out',
				'bounce': false,
				'attract': {
					'enable': false,
					'rotateX': 1042.21783956259,
					'rotateY': 600
				}
			}
		},
		'interactivity': {
			'detect_on': 'canvas',
			'events': {
				'onhover': {
					'enable': true,
					'mode': 'bubble'
				},
				'onclick': {
					'enable': true,
					'mode': 'repulse'
				},
				'resize': true
			},
			'modes': {
				'grab': {
					'distance': 400,
					'line_linked': {
						'opacity': 1
					}
				},
				'bubble': {
					'distance': 250,
					'size': 0,
					'duration': 2,
					'opacity': 0,
					'speed': 3
				},
				'repulse': {
					'distance': 400,
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
	},

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
	},

	'stars': {
		'particles': {
			'number': {
				'value': 355,
				'density': {
					'enable': true,
					'value_area': 789.1476416322727
				}
			},
			'color': {
				'value': '#ffffff'
			},
			'shape': {
				'type': 'circle',
				'stroke': {
					'width': 0,
					'color': '#000000'
				},
				'polygon': {
					'nb_sides': 5
				},
				'image': {
					'src': '',
					'width': 100,
					'height': 100
				}
			},
			'opacity': {
				'value': 0.48927153781200905,
				'random': false,
				'anim': {
					'enable': true,
					'speed': 0.2,
					'opacity_min': 0,
					'sync': false
				}
			},
			'size': {
				'value': 2,
				'random': true,
				'anim': {
					'enable': true,
					'speed': 2,
					'size_min': 0,
					'sync': false
				}
			},
			'line_linked': {
				'enable': false,
				'distance': 150,
				'color': '#ffffff',
				'opacity': 0.4,
				'width': 1
			},
			'move': {
				'enable': true,
				'speed': 0.2,
				'direction': 'none',
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
					'enable': true,
					'mode': 'bubble'
				},
				'onclick': {
					'enable': true,
					'mode': 'push'
				},
				'resize': true
			},
			'modes': {
				'grab': {
					'distance': 400,
					'line_linked': {
						'opacity': 1
					}
				},
				'bubble': {
					'distance': 83.91608391608392,
					'size': 1,
					'duration': 3,
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
	},

	'snow': {
		"particles": {
			"number": {
				"value": 285,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#fff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.09167965461773755,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 2,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 500,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 2
			},
			"move": {
				"enable": true,
				"speed": 2,
				"direction": "bottom",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "bubble"
				},
				"onclick": {
					"enable": false,
					"mode": "repulse"
				},
				"resize": false
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 0.5
					}
				},
				"bubble": {
					"distance": 400,
					"size": 4,
					"duration": 0.3,
					"opacity": 1,
					"speed": 3
				},
				"repulse": {
					"distance": 1,
					"duration": 0.01
				},
				"push": {
					"particles_nb": 1
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	}
})

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
	'Night1': '3_Night_1_Master.mp3',
	'Night2': '9_Night_2_Master.mp3',
	'Day2': '8_Day_2_Master.mp3',
	'Day3': '12_Day_3_Master.mp3',
	'Night4': '20_Night_4_Master.mp3'
});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {
	'cardsOnTable': 'zapsplat_foley_cards_birthday_x5_fall_off_shelf_20593.mp3',
	'people': 'party-crowd-daniel_simon.mp3',
	'cupGently': 'household_cups_mugs_x2_pick_up_by_handles_from_table_001.mp3',
	'gateRumble': 'zapsplat_foley_castle_dungeon_door_metal_large_heavy_open_001_50566.mp3',
	'cupSlide': 'zapsplat_household_mug_cup_ceramic_slide_on_kitchen_worktop_001_34851.mp3',
	'cupSlam': 'zapsplat_foley_paper_sheet_a4_slam_down_by_hand_on_glass_table_001_28576.mp3',
	'chairScrape': 'zapsplat_household_chair_sofa_drag_concrete_wooden_legs_scrape_001_37918.mp3',
	'woodDrag': 'zapsplat_household_plastic_bucket_empty_drag_on_wood_floor_001_23065.mp3',

	'glassTap': 'zapsplat_cartoon_glass_tap_hit_002_26691.mp3',
	'creepyTapping': 'zapsplat_impacts_glass_small_pane_taps_fingers_19360.mp3',

	'gateLatch': 'gateLatch.mp3',

	'stomach': 'Stomach Growl - Sound Effect for Editing.mp3',
	'eating': 'BiteIntoAndChewApple.mp3',
	'horse': '497693__leo153__2-horse-carriage.wav',
	'door': '440644__seansecret__violently-closing-wooden-door.wav',
	'cards': '423767__someonecool15__card-shuffling.mp3',

	'creak': '219499__jarredgibb__door-creak.wav',
	'creak2': 'creak.mp3',

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
	'punch3': 'Realistic Punch 2.wav',

	'water': 'Water 8.wav',
	'wind': 'wind.mp3',

	'rustle': 'rustle.mp3',
	'rustle2': 'rustle2.mp3',
	'rustle3': 'plastic bag rustle.mp3',
	'rustle4': 'ShakeSmallTarp.mp3',
	'coins': 'RustleOfCoins.mp3',

	'mudRun': 'Footsteps Dirt (Running) 5.wav',
	'footstepsFour': 'footstepsLoop.mp3',
	'woodStep': 'Wood footstep 2.wav',
	'woodStepsFour': 'lightWoodFootsteps.mp3',
	'runningHeavy': 'runningHeavy.mp3',
	'gravelRun': 'gravelRun.mp3',

	'thud': 'musical_guitar_acoustic_lean_against_wall_hard.mp3',
	'crash': 'zapsplat_vehicles_bicycles_5_fall_over_together_11670.mp3',

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
	'guild': 'guild.png',
	'dayMountain': 'mountain.jpg',
	'road': 'road.jpg',
	'forest': 'forest.jpg',
	'magicForest': 'MagicForest.jpg'
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
		name: '{{kaiName}}',
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
	},

	'st': {
		name: 'Stranger'
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
				'Class': 'fadeIn',

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
		"n At some point, when I slipped these on, I felt most like myself, but now…",
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
		"m {{player.name}}! I— You— Argh!",
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
		"p Don’t think I’m too tired to spar with you and <i>win</i>.",
		'n Still, it was odd. She didn’t usually take interest in my training. It only reminded her of what had happened.',
		'm With footwork like that, you’d injure yourself just punching air.',
		'p I’m just a little tired, it’s getting late. ',
		'jump FlailConcern'
	],

	'FlailBow': [
		"show character m shock",
		'm The {{player.name}} I remember could hit a target with their eyes closed. ',
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

		{
			'Conditional': {
				'Condition': function () {
					return checkWeapon()
				},

				'bow': 'm Last year your bow could do serious damage. You practically tore through every monster you met! ',
				'sword': 'm Last year your longsword could do serious damage. You practically tore through every monster you met!',
				'fists': 'm Last year your knuckle-dusters could do serious damage. You practically tore through every monster you met!'
			}
		},

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
		'm How would I know that bidding the contents of a seized ship was going to end in…',
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
		"m But you… you love adventuring. You love helping others!",
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
				'Class': 'fadeIn',

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
				'Class': 'fadeIn',
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
				'Class': 'fadeIn',
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
				'Class': 'fadeIn',
				'Line up an arrow': {
					'Text': 'Line up an arrow',
					'Do': 'next'
				}
			}
		},

		'play sound pullString2',

		'n The first arrow hits the ground with a humiliating thwack, just like before. ',

		'play sound arrowFly',

		'n The next shot is the same. ',
		'n Victory only comes to me when an arrow finally connects with the base of a tree trunk. ',
		'play sound rustle2',
		'n It almost makes the heat in my upper back worth it. ',
		'n My focus shifts from the posture of my arm and bow, and more on the targets before me. ',
		{
			'Choice': {
				'Class': 'fadeIn',
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
				'Class': 'fadeIn',
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
				'Class': 'fadeIn',
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
				'Class': 'fadeIn',
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
				'Class': 'fadeIn',
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
				'Class': 'fadeIn',
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

		'n On the other side, the roads are calm with only a few stray stragglers making their way home. ',
		{
			'Choice': {
				'Class': 'fadeIn',
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
				'Class': 'fadeIn',
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
				'Class': 'fadeIn',
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
		'play sound gateRumble',
		'n Another low chime echoes through the air. The town gates rumble as they roll back their last bolt. ',
		'n The night watch is about to begin. ',
		'n My pace quickens and I soon find myself standing across from the adventurer’s guild. ',
		'n It wasn’t difficult to locate, considering it was the only one in town. ',
		'n Still, I can’t approach carelessly. I’m not familiar with this part of town. I should approach… ',
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
		'p I wasn’t slinking. I was being cautious.',
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
		'p You told me my face scares infants.',
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
		'da Well, I call it a joke. You think anyone worth their salt would come looking through Hwen?',
		'da And to post a job like <i>that?</i>',
		'wi Why not! There’s good adventurers here.',
		'n The doubtful adventurer pauses, then leaning in very slowly stares into Wick’s eyes.',
		'da Did they drop you on your head as a child?',
		'ma Oh, leave him be, Raina.',
		'ma Neither of you could hack it, it’s a job for professionals.',
		'r And you could do it?',
		'ma I don’t need to.',
		'ma I have prior engagements that leave me too busy for <i>errands</i>.',
		'n The adventurers choke on their drinks at the words.',
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
					'Text': 'Help Maya out, it can’t hurt',
					'Do': 'jump CollectIntel',
					'Condition': function () {
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
				'Class': 'fadeIn',
				'“Don’t start any fights…”': {
					'Text': ' “Don’t start any fights…” ',
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

			console.log(assertive)
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
				'Class': 'fadeIn',
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
	
		'play sound cupSlide',
		'bp And for you?',
		'p I’m good for now. Thanks.',
		'n He leaves, and Maya takes a swig of her own drink.',

		'show character m sad with fadeIn',
		'm This is terrible.',
		// 'show character m sad with fadeIn',
		'p Yeah, I could tell.',
		'play sound cupSlam',
		'n She puts the tankard down, pretending to forget it was ever there. ',
		'play sound cupGently',
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
		'play sound cardsOnTable',
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
		'play sound chairScrape',
		'play sound cardsOnTable',
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
				'Class': 'fadeIn',
				'“not what I expected.”': {
					'Text': '“not what I expected.”',
					'Do': 'jump NotWhatIExpected'
				},

				'“not the cardio I asked for.”': {
					'Text': '“not the cardio I asked for.” ',
					'Do': 'jump NotTheCardio'
				},

				'“impractical.”': {
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
			console.log(assertive)
			updatePersonality(assertive, 1)
			notify(`+${assertive}`)
		}, ,

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

		'm We just show them how much better it is to hire a duo. A butt-kicking pair of adventurers with no flaws. ',

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
		// 'show particles fireflies',
		// 'Hello'
		{
			'Conditional': {
				'Condition': function () {
					imgNotify('survival')
					return checkSurvival()
				},
				'concealment': 'jump ConcealKaiMeet',
				'strength': 'jump StrengthKaiMeet',
				'perception': 'jump PerceptionMeet'
			}
		},


	],

	'ConcealKaiMeet': [
		'n He tries to hide it, but being so conveniently placed in the shadows, it’s not a coincidence. ',
		'n His stance suggests to leave him alone in a room where the best action was to appear favourable. ',
		'n Away from the rest of the guild, he cloaks himself like someone who wanted to see and not be seen. ',
		'show character k happyCloak',
		'n Like I do.',
		'jump PersonalSkillChoice'
	],

	'StrengthKaiMeet': [
		'n Standing perfectly still, he tries to hide it. ',
		'n But he doesn’t fit in amongst the rowdy, drunken fighters. ',
		'n He’s too rigid, too aware and too upright. ',
		'show character k happyCloak',
		'n Too delicate looking. ',
		'n How could I not notice?',
		'jump PersonalSkillChoice'
	],

	'PerceptionMeet': [
		'n Not only me, but everyone else in the room. ',
		'show character k happyCloak',
		'n He watches their conversations.',
		'n He tries not to make it obvious, but I know the look.',
		'n The distracted eyes that don’t draw attention.',
		'n A body shifted away, relying only on his ears to search the room for answers.',
		'n How could I not notice someone trying so hard to go unnoticed?',
		'n And for how long has he been watching?',
		'jump PersonalSkillChoice'
	],

	'PersonalSkillChoice': [
		'n The lone wolf look is suspicious enough, but he appears so out of place that I’m curious.',

		'n Perhaps asking the person who appears different will yield different results?',

		'n Is that just my wishful thinking?',

		'n Maya said my conversation skills suck, but there are other methods I can try.',

		'n After all, I’m not so bad at… ',

		'show message Interpersonal',

		{
			'Choice': {
				'Class': 'fadeIn',
				'Empathy': {
					'Text': 'Empathy',
					'Do': 'jump EmpathySkill'
				},
				'Deception': {
					'Text': 'Deception',
					'Do': 'jump DeceptionSkill'
				},
				'Intimidate': {
					'Text': 'Intimidate',
					'Do': 'jump IntimidateSkill'
				},
			}
		},

	],

	'EmpathySkill': [
		function () {
			changeSkill('interpersonal', 'empathy')
			notify('+Empathy')
		},

		'n ...empathy.',

		'n This stranger, whoever he is, is here alone. I can tell that much.',

		'n Striking up a friendly, straightforward conversation could be a pleasant surprise.',

		'n And it’s all I have.',

		// [CHOICE: Strike up a conversation]

		'play sound woodStep',

		// [Kai, closer?]


		'p I don’t suppose you’re trying to make sense of all this too?',


		'n I flash my best smile.',


		'p I couldn’t help but notice you seemed to look a little lost.',
		'show character k neutralCloak',

		'k I suppose that was meant to be charming.',
		'n His voice is smooth, like the silken strings of a lute.',

		'k If not, then were you going for a bold, but distasteful pick-up line?',

		'n I’m sorry, but you’re not my type.',

		'p Wh—I was trying to be <i>nice.</i> ',


		'show character k angryCloak',

		'k Nice?',

		'show character k happyCloak',

		'k Do I look like someone who needs <i>nice</i>?',
		'p I don’t know, but you look very <i>alone</i>, so. ',

		'show character k shockCloak',

		'k Touché. ',
		'k I see I’ve now been reduced to pity from local orphans.',

		'show character k happyCloak',

		'k I suppose I deserve it. ',



		'jump Reaction'
		// [Kai, neutral] 
	],

	'DeceptionSkill': [
		function () {
			changeSkill('interpersonal', 'deception')
			notify('+Deception')
		},
		'n …deception.',



		'n This stranger, whoever he is, is hesitant to lower his guard. That much I can tell.',


		'n Convincing him I’m not a threat may lead to results.',


		'n I just have to look harmless.',


		// [CHOICE: Strike up a conversation]

		'play sound woodStepsFour',

		// [Kai, closer?]


		'p I believe there’s been a mistake.',


		'p I flash my friendliest smile.',


		'p I seem to have picked up the wrong purse.',

		'p I don’t suppose this bag of coins is yours?',
		'k I suppose that was meant to be believable.',
		'n His voice is smooth, like the silken strings of a lute.',

		'k Maybe it works on street vendors, but not me. ',
		'p So this isn’t your bag of coin?',
		'show character k angryCloak',

		'k Nice try, but I’m not as desperate or simple-minded as your friends here. ',

		'n He nods in the direction of the rest of the guild. ',

		'p If that’s what you think of them, why are you here?',

		'show character k sadCloak',
		'n He sighs loudly. ',
		'k I’m simply paying my penance.',

		'show character k happySweatCloak',

		'k Running into a cheap swindler must be my next punishment. ',


		'jump Reaction'
	],

	'IntimidateSkill': [
		function () {
			changeSkill('interpersonal', 'intimidation')
			notify('+Intimidation')
		},
		'n …intimidation.',

		'n This stranger, whoever he is, looks a little out of his depth. That much I can tell.',


		'n Perhaps, if he felt threatened, he’d observe less and speak more.',

		'play sound woodStep',


		'p I’m not sure you should have come alone.',

		'p People like you don’t do well in a crowd like this.',

		'show character k happyCloak',
		'k I suppose that was meant to be intimidating.',
		'n His voice is smooth, like the silken strings of a lute.',

		'k I’m curious, is the big bad wolf act your usual, or did you just pick it up recently?',

		'p Wh—I don’t think you realise who you’re dealing with. ',

		'show character k shockCloak',

		'play sound thud',
		'n He pushes himself off the wall. ',

		'show character k neutralCloak',

		'k I think I do.',

		'n The stranger towers over me.',

		'n I’ve never considered myself short, but standing upright I hardly reach his shoulder.',

		'show character k happyCloak',
		// [Kai, cloak, happy]

		'k When you try to solve things head first, it makes you an open book.',

		'show character k sadCloak',
		// [Kai, cloak, sad]

		'k You think fear will get you what you want?',

		// [Kai, cloak, angry]
		'show character k angryCloak',

		'k You don’t know what it’s like to be afraid. ',

		'jump Reaction'
		// [Kai, cloak, happy] 
	],

	'Reaction': [
		'show character k happyCloak',
		'k But, enough of this. ',
		'show character k neutralCloak',
		'k What is it you want?',
		'p I was just trying to make conversation. ',

		'n Although, now I’m certain it was a terrible idea.',
		'show character k happyCloak',
		'k Ah, now. Don’t lie to me. ',
		'k I saw you and your friend running around like lost puppies. ',

		'k But, not before being slighted by everyone here.',
		'show character k happyCloak',

		'k Seems making friends is not your forte.',
		'k Nor is getting answers. ',

		'p Wow, going straight for the attack, huh?',
		'show character k shockCloak',

		'p I’m not the one who came here alone. ',
		'show character k happyCloak',

		'k And I have all the answers I need, so don’t think I have any ulterior motives here.',
		'show character k shockCloak',

		'k Oh?',
		'p Yeah.',

		'show character k happyCloak',
		'k Dishonesty does not look very good on you.',

		'p I’m being honest.',

		'p Hwen’s just a temporary situation. I’m surprised they have a guild at all. ',

		'p You wouldn’t have seen me, but I was a pretty good adventurer.',

		'p I used to do this all the time. ',

		'p We’re just getting used to the new system. ',

		'show character k neutralCloak',
		'k How interesting.',

		'k And how is that going?',

		'p Things are… slower than expected. ',

		'p But nothing I can’t overcome.',
		'show character k shockCloak',

		'p We’re close to wrapping up a few loose ends on a quest. ',
		'p Nothing big, just a noble. ',

		'show character k happyCloak',
		'k Perhaps I was mistaken. ',

		'k You must know what you’re doing, to find a quest so fast.',

		{
			'Conditional': {
				'Condition': function () {
					return checkSurvival()
				},
				'strength': 'p It’s not an issue. I’m stronger than half the crowd here. ',
				'perception': 'p It’s not so hard if you know where to look. Who to look out for. ',
				'concealment': 'p It’s easier when people can’t tell they’re competing with you.'
			}
		},

		'p Getting a quest is child’s play. ',

		'show character k neutralCloak',
		'p Plus, I’m kind of a big deal outside of Hwen.',
		'show character k happyCloak',

		'k I see.',
		'k Hwen is a rather small town, so maybe I’ll hear of you soon.',

		'k But from accents alone, I’m sure you know the people in here aren’t hwensmen. ',

		'k They lack that trustworthy local charm.',

		'show character k sadCloak',

		'k You understand, right? That they all have things they want to hide or protect?',

		'p I… don’t know why you’re telling me this. ',

		'show character k happyCloak',
		'k Because I can’t bear to watch a puppy get kicked while it’s still down. ',


		'show character k neutralCloak',
		'k And because you say too much. ',
		'show character k shockCloak',

		'k Nowhere near as much as your friend, but still too much.',

		'show character k happyCloak',
		'n He extends his hand. ',

		'k It was nice meeting you, {{player.name}}. ',
		'p Uh, I didn’t tell you my name. ',

		'show character k neutralCloak',
		'k You didn’t need to. Your friend is <i>very</i> loud. ',
		'k If it makes you more comfortable, you can call me Kai.',
		'show character k sadCloak',
		function () {
			monogatari.storage().kaiName = 'Kai'
		},
		'k To level the playing field. ',

		'p OK, Kai. So, do you just hang out in the shadows waiting to give people advice, or…?',

		'show character k happyCloak',

		'k On the contrary, this is my first time. ',

		'k Now, what did you think I could do for you?',
		'p What do you mean?',

		// [Kai, cloak, neutral]
		'show character k neutralCloak',

		'k I think we’ve established that you’re not here with honest intentions.',

		// [Kai, cloak, happy]

		'show character k happyCloak',
		'k So, what is it really?',

		'p I thought you might be useful.',

		'k For?',

		'k For… information.',

		// [Kai, cloak, sad]
		'show character k sadCloak',

		'p Honestly, somewhat regretting it now.',

		'k It would not be a first… It seems you have company.',

		'show character k happyBlushCloak',
		// [Show Maya, happy, blush, hide Kai]
		'hide character k with fadeOut',
		'show character m happyUI with fadeIn',

		'm {{player.name}}! There you are!',

		'p Oh, Maya. This is Kai. We had a short misunderstanding but I think—',

		// [Maya, shock]
		'show character m shock',

		'm Who?',

		'k Kai—',

		'show character m shockSweat',
		// [Maya, shock with sweat]

		'I turn back, but the space where Kai stood is now empty.',

		'p There was this shadowy cloak guy…',

		// [Maya, sad with sweat]
		'show character m sadSweat',

		'm There’s no-one there.',

		'p Well, I see that now, but he was there, Kai.',

		'show character m angry',
		// [Maya, angry]

		'Maya squints at me. Hard.',

		'p He was standing right in this corner.',

		'p He’s probably just slipped through the back-door…',

		'p I think you scared him off.',

		'show character m shockSweat',
		// [Maya, shock with sweat]

		'm Are you… are you losing it?',

		'show character m sadSweat',
		// [Maya, sad with sweat]

		'She mutters under her breath.',

		'm Maybe we have been here too long.',

		{
			'Choice': {
				'Class': 'fadeIn',
				'I promise, I’m not losing it.': {
					'Text': 'I promise, I’m not losing it.',
					'Do': 'jump NotLosingIt'
				},
				'I’m just getting closer to omnipotence.': {
					'Text': 'I’m just getting closer to omnipotence.',
					'Do': 'jump Omnipotence'
				},
				'Maya, I’m serious.': {
					'Text': 'Maya, I’m serious.',
					'Do': 'jump ImSerious'
				}
			}
		}
	],

	'NotLosingIt': [
		function () {
			updatePersonality(friendly, 1)
			notify(`+${friendly}`)
		},
		'show character m angry',
		'p I promise, I’m not losing it.',
		'm How can I be sure?',

		'show character m shockSweat',
		'm Let me see your eyes!',

		'show character m neutral',
		'n She stands on the tip of her toes, pulling my brow up to get a better look. ',

		'm <i>Hm</i>, no signs of any imminent curses or impending doom.',
		'show character m shock',

		'm Show me your wrists!',

		'n I oblige, turning over my arms. ',
		'show character m angry',

		'm No cursed marks of a chosen one.',

		'show character m happy',
		'm There’s hope for you yet.',
		'm Even if you are talking to ghosts. ',

		'show character m sad',

		'm Even I would accept a ghost right now. ',

		'jump ReturnDisappointed'

	],

	'Omnipotence': [
		function () {
			updatePersonality(joking, 1)
			notify(`+${joking}`)
		},
		'show character m neutral',
		'p I’m just getting closer to omnipotence. ',
		'show character m angry',
		'm Omnipo-what-now?',

		'show character m shock',
		'p I see all things, Maya. ',

		'p The beginning and end of time.',

		'show character m happy',
		'm So was the invisible man from the past or the future?',

		'p I haven’t quite mastered that part yet.',

		'show character m neutral',
		'm Fine, what about me?! What do you see?',

		'n She closes her eyes, creases forming between her brows. ',

		'm It doesn’t work like that. ',

		'show character m happy',

		'm Try anyway!',

		'hide character m with fadeOut',
		'show scene black with fadeIn',

		'n I close my eyes.',

		'p Hm, I’m… I’m seeing brief pain in your future. ',

		'm Oh, no!',

		'm How soon?',

		'show scene guild with fadeIn',
		'show character m shock with fadeIn',
		'play sound punch3',

		'show character m shockBlush',
		'n I flick her forehead.',

		'p That soon.',

		'show character m angry',
		'm Ow!',

		'show character m sad',
		'n She rubs her head, dissatisfied. ',

		'show character m neutral',
		'm I think you’re a bit of a quack. ',

		'p Yeah, yeah, and what did your skills get you?',

		'show character m sad',
		'm Nothing…',

		'jump ReturnDisappointed'

	],

	'ImSerious': [
		function () {
			updatePersonality(assertive, 1)
			notify(`${assertive}+`)
		},

		'show character m sadSweat',
		'p A man was right there.',
		'p I wouldn’t lie to you. ',

		'show character m neutral',
		'm Oh, loosen up.',

		'm I’m sure the invisible man was very lovely. ',

		'show character m sad',
		'm I hope you at least had better luck than I did. ',

		'm All this kissing up and not a single bit of new information.',

		'jump ReturnDisappointed'

	],

	'ReturnDisappointed': [

		'show character m sadSweat',
		'm No-one wanted to talk about the escort quest to me.',
		'show character m shock',
		'm Even after I gave them my best jokes. ',

		'show character m sadSweat',
		'm And my grape pudding recipe…',

		'p You went that far?',
		'show character m sad',
		'm I was getting a good feeling.',
		'm But no-one knew anything worthwhile. ',

		'show character m sadSweat',
		'm No clues on what this contractor might look like.',
		'm Where they might be from, what accent they had?',

		'show character m angry',
		'm At some point, it sounded like they’re not even a noble, but a knight? Or a baron.',
		'm It’s all a mess.',
		'show character m shock',

		'm Except for one part.',
		'm We have to go through a forest, but they’ll pay handsomely.',

		'p How handsomely?',
		'show character m happy',
		'm We’ll never have to work a day in our lives handsome.',
		'show character m neutral',
		'm Even then, no-one could agree on even how handsomely that was, whether it was hundreds or thousands. ',

		'show character m sadSweat',
		'p It’s starting to sound like a wives’ tale.',

		'm …Yeah. It sounds like a fantasy. ',

		'show character m neutralSweat',
		'm Should we go? I’m hungry and tired.',

		'show character m happy',
		'm Now we’re on the same page.',

		'p I could use some sleep finally. ',

		'n Maya yawns, stretching out her back. ',

		'm Lead the way.',

		'hide character m with fadeOut',
		'show scene black with fadeIn',

		'show scene nightTown with fadeIn',
		'stop music with fade 3',
		'play music Night2 loop with fade 5',

		'show character m neutral with fadeIn',

		{
			'Conditional': {
				'Condition': function () {
					return monogatari.storage('trained')
				},
				'True': 'jump TrainedSad',
				'False': 'jump RestedBread'
			}
		}
	],

	'RestedBread': [
		'show particles snow',

		'Once outside, I remember the somewhat crushed loaves in my satchel.',

		'n I pull one out and pass it to Maya. ',

		'm What’s this?',

		'p You said you were hungry.',

		'n Curious, she unwraps it hastily.',

		'show character m angry',

		'n She looks up. ',

		'm Burnt… bread?',

		'p I know it looks like burnt bread, but it’s more than that. Trust me. ',

		'n She takes a bite. ',

		'show character m shockBlush',

		'm Oh! This is good! Did you make this?',

		'show character m angry',
		'm Give me the recipe right now. ',

		'p I didn’t make it. It’s one of Rohese’s ideas.',

		'show character m shock',
		'm Oh! This is good! Did you make this?',

		'show character m shockBlush',
		'm Oh! This is good! Did you make this?',

		'show character m angry',
		'm Give me the recipe right now.',

		'show character m shock',
		'p I didn’t make it. It’s one of Rohese’s ideas.',

		'p Although this time it’s worth eating.',

		'show character m happy',
		'n Satisfied, Maya digs into it and eats as we walk down the streets.',

		'show character m neutral',
		'n She wipes her mouth of the crumbs but doesn’t say much else.',

		'm It was kind of spicy?',

		'p Ah… I think it’s cinnamon. Of course, Rohese wouldn’t tell me for certain.',

		'show character m shock',
		'm Oh!',

		'm That makes sense.',
		'show character m neutral',

		'n She mumbles a few ingredients to herself, eventually forgetting I’m even here.',

		'show character m sad',
		'm Maya?',

		'm …',

		'show character m shock',
		'm Maya!',

		'show character m neutral',
		'm Hm?',

		'p I asked if you’re planning to replicate it.',

		'show character m shock',
		'm Oh, um. Maybe?',

		'show character m neutral',
		'm I’ll bring you some when I try.',

		'p Can’t wait.',
		'n Maya doesn’t reply.',

		'p Maya.',
		'm …',
		'p Maya!',

		'n I grab her by the wrist.',
		'show character m shock',
		'm What?',
		'p You were walking the wrong way.',

		'show character m neutral',
		'm Hm? Oh.',

		'm Wow, I didn’t notice.',

		'show character m sad',
		'm Oops.',

		'n Every other attempt at conversation is answered with one-word phrases and nods.',
		'jump AskMayaPersonality'
	],

	'TrainedSad': [
		'show particles snow',

		'n Once outside, my breath forms into puffs of vapour.',

		'n I hadn’t prepared to be out for so long.',

		'play sound footstepsFour',

		'n Walking back, I try not to bring up the events in the guild, but it doesn’t matter.',

		// 'show character m sad',

		'n Maya’s silence is telling enough.',

		'p Maya.',

		'show character m sad',
		'm …',

		'p Maya!',

		'n I grab her by the wrist.',

		'm What?',

		'p You were walking the wrong way.',

		'show character m sad',
		'm Hm? Oh.',

		'show character m sadBlush',
		'm Oops.',

		'n She walks ahead of me, holding herself for warmth.',

		'n Every other attempt at conversation is answered with one-word phrases and nods.',

		'jump AskMayaPersonality'

	],

	'AskMayaPersonality': [
		{
			'Choice': {
				'Class': 'fadeIn',
				'Ask what’s wrong': {
					'Text': 'Ask what’s wrong',
					'Do': 'jump AskWhatsWrong'
				},
				'Leave her be': {
					'Text': 'Leave her be',
					'Do': 'jump LeaveHerBe '
				}
			}
		}
	],

	'AskWhatsWrong': [
		'show character m sad',
		'n Maybe Maya doesn’t want to talk, but she can’t hide it from me.',

		function () {
			updateRelationship('Maya', 10)
			notify('+10 Maya')
		},
		'p OK, what’s wrong?',
		'show character m shockBlush',
		'm Huh?',

		'show character m sad',
		'p You’re dragging your feet, kicking dirt, and nearly missed this turn.',
		'p Come on, talk to me.',

		'show character m sadSweat',
		'm There’s nothing to talk about, I’m just tired.',

		'p Maya… ',

		'p I’m not walking home with you if you’re going to make it this painful every time you’re disappointed.',

		'show character m shockSweat',
		'm {{player.name}}, that’s not— ',

		'show character m sadBlush',
		'p That’s what I’m doing, isn’t it?',

		'show character m sadSweat',
		'n Her eyes well up. Like a broken dam, the words fall out.',

		'm I wanted today to go well.',

		'p It did!',

		'show character m neutralSweat',
		'p As far as I can tell, you’re alive and didn’t give over your life savings.',

		'show character m shockSweat',
		'm No, I know I just—I really wanted us to do something together.',

		'show character m sadSweat',
		'm I feel like it’s my fault we don’t do anything fun anymore.',

		'p We have lots of fun.',
		'show character m shockSweat',

		'm Not like we used to! Not after… we had to come here.',
		'm This was meant to be a quick stop in our journey, and now we’ve taken a million steps backwards!',

		'm We’ve been here for months!',

		'm This was meant to be a quick stop in our journey, and now we’ve taken a million steps backwards!',

		'm We’ve been here for months!',

		'show character m sad',
		'm This whole time I’ve been doing nothing…',

		'show character m sadSweat',
		'm I thought if we did something more… it’d be a step in the right direction.',

		'm Now, I just feel a little dumb.',

		'n Oh, Maya…',

		{
			'Choice': {
				'Class': 'fadeIn',
				'“This might be the right direction.”': {
					'Text': '“This might be the right direction.”',
					'Do': 'jump ReassureHer'
				},

				'“Only a little dumb?”': {
					'Text': '“Only a <i>little</i> dumb?”',
					'Do': 'jump JokeWithHer'
				},

				'“Don’t give up so easily.”': {
					'Text': '“Don’t give up so easily.”',
					'Do': 'jump EncourageHer'
				}
			}
		}

	],

	'ReassureHer': [
		function () {
			updatePersonality(friendly, 1),
				notify(`+${friendly}`)
		},

		'show character m sadSweat',
		'p This might be the right direction.',
		'p We don’t know that it’s not.',

		'show character m angrySweat',
		'm If it is, then it feels awful.',

		'n I laugh.',

		'show character m sadSweat',
		'p You can’t expect to feel amazing all the time.',

		'show character m neutral',
		'p This is a learning experience.',

		'show character m happy',
		'p The Maya I know is only more dangerous now that she’s back in action.',

		'show character m neutral',
		'm A learning experience, huh…',

		'm Maybe you’re right…',

		'm I don’t know where this is heading, but that’s just as exciting.',

		'show character m shock',
		'm Kinda.',

		'm It’s a little scary, but I’ll be positive.',
		'show character m neutral',
		'm We’re not going to be stuck here forever, right?',

		'p Exactly.',

		'show character m neutralSweat',
		'm Thanks, {{player.name}}.',
		'm I needed to hear that.',

		'show character m neutral',
		'm You’re a good friend.',
		'p You’re a better one.',

		'show character m happy',
		'jump WalkAlone'
	],

	'JokeWithHer': [
		function () {
			updatePersonality(joking, 1)
			notify(`+${joking}`)
		},
		'p Only a little dumb?',
		'show character m shockBlush',

		'p {{player.name}}!',

		'show character m angryBlush',
		'm I’m— I’m going to hurt you!',

		'n I step back in anticipation.',
		'p After everything I’ve done for you?!',

		'show character m happy',
		'n She raises her fists.',

		'play sound footstepsFour',
		'hide character m',

		'n I make a run for it, dashing through the alley.',
		
		'play sound crash',

		'n Turning the corner, I collide with a shop board left out on the street.',

		'show character m happyBlush',
		'n Maya’s laughter is practically a howl when she catches up.',

		'show character m neutral',
		'm Oh, no.',

		'play sound woodDrag',
		'n I roll over, lifting what’s left of the wooden victim underneath me.',

		'n Several pieces and a misspelt sign.',

		'p We’re going to get complaints.',

		'show character m shockSweat',
		'n Above us, a small light fades in from the upper window.',

		'm Shh!',

		'play sound footstepsFour',

		'n She runs down the road.',

		'p What, you’re going to leave me here?!',

		'm You’re already a dead {{player.man}} walking!',

		'show character m happy',
		'm Well, <i>laying</i>.',

		'hide character m with fadeOut',
		'play sound runningHeavy',
		// 'play sound footstepsFour',
		
		'n She runs again.',
		
		'play sound gravelRun',

		'n I clamber to chase after, grabbing her when I catch up.',
		'play sound thud',

		'show character m happyBlush with fadeIn',

		'n Her eyes light up with renewed excitement.',

		'show character m neutralBlush',

		'm For the record, you definitely looked more dumb on the ground.',

		'p I’ll accept that.',

		'show character m neutral',
		'p And I know you fell on purpose.',

		'n I wince.',

		'p You think I would ruin my back on purpose for you?',

		'n She shrugs.',

		'p Well, I’m glad one of us came out of this feeling better.',

		'jump WalkAlone'
	],

	'EncourageHer': [
		function () {
			updatePersonality(assertive, 1)
			notify(`+${assertive}`)
		},

		'show character m sadBlush',

		'p I don’t remember the Maya I know giving up so easily. ',
		'p What happened to the Maya who said she was needed for greater things?',


		'show character m sad',
		'm She’s still there…',
		'p Well, we need her back. ',

		'show character m shock',
		'p Because if this Maya gives up after one bad day, I don’t know how we’re going to make it.',

		'm Wha— How is this encouraging?',

		'm Are you playing mind games with me?!',

		'p I’m simply stating an observation.',

		'p If you’re going to give up now, you’ll have no chance later. ',

		'p Yeah, we’ve had better luck before, but we’ve had worse too.',

		'show character m sadSweat',

		'm But, how will I know if it’s going to get better?',

		'p You don’t. So, if you’re going to give up, do it, but don’t sulk about it. ',

		'show character m sadBlush',

		'm {{player.name}}… ',

		'n Her eyes well up again.',
		'm When did you get so mean!',

		'n She throws weak punches at my chest before reaching in for a hug.',

		'p Maya?',

		'show character m shockBlush',


		{
			'Conditional': {
				'Condition': function () {
					return monogatari.storage(assertive) >= 4
				},

				'True': 'm You always go for tough love. ',

				'False': 'm I’m not used to your tough love. '
			}
		},

		'show character m angryBlush',
		'm It makes you sound like an ass, but I appreciate it. ',

		'n She throws her hands up in the air, releasing me. ',


		'show character m happyUI',
		'm Hwen hasn’t seen the best, or last of us yet!',
		'jump WalkAlone'

	],

	'LeaveHerBe': [

		'n I won’t try to push her, she’ll talk when she needs to. ',

		'n For now, I have to give her the space she needs. ',

		'n We continue walking. Maya breaks the silence a little later.',

		'jump WalkAlone'
	],

	'WalkAlone': [
		'show character m neutralSweat',
		'm Hey, {{player.name}} what are you doing tomorrow?',

		'p Not sure.',
		'show character m happy',

		'p Training, probably. ',
		'p I should build my strength and technique back up if we’re going to be adventurers.',

		'show character m neutralSweat',
		'm Yeah… ',

		'm That’s a good idea. ',

		'n Maya looks over at the crossroad, where we split off to go home.',

		'show character m neutral',

		'm OK, I’ll see you tomorrow. ',

		'p That’s it?',

		'm Yup, I’ll tell you more later!',

		'n She gives me a wave before stretching out her shoulders, feeling every muscle. ',

		'show character m happy',
		'm I’ve got a few things planned I want to try.',

		'p Hm, if you say so.',

		'show character m neutral',

		'm I do.',
		'm Goodnight!',

		'p Goodnight, Maya.',

		'hide character m',

		'play sound woodStepsFour',

		'n She disappears out of sight. ',

		'n In the other direction, I make my way to my lodging above a quiet shop. ',

		'n By now, the owners have closed up, but the back gate leads directly to my room. ',

		'play sound rustle2',

		'n My hand hovers over the wooden gate.',

		'n I hesitate. A shiver runs up my spine. ',

		'play sound rustle',

		'play sound glassTap',
		'n The rustling increases with a sinister tapping of glass.',

		{
			'Choice': {
				'Class': 'fadeIn',
				'Turn around and yell': {
					'Text': 'Turn around and yell',
					'Do': 'jump TurnAround'
				},

				'Assess the situation': {
					'Text': 'Assess the situation',
					'Do': 'jump AssessTheSituation'
				}
			}
		}
	],

	'TurnAround': [
		{
			'Conditional': {
				'Condition': function () {
					return monogatari.storage('interpersonal').name === 'Intimidation'
				},
				'True': 'jump IntimidatePass',
				'False': 'jump IntimidateFail'
			}
		}
	],

	'IntimidatePass': [
		function () {
			imgNotify('interpersonal')
			increaseValour(10)
			notify('+10 Valour')
		},

		'play sound rustle4',

		'play sound creepyTapping',
		'p Who’s there? Show yourself!',
		
		'n I reach for my weapon, tightening my grip. ',
		'n The rustling stops, and a leaf floats down in front of me. ',
		
		'n Was it just the wind? I look up. ',
		
		'n A nearby tree brushes noisily against the upper window. ',
		
		'n I’m an idiot. ',
		
		'play sound gateLatch',
		'play sound creak2',
		'n I loosen up and hop the gate, not wanting to be outside any longer.',
		
		'n That night I get some well-deserved rest.',
		
		'jump Training'
		
	],
	
	'IntimidateFail': [
		'play sound rustle4',
		'play sound creepyTapping',
		'n I don’t hesitate, yelling at the top of my lungs. ',

		'p W-who’s there?',

		'n The words come like an uncontrolled squeak. My voice wavers. ',

		'play sound rustle2',

		'p I’m—I’m armed. ',

		'n There’s no reply. ',

		'n My eyes scan the darkness, but the rustling has stopped. ',

		'n Feeling stupid, and a little scared, I hop the gate not wanting to be outside any longer. ',

		'n That night, I get very little rest. ',

		'jump Training'
	],


	'AssessTheSituation': [

		{
			'Conditional': {
				'Condition': function () {
					return monogatari.storage('survival').name === 'Perception' || monogatari.storage('survival').name === 'Concealment'
				},

				'True': 'jump AssessPass',
				'False': 'jump AssessFail'
			}
		}

	],

	'AssessPass': [
		function () {
			imgNotify('survival'),
				increaseValour(10)
			notify('+10 Valour')
		},

		'n My attention turns to the road behind me. ',

		'play sound rustle3',
		'n The rustling, although unexpected, is just a tree looming over the garden. ',

		'n I make a mental note to tell the owner to have it trimmed in the morning. ',

		'n Relieved, I unlock the gate and head inside for a restful night. ',

		'jump Training'

	],

	'AssessFail': [
		'play sound rustle',
		'play sound creepyTapping',
		'n My attention turns to the road behind me. ',
		'n The rustling stops. ',
		'n It becomes so quiet that I hear my own heart beat. ',

		'n I convince myself that I would have noticed someone else nearby. ',

		'n That it’s just the wind. ',
		'n It doesn’t help. I fumble as I try to get over the gate and into my home. ',

		'n That night, I get very little sleep. ',

		'jump Training'
	],

	'Training': [
		'hide particles with fadeOut',
		'show scene black with fadeIn',
		'stop music with fade 3',
		'play music Day2 with loop fade 5',
		'wait 2000',
		'show scene dayMountain with fadeIn',

		'n Morning feels like it comes too soon.',

		'n Setting up a space under the beating sun, my eyes are still tired from sleeping in after yesterday’s ordeal.',


		{
			'Conditional': {
				'Condition': function () {
					return checkWeapon()
				},

				'bow': 'jump BowMorning',
				'fists': 'jump FistsMorning',
				'sword': 'jump SwordMorning'
			}
		}
	],

	'BowMorning': [
		'n After Maya’s suggestion, I had my bow inspected, and she was right. ',
		'n I had been wearing it down.',
		'n Today, my shots feel more comfortable than they’ve been all week.',
		'play sound pullString',
		'n I draw back the arrow.',
		'play sound releaseString',
		'n A perfect shot lands at the centre of the bark. ',
		'jump AfterWepPractice'

	],

	'SwordMorning': [
		'n I raise my sword, this time more cautious about how I shift my weight.',

		'n The swings come more naturally. ',
		'play sound swordWhoosh',

		'n Once again, I feel like myself.',
		'jump AfterWepPractice'

	],

	'FistsMorning': [
		'play sound punch',
		'n I focus on my footwork a little more than usual, feeling it naturally transition into my punches.',
		'play sound punch2',

		'n The force is improved when I consider my legs and arms as one, complete movement. ',
		'jump AfterWepPractice'

	],

	'AfterWepPractice': [
		// Bush rustling

		'n My focus is lost to a dark figure crouching in the bushes.',

		'p Kai?',

		'show character k neutralSweatCloak with fadeIn',

		'n He lifts his head. Under the scrutinising gaze of the sun, he still chooses to wear a cloak. ',

		'p What are you doing here… in the bushes?',

		'show character k shockSweatCloak',

		'n He straightens, brushing off the leaves in his cloak.',

		'show character k happySweatCloak',
		'k Can’t a man take a stroll on a fine day?',

		'p In a bush, completely out of town, alone?',

		'show character k happyCloak',

		'k Were you intending to join me?',

		'p Do I need to call a sheriff?',

		'show character k shockCloak',

		function () {
			imgNotify('interpersonal')
		},

		'jump {{interpersonal.name}}Remember'
	],

	'EmpathyRemember': [
		'k For all you know, I was so warmly approached by a stranger last night, that I decided to pay the kindness forward.',

		'p And to do that you… hide in the bushes?',

		'show character k happyCloak',

		'k The world is full of mysteries.',

		'jump ForageExp'

	],

	'DeceptionRemember': [
		'k For all you know, I dropped my purse back there.',
		'show character k happyCloak',
		'k Apparently, Hwen is full of kind swindlers, but I didn’t want to risk it. ',

		'p I thought that lie only worked on street vendors.',

		'k Doesn’t hurt to branch out.',

		'jump ForageExp'

	],

	'IntimidationRemember': [
		'show character k neutralCloak',
		'k For all you know, I was feeling weak and feeble.',

		'show character k happyCloak',

		'k I was hoping a local big bad wolf could give me advice?',

		'p I think you’re a little far out. ',

		'k It seems so.',

		'jump ForageExp'
	],

	'ForageExp': [
		'show character k neutralCloak',
		'k If you must know, I was foraging. ',

		'show character k happySweatCloak',
		'n He gestures loosely behind him. ',

		'k There’s a thistle that grows here. Useful for headaches, sores, imminent death from plague. That sort of thing. ',

		'k I had no idea I’d also witness the wild swinging of aspiring adventurers.',

		'p Wild?!',

		'show character k shockCloak',

		'k You were practising quite fervently. ',

		'show character k neutralCloak',

		'k Do you have a goal, or is it all that excess energy youth seem to have?',

		'n His question, although a little rude, takes me by surprise. ',
		'p I started doing it to recover faster. Now it just feels good. ',
		'show character k shockCloak',
		'p Coming up here, losing steam. ',

		'show character k neutralCloak',
		'k Ah, an injury?',

		'show character k happyCloak',
		'n He raises his fists and takes a combative stance. ',

		'k Perhaps, you need a sparring partner?',

		'k See if you truly have recovered. ',

		'n Is he serious?',
		'show character k shockCloak',

		{
			'Conditional': {
				'Condition': function () {
					return checkWeapon()
				},

				'bow': 'jump bowKai',
				'fists': 'jump fistsKai',
				'sword': 'jump swordKai',
			}
		}

	],

	'bowKai': [
		'p I could shoot an arrow before you threw your first punch.',
		'p Ignoring that a fist against an arrow is hardly sparring.',

		'jump AfterWeaponKai'
	],

	'swordKai': [
		'p I guess you haven’t had a longsword come towards you at full speed. ',
		'p It would not be pretty.',
		'jump AfterWeaponKai'
	],

	'fistsKai': [
		'p I don’t fight barehanded, so unless you want to get sliced in the face?',
		'p Even if I took them off, you look like you bruise a lot easier than trees.',
		'jump AfterWeaponKai'
	],

	'AfterWeaponKai': [
		'p No offence.',
		'show character k neutralCloak',

		'k I suppose I have little time, anyway.',

		'k I have a date to attend. ',

		'show character k happyCloak',
		'k Good luck with the rest of your training.',

		'hide character k with fadeOut',
		'n He leaves quickly through the bushes. ',

		'n There’s a clear path to the town he could have used…',

		'n What a strange man.',

		'show scene sunsetMountain',

		'n I continue focusing on my technique. ',
		'n After a few hours, I’m interrupted again, but by a more familiar voice. ',

		'm {{player.name}}! {{player.name}}!',

		'show character m happy with zoomIn',
		'n I turn to Maya, mid-swing.',

		'show character m shock with zoomIn',
		'm Whoa, easy there. Were you going to hit me?',

		'p What? Of course not.',
		'm Then why do you look so annoyed?',

		'p I’m just not used to being so popular.',
		'show character m angry',
		'm You forgot I was coming today, didn’t you?',

		'show character m sad',
		'm Well, at least one of us remembers things.',
		'm <i>I</i> bring news. ',

		'show character m happyUI',
		'm We did it!',

		'p Yay?',
		'p What did we do?',

		'show character m neutral',
		'm Well, <i>I</i> figured it out.',
		'm That escort quest?',

		'show character m angry',
		'm Everyone was being shady because the forest might be magic. ',

		'show character m happy',
		'm Good thing I’m not superstitious.',

		'show character m neutral',
		'p Good, so we know more about it now. ',
		'p Cool.',

		'show character m shock',
		'm No, no. We don’t just know more about it. ',

		'show character m happy',
		'm We got picked to <i>do</i> it!',

		'show character m happyUI',
		'm We’re going to be heroes!',

		'show character m shock',
		'm They’ll probably knight us when we come out. ',

		'show character m happy',
		'm Always good to have a noble… or knight on your side.',

		'show character m sad',
		'm {{player.name}}…?',

		'm You don’t seem… like you’re excited…',

		'show character m shock',
		'm I— I’m so sorry. You don’t mind that we do this, do you?',

		'p No, I’m just surprised. ',

		'p I…',

		{
			'Choice': {
				'Class': 'fadeIn',
				'“am happy you’re in good spirits.”': {
					'Text': '“am happy you’re in good spirits.”',
					'Do': 'jump GoodSpirits'
				},

				'“am not too fond of dying.”': {
					'Text': '“am not too fond of dying.”',
					'Do': 'jump FondOfDying'
				},

				'“don’t want to take this lightly.”': {
					'Text': '“don’t want to take this lightly.”',
					'Do': 'jump TakeThisLightly'
				}
			}
		}

	],

	'GoodSpirits': [
		function () {
			updatePersonality(friendly)
			notify(`+${friendly}`)
		},

		'show character m neutral',
		'p …am happy you’re in good spirits.',
		'p You’re going to need it when we kick butts. ',

		'show character m happyUI',
		'm You think we might get to kick butts?!',

		'show character m neutral',
		'p Sure, plenty of forest butts to kick defending wealthy patrons.',
		'p Seems only natural.',


		'show character m shock',
		'm You’re right. I can’t wait!',

		'show character m neutral',
		'p So, do we just… leave now?',

		'm I like your eagerness.',
		'show character m shock',
		'm But we have to prepare!',
		'm I already started, but I don’t think I can be too prepared, right?',

		'show character m neutral',
		'm Meet me at the town gates at dawn!',

		'p Whoa, wait. Dawn?',
		'p Did the client request this?',

		'show character m happySweat',
		'm <i>So</i>, I haven’t met them <i>officially</i>, but we agreed on dawn. ',
		'p You haven’t met them. How?',
		'p Should I be concerned?',

		'show character m neutral',
		'm Of course not! They’re paying a fortune.',
		'm Then, I’ll see you in the morning.',

		'show character m shock',
		'm Don’t forget to pack what you need, and what you might need!',

		'show character m neutral',
		'n I nod reassuringly, knowing I will only bring my {{combat.name}} anyway.',

		'hide character m with fadeOut',
		'n I don’t train for much longer, knowing what staying out late did to me last time.',

		'n For once, I let myself have an uneventful evening.',
		'show scene black with with fadeIn',

		'jump LeaveForJourney'

	],

	'FondOfDying': [
		function () {
			updatePersonality(joking, 1)
			notify(`+${joking}`)
		},

		'show character m shock',
		'p …am not too fond of dying.',
		'show character m angry',

		'p Call me a wuss, but excruciating death by magic forest isn’t on my bucket list.',

		'm Oh, you are so dramatic.',

		'show character m neutral',
		'p Dramatic.',
		'p Deeply concerned.',
		'p Possibly reconsidering all life choices prior to this very moment. ',

		'm OK, do you think you could do those things while being by my side as a heroic duo?',

		'show character m happy',
		'm I wouldn’t choose to perish any other way.',

		'show character m neutral',
		'm Perfect.',

		'p So, what do we have to do?',

		'm Well, I need to prepare. ',

		'show character m shock',
		'm You should grab anything you need too. ',

		'm We’re meeting the client at dawn. ',

		'show character m neutral',

		'p You’ve met them?',

		'show character m sadSweat',
		'm No, not yet. I just found this out through the guild.',

		'm That’s normal, right? For them not to show their face?',

		'p Maybe they’re high profile. Maybe it really is a noble.',

		'show character m shock',
		'm You had doubts?',

		'p Should I not have?',
		'p I don’t usually put my full trust in vague, shady calls to forests.',


		'show character m neutral',
		'm True, but they’re paying half up front! We just have to show up.',

		'n I smile teasingly.',

		'p What could go wrong?',

		'm Then, I’ll see you tomorrow?',

		'show character m happy',
		'p Where else would I be?',

		'n She grins and leaves just as quickly as she appeared.',

		'n Maya is terrible at hiding her excitement.',

		'n The thought of going on an adventure again must make everything else pale in comparison.',

		'n I just hope it doesn’t disappoint.',

		'n I don’t train for much longer, knowing what staying out late did to me last time.',

		'n For once, I let myself have an uneventful evening.',

		'show scene black with fadeIn',
		'jump LeaveForJourney'
	],

	'TakeThisLightly': [
		function () {
			updatePersonality(assertive, 1)
			notify(`${assertive}+`)
		},

		'show character m angry',
		'p …don’t want to take this lightly.',
		'p I know you’re excited, but we should still be cautious for so many reasons.',

		'show character m shock',
		'm I am cautious!',

		'show character m neutral',
		'm Let’s just celebrate a little.',

		'm They picked us over everyone else.',
		'show character m angry',
		'm Surely that’s worth something.',

		'show character m sad',
		'p If the rumours are true and the forest is magic, there’s a reason it’s paying so highly.',

		'p Most people don’t make it out. ',

		'show character m angrySweat',
		'm Those people are amateurs. ',

		'm We’ve got more adventuring experience than this entire town combined.',

		'm A local forest is nothing!',

		'p We should still prepare.',

		'show character m happy',

		'm My thoughts exactly!',

		'show character m shock',

		'I’ve already started, but you grab anything you think you might need. ',

		'show character m neutral',

		'm The client contacted us through the guild.',

		'm We can meet them at dawn.',

		'p Dawn?! That’s so soon.',

		'm Did you have any other plans?',

		'p …',

		'show character m happy',

		'm Great, then see you later.',

		'p See you.',

		'hide character m with fadeOut',

		'n Maya disappears, leaving just as quickly as she came. ',

		'n I don’t train for much longer, knowing what staying out late did to me last time.',

		'n For once, I let myself have an uneventful evening.',

		'show scene black with fadeIn',
		'jump LeaveForJourney'

	],

	'LeaveForJourney': [
		'stop music with fade 2',
		'play music Night1 with loop fade 5',

		'show scene nightTown with fadeIn',
		'play sound creak2',
		'n I leave while it’s still dark.',
		'n By the time I reach the town gates, the sun has only just begun to peek through the horizon.',

		'play sound footstepsFour',
		'm {{player.name}}!',

		'n Maya chases after me, this time her arms filled with a bundle of bags and much more on her back. ',
		'n It doesn’t slow her down. ',

		'play sound crash',

		'n She drops the hoard by my feet. ',

		'p Oh, thanks. I’ve always wanted… whatever all this is.',

		'play sound dullThud',

		'show character m angry with fadeIn',
		'm Focus!',

		'show character m neutral',
		'p Ow, can we make a rule not to fight so early?',
		'p I’m barely awake. ',

		'm Well, try to look alive before the client gets here. ',

		'm I brought as many things as I could think of. ',
		'm We don’t have much information on the forest, other than people don’t want to go there.',

		'p So this is…?',

		'n I pick up a peculiar bottle with dark red contents. ',

		'show character m happy',
		'm It’s firebreath!',

		'show character m shock',
		'm I think it’s good for heartburns?',

		'p And this?',

		'show character m happy',
		'm Oh, that one I made. ',

		'm It’s like a combination of an axe meets knife meets reversible mace.',

		'p Oh, of course.',

		'p Always need to be ready to switch to my knife-axe-mace.',

		'show character m sadSweat',
		'm Honestly, I’m not sure how to use it without cutting myself.',

		'show character m happySweat',
		'm But it’s intimidating, at least?',

		'p Definitely intimidating.',

		'n She looks me over. ',
		'show character m neutralSweat',

		'm Did you not bring anything?',

		// 'I tap my {{combat.name}}.',

		'p It’s not exactly light. ',

		'show character m angry',

		'm I expected this might happen. ',
		'show character m happy',
		'm As fortune would have it, I am always ready.',

		'show character m neutral',
		'play sound rustle3',
		'n She unloads a satchel and passes me several consumables and rations.',

		'n The majority being home-cooked goods. ',

		'show character m shock',
		'm Where would you be if I wasn’t looking out for you?!',

		'p Probably in bed. ',
		'show character m neutral',

		'p Thank you, Maya.',

		'n I pack the various odd bits into my own satchel, distributing the weight evenly. ',

		'p So, now we… wait?',

		'm Yup!',

		

		'n She props the extra satchel over her shoulder and waits.',

		'm Shouldn’t be long.',


		'show character m sad',
		'n We twiddle our thumbs for a moment, but Maya is noticeably anxious. ',
		'n Whether it’s from excitement, I can’t tell. ',

		'show character m shock',
		'st Miss Maynard?',

		'play sound rustle2',
		'n Maya swings round, nearly knocking the speaker with several bags.',

		'm I’m so sorry!',

		// 'show character k angry at right',
		'show character m shockUI',
		'm You must be…',
		'hide character m',
		'show character k sad',

		'p Kai?',
		'show character k happy',
		'k It’s a pleasure to make your acquaintance.',

		'n He extends his hand, but I don’t take it. ',
		'show character k neutral',

		'n The man in front of me looks every bit like the Kai from the guild, but they feel like two separate people. ',

		'n His smile was smoothed over for something stoic and cold. ',

		'n They only look the same, sound the same, and have the same name. ',

		'hide character k',
		'show character m shockSweat',

		'm {{player.name}}.',

		'm Hello?',

		'show character m angry',
		'p Hm? Oh, sorry.',

		'p This is… ',

		'show character m happy',
		'm Sir, Kai.',

		'hide character m',
		'show character k happy',

		'k Just Kai is fine.',

		'n He talks as though we’ve never met.',

		{
			'Choice': {
				'Class': 'fadeIn',
				'“Did you plan this?”': {
					'Text': '“Did you plan this?”',
					'Do': 'jump DidYouKnow'
				},

				'“I’m glad you’re actually real.”': {
					'Text': '“I’m glad you’re actually real.”',
					'Do': 'jump ActuallyReal'
				},

				'“The pleasure is mine”': {
					'Text': '“The pleasure is mine”',
					'Do': 'jump PleasureIsMine'
				}
			}
		}
	],

	'DidYouKnow': [
		function () {
			updatePersonality(assertive, 1)
			notify(`+${assertive}`)
		},

		'p Did you plan this?',
		'show character k shockSweat',
		'k I’m sorry?',

		'show character k angry',
		'p Before, when we met.',
		'p Did you plan this whole thing?',
		'p Did you know who I was?',

		'hide character k',
		'show character m sadSweat',
		'm {{player.name}}… what are you talking about?',

		'p This isn’t the first time we’ve met. ',
		'jump WeveMet'
	],

	'ActuallyReal': [
		function () {
			updatePersonality(joking, 1)
			notify(`+${joking}`)
		},

		'show character k shockSweat',
		'p I’m glad you’re actually real.',
		'p With all the scepticism around the quest, I thought Maya was losing it.',

		'hide character k',
		'show character m shockBlush',

		function () {
			checkGender()
		},

		'm {{player.He}} {{player.doesnt}} mean that!',

		'show character m angryBlush',
		'm {{player.name}}, do you want us to look bad?',
		'show character m neutralSweat',

		'm I, for one, had no doubts.',

		'hide character m',
		'show character k happy',

		'k That I was real?',

		'hide character k',
		'show character m angryBlush',

		'p It was either that, or we were both seeing ghosts. ',

		// 'hide character m',
		'show character m shock',
		'm Wait.',
		'jump WeveMet'
	],

	'PleasureIsMine': [
		function () {
			updatePersonality(joking, 1)
			notify(`+${joking}`)
		},
		'p The pleasure is mine. ',
		'p I hope we can be amiable travel companions. ',

		'k Of course.',
		'hide character k',
		'show character m angrySweat',

		'n Maya’s eyes dart between us, connecting the dots.',

		'show character m shockSweat',
		'm Why are you using your polite voice?',

		'jump WeveMet'

	],

	'WeveMet': [
		'm You’ve met, before?',
		'hide character m',
		'show character k happy',
		'k We have, yes. Briefly. ',
		'k I don’t believe it’s too uncommon for an interested party to scope out the aspirants.',

		'hide character k',
		'show character m neutral',

		'm You were watching us?',

		'hide character m',
		'show character k neutral',

		'k I merely asked around. ',
		'k Trust that I heard good things. ',

		'hide character k',
		'show character m neutral',

		'm Well, that’s good! Right, {{player.name}}?',
		'show character m happyUI',
		'm You can rest assured that you’re in safe hands. ',

		'm {{player.name}} is an amazing adventurer!',

		'hide character m',
		'show character k happy',
		'k That is a relief. I would hate to have made the wrong choice.',

		'show character k neutral',
		'k I assume we are ready to go?',

		'hide character k',
		'show character m happy',

		'm If there’s nothing else, I don’t see why not!',

		'play sound gateRumble',
		'n Maya nods to the gates, and the guards roll back the large barriers.',

		'm I asked if they’d let us through a little earlier when we all arrived.',

		'n Maya nods to the gates, and the guards roll back the large barriers.',

		'n Her eyes are eager for adventure',

		'm Are you ready for the unknown?',

		'n At the time, I thought I was.',

		'end'

	]

});