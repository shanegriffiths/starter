/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClasslistPolyfill = function () {
	function ClasslistPolyfill() {
		_classCallCheck(this, ClasslistPolyfill);
	}

	_createClass(ClasslistPolyfill, null, [{
		key: 'addClass',
		value: function addClass(el, className) {

			if (el.classList) {
				el.classList.add(className);
			} else {
				el.className += ' ' + className;
			}
		}
	}, {
		key: 'removeClass',
		value: function removeClass(el, className) {

			if (el.classList) {
				el.classList.remove(className);
			} else {
				el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		}
	}, {
		key: 'toggleClass',
		value: function toggleClass(el, className) {

			if (el.classList) {
				el.classList.toggle(className);
			} else {
				var classes = el.className.split(' ');
				var existingIndex = classes.indexOf(className);

				if (existingIndex >= 0) {
					classes.splice(existingIndex, 1);
				} else {
					classes.push(className);
				}

				el.className = classes.join(' ');
			}
		}
	}, {
		key: 'hasClass',
		value: function hasClass(el, className) {

			if (el.classList) {
				return el.classList.contains(className);
			} else {
				return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
			}
		}
	}]);

	return ClasslistPolyfill;
}();

exports.default = ClasslistPolyfill;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(4);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classPolyfill = __webpack_require__(0);

var _classPolyfill2 = _interopRequireDefault(_classPolyfill);

var _menuFilter = __webpack_require__(3);

var _menuFilter2 = _interopRequireDefault(_menuFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Styleguide = function () {
	function Styleguide() {
		_classCallCheck(this, Styleguide);

		this.options = {
			previews: this.checkPreviews()
		};

		this.modal = document.querySelector('.aigis-modal');

		// create a template modal wrapper
		// this will be cloned to wrap the single component preview code
		this.modal_template = document.createElement('div');
		_classPolyfill2.default.addClass(this.modal_template, 'aigis-modal__item');

		// initialise the page
		this.initialiseStyleguide();
	}

	_createClass(Styleguide, [{
		key: 'checkPreviews',
		value: function checkPreviews() {

			var preview_array = Array.from(document.querySelectorAll('.aigis-preview'));

			return preview_array.length ? true : false;
		}
	}, {
		key: 'openModal',
		value: function openModal() {
			_classPolyfill2.default.addClass(document.body, 'aigis-modal--active');
		}
	}, {
		key: 'closeModal',
		value: function closeModal() {
			_classPolyfill2.default.removeClass(document.body, 'aigis-modal--active');
		}
	}, {
		key: 'checkHash',
		value: function checkHash() {

			// get the URL hash
			var hash = window.location.hash;
			var preview = void 0;

			// if there is a hash
			if (hash) {

				// check that the hash relates to an element
				preview = document.querySelector(hash);

				// if it does, open the single component view
				if (preview !== null) {
					this.addPreview(preview);
				}
			}
			// else close the modal
			else {
					this.closeModal();
				}
		}
	}, {
		key: 'setActiveDropdown',
		value: function setActiveDropdown() {

			// search up through the menu to expand the current dropdown
			var current_item = document.querySelector('[data-tree-current]');

			if (current_item !== null) {

				var searching = true;

				// search up through the menu items
				// until the top level
				while (searching) {

					// if the current item is the top-level parent
					// set active class and stop searching
					if (current_item.getAttribute('data-path-depth') === '0') {

						_classPolyfill2.default.addClass(current_item, 'is-active');

						searching = false;
					} else {
						current_item = current_item.parentNode;
					}
				}
			}
		}
	}, {
		key: 'initialiseMenu',
		value: function initialiseMenu() {
			var _this = this;

			// save the top-level menu items
			var menu_items = Array.from(document.querySelectorAll('li[data-path-depth="0"] > a'));

			// create a span element for the menu dropdown
			var dropdown_element = document.createElement('span');
			_classPolyfill2.default.addClass(dropdown_element, 'menu-toggle');

			// loop through each top-level menu item
			menu_items.forEach(function (menu_item) {

				// clone the dropdown span so it can be appended
				var arrow = dropdown_element.cloneNode();

				// add a click event to the dropdown item
				arrow.addEventListener('click', function (event) {
					return _this.toggleMenu(event);
				}, false);

				// append the dropdown item
				menu_item.appendChild(arrow);
			});
		}
	}, {
		key: 'toggleMenu',
		value: function toggleMenu(event) {

			// prevent the event bubbling to the anchor
			event.preventDefault();
			event.stopPropagation();

			// toggle the dropdown menu state
			_classPolyfill2.default.toggleClass(event.target.parentNode.parentNode, 'is-active');
		}

		/**
   * hash_selector: the selected element using the URL hash as an ID
   */

	}, {
		key: 'addPreview',
		value: function addPreview(hash_selector) {

			var current_item = hash_selector.nextElementSibling;

			var searching = true;

			// search through next siblings
			// until the preview code is found
			while (searching) {

				if (_classPolyfill2.default.hasClass(current_item, 'aigis-preview') === true) {

					searching = false;

					// clone in the modal template wrapper
					var modal_item = this.modal_template.cloneNode();

					// set the modal html as the current preview code
					modal_item.innerHTML = current_item.innerHTML;

					// append the modal wrapper
					this.modal.innerHTML = modal_item.innerHTML;

					this.openModal();
				} else {
					current_item = current_item.nextElementSibling;
				}
			}
		}
	}, {
		key: 'setPreviewLinks',
		value: function setPreviewLinks() {
			var _this2 = this;

			var link_icon = document.querySelector('.link-icon');

			// setup the hash anchor element
			var link_template = document.createElement('a');
			link_template.appendChild(link_icon.cloneNode(true));
			_classPolyfill2.default.addClass(link_template, 'preview-link');

			// get all preview titles
			var preview_titles = Array.from(document.querySelectorAll('.aigis-module > [id]'));

			// loop through each title
			preview_titles.forEach(function (title) {

				// get the title id
				// replace all non-alphanumeric characters with dashes
				// e.g. spaces, ampersands
				// convert it to lowercase
				var new_title_id = title.id.replace(/\W+/g, '-').toLowerCase();

				// replace the title id with the new clean version
				title.id = new_title_id;

				// clone the hash anchor
				var title_link = link_template.cloneNode(true);

				// apply the current id as the href
				title_link.href = '#' + new_title_id;

				// if there's a hash already and the same link has been clicked
				// re-open the modal
				title_link.addEventListener('click', function (event) {

					if (event.currentTarget.hash === window.location.hash) {
						_this2.openModal();
					}
				}, false);

				// append the anchor to the title
				title.appendChild(title_link);
			});
		}
	}, {
		key: 'setupPreviews',
		value: function setupPreviews() {
			var _this3 = this;

			// add a listener for a hash change
			window.addEventListener('hashchange', function () {
				_this3.checkHash();
			});

			// setup the preview links next to the titles
			this.setPreviewLinks();

			// check to see if we've loaded in with a hash link
			this.checkHash();

			document.querySelector('.aigis-modal__close').addEventListener('click', this.closeModal, false);
		}
	}, {
		key: 'setupColors',
		value: function setupColors() {

			var colors = Array.from(document.querySelectorAll('.aigis-preview > .aigis-colorpalette'));

			if (colors.length) {

				colors.forEach(function (color) {
					_classPolyfill2.default.addClass(color.parentNode, 'aigis-preview--color');
				});
			}
		}
	}, {
		key: 'initialiseStyleguide',
		value: function initialiseStyleguide() {

			this.initialiseMenu();
			this.setActiveDropdown();
			this.setupColors();

			if (this.options.previews) {
				this.setupPreviews();
			}
		}
	}]);

	return Styleguide;
}();

// wrap this all in an IIFE
// doesn't pollute the global scope


(function () {

	// create a new instance of the Styleguide class
	var app = new Styleguide();

	var menu = document.querySelector('.aigis-categoryList');
	var search_input = document.querySelector('.aigis-search');

	var search = new _menuFilter2.default(menu, search_input);
})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classPolyfill = __webpack_require__(0);

var _classPolyfill2 = _interopRequireDefault(_classPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuFilter = function () {

	// pass in the table
	function MenuFilter(menu, search_input) {
		_classCallCheck(this, MenuFilter);

		// set defaults
		// all nodes are selected by looking under the passed in table node
		// this prevents cross-contamination
		this.filter = '';
		this.menu = menu;
		this.dropdowns = menu.querySelectorAll('li[data-path-depth="0"]');
		this.menu_items = menu.querySelectorAll('[data-path-depth="1"] a');

		// set event listeners
		this.setSearch(search_input);
	}

	_createClass(MenuFilter, [{
		key: 'setSearch',
		value: function setSearch(search_input) {
			var _this = this;

			// add a click event listener to each
			search_input.addEventListener('input', function () {

				// update filter
				_this.filter = search_input.value.toLowerCase();

				// then refresh the view
				_this.refreshFilter();
			}, false);
		}
	}, {
		key: 'refreshFilter',
		value: function refreshFilter() {

			// if there is a filter set
			if (this.filter.length) {

				_classPolyfill2.default.addClass(this.menu, 'search-active');

				// loop through each table row
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this.menu_items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var item = _step.value;


						// hide the row
						item.parentNode.style.display = 'none';

						// if the item matches the filter
						// display the item
						if (item.textContent.toLowerCase().indexOf(this.filter) !== -1) {
							item.parentNode.style.display = 'block';
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
			// otherwise reset all of the items
			else {

					_classPolyfill2.default.removeClass(this.menu, 'search-active');

					// loop through each table row
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = this.menu_items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var _item = _step2.value;

							_item.parentNode.style.display = 'block';
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}
		}
	}, {
		key: 'clearFilter',
		value: function clearFilter() {

			// reset the filter
			this.filter = '';

			_classPolyfill2.default.removeClass(this.menu, 'search-active');

			// reset each table row
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = this.menu_items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var item = _step3.value;

					item.parentNode.style.display = 'block';
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}
		}
	}]);

	return MenuFilter;
}();

exports.default = MenuFilter;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);