import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { ScrollSpy } from 'Vendor/bootstrap/';

// Default component selector
export const DEFAULT_SELECTOR = '.app-navigation';

const SELECTOR = {
  menu: '.app-navigation__menu',
  menuLink: '.app-navigation__link',
  menuPane: '.app-navigation__pane',
  toggleButton: 'button.app-navigation__btn-toggle-menu'
};

const CLASS_NAME = {
  unscrollable: 'layout-website--unscrollable'
};

const STATES = {
  show: 'app-navigation--menu-open',
  sticky: 'app-navigation--sticky'
};

// Scroll position to trigger animation
const NAVIGATION_PANE_ANIMATION_THRESHOLD = 30;

class AppNavigation {
  /**
   * Initializer
   *
   * @param {Element} elementRef - HTML node to mount the component.
   * @param {Object} options - Configuration option for the component.
   * */
  constructor(elementRef, options = {}) {
    this.elementRef = elementRef;

    this.menu = this.elementRef.querySelector(SELECTOR.menu);
    this.menuPane = this.elementRef.querySelector(SELECTOR.menuPane);
    this.menuLinks = this.elementRef.querySelectorAll(SELECTOR.menuLink);
    this.toggleButton = this.elementRef.querySelector(SELECTOR.toggleButton);

    this.scrollContent = options.scrollContent || undefined;

    this._bind();
    this._addEventListener();
    this._setup();
  }

  // Event listeners

  /**
   * Open/close the navigation pane on mobile screen.
   * */
  onToggleNavigationPane() {
    this._togglePageScrollability();
    this._toggleNavigationPane();
  }

  /**
   * Scroll handler of navLinks.
   * Finds the closest link clicked.
   * 1) If the href is a hash url, enables smooth scroll.
   * 2) Else allows the default browser action.
   *
   * @param {Event} event - click event on navLinks
   * */
  onClickMenuLink(event) {
    let closestLink = event.target.closest('a');
    let targetHref = closestLink.hash;

    if ((closestLink.pathname !== window.location.pathname) || (targetHref.indexOf('#') === -1)) { return; }

    event.preventDefault();

    let scrollToEl = document.querySelector(targetHref);
    let verticalScroll = scrollToEl.getBoundingClientRect().y;

    // Close the opened mobile navigation
    this._isMobileNavigation() && this._manuallyToggleNavigationPane();

    // Scroll to the selected section
    window.scrollBy({
      top: verticalScroll,
      left: 0,
      behavior: 'smooth'
    });
  }

  /**
   * Animate the navigation elements on scroll.
   *
   * @param {Event} _event - Scroll event
   * */
  onScroll(_event) {
    this._updatePanePosition();
  }

  /**
   * Reset the navigation elements on page resize to avoid any conflicting rules.
   *
   * @param {Event} _event - Resize event
   * */
  onResize(_event) {
    // Scroll back to the top of the page
    window.scrollTo(0, 0);

    this._resetPanePosition();
    this._setMenuPaneRect();
  }

  // Private

  /**
   * Bind all functions to the local instance scope.
   * */
  _bind() {
    this.onToggleNavigationPane = this.onToggleNavigationPane.bind(this);
    this.onClickMenuLink = this.onClickMenuLink.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  /**
   * Adds all the required event listeners.
   * */
  _addEventListener() {
    this.toggleButton.addEventListener('click', this.onToggleNavigationPane);

    this.menuLinks.forEach(menuLink => menuLink.addEventListener('click', this.onClickMenuLink));

    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.onResize);
  }

  /**
   * Component bootstrapping actions.
   * */
  _setup() {
    this._setMenuPaneRect();
    this._setupScrollspy();
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
  _toggleNavigationPane() {
    this.elementRef.classList.toggle(STATES.show);
  }

  /**
   * Manually trigger the toggle off the navigation pane.
   * */
  _manuallyToggleNavigationPane() {
    this.toggleButton.dispatchEvent(new MouseEvent('click'));
  }

  /**
   * Change the position property of the navigation based on the scroll position.
   * */
  _updatePanePosition() {
    if (this._isMobileNavigation()) {
      return;
    }

    if (window.pageYOffset >= NAVIGATION_PANE_ANIMATION_THRESHOLD) {
      this.elementRef.classList.add(STATES.sticky);
      this.menuPane.style.left = `${this.menuPaneRect.left}px`;
    } else {
      this._resetPanePosition();
    }
  }

  /**
   * Store dimensions and positioning of the navigation pane.
   * */
  _setMenuPaneRect() {
    this.menuPaneRect = this.menuPane.getBoundingClientRect();
  }

  _resetPanePosition() {
    this.elementRef.classList.remove(STATES.sticky);
    this.menuPane.style.left = null;
  }

  /**
   * Highlight current section on scroll.
   * */
  _setupScrollspy() {
    if (!this.scrollContent) {
      return;
    }

    new ScrollSpy(document.querySelector(this.scrollContent), {
      target: this.menu,
      // Top offset position of the sticky menu
      offset: 220
    });
  }

  /**
   * Check if the button to toggle the mobile menu is visible.
   * */
  _isMobileNavigation() {
    return this.toggleButton.offsetWidth > 0 && this.toggleButton.offsetHeight > 0;
  }
}

export default AppNavigation;
