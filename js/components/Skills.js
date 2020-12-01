class Skills extends Monogatari.ScreenComponent {

    render() {

        const toReturn = `
        <button class="top left" data-action="back"><span class="fas fa-arrow-left"></span></button>
        <h2 data-string="Skills"></h2>

        <div class="col">
        
        <h3>Combat</h3>
        <div class="skill-container"> 
            <img src="./assets/ui/square.png" id="combat-img"></img>
            <div>
                <span class="skill-name" id="combat-name">???</span>
                <span class="skill-desc" id="combat-desc">My weapon of choice is yet to be known.</span>
            </div>
        </div>

        <h3>Survival</h3>
        <div class="skill-container"> 
            <img src="./assets/ui/square.png" id="survival-img"></img>
            <div>
                <span class="skill-name" id="survival-name">???</span>
                <span class="skill-desc" id="survival-desc">To survive, my greatest asset has yet to be discovered.</span>
            </div>
        </div>

        <h3>Interpersonal</h3>
        <div class="skill-container"> 
            <img src="./assets/ui/square.png" id="interpersonal-img"></img>
            <div>
                <span class="skill-name" id="interpersonal-name">???</span>
                <span class="skill-desc" id="interpersonal-desc">My most advantageous trait has yet to be revealed. </span>
            </div>
        </div>

        <h3>Valour</h3>
        <span class="skill-name" id="valour-name">0</span>
        </div>

        </div>
        
        `

        return toReturn

    }
}

Skills.tag = 'skills-screen'