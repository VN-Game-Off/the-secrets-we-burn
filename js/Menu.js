class Menu extends Monogatari.ScreenComponent {
    render() {
        // const autoSaveEnabled = this.engine.setting ('AutoSave') != 0 && typeof this.engine.setting ('AutoSave') === 'number'

        const buttonList = [
            {
                string: 'Shop',
                icon: 'fas fa-shopping-basket icon',
                data: {
                    action: 'none'
                }
            },

            {
                string: 'History',
                icon: 'fas fa-comments icon',
                data: {
                    action: 'dialog-log'
                }
            },

            {
                string: 'MainMenu',
                icon: 'fas fa-home icon',
                data: {
                    action: 'open-screen',
                    open: 'main'
                }
            },

            {
                string: 'Settings',
                icon: 'fas fa-cog icon',
                data: {
                    action: 'open-screen',
                    open: 'settings'
                }
            },

            {
                string: 'SocialMedia',
                icon: 'fas fa-share-alt icon',
                data: {
                    action: 'open-screen',
                    open: 'help'
                }
            },

            {
                string: 'Help',
                icon: 'fas fa-question-circle icon',
                data: {
                    action: 'open-screen',
                    open: 'help'
                }
            },

        ]

        const allButtons = buttonList.map((button) => {

            const element = document.createElement('button')

            if (button.data.open != undefined) {

                element.innerHTML = `
                <span class="${button.icon}"></span>
                <span data-action=${button.data.action} data-open=${button.data.open} data-string=${button.string}>
                </span>
                `
            }

            else {

                element.innerHTML = `
                <span class="${button.icon}"></span>
                <span data-action=${button.data.action} data-string=${button.string}>
                </span>
                `

            }

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