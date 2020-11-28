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
	'Day1': '2_Day_1_Master.mp3'
});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {

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
	'nightTown': 'ID003_Western-Castle_night.jpg'
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
	
	'b': {
		name: '{{baker}}',
		sprites: {
			base: 'baker.png'
		}
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
	}
});

const joking = 'Playful'
const friendly = 'Friendly'
const assertive = 'Assertive'

monogatari.script({

	// The game starts here.
	'Start': [
		'show scene sunsetMountain',
		'play music Day1',
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
		'play sound wind',
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
				'Condition': checkPersonality,

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
				'Condition': checkWeapon,
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
		function(){
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
				'Find the guild':{
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
		function(){
			monogatari.storage().baker='Rohese'
		},
		'p Are you not going home?',
		'b Of course, there’s near no-one to sell to so late, except the drunkards.',
		'play sound rustle4',
		'n From his cart he pulls out an item wrapped in paper and presents it to me. ',
		'b But drunkards don’t appreciate genius. Try this.',
		{
			'Choice': {
				'Politely decline':{
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
		updatePersonality(friendly, 1),
		notify(`+${friendly}`),
		'p I’m not so hungry, but thank you.',
		'jump AfterDecline'
	],

	'PlayfulDecline': [
		updatePersonality(joking, 1),
		notify(`+${joking}`),
		'p I try not to make a habit of taking unidentified items from curious street vendors.',
		'jump AfterDecline'
	],

	'AssertiveDecline': [
		updatePersonality(assertive, 1),
		notify(`+${assertive}`),
		'I would rather not.',
		'jump AfterDecline'
	],

	'AfterDecline': [
		'Hello'
	]


});