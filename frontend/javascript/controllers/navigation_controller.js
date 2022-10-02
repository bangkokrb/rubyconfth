import { Controller } from '@hotwired/stimulus';

const CLASS_NAMES = {
  drawerMenu: 'menu--open',
};

export default class extends Controller {
  toggleMenu() {
    document.querySelector('body').classList.toggle(CLASS_NAMES.drawerMenu);
  }
}
