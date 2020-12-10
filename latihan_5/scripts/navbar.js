class Navbar {
    constructor(config) {
        this.toggle = config.toggle;
        this.menu = config.menu;
        this.overlay = config.overlay;

        this.displayMenu = this.displayMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);

        this.toggle.addEventListener('click', this.displayMenu);
        this.overlay.addEventListener('click', this.hideMenu);
    }

    displayMenu(e) {
        console.log(e);

        e.stopPropagation();

        this.menu.classList.add('navbar-show');
        this.overlay.classList.add('navbar-overlay-show');

        this.menu.classList.remove('navbar-hide');
        this.overlay.classList.remove('navbar-overlay-hide');
    }

    hideMenu(e) {
        e.stopPropagation();
        e.preventDefault();

        this.menu.classList.remove('navbar-show');
        this.overlay.classList.remove('navbar-overlay-show');

        this.menu.classList.add('navbar-hide');
        this.overlay.classList.add('navbar-overlay-hide');
    }
}