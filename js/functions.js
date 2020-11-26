function notify(myText) {
    const node = document.createTextNode(myText);
    const myNotification = document.createElement("p");
    myNotification.appendChild(node);
    let gameScreen = document.querySelector("game-screen");
    gameScreen.appendChild(myNotification);
    myNotification.classList.add("NOTIF")
    myNotification.classList.add("animated");
    myNotification.classList.add("fadeOutUp")
    myNotification.classList.add("right");

    setTimeout(()=> {destroyNotif()}, 2000)
}

function destroyNotif () {
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
    }
}

function changeSkill(variable, name) {
    console.log('Is happening')
    monogatari.storage()[variable] = allSkills[name]

    const nameElement = document.getElementById(`${variable}-name`)
    nameElement.innerHTML = allSkills[name].name

    const descElement = document.getElementById(`${variable}-desc`)
    descElement.innerHTML = allSkills[name].description

    const imgElement = document.getElementById(`${variable}-img`)
    imgElement.setAttribute('src', `./assets/ui/skills/${name}.png`)
}

function imgNotify (skill, message){
    const node = document.createTextNode(message)

}
