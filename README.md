# The Idea Bureau - Style Guide Boilerplate

This repository contains the boilerplate style guide used here at The Idea Bureau.

The purpose of this repository is to store the templates used to build the various parts of the styleguide.

The styleguide core is a self-contained submodule.

## Template Structure

The styleguide template structure loosely follows that of Brad Frost's [Pattern Lab](http://patternlab.io/about.html), in that we use the following template levels:

- **Atoms**
- **Molecules**
- **Organisms**
- **Templates**
- **Pages**

An explaination of this model can be gound on the [Pattern Lab](http://patternlab.io/about.html) website.

In the styleguide the **pages** templates are important as these are exposed without the styleguide interface when accessed via the root URL.

## Assets

The `/assets` directory is used to contain front-end files such as CSS (Sass), JavaScript, images, fonts etc.

Grunt is used to process Sass, JavaScript and image files. 

- [Install node](http://nodejs.org/download/)
- Run the following commands:
  - `cd styleguide_root_dir`
  - `npm install`
  - `grunt auto`

Grunt will watch the files within the assets directory and compile as neccesary.