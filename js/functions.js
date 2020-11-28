// INPUT: Text to notify
// Creates a notification and displays it to the screen
function notify(myText) {
    // Create text node
    const node = document.createTextNode(myText);

    // Create element
    const myNotification = document.createElement("p");

    // Add text to element
    myNotification.appendChild(node);

    // Get the game screen and add the notification to it
    let gameScreen = document.querySelector("game-screen");
    gameScreen.appendChild(myNotification);

    // Add classes
    myNotification.classList.add("NOTIF")
    myNotification.classList.add("animated");
    myNotification.classList.add("fadeOutUp")
    myNotification.classList.add("right");

    // Destroy element after 2 seconds
    setTimeout(() => { destroyNotif() }, 2000)
}



// INPUT: Trait (friendly, playful, or assertive)
function updatePersonality(trait, value) {
    const toUpdate = monogatari.storage()[trait]
    monogatari.storage()[trait] = toUpdate + value
    console.log(monogatari.storage()[trait])
}

function updateRelationship(person, value) {
    const toUpdate = monogatari.storage()[person]
    monogatari.storage()[person] = toUpdate + value
}

function checkPersonality() {
    if (monogatari.storage(friendly) >= monogatari.storage(assertive)) {
        if (monogatari.storage(friendly) >= monogatari.storage(joking)) {
            return friendly
        }
        else {
            return joking
        }
    }

    else if (monogatari.storage(joking) >= monogatari.storage(assertive)) {
        return joking
    }
    return assertive
}

function checkWeapon() {

    if (monogatari.storage('combat').name === 'Bow & Arrow') {
        return 'bow'
    }

    else if (monogatari.storage('combat').name === 'Fists') {
        return 'fists'
    }

    return 'sword'
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function imgNotify(variable) {
    // const node = document.createTextNode(message)
    // const name = monogatari.storage(skill).name

    const imgElement = (document.getElementById(`${variable}-img`)).cloneNode(true)
    let gameScreen = document.querySelector("game-screen");
    gameScreen.appendChild(imgElement);

    imgElement.classList.add("NOTIF")
    imgElement.classList.add("animated");
    imgElement.classList.add("bounceOut")
    imgElement.classList.add("screen-center");

    // Destroy element after 2 seconds
    setTimeout(() => {
        // imgElement.classList.add('bounceOut')
        destroyNotif()
    }, 2000)

}

function checkGender(add){

    monogatari.storage('player').s = ''

    if (monogatari.storage('gender')==='female'){
        monogatari.storage('player').heis = 'she’s'
        monogatari.storage('player').he = 'she'
        monogatari.storage('player').man = 'woman'
        monogatari.storage('player').lord = 'Lady'
        monogatari.storage('player').master = 'Mistress'
    }

    else if (monogatari.storage('gender')==='enby'){
        monogatari.storage('player').heis = 'they’re'
        monogatari.storage('player').he = 'they'
        monogatari.storage('player').man = 'person'
        monogatari.storage('player').lord = 'Ruler'
        monogatari.storage('player').master = 'Sovereign'
        monogatari.storage('player').s = 's'

    }
}

function checkSurvival(){
    return monogatari.storage('survival').name.toLowerCase()
}


function increaseValour(value) {
    const toUpdate = monogatari.storage('valour')
    monogatari.storage().valour = toUpdate + value

}

function destroyNotif() {
    const toDestroy = document.getElementsByClassName("NOTIF")
    // console.log(toDestroy)
    // console.log("removed")
    toDestroy[0].remove()
}

const allSkills = {

    bow: {
        name: 'Bow & Arrow',
        description: `With a sharp eye, the <b class="accent">bow and arrow</b> has always been my most natural affinity. It’s said there is very little that escapes my aim.`
    },

    fists: {
        name: 'Fists',
        description: 'Upfront and person, my <b class="accent">fists</b> are the deadliest weapon I own. I feel most in tune with just my body.'
    },

    sword: {
        name: 'Longsword',
        description: 'Nothing has felt more natural than my <b class="accent">sword</b> as an extension of myself. I feel swift and deadly with a blade by my side.'
    },

    strength: {
        name: 'Strength',
        description: 'Where survival is concerned, my greatest asset is my imposing <b class="accent">strength</b>. I’ve found very little stands in my way when brute force is an option. '
    },

    perception: {
        name: 'Perception',
        description: 'Where survival is concerned, my greatest asset is my polished <b class="accent">perception</b>. If there’s another answer, I will find it.'
    },

    concealment: {
        name: 'Concealment',
        description: 'Where survival is concerned, my greatest asset is my ability to <b class="accent">conceal</b> myself. If I choose to be, I am neither here, nor there.'
    }

}

function changeSkill(variable, name) {
    console.log(name)
    monogatari.storage()[variable] = allSkills[name]

    const nameElement = document.getElementById(`${variable}-name`)
    nameElement.innerHTML = allSkills[name].name

    const descElement = document.getElementById(`${variable}-desc`)
    descElement.innerHTML = allSkills[name].description

    const imgElement = document.getElementById(`${variable}-img`)
    imgElement.setAttribute('src', `./assets/ui/skills/${name}.png`)
}

