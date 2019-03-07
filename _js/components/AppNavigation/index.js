import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// Default component selector
export const DEFAULT_SELECTOR = '.app-navigation';

const SELECTOR = {
  toggleButton: 'button.app-navigation__btn-toggle-menu',
  menuLink: '.app-navigation__menu-link'
};

const CLASS_NAME = {
  unscrollable: 'layout-website--unscrollable'
};

const STATES = {
  show: 'app-navigation--menu-open'
};

class AppNavigation {
  /**
   * Initializer
   *
   * @param {Element} elementRef - HTML node to mount the component.
   * */
  constructor(elementRef) {
    this.elementRef = elementRef;

    this.toggleButton = this.elementRef.querySelector(SELECTOR.toggleButton);
    this.menuLinks = document.querySelectorAll(SELECTOR.menuLink);

    this._bind();
    this._addEventListener();
  }

  // Event listeners

  /**
   * Open/close the navigation pane on mobile screen.
   * */
  onToggleNavigationPane() {
    this._togglePageScrollability();
    this._toggleNavigationPage();
  }

  /**
   * Scroll handler of navLinks.
   *  Finds the closest link clicked.
   *    1) If the href is a hash url, enables smooth scroll.
   *    2) Else allows the default browser action.
   *
   * @param {Event} event - scroll event on navLinks
   * */
  onClickMenuLink(event) {
    let closestLink = event.target.closest('a');
    let targetHref = closestLink.hash;

    if ((closestLink.pathname !== window.location.pathname) || (targetHref.indexOf('#') === -1)) { return; }

    event.preventDefault();

    let scrollToEl = document.querySelector(targetHref);
    let verticalScroll = scrollToEl.getBoundingClientRect().y ;

    // Enable Smooth scroll
    window.scrollBy({
      top: verticalScroll,
      left: 0,
      behavior: 'smooth'
    });
  }

  // Private

  /**
   * Bind all functions to the local instance scope.
   * */
  _bind() {
    this.onToggleNavigationPane = this.onToggleNavigationPane.bind(this);
    this.onClickMenuLink = this.onClickMenuLink.bind(this);
  }

  /**
   * Adds all the required event listeners.
   * */
  _addEventListener() {
    this.toggleButton.addEventListener('click', this.onToggleNavigationPane);

    this.menuLinks.forEach(navLink => navLink.addEventListener('click', this.onClickMenuLink));
  }

  /**
   *  Removes or restore the scroll of the page depending on the state of the navigation page.
   * */
  _togglePageScrollability() {
    const pageContainer = document.querySelector('html');

    pageContainer.classList.toggle(CLASS_NAME.unscrollable);

    if (pageContainer.classList.contains(CLASS_NAME.unscrollable)) {
      disableBodyScroll(this.elementRef);
    } else {
      enableBodyScroll(this.elementRef);
    }
  }

  /**
   * Add or remove the show class from navigation page.
   * */
  _toggleNavigationPage() {
    this.elementRef.classList.toggle(STATES.show);
  }
}

export default AppNavigation;
