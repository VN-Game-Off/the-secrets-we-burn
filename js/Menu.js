class Menu extends Monogatari.ScreenComponent {
    render () {

        
        const ui = new firebaseui.auth.AuthUI(firebase.auth());

        // const autoSaveEnabled = this.engine.setting ('AutoSave') != 0 && typeof this.engine.setting ('AutoSave') === 'number'

        const buttonList = [
            {
                string: 'Shop',
                data:{
                    action:'none'
                }
            },

            {
                string: 'Settings',
                data: {
                    action: 'open-screen',
                    open: 'settings'
                }
            },

            {
                string: 'Help',
                data:{
                    action: 'open-screen',
                    open:'help'
                }
            },
            
        ]

        const allButtons = buttonList.map((button)=>{

            const element = document.createElement('button')

            element.innerHTML = `
            <span data-action=${button.data.action} data-open=${button.data.open} data-string=${button.string}></span>
            `
            return element.outerHTML
        }).join(' ')

        return `
            <button class="top left" data-action="back"><span class="fas fa-arrow-left"></span></button>
            <h2 data-string="Menu">Load</h2>
            <div data-ui="inner-menu" class="btn-container">
            ${allButtons}
            </div>
        `;
    }
}

Menu.tag = 'menu-screen';