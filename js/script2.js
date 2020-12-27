// THis file contains ACT II (2)

monogatari.action('')

monogatari.script({
    'Forest': [
        'stop music with fade 3',
        'play music Day3 with fade 5 loop',
        'show scene road with fadeIn',

        'show character m neutral with zoomIn',
        'n Maya breathes in the early air.',

        'show character m happy',
        'm Smells like good old freedom.',

        'hide character m',
        'show character k neutral',
        'k Do you not leave the town often?',

        'p No, she does.',
        'p She’s just dramatic.',

        'hide character k',
        'show character m angryBlush',

        'm Just because I get to leave doesn’t mean I go anywhere interesting!',

        'show character m neutral',
        'm Plus, there’s nothing out here.',
        'm Not without sailing out, and I don’t like boats.',
        'm Did you come here by boat, Kai?',

        'hide character m',
        'show character k sadSweat',
        'k Yes.',
        'k I had some business to attend to.',

        'p What kind of—',

        'hide character k',
        'show character m shock',
        'n Maya’s gasp is almost performative.',

        'm Oh! It’s closer than I expected!',
        'show character m neutral',
        // [SFX: Rock rolling]
        'n She unveils an overgrown path, kicking away at it with her foot.',
        'n It leads to a pile of stones blocking the perimeter of the forest.',

        'hide character m',
        'show character k neutralSweat',

        'k …',
        'p These stones are…?',

        'show character k happySweat',
        'k A warning for those who have strayed too far.',
        'm We’ve barely left the town.',

        'hide character k',
        'show character m shock',

        'm It looks like no-one has come this way for <i>years</i>. ',

        'show character m sad',
        'n Maya continues to approach. The warning does not phase.',

        'show scene forest with fadeIn',
        'n Despite the rumours and odd signs, the forest itself seems perfectly normal.',
        'n The trees look like trees.',

        'n The ground leading up to it seems no different to the ground anywhere else. ',

        'p Either of you feel like this is just a regular old forest?',

        'show character m sad with fadeIn',

        'm Maya turns around. ',
        'm You don’t think it looks a little creepy being so… <i>overgrown</i>?',

        'p It’s a forest, I’m not expecting the hedges to look trimmed.',

        'm I don’t know how to explain it. It just looks more wild.',

        'n Maya hesitates, pulling out a crumpled piece of paper.',

        'm I almost forgot the map.',

        'p You got a map of the forest? How?',

        'show character m sadSweat',
        'm Please don’t ask… ',

        'n She gives me a look soaked in regret.',
        'show character m neutral',

        'm It’s a little old, but a forest probably doesn’t change much.',

        'show character m sadSweat',
        'm Problem is, it doesn’t show what’s on the other side of the forest.',

        'm We have no idea what is waiting for us.',

        'hide character m',
        'show character k happy',
        'k I can help with that part. There’s a small settlement beyond the forest.',

        'k From there, I can make my own way.',
        'k I would go around, but time is of the essence. ',
        'k Through the forest is the quickest way.',

        'hide character k',
        'show character m shock',
        'm I never knew.',

        'n I lean over Maya’s shoulder, taking a better look at the map for myself. ',

        'p What’s that red patch?',
        'show character m shockBlush',

        'm Oh, that’s uh—that’s a stain.',

        'show character m shock',
        'm Anyway, this should be fine.',
        'm There seems to be a lake that breaks into a stream around the centre.',
        'm If we reach there before dark, we can use it to navigate our way through the forest.',

        'show character m neutral',
        'n I raise a brow.',

        'p Maya, this map looks ancient… and somewhat anecdotal.',
        'n After closer inspection, the map just looks like a child’s drawing.',

        'hide character m',
        'show character k neutral',

        'k You are sure this is enough?',

        'hide character k',
        'show character m happyUI',

        'm Of course!',
        'm Have a little more faith, both of you!',

        'n She ventures ahead.',

        'hide character m',
        'show character k shock',
        'k Is she always so…',

        'p Yes.',
        'show character k happy',
        'p Yes, she is.',

        'k I see.',
        'show character k shock',
        'p She just wants to make a good first impression.',

        'hide character k',
        'show character m angryUI',

        'm Hello! Are you coming?!',

        'n I sigh. ',
        'n I don’t expect Maya to calm down anytime soon.',

        {
            'Choice': {
                'Venture in': {
                    'Text': 'Venture in',
                    'Do': 'jump VentureIn'
                },
                'Observe the ground for clues': {
                    'Text': '<i class="fas fa-eye"></i> Observe the ground for clues',
                    'Do': 'jump ObserveGround',
                    'Clickable': function () {
                        return monogatari.storage('survival').name === 'Perception'
                    }
                }
            }
        }
    ],

    'VentureIn': [
        function () {
            monogatari.storage({
                mayaFalls: false
            })
        },

        'n I exchange a hopeful glance with Kai and we venture into the unknown.',

        'show scene magicForest with fadeIn',
        'show character m happy',
        'n Once Maya notices us following, she continues to take the lead.',

        'stop music with fade 3',
        'play music Night4 with fade 5 loop',

        // [SFX: Ambience, like owls and crickets and things ]
        'show character m neutral',
        'm We’ll need to tread carefully until there’s more daylight.',

        'show character m happyUI',
        'm I’ll go ahead.',

        'p Should we be splitting up?',
        'hide character m with bounceOut',
        'n She barely acknowledges my voice, too engrossed with the reality of being on an adventure.',

        'p Maya, don’t go too far ahead.',
        'p I take back what I said, this forest is far creepier inside.',

        'show character m happy with zoomIn',
        'm Scared already?',

        'n Maya turns around, ready to crack a joke.',

        'show character m shock',
        'm {{player.name}}, wait!',

        // [SFX: Rumble?? Falling?]
        'n Shadows rush past as the ground beneath me turns to void.',

        'n I’m brought to rest by a taut force holding me back.',

        // SFX: Sudden stop
        'hide character m',
        'show character k angrySweat',
        'k Careful.',

        'n Kai holds me by the neck of my tunic, his other hand extends outwards.',

        'k Quickly, before you choke to death.',
        'n I grab onto his forearm. ',

        'show character k neutralSweat',
        // [SFX: Twigs breaking]
        'n My body is lifted across mud and debris, but for Kai, it seems effortless.',

        'n I try to speak, but the air is stolen from my lungs.',

        'p There— There wasn’t— a hole there.',
        'p The ground just disappeared beneath me!',

        'n Kai nudges a pile of soft moss with his foot.',

        'show character k sadSweat',
        'k It was covered.',
        'hide character k',
        'show character m sadSweat',
        'm Maya joins us, watching each step timidly.',
        'm Are you OK?', 
        'p Yeah, I’m fine… How did you know there was a hole there?', 
        'show character m shock',
        'm I saw a dip in the ground.',
        'show character m sad',
        'n Her eyes scrutinise the green below us.',
        'm Does… it usually grow like this?',

        'n Across the ground, large circular patches of soft moss cover the ground.',

        'hide character m',
        'show character k angrySweat',

        'k I imagine these were intentional.',
        'p So, the forest is filled with traps.',

        'hide character k',
        'show character m mayaShock',
        'm Who would go through all that effort?',
        'm No-one ever comes here.',
        'n Maya folds her arms, seemingly more concerned about the nuisance it caused, rather than the danger.',
        'jump Conversation'

    ],

    'ObserveGround': [
        function () {
            monogatari.storage({
                mayaFalls: true
            })
        },
        'n I exchange a hopeful glance with Kai and we venture into the unknown.',
        'show scene magicForest',
        'stop music with fade 3',
        'play music Night4 with fade 5 loop',
        // [SFX: Ambience, forest daytime 3 maybe? From ultimate sfx pack ]
        'n Past the entrance, the forest becomes unrecognisable. ',
        'n Its path twists and turns, forcing us into one route. ',
        'n The ground bears little resemblance to the forest floors I’m familiar with. ',

        function () {
            imgNotify('survival')
            increaseValour(10)
            notify('+10 Valour')
        },

        'n Magic or not, the flora and fauna show signs of manipulation.',
        'n Something is very wrong.',

        'show character m shockSweat with fadeIn',
        'p Maya. Don’t move.',

        'n She stops mid-step.',
        'n I nod to the ground beside her foot.',

        'p The way the moss grows here. It’s not natural.',
        'p It looks intentionally planted.',

        'show character m sad',
        'n She lowers her gaze to the soft forest floor and tentatively kicks over a bed of moss.',

        // [SFX: Falling/crash]
        'n The ground beside her collapses!',
        'show character m shock',
        'hide character m with zoomOut',

        // [SFX: Quick dull footsteps]
        'n I rush forward.',
        'n Over the edge, Maya’s body dangles above the deep hole.',
        'n My hands cling onto her upper arm, digging into the ground with my full weight.',
        'n Broken twigs and debris scrape against me as I haul her out.',
        'n She clings to me above ground.',

        'show character m shockSweat with fadeIn',
        'm Oh, my gods.',
        'm I could have died!',
        'hide character m',
        'show character k neutralSweat',
        'k It seems there are traps.',

        'hide character k',
        'show character m angryBlush',
        'm That part I gathered.',

        'show character m shock',
        'm The question is, who would put traps in the forest?',
        'm No-one ever comes here.',
        'jump Conversation'
    ],

    'Conversation': [
        'show character m sad',
        'p Someone who wants it to stay that way.',

        'hide character m',
        'show character k neutral',
        'k Or, they were left here long ago?',

        {
            'Conditional': {
                'Condition': function () {
                    return monogatari.storage('survival').name === 'Perception' || monogatari.storage('survival').name === 'Concealment'
                },
                'True': 'p They seem… fresh.',
                'False': 'next'
            }
        },

        'p Let’s not get worked up.',
        'p They could just be hunting traps, from before.',

        'hide character k',
        'show character m neutral',
        'n Maya nods.',

        'show character m happy',
        'm And now we know to avoid them!',

        'show character m neutral',
        'm There doesn’t seem to be more moss further ahead.',

        'm So, let’s just keep an eye on each other and we’ll get through in one piece.',

        {
            'Conditional': {
                'Condition': function () {
                    return checkPersonality()
                },
                [friendly]: 'p We’ll have to be more aware. ',
                [joking]: 'p That was the plan.',
                [assertive]: 'p We need to take this seriously. '
            }
        },

        'show character m sad',
        'm I’ll try… slowing down.',

        'hide character m',

        'n We continue in silence, watching our steps.',
        'n Tension is rising, but no-one suggests turning back.',
        'n Finally, someone speaks.',

        'show character k sadSweat',
        'k When will we settle for camp?',

        'hide character k',
        'show character m neutral',
        'm Tired already, Kai?',

        'hide character m',
        'show character k angryBlush',
        'k I am just wary of the time.',

        'p He’s right.',
        'p We can’t cross the forest in a day.',
        'p We should find somewhere to rest, sooner than later.',

        'hide character k',
        'show character m sad',
        'n I catch up to Maya a few paces ahead, leaving Kai to rest against a tree as we talk.',

        'n Maya rotates the stained, crumpled map in her hands.',

        'p I’ll be honest, you can’t tell much from this.',

        'n Some points had been marked out prior.',
        'n More dense areas were painted opaque.',

        'n Areas that were supposedly clearer, or nearby streams have been marked with blue vibrant lines.',

        'n But, ultimately… a map of a forest looks like a lot of trees.',
        'n And is useless.',

        'p We have to rely on what we can see at ground level.',
        'p The area around us is full of slopes, we can use this to our advantage.',

        'n I think back to our usual methods.',
        'jump {{survival.name}}Check'
    ],

    'ConcealmentCheck': [
        'p Should anything happen, I want us to have the high ground.',

        'p Some undergrowth and shelter can hide us from…',
        'show character m shock',
        'm Hide us from what?!',
        'p Anything that might be lurking.',

        'p We can’t assume the forest is completely void of life.',

        'show character m neutral',
        'm You’re right.',
        'm Even now, you’re always thinking of avoiding threats.',

        'show character m happy',
        'm Taking all the fun out of it.',

        'm It’s like you never stopped adventuring.',

        'n I raise a brow.',

        'n I know Maya is joking, but staying hidden from imminent threats is always a priority.',

        'n Leaving no trace and avoiding danger entirely, was the ideal outcome.',

        'n I start to list out my concerns and the best setup for staying out of danger.',

        'jump AfterCheck'
    ],

    'PerceptionCheck': [
        'p Somewhere with higher ground will point out any immediate threats.',

        'p It’s also easier to navigate downhill.',

        'show character m shock',
        'm You’re right.',

        'n Her gaze flick between the forest and the map.',
        'show character m happy',

        'm A few places could work. One nearby.',
        'p It’s better if the ground isn’t well travelled, enough overgrowth can be used to hide us, too.',

        'm The whole forest is overgrown!',
        'p Not quite.',

        'show character m neutral',
        'n I explain my plans to be well prepared, avoiding the threats I’ve already noticed as we walk.',

        'jump AfterCheck'
    ],

    'StrengthCheck': [
        'p The felled trees, too.',
        'show character m angrySweat',

        'm The trees?',
        'p It’ll be temporary, but I can move them for a sturdy base.',
        'p We’ll have a barrier for our camp-site and be well-guarded that way.',

        'show character m shockSweat',
        'm You plan to… lift the trees?',

        'p Only the fallen ones.',
        'show character m happy',

        'm I think I underestimated your strength.',

        'show character m neutral',
        'n I explain the logistics of how much easier it was for me to move dead, fallen trees.',

        'jump AfterCheck'

    ],

    'AfterCheck': [
        'show character m sad',
        'n My explanation begins to fall on deaf ears, as I notice Maya’s eyes glaze over.',
        'p Maya, did you catch that?',

        'show character m sadSweat',
        'm Hm? No, I agree.',

        'p I didn’t say anything that needed agreement.',
        'show character m shock',

        'p Maya, are you OK?',
        'n She looks past me, leaning in so our voices don’t reach Kai.',

        'm He’s not… what I expected?',
        'p What did you expect?',

        'show character m shockBlush',
        'm I don’t know but… I just, I don’t trust him.',
        'p You don’t trust anyone that doesn’t laugh at your jokes.',

        'show character m sadBlush',
        'm It’s a valid reason.',

        {
            'Choice': {
                '“He might be nervous.”': {
                    'Text': '“He might be nervous.”',
                    'Do': 'next'
                },

                '“He might not trust us.”': {
                    'Text': '“He might not trust us.”',
                    'Do': 'next'
                }
            }
        },

        'show character m sad',
        'p I’m not surprised if that’s the case.',
        'p We’re escorting him and we’ve already fallen into a trap.',
        'p It doesn’t look great.',

        'm But… he was definitely on edge before we even came into the forest.',

        'p How many people do you know, that are comfortable going into a forest of unknown magic?',

        'show character m angry',
        'p Except for you and the insane, of course.',

        'p Once we get some rest, and set up a proper camp, there’ll be a little less to worry about.',

        'show character m sad',
        'p No doubt he was already concerned about coming before he hired us.',

        'p Hence, the hefty price for escorts.',

        'show character m shock',
        'm But he’s so quiet.',

        'show character m sadBlush',
        'p Maya, that’s a character trait, not a clue.',

        'n I glance over to Kai, who propped waiting on a small log, seems more bored than suspicious.',

        'n Maya is used to excitable, boisterous crowds.',
        'n Ones that laugh at her jokes or damn her for ever coming near them.',

        'n I almost feel sorry for Kai. ',

        'show character m shockBlush',

        'p We’re not making it better standing over here, whispering like conspirators.',

        'p He probably thinks we’re going to rob him now.',

        'show character m shock',

        'm Maybe, we should?',

        'show character m neutral',

        'm Maya!',

        'm It’s a joke. Mostly.',

        'hide character m',
        'n I ignore her and walk over to Kai.',

        'show character k sadSweat',
        'p Sorry, we’re nearly done.',

        'show character k shock',
        'n He perks up, visibly brought out of thought.',

        'k Done with?',

        'p We were discussing where’s best to set up camp.',

        'p We have enough supplies, but we’re hoping to reach a lake by noon.',

        'p It’ll put us in a good position to set up camp early.',

        'show character k neutral',

        'p It’ll also mean being in the forest for a day longer but at a safer pace.',

        'n Kai doesn’t reply instantly, but his expression suggests a calculation running through his mind.',

        'n Finally, he speaks.',

        'show character k happy',

        'k How is it you seem so well versed in… navigating this?',

        'show character k shock',
        'p Wh— That’s what surprises you?',

        'show character k shockSweat',
        'k I was worried that your expertise would be limited to fighting and not survival.',

        'n Maya, upon hearing the opportunity for conversation, jumps in.',

        'hide character k',
        'show character m neutralSweat',

        'm We’re prepared for anything!',

        'm I told you, we’re the best adventurers you were going to find in Hwen.',

        'show character m shock',
        'm Don’t tell me they didn’t give you my pitch?!',

        'p Your pitch?',

        'show character m neutral',
        'm OK, I lied a bit.',

        'show character m angry',
        'm I was worried, because half this town can’t read, but I poured my blood, sweat, and soul into those words.',

        'n She turns back to Kai, somehow right up in his face, despite only coming up to his chest.',


        'show character m happy',
        'm MC may not look it, but {{player.he}} practically lived on the road before this!',

        'n Wait, what do I look like then?',

        'show character m happyUI',

        'm We’d just go where the wind took us!',
        'show character m neutral',

        'm Ah, it was great.',

        'm Survival skills were a must.',

        'm Whatever we didn’t know, we just picked up on the way.',

        function () {
            checkGender()
        },

        'jump {{survival.name}}Brag'
    ],

    'PerceptionBrag': [
        'show character m happyUI',
        'm Yeah!',

        'm {{player.name}} started doing that wind thing {{player.hedoes}}.',

        'p Wind thing?',

        'm Did you forget?',
        'm I watched you navigate us just by tasting the air when we were lost. ',

        'p OK, Maya. I do not “taste” the air.',
        'm Well, whatever you do.',

        'show character m happy',

        'm It’s creepy but extremely useful.',

        'n She turns to Kai.',

        'm Don’t worry.',

        'show character m neutral',
        'm You’ll sleep like a baby when you have someone who knows the stars as well as MC.',

        'm {{player.He}} smell trouble before it gets anywhere close, so just take it easy and we’ll handle everything. ',
        'jump AfterBrag',
    ],

    'StrengthBrag': [
        'show character m neutralBlush',

        'm I’ll be honest, {{player.name}} did most of the heavy lifting.',

        'm Literally.',

        'show character m happy',
        'm Setting up camp was such a breeze with {{player.him}}.',
        'p It’s just faster if I do it.',

        'show character m angry',
        'm I was useful too!',

        'm That but also, strategically putting {{player.name}} in plain view is the best you can do. ',

        'm No-one ever bothered us.',

        'm Most ill-intentioned travellers would take one look at {{player.him}} and decide it wasn’t worth it. ',

        'show character m happy',
        'm Your arms look like they could crush skulls for breakfast.',

        'p It was one time.',

        'n I glance at Kai, feeling a little embarrassed to be put on blast so suddenly.',

        'm All I’m saying is, be glad {{player.name}} is on your side. ',

        'm This forest should be more concerned about us, so rest easy tonight.',

        'jump AfterBrag'

    ],

    'ConcealmentBrag': [
        'show character m neutral',
        'm {{player.name}} was always concerned about keeping us hidden. ',

        'show character m shock',
        'm Most places weren’t safe to be alone. Not with desperate travellers and monsters.',

        'hide character m',
        'show character k angrySweat',

        'k You coped by hiding?',
        'hide character k',
        'show character m happy',

        'm We survived by hiding.',

        '{{player.name}} spends most of {{player.his}} in the shadows.',

        'm It makes {{player.him}} a little weird, but {{player.heis}} good at not being seen when they don’t want to be.',

        'm Our camp is always undetectable.',

        'show character m neutral',
        'm Even setting up traps makes hunting a breeze.',

        'p I wouldn’t say a breeze… It’s not easy laying traps.',

        'p Or staying still for hours.',

        'n Maya waves her hand dismissively.',

        'm Most of the danger just passed us by.',

        'show character m happy',
        'm With {{player.name}} around, we’ll see danger long before they see us.',

        'jump AfterBrag'
    ],

    'AfterBrag': [
        'hide character m',
        'show character k neutral',

        'k You are… trying to comfort me?',
        'show character k neutralSweat',

        'm <i>…Yes</i>?',
        'm Did it work?',

        'show character k neutral',
        // 'show character k neutral',
        'k …',

        'k Hearing your tales was <i>interesting.</i>',

        'n He avoids the question, but Maya is unsatisfied. ',

        'n Her glances scream ‘I told you’.',

        'p I’m sure you were taught a thing or two, as well Kai?',

        'p Don’t nobles have to learn to fight?',

        'show character k angrySweat',
        'k Who said I was a noble?',

        'hide character k',
        'show character m shock',

        'm Let’s not beat around the bush.',

        'm You’re dressed fancy, Kai.',

        'm Doesn’t take a genius to know you sleep in silk breeches.',

        'hide character m',
        'show character k sadBlush',
        'm What she means is, most people pick up one or two survival skills in their youth.',

        'show character k neutral',
        'k I know enough to be wary.',

        'hide character k',
        'show character m angry',

        'm OK, that’s very cryptic.',

        'hide character m',
        'show character k angry',

        'k Would you prefer I tell you my life story?',

        'hide character k',
        'show character m angry',
        'm It would make this a little easier.',

        'hide character m',
        'show character k angry',
        'k Not everyone feels a need to ‘bond’ with strangers.',

        'hide character k',
        'show character m shockSweat',

        'm Wh— You’re a little rough around the edges, aren’t you?',

        'show character m happy',
        'm I wonder why that is?',

        'n She grins.',

        'm I don’t suppose you have any siblings?',

        'hide character m',
        'show character k angrySweat',

        'k What would <i>siblings</i> have to do with this?',

        'hide character k',
        'show character m neutral',
        'm Nothing, I’m just wondering if you had a more popular brother or something.',

        'p Maya.',
        'show character m shock',
        'm What! Maybe, he’s bitter about all the attention!',

        'show character m sadSweat',
        'p You’re being rude.',

        'n She sighs.',

        'show character m angryBlush',
        'm I was joking. It was a joke. ',

        'show character m sad',
        'n I throw her a knowing look.',

        'm I’m sorry if I offended you, Kai.',

        'm Admittedly, I’m not very good with—',

        'hide character m',
        'show character k angry',

        'n Authority?',

        'hide character k',
        'show character m angryUI',
        'm Wh— No, I was going to say snooty aristocracy, but maybe I should have just said authority now that I hear it out loud.',

        'm …',

        'show character m angry',
        'm Sorry, again.',

        'n I give Kai a pleading look.',

        'hide character m',
        'show character k neutralSweat',
        'n Frustration comes out through his sigh. ',

        'show character k neutral',
        'k Not all of us can show proper decorum.',
        'k I accept this… <i>apology</i>.',

        'n I swoop in before Maya can take offence at his tone.',

        'p Great!',

        'p Now we’re done being at each other’s throats, can we get started on setting up camp?',

        'hide character k',
        'show character m sad',

        'm …Sure',
        {
            'Choice': {
                'Encourage Kai ':{
                    'Text': 'Encourage Kai to open up later',
                    'Do': 'jump EncourageKai '
                },

                'Give Kai some space to cool down': {
                    'Text': 'Give Kai some space to cool down',
                    'Do': 'jump GiveKaispace'
                }
            }
        }

    ],

    'EncourageKai': [
        'show character m neutral',
        'p Once we’re settled, we can relax a bit more.',
        'p It’d be good to not treat each other as enemies.',

        'p We might even be friends by the end of this.',

        'hide character m',
        'show character k angrySweat',

        'n Kai shakes his head.',
        'k I would much prefer to keep this a professional transaction. ',

        'p Polite, then.',
        'p You don’t have to worry, we can be professional and enjoyable at the same time.',

        'k That is not my style.',
        'show character k angry',

        'k Not to mention, it is a little difficult to feel reassured, when the pair of you are terrible liars.',

        'hide character k',
        'show character m angry',
        'm Excuse me?',

        'hide character m',
        'show character k neutralSweat',

        'k Your friend, goes around parading like everything’s OK. ',

        'k It is clearly not, and what she’s overcompensating for, I’m not sure.',

        'k Although, it is clear that you don’t fully trust each other.',

        'k I’m not interested in joining the charade.',

        'k Nor, do I appreciate you forcing me to.',
        'hide character k',
        'show character m sadSweat',

        {
            'Conditional': {
                'Condition': function(){
                    return monogatari.storage(friendly) >= monogatari.storage(assertive)
                },

                'True': 'jump FriendlyDestroy',
                'False': 'jump AssertiveDestroy'
            }
        }
    ],

    'FriendlyDestroy': [
        // MESSAGE: You tried to mediate with Kai and defended Maya.
        'show character m sadSweat',
        'p We won’t force you to like us, Kai.',

        'hide character m',
        'show character k neutral',

        'p But if things are going to go smoothly, then you should trust us. ',

        'show character k shock',

        'p Maya, might be quick to say things, but she’s a good person and a great protector.',

        'n I smile, but my knuckles tense as the words come out.',

        'hide character k',
        'show character m shockBlush',

        'm ...',

        'hide character m',
        'show character k neutralSweat',

        'p If her willingness to have a brave heart and a positive attitude, is something that unnerves you.',

        'p Well, maybe that says more about you than us.',

        'show character k sadSweat',
        'p Not all of us have something to hide.',

        'jump AfterDestroy'

    ],

    'AssertiveDestroy': [
        'show character m sadSweat',
        'p No-one here is trying to create a façade.',

        'hide character m',
        'show character k neutralSweat',

        'p However, whether I trust Maya or not is none of your concern.',

        'p It’s not even a question.',

        'n The smile drops from my lips. ',

        'hide character k',
        'show character m shockBlush',
        'm ...',

        'hide character m',
        'show character k shockSweat',
        'k My concern, however, is your safety.',

        'show character k angrySweat',
        'p I highly recommend you don’t give me a reason to forget that.',

        'jump AfterDestroy'
    ],

    'AfterDestroy': [
        function(){
            updateRelationship('Maya', 5)
            notify('+5 Maya')
            updateRelationship('Kai', -5)

            setTimeout(() => {
                notify('-5 Kai')
            }, 2500);
        },

        'show character k shock',
        'p Because I would die for Maya.',

        'hide character k',
        'show character m sadBlush',
        'm {{player.name}}… ',

        'n I sigh, straightening myself out.',
        'n I may have just made this worse, but I won’t let anyone belittle my friends.',

        'show character m sad',
        'n Without saying it, Maya begs me to not escalate this.',

        'p I’m willing to accept that we don’t know you very well either.',

        'hide character m',
        'show character k sad',

        'p But judging us won’t get you very far.',

        'hide character k',
        'show character m shockBlush',
        'm It’s OK!',

        'm I said some things I shouldn’t have.',
        'show character m happySweat',

        'm I think we’re all a little on edge right now.',
        'm We’ve all experienced different circumstances… and apparently we cope with that differently.',

        'm We just need some time to get used to everyone’s different… attitudes.',

        'm I can see the two of you getting along anyway.',

        'hide character m',
        'show character k angryBlush',

        'n Kai raises a brow.',

        'hide character k',
        'show character m shockUI',

        'm What? You both have terrible people skills. ',
        'show character m neutral',

        'm Not that it matters, we have less time to set up for camp now.',

        'show character m happySweat',
        'm I’ll scout further ahead, see if there’s a better spot!',

        // [SFX: Woosh or running. Girl’s outta here]
        'hide character m with bounceOut',

        'n Without asking if it’s OK, Maya promptly leaves me alone with Kai.',

        'show character k sadSweat with fadeIn',

        'n A thinly veiled attempt at running away from the awkwardness of it all.',

        'n It doesn’t change.',

        'n Kai appears content to sit almost perfectly still in silence.', 
        'n I direct my attention to inspecting the flora nearby, looking for signs of anything else out of the ordinary.', 
        'n Some of it is useful, but I admit it’s partially to avoid a conversation.', 
        'n I only hope it’s not noticeable.', 
        'n Especially when I’m resorting to counting how many veins there are on this leaf.', 

        'show character k shock',
        'n Maya returns half an hour later, with a bundle of dry wood in her arms, reddened eyes and a smile.',

        'hide character k',
        'show character m neutralSweat',
        'm Found a place!',
        
        'n She leads us deeper into the forest, where the trees are older and the thicket, denser.',
        
        'jump APlaceToCamp'
    ],
    
    'GiveKaispace': [
        'show character m sad',
        'n Maya gives Kai a wary look. His attitude likely hurt her a little.',
        
        'show character m sadBlush',
        
        'n She’s so used to making friends, Kai’s demeanour is probably taken personally.',
        
        'show character m sad',
        'n We can’t go on like this. ',
        
        'p Look, we can try being ‘buddies’ after knowing each other for more than a few hours.',
        
        'p Let’s just get through the night first. ',
        
        'show character m shock',
        'p And maybe later, Kai can trust us.',

        'n I remember our first meeting.',

        'hide character m',
        'show character k shock',
        'p Dishonesty isn’t a good look on us, anyway.',
        
        'show character k sadBlush',
        'p I’m not expecting us to be very close, but I can tell it’s going to take some time for you to trust us.',
        
        'show character k sad',
        'p We can give you some space.',
        
        'p For now, I’ll scout for a better spot to camp.',
        
        'p It shouldn’t take long.',
        
        'hide character k',
        'show character m shock',
        'p Maya, are you coming with me?',
        
        'n She looks at me confused.',
        
        'm You’re just going to leave him here?',
        
        'p We won’t go anywhere far.',
        'p We’ll be back long before anything happens.',
        
        'p This spot is in view of anything that might head towards us, too.',
        
        'show character m neutral',
        'n Maya doesn’t comment.',

        'hide character m',
        'show character k sadSweat',
        'n When I glance back, there’s a look of relief on Kai’s face.',
        
        function(){
            updateRelationship('Kai', 5)
            notify('+5 Kai')
        },
        
        'hide character k',
        'show character m neutral',
        
        'n Further into the forest, Maya forgets her concerns and begins mumbling to herself as she inspects mushrooms and flora.',
        
        'p Please tell me you’re not going to eat those?',
        
        'show character m shockBlush',
        'm No!',
        
        'show character m happyUI',
        'm But, how does a plum broth sound?!',
        
        'show character m shockUI',
        'm Or white leek sauce!',
        
        'show character m neutral',
        'p You plan on cooking out here?!',
        'm Well, I don’t plan to starve.',

        'show character m happyUI',
        'm We’ll make it work.',
        
        'show character m shock',
        'm Do you think there’s any magical plants?!',
        
        'p They look like regular plants, Maya.',
        
        'show character m neutral',
        'p Sure, <i>these</i> ones do. ',
        
        'm But when I was getting the map, someone <i>did</i> tell me about a berry.',
        
        'n She stops in her tracks.',
        
        'm What about here?',
        
        'show character m happy',
        'm This looks like a pretty suitable spot.',
        
        'n She breaks off a chunk of wood.',
        
        'm The wood is nice and dry too, it’ll be easy to make firewood.',
        
        'show character m shock',
        'm This is really convenient.',

        'm Maybe, it is magic!',

        'p I think I have more faith in your cooking abilities.',
        'p But this does look like a good spot.',
        'p Let’s get Kai and set up here.',

        'n In less than an hour, we reach Kai again.',

        'n His mood is considerably calmer than earlier.',

        'jump APlaceToCamp'
    ],

    'APlaceToCamp': [
        'show character m shockSweat',
        'm It’s darker than I expected.',
        'm …It can’t already be night already?. ',
        'm We’ve only been here a few hours.',
        
        'm It should be afternoon, at most!',
        
        'hide character m',
        'show character k neutralSweat',
        'k  So, the rumours may be true...',
        'p What rumours?',
        
        'show character k sadSweat',
        'k That magic can alter the passing of time. ',
        'show character k neutralSweat',
        'k I thought it was nonsense.',
        
        'k But if this forest truly is magic, then it’s possible it does not adhere to the same rules.',
        
        'hide character k',
        'show character m neutralSweat',
        'm Or maybe we lost track of time.',
        'm There’s nothing that can change <i>time</i>, right?',
        
        'p It doesn’t matter… ',
        'p It’s unsafe to be out in the open like this. ',
        'p We should set up camp here, and quickly.',
        
        'show character m shockSweat',
        'm But we’re so close to the spot we found.',
        
        'show character m sadSweat',
        'p We don’t know if it’ll get darker before we get there.',
        'p We can’t set up camp in pitch blackness.',

        'n I start unpacking the supplies we have.',
        'p We’re not far off anyway. We just have to deal with this.',

            



    ]

})