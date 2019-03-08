const SELECTOR = {
  appHeaderEvent: '.app-header__event'
};

class HomeScreen {
  /**
   * Initializer
   *
   * @param {Element} elementRef - HTML node to mount the component.
   * */
  constructor() {
    this.appHeaderEvent = document.querySelector(SELECTOR.appHeaderEvent);

    this._bind();
    this._addEventListener();
  }

  // Event listeners

  /**
   * Scroll handler of links in the app header.
   *
   * @param {Event} event - click event on header links
   * */
  onClickAppHeaderLink(event) {
    let closestLink = event.target.closest('a');
    let targetHref = closestLink.hash;

    event.preventDefault();

    let scrollToEl = document.querySelector(targetHref);
    let verticalScroll = scrollToEl.getBoundingClientRect().y;

    // Scroll to the selected section
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
    this.onClickAppHeaderLink = this.onClickAppHeaderLink.bind(this);
  }

  /**
   * Adds all the required event listeners.
   * */
  _addEventListener() {
    this.appHeaderEvent.querySelectorAll('a').forEach(appHeaderLink => appHeaderLink.addEventListener('click', this.onClickAppHeaderLink));
  }

}

if (document.body.classList.contains('home')) {
  new HomeScreen();
}
