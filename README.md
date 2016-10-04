# Web boilerplate and pattern library

Version 0.1.3

This is the boilerplate for our web based projects.

## Required assets in order to run the boilerplate

- [Install node](http://nodejs.org/download/)
- [Install gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
- [Install sass](http://sass-lang.com/install)
- [Install sass globbing](https://github.com/chriseppstein/sass-globbing)

## Setup process

1. Clone the repository and fire up terminal inside the root folder

2. Type the following command:

```
$ npm install
```
3. The npm command should install without error. Next, run:

```
$ npm run
```
You will then be presented with the scripts you have available to launch.

* **Build** - This is a one-time run script which builds alls assets. This script is mainly run in the post-deploy process.
* **Watch** - This is the development scripts. You will mostly use this during development. It'll enable LiveReload and compile all JS, Sass and HTML as you work.
* **Modernizr** - This is a dedicated script which runs Modernizr. Remember to manually add your test conditiions to the `gulp file`

Choose a command to run:

```
$ 
```

Gulp will watch the files within the assets directory and compile as necessary.

## Live Reload

In order to use livereload, we need to install the chrome plugin (or whatever you use)

 1. [Install LiveReload for chrome ](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)
 2. Enable the plugin in the Browser.

## Modernizr

Modernizr functionality is provided in this boilerplate. Modernizr doesn't work inside the `Watch` script. Instead you need to manually set the tests you want to add inside the gulpfile then use the `Modernizr` script to run.

## Style Guide Structure

The styleguide template structure loosely follows that of Brad Frost's [Pattern Lab](http://patternlab.io/about.html), in that we use the following template levels:

- **Atoms**
- **Molecules**
- **Organisms**
- **Templates**
- **Pages**

An explanation of this model can be found on the [Pattern Lab](http://patternlab.io/about.html) website.

In the styleguide the **pages** templates are important as these are exposed without the styleguide interface when accessed via the root URL.
