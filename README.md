# The Idea Bureau - Front-end Boilerplate

This repository contains the front-end boilerplate we use at The Idea Bureau.

Project features:

- Grunt enabled
- Style guide ready
- Includes numerous style and behavior techniques

## Assets

The assets directory is used to contain front-end files such as CSS (Sass), JavaScript, images, fonts etc.

Grunt is used to process Sass, JavaScript and image files. 

- [Install node](http://nodejs.org/download/)
- Run the following commands within this directory:
  - `npm install`
  - `grunt auto`

Grunt will watch the files within the assets directory and compile as neccesary.

## Style Guide Structure

The styleguide template structure loosely follows that of Brad Frost's [Pattern Lab](http://patternlab.io/about.html), in that we use the following template levels:

- **Atoms**
- **Molecules**
- **Organisms**
- **Templates**
- **Pages**

An explaination of this model can be gound on the [Pattern Lab](http://patternlab.io/about.html) website.

In the styleguide the **pages** templates are important as these are exposed without the styleguide interface when accessed via the root URL.
