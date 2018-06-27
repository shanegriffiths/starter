# The Idea Bureau, Style Guide

Version: 1.2.0

This is the front-end boilerplate for our web based projects. It contains our front end tooling setup, and the style guide system we use.

Please refer to the [CONTRIBUTING.md](./CONTRIBUTING.md) if you wish to improve this project.

## **Installation**

> Disclaimer: this setup was built for use with OS X so you may need to adjust as necessary if you encounter any issues using a different system.

### Required assets in order to run the boilerplate

- [Install node](http://nodejs.org/download/)
- [Install yarn](https://yarnpkg.com/en/)
- [Install gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
- [Install sass](http://sass-lang.com/install)
- [Install sass globbing](https://github.com/chriseppstein/sass-globbing)

### Setup process

1. Clone the repository and fire up a terminal window inside the root folder

2. Type the following command:

```
yarn
```
3. The yarn command should install without error. Next, run:

```
yarn run
```
You will then be presented with the development scripts you have available to run.

* **Build** - This is a one-time run script which generates all of the assets. This script is mainly run in the post-deploy process.
* **Watch** - This enables the watch task on all assets, and triggers LiveReload.
* **Modernizr** - This is a dedicated script which runs Modernizr. Remember to manually add your test conditions to the `gulpfile`
* **Style guide** - This will generate a fresh style guide under `/styleguide/`.
* **Deploy style guide** - This will deploy the style guide to its appropriate GitHub Page.

---

To run one of the above tasks, re-run the `yarn run` command and add the task name, for example:

```
yarn run watch
```

## **Labels**

We use a custom label structure, to install them in the repository use [git-labelmaker](https://github.com/himynameisdave/git-labelmaker) to remove all the old labels, and install the new ones found in `.github/labels.json`

## **Optional Extras**

### Live Reload

In order to use live reload, you need to install the browser-extension. We use [Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).

### Modernizr

Modernizr functionality is provided in this boilerplate. Modernizr doesn't work inside the `watch` script. Instead you need to manually set the tests you want to add inside the gulpfile then use the `modernizr` script to run.

---

## **Asset Structure**

We take inspiration from the [SMACSS architecture](https://smacss.com/).

- **Base** - Base elements and utilities
- **Layout** - Spacing, major UI components, and layout structures
- **Modular** - All repeatable UI components
- **Tools** - Setup, Variables, Mixins, Fonts, Grid

---

## **SVG's**

We're making use of an SVG icon system that is loaded into the HTML document, this is so we can use JS and CSS to change specific parts of an icon - and dynamically colour it. Our current method is to use AJAX to request the `icons.svg` and insert it in a hidden div at the start of the body.

The code for this can be found at the bottom of the style guide's `index.ejs`. It is currently within inline script tags in order to run as soon as possible before the rest of the JS is downloaded.

- All of our SVG's are first run through [SVGOMG](https://jakearchibald.github.io/svgomg/) to optimise them.
- Then they are sorted between being part of the icon-system or to be used as an image.
	- The icon-system is filled with re-usable icons that are modifiable via CSS.
	- To add to the icon-system the SVG must be placed at `/src/images/icons/` and then you run `gulp svgstore`

---

## **Style Guide**

### Background

The style guide we use is a custom, re-themed version of [Aigis](https://pxgrid.github.io/aigis/).

### Structure

The style guide template structure loosely follows that of Brad Frost's [Pattern Lab](http://patternlab.io/about.html), in that we take inspiration for the following template levels:

- **Base** - This represents the atomic level (base styles)
- **Components** - This represents the modular UI components
- **Layout** - This represents structural framework components

### Config

There is a `styleguide_config.yml` file that dictates: where the style guide will search for references, the destination directory, and which assets get compiled into the destination.

- **source:** - This references where you keep your working sass files.
- **dest:** - This is the destination folder for the generated style guide, if this changes you will need to update the `deploy-styleguide` script in the `package.json`.
- **dependencies:** - This will reference your destination folder for compiled assets: css, js, images etc.

### Usage

The style guide is generated through comments in the `.scss` that follow a simple structure detailed below. The generation is on-the-fly through `yarn run watch` or manual via `yarn run styleguide`.

There is a boolean flag in the gulpfile incase you would rather not use the style guide.

	```
	/*

	---
	name: Title Here
	category:
	 - Category
	 - Category/Title
	---

	## Markdown description

	Hello Component!

	* Use the `.alt--class` modifier.

	```html
	<span>HTML Example</span>
	<span class="alt--class">HTML Example</span>
	```

	*/
	```

### Colours

Style guide colours are handled through `_colours.scss`. The markup is created through compiling an EJS code block, you just have to provide the data. The documentation parameters accept a colours dataset that must be filled out as follows:
- Colour name
- Colour hex code
- [optional] Light colour hex code
- [optional] Dark colour hex code

```
---
name: Brand
category:
 - Design
 - Design/Colours
colours: [
  ['Purple', 'AE4C90', 'C584B1', '8B3C73'],
  ['Blue', '66CAE1', '97DAE9', '3BBBD9']
 ]
compile: true
---
```
---
## **HTACCESS**

This section contains optional snippets of code that can be added to the root `.htaccess` file.

### Auth Page

This snippet is used to redirect to a login page (`auth.php`) if a cookie is not met.

```
# RewriteEngine on
# RewriteCond %{REQUEST_URI} !^/auth.php [NC]
# RewriteCond %{HTTP_COOKIE} !ib_auth=5d04a0c093053a04d00d7e1d9bc01490
# RewriteRule (.*) /auth.php?r=$1 [R=302,L]
```

### Maintenance

The first line of this specifies that when the server is throwing a 503 error, the `maintenance.html` should be served.

The remaining lines are prefixed with a # to denote they are commented out. Removing the hashes will throw a 503 and force a redirect to the maintenance page - while ignoring The Idea Bureau Studio's IP address.

```
ErrorDocument 503 /maintenance.html

# RewriteEngine On
# RewriteBase /
# RewriteCond %{REMOTE_ADDR} !^81\.174\.165\.192$
# RewriteCond %{REQUEST_FILENAME} !-f
# RewriteCond %{REQUEST_FILENAME} !-d
# RewriteRule .* /maintenance.html [R=503,L]
```

### Style guide redirect

The following line contains two parameters, it states that when you navigate to `/styleguide` you will be redirected to `/wp-content/themes/wp-example/styleguide` - the actual location of the styleguide.

```
Redirect 301 /styleguide /wp-content/themes/wp-example/styleguide
```
