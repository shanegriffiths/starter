class Styleguide {

	constructor(container) {

		this.container = container;
		this.modal = document.querySelector('.aigis-modal');

		this.modal_template = document.createElement('div');
		this.modal_template.classList.add('aigis-modal__item');

	}

	checkHash() {

		const hash = window.location.hash;

		if ( hash ) {
			this.addPreview(document.querySelector(window.location.hash));
		}
		else {
			this.modal.classList.remove('is-active');
		}

	}

	setActiveDropdown() {

		// search up through the menu to expand the current dropdown
		let current_item = document.querySelector('[data-tree-current]');

		let searching = true;

		// search up through the menu items
		// until the top level
		while (searching) {

			// if the current item is the top-level parent
			// set active class and stop searching
			if ( current_item.dataset.pathDepth === '0' ) {

				current_item.classList.add('is-active');

				searching = false;

			}
			else {
				current_item = current_item.parentNode;
			}

		}
	}

	initialiseMenu() {

		// save the top-level menu items
		let menu_items = Array.from( document.querySelectorAll('li[data-path-depth="0"] > a') );

		// create a span element for the menu dropdown
		let dropdown_element = document.createElement('span');
		dropdown_element.classList.add('menu-toggle');

		// loop through each top-level menu item
		menu_items.forEach(menu_item => {

			// clone the dropdown span so it can be appended
			let arrow = dropdown_element.cloneNode();

			// add a click event to the dropdown item
			arrow.addEventListener('click', this.toggleMenu.bind(menu_item.parentNode), false);

			// append the dropdown item
			menu_item.appendChild(arrow);

		});

	}

	toggleMenu() {

		event.preventDefault();

		this.classList.toggle('is-active');

	}

	/**
	 * hash_selector: the selected element using the URL hash as an ID
	 */
	addPreview(hash_selector) {

		let current_item = hash_selector.nextElementSibling;

		let searching = true;

		// search through next siblings
		// until the preview code is found
		while ( searching ) {

			if ( current_item.classList.contains('aigis-preview') === true ) {

				searching = false;

				// clone in the modal template wrapper
				let modal_item = this.modal_template.cloneNode();

				// set the modal html as the current preview code
				modal_item.innerHTML = current_item.innerHTML;

				this.modal.classList.add('is-active');

				// append the modal wrapper
				this.modal.innerHTML = modal_item.innerHTML;

			}
			else {
				current_item = current_item.nextElementSibling;
			}

		}

	}

	setPreviewLinks() {

		// setup the hash anchor element
		let link_template = document.createElement('a');
		link_template.appendChild(document.createTextNode('🔗'));
		link_template.classList.add('preview-link');

		// get all preview titles
		const preview_titles = Array.from( document.querySelectorAll('.aigis-module > [id]') );

		// loop through each title
		preview_titles.forEach(title => {

			// get the title id
			// replace all non-alphanumeric characters with dashes
			// e.g. spaces, ampersands
			// convert it to lowercase
			const new_title_id = title.id
							.replace(/\W+/g, '-')
							.toLowerCase();

			// replace the title id with the new clean version
			title.id = new_title_id;

			// clone the hash anchor
			let title_link = link_template.cloneNode(true);

			// apply the current id as the href
			title_link.href = `#${new_title_id}`;

			// append the anchor to the title
			title.appendChild(title_link);

		});

	}

	initialisePage() {

		this.setActiveDropdown();
		this.initialiseMenu();

		// add a listener for a hash change
		window.addEventListener('hashchange', () => {
			this.checkHash();
		});

		// check to see if we've loaded in with a hash link
		this.checkHash();

		// setup the preview links next to the titles
		this.setPreviewLinks();

	}

}

// wrap this all in an IIFE
// doesn't pollute the global scope
(() => {

	// define the container
	const container = document.getElementById('styleguide-app');

	// create a new instance of the Styleguide class
	const app = new Styleguide(container);

	// initialise the page
	app.initialisePage();

})();
