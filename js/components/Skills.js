class Skills extends Monogatari.ScreenComponent {

    render() {

        const toReturn = `
        <button class="top left" data-action="back"><span class="fas fa-arrow-left"></span></button>
        <h2 data-string="Skills"></h2>

        <div class="col">
        
        <h3>Combat</h3>
        <div class="skill-container"> 
            <img src="./assets/ui/square.png"></img>
            <div>
                <span class="skill-name" id="combat-name">???</span>
                <span class="skill-desc" id="combat-desc">My greatest asset is yet to be discovered.</span>
            </div>
        </div>

        <h3>Survival</h3>
        <div class="skill-container"> 
            <img src="./assets/ui/square.png"></img>
            <div>
                <span class="skill-name" id="survival-name">???</span>
                <span class="skill-desc" id="survival-desc">My greatest asset is yet to be discovered.</span>
            </div>
        </div>

        <h3>Interpersonal</h3>
        <div class="skill-container"> 
            <img src="./assets/ui/square.png"></img>
            <div>
                <span class="skill-name" id="interpersonal-name">???</span>
                <span class="skill-desc" id="interpersonal-desc">My greatest asset is yet to be discovered.</span>
            </div>
        </div>

        </div>
        
        `

        return toReturn

    }
}

Skills.tag = 'skills-screen'