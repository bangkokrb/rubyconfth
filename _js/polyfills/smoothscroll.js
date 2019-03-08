import SmoothScroll from 'smoothscroll-polyfill';

/**
 *  [Scroll Behavior specification](https://drafts.csswg.org/cssom-view/#dom-window-scrollby) has been introduced as an
 *  extension of the Window interface to allow for the developer to opt in to native smooth scrolling.
 *
 *   Add polyfill for the specification.
 * */
SmoothScroll.polyfill();
