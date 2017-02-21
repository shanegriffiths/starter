# Web boilerplate and style guide

Version: 0.2.0

This is the boilerplate for our web based projects.

Please refer to the [CONTRIBUTING.md](./CONTRIBUTING.md) if you wish to improve this project.

## **Installation**

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

~~~
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
~~~

## **HTACCESS**

### WordPress Maintenance

```
ErrorDocument 503 /maintenance.html

# RewriteEngine On
# RewriteBase /
# RewriteCond %{REMOTE_ADDR} !^81\.174\.165\.192$
# RewriteCond %{REQUEST_FILENAME} !-f
# RewriteCond %{REQUEST_FILENAME} !-d
# RewriteRule .* /maintenance.html [R=503,L]
```

### WordPress Style guide redirect

```
Redirect 301 /styleguide /wp-content/themes/\__theme__/styleguide
```
