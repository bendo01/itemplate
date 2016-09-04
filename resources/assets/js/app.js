import AsideEventListener from './element/AsideEventListener';
import Ps from 'perfect-scrollbar';

(() => { function fn() {
	// "On document ready" commands:
    new AsideEventListener('#menu-open', '#menu-close', '#aside-menu');
    let asideMenuHolder = document.getElementById('aside-menu');
    if(asideMenuHolder != null) {
        Ps.initialize(asideMenuHolder);
    }
};
  if (document.readyState != 'loading') {fn()}
  else {document.addEventListener('DOMContentLoaded', fn)}
})();
