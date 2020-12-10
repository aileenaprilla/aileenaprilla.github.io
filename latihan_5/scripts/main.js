"use-strict";
class Main {
    constructor() {
        // new navbar
        this.navbarConfig = {
            toggle: document.querySelector('.menu'),
            overlay: document.querySelector('.navbar-overlay'),
            menu: document.querySelector('.navbar-menu'),
            menuItems: document.querySelectorAll('.navbar-item'),
        }

        this.navbar = new Navbar(this.navbarConfig);

    }
}

window.addEventListener('load', new Main());