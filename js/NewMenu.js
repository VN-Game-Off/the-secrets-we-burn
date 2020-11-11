class ElementNew extends Monogatari.MenuComponent {

    render() {

        const buttonList = [
            {
                string: 'Hide',
                icon: 'fas fa-eye',
                data: {
                    action: 'distraction-free'
                }
            },
        ]

        return buttonList.map((button) => {
            // A user could create a custom element to display all or specific
            // buttons. If no element was set on the button's definition, we'll
            // assume it to be a simple button.
            if (typeof button.element !== 'string') {
                button.element = 'button';
            }

            const element = document.createElement(button.element);

            if (typeof button.data === 'object') {
                for (const key of Object.keys(button.data)) {
                    element.dataset[key] = button.data[key];
                }
            }

            element.setAttribute('icon', button.icon);
            element.setAttribute('string', button.string);

            element.setAttribute('tabindex', 0);

            element.innerHTML = `
				<span class="${button.icon}"></span>
				<span data-string="${button.string}"></span>
			`;

            return element.outerHTML;
        }).join(' ');
    }

}

ElementNew.tag = 'new-menu';