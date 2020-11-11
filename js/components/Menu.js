class Menu extends Monogatari.ScreenComponent {
    render() {
        // const autoSaveEnabled = this.engine.setting ('AutoSave') != 0 && typeof this.engine.setting ('AutoSave') === 'number'

        const buttonList = [

            {
                string: 'Skills',
                icon: 'fas fa-user-plus icon',
                data: {
                    action: 'open-screen',
                    open: 'skills'
                }
            },


            {
                string: 'Save',
                icon: 'fas fa-save icon',
                data: {
                    action: 'open-screen',
                    open: 'save'
                }
            },

            {
                string: 'Load',
                icon: 'fas fa-redo icon',
                data: {
                    action: 'open-screen',
                    open: 'load'
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

        const allButtons = buttonList.map((button, index) => {

            const element = document.createElement('button')

            element.setAttribute('icon', button.icon)
            element.setAttribute('data-action', button.data.action)

            if (button.data.open != undefined) {

                element.setAttribute('data-open', button.data.open)
            }

            if (index === 0) {
                element.classList.add('special')

                element.innerHTML = `
                    <span class="${button.icon}"></span>
                    <span data-string=${button.string}>
                    </span>
                `
            }

            else {

                element.innerHTML = `
                <span class="${button.icon}"></span>
                <span data-string=${button.string}>
                </span>
                `
            }

            return element.outerHTML

        }).join(' ')

        return `
            <button class="top left" data-action="back"><span class="fas fa-arrow-left"></span></button>

            <h2 data-string="Menu"></h2>
            <div data-ui="inner-menu" class="btn-container">
            ${allButtons}
            </div>
        `;
    }
}

Menu.tag = 'menu-screen';