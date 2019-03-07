import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// Default component selector
export const DEFAULT_SELECTOR = '.app-navigation';

const SELECTOR = {
  toggleButton: 'button.app-navigation__btn-toggle-menu',
  menuPane: '.app-navigation__pane',
  menuLink: '.app-navigation__link',
  appContent: '.app-content'
};

const CLASS_NAME = {
  unscrollable: 'layout-website--unscrollable'
};

const STATES = {
  show: 'app-navigation--menu-open',
  sticky: 'app-navigation--sticky'
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
    this.menuPane = this.elementRef.querySelector(SELECTOR.menuPane);
    this.menuLinks = this.elementRef.querySelectorAll(SELECTOR.menuLink);

    // Store current menu dimension and positioning
    this.menuPaneRect = this.menuPane.getBoundingClientRect();

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

  /**
   * Animate the navigation elements on scroll
   *
   * @param {Event} _event - Scroll event
   * */
  onScroll(_event) {
    this._updatePanePosition();
  }

  // Private

  /**
   * Bind all functions to the local instance scope.
   * */
  _bind() {
    this.onToggleNavigationPane = this.onToggleNavigationPane.bind(this);
    this.onClickMenuLink = this.onClickMenuLink.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  /**
   * Adds all the required event listeners.
   * */
  _addEventListener() {
    this.toggleButton.addEventListener('click', this.onToggleNavigationPane);

    this.menuLinks.forEach(navLink => navLink.addEventListener('click', this.onClickMenuLink));

    window.addEventListener('scroll', this.onScroll);
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

  /**
   * Change the position property of the navigation based on the scroll position
   * */
  _updatePanePosition() {
    if (this._isMobileNavigation()) {
      return;
    }

    const styleChangeThreshold = this.menuPaneRect.top - this.menuPane.offsetTop;

    if (window.pageYOffset >= styleChangeThreshold) {
      this.elementRef.classList.add(STATES.sticky);
      this.menuPane.style.left = `${this.menuPaneRect.left}px`;

    } else {
      this.elementRef.classList.remove(STATES.sticky);
      this.menuPane.style.left = null;
    }
  }

  /**
   * Check if the button to toggle the mobile menu is visible.
   * */
  _isMobileNavigation() {
    return this.toggleButton.offsetWidth > 0 && this.toggleButton.offsetHeight > 0;
  }
}

export default AppNavigation;
