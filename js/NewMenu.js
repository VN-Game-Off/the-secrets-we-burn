class ElementNew extends Monogatari.MenuComponent {

    constructor() {
        super()
        this.state = {
            button: {

                string: 'Hide',
                icon: 'fas fa-eye',
                data: {
                    action: 'distraction-free'
                }
            }
        }

    }

    static init() {

    }

    render() {

        // (this.global ('distraction_free') === true) {\n\t\t\t\tthis.element ().find ('[data-component=\"quick-menu\"] [data-action=\"distraction-free\"] [data-string]').text (this.string ('Hide'));\n\t\t\t\tthis.element ().find ('[data-component=\"quick-menu\"] [data-action=\"distraction-free\"] [data-icon]').replaceWith ('<span class=\"fas fa-eye\" data-action=\"distraction-free\"></span>');\n\t\t\t\tthis.element ().find ('[data-component=\"quick-menu\"]').removeClass ('transparent');\n\t\t\t\tthis.element ().find ('[data-component=\"text-box\"]').show ();\n\t\t\t\tthis.global ('distraction_free', false);\n\t\t\t} else {\n\t\t\t\tthis.element ().find ('[data-component=\"quick-menu\"] [data-action=\"distraction-free\"] [data-string]').text (this.string ('Show'));\n\t\t\t\tthis.element ().find ('[data-component=\"quick-menu\"] 

        // if (this.global('distraction_free')){
        //     console.log("Hidee")
        // }

        // const button =
        const element = document.createElement('button')

        if (typeof this.state.button.data === 'object') {
            for (const key of Object.keys(this.state.button.data)) {
                element.dataset[key] = this.state.button.data[key];
            }
        }

        element.setAttribute('icon', this.state.button.icon);
        element.setAttribute('string', this.state.button.string);

        element.setAttribute('tabindex', 0);

        element.innerHTML = `
            <span class="${this.state.button.icon}"></span>
            <span icon="" data-string="${this.state.button.string}"></span>
        `;

        return element.outerHTML
    }

}

ElementNew.tag = "new-menu";