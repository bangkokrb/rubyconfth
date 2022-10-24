import { Controller } from '@hotwired/stimulus';

const CLASS_NAMES = {
  activeTab: 'nav__link--active',
  activePane: 'schedule-browser__tabpane--active'
};

export default class extends Controller {
  static targets = [ 'navigation', 'tabpane' ];

  connect() {
    const tabFromUrlHash = window.location.hash.match(/^#day-[1-2]$/) ?? undefined;

    if (tabFromUrlHash) {
      const tabIdentifier = tabFromUrlHash[0].replace('#', '');

      this._activeTabFor(tabIdentifier);
    }
  }

  toggleTab(event) {
    event.preventDefault();
    const tab = event.target;
    const { day } = tab.dataset;

    this._activeTabFor(day);
    this._updateUrl(day)
  }

  _activeTabFor(day) {
    this.navigationTarget.querySelectorAll('[role="tab"]').forEach(tabElement => {
      tabElement.classList.remove(CLASS_NAMES.activeTab);
    });
    this.navigationTarget.querySelector(`[data-day=${day}]`).classList.add(CLASS_NAMES.activeTab);

    this.tabpaneTarget.querySelectorAll('[role="tabpanel"]').forEach(tabPaneElement => {
      tabPaneElement.classList.remove(CLASS_NAMES.activePane);
    });
    this.tabpaneTarget.querySelector(`[data-day=${day}]`).classList.add(CLASS_NAMES.activePane);
  }

  _updateUrl(day) {
    const urlHash = `#${day}`;

    history.replaceState(null, null, urlHash);
  }
}
