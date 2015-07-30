# The Idea Bureau - Front-end Boilerplate

This repository contains the front-end boilerplate we use at The Idea Bureau.

Project features:

- Gulp enabled
- Style guide ready
- Includes numerous style and behaviour techniques
- [Editorconfig](http://editorconfig.org/)

## Up and Running

We have a generator for Yeoman that scaffolds this workstation.

1. Install [Yeoman](http://yeoman.io)

	```
	$ npm install -g yo
	```

2. Install the [generator](https://www.npmjs.com/package/generator-the-idea-bureau-scaffolder)

	```
	$ npm install -g generator-the-idea-bureau-scaffolder
	```

3. Run it

	```
	$ yo the-idea-bureau-scaffolder
	```

4. Install node packages. Run...

	```
	$ npm install
	```

## Assets

The assets directory is used to contain front-end files such as CSS (Sass), JavaScript, images, fonts etc.

Gulp is used to process Sass, JavaScript and image files.

- [Install node](http://nodejs.org/download/)
- [Install gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
- [Install sass](http://sass-lang.com/install)
- [Install sass globbing](https://github.com/chriseppstein/sass-globbing)
- Run the following commands within this directory:
  - `npm install`
  - `gulp`

Gulp will watch the files within the assets directory and compile as necessary.

## Browser Sync and Live Reload

[BrowserSync](http://www.browsersync.io/) has been included with the gulp build, simply change the proxy url in the gulpfile.js and run:
-   `gulp bs`

Currently there is no support for Live Reload

## Style Guide Structure

The styleguide template structure loosely follows that of Brad Frost's [Pattern Lab](http://patternlab.io/about.html), in that we use the following template levels:

- **Atoms**
- **Molecules**
- **Organisms**
- **Templates**
- **Pages**

An explanation of this model can be found on the [Pattern Lab](http://patternlab.io/about.html) website.

In the styleguide the **pages** templates are important as these are exposed without the styleguide interface when accessed via the root URL.
