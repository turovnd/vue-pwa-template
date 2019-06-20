/* ============
 * Vue Font Awesome
 * ============
 *
 * Font Awesome 5 Vue component
 *
 * https://github.com/FortAwesome/vue-fontawesome
 */

import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faIndent,
	faOutdent,
	faAward,
	faLayerGroup,
	faChevronUp,
	faChevronDown,
	faUser,
	faCog,
	faSignOutAlt,
	faBell,
	faLanguage
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
	faIndent,
	faOutdent,
	faAward,
	faLayerGroup,
	faChevronUp,
	faChevronDown,
	faUser,
	faCog,
	faSignOutAlt,
	faBell,
	faLanguage
);

Vue.component('fa-icon', FontAwesomeIcon);
