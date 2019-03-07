import AppNavigation, { DEFAULT_SELECTOR } from '../components/AppNavigation';

const appNavigation = document.querySelector(DEFAULT_SELECTOR);

appNavigation && new AppNavigation(appNavigation);
