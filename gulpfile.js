var gulp = require('gulp'),

	// general
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload'),
	rename = require('gulp-rename')
	concat = require('gulp-concat'),
	notify = require("gulp-notify"),
	plumber = require('gulp-plumber'),
	modernizr = require('gulp-modernizr'),
	svgstore = require('gulp-svgstore'),
	svgmin = require('gulp-svgmin'),

	// styles
	sass = require('gulp-sass'),
	scsslint = require('gulp-scss-lint'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCss = require('gulp-clean-css'),
	globbing = require('gulp-css-globbing'),

	// scripts
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),

	// pattern library
	patternLibrary = require("gulp-theideabureau-pattern-library");


 //******
// TASKS

gulp.task('scss', function () {

	// compile all scss files references in styles.css

	return gulp
		.src('./assets/scss/styles.scss')
		.pipe(plumber({ errorHandler: onError }))
		.pipe(globbing({ extensions: ['.scss'] }))
		.pipe(sass())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulp.dest('assets/css'))
		.pipe(concat('styles.min.css'))
		.pipe(cleanCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('assets/css'))
		.pipe(livereload())
		.pipe(notify("Sass Compiled"));

});

gulp.task('scss-lint', function() {

	// lint the styles whilst developing

	return gulp
		.src('assets/scss/**/*.scss')
		.pipe(scsslint({'config': 'lint.yml'}));

});

gulp.task('js', function () {

	// lint and uglify the main scripts file

	return gulp.src('assets/js/main.js')
		.pipe(plumber({ errorHandler: onError }))
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest('assets/js/'))
		.pipe(livereload())
		.pipe(notify("JS Compiled"));

});

gulp.task('modernizr', ['scss', 'js'], function() {

	// checks both compiled js and css files for modernizr tests

	gulp.src(['assets/js/main.js', 'assets/css/styles.css'])
		.pipe(modernizr({
			options: [
				"setClasses",
				"addTest",
				"html5printshiv",
				"testProp",
				"fnBind"
			]
		}))
		.pipe(uglify())
		.pipe(gulp.dest("assets/js/libs/"));

});

gulp.task('svgstore', function() {

	// create a unified icon file from a range of svgs,
	// the compiled svg file will need including below the <body> tag

    return gulp
        .src('assets/img/icons/*.svg')
		.pipe(svgmin())
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(gulp.dest('assets/img/'));

});


 //****************
// PATTERN LIBRARY

gulp.task('templates', function() {

	// compiles templates into a pattern library json file

	return gulp.src(['patterns/templates/**/*.html', 'patterns/templates/**/*.json'])
		.pipe(patternLibrary({
			filename: 'paths.json'
		}))
		.pipe(gulp.dest('patterns'));

});

gulp.task('pattern-styles', function () {

	// compiles the styles associated to the pattern library *only*

	return gulp.src('patterns/app/scss/**/*.scss')
		.pipe(plumber({ errorHandler: onError }))
		.pipe(globbing({ extensions: ['.scss'] }))
		.pipe(sass())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulp.dest('patterns/build/css'))
		.pipe(concat('styles.min.css'))
		.pipe(cleanCss({compatibility: 'ie8'}))
		.pipe(livereload())
		.pipe(notify("Pattern Styles Compiled"));

});

gulp.task('pattern-scripts', function () {

	// compiles the scripts associated to the pattern library *only*

	return gulp.src('patterns/app/js/main.js')
		.pipe(plumber({ errorHandler: onError }))
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest('patterns/build/js'))
		.pipe(livereload())
		.pipe(notify("Pattern Scripts Compiled"));

});


 //******
// TASKS

// post deploy, for deploying to the server
gulp.task('post-deploy', ['templates', 'scss', 'js', 'modernizr']);

// default watch, for normal development
gulp.task('default', ['watch']);
gulp.task('watch', function () {

	livereload.listen();

	// boilerplate
	gulp.watch('assets/scss/**/*.scss', ['scss', 'scss-lint', 'modernizr']);
	gulp.watch('assets/js/*.js', ['js', 'modernizr']);

	// pattern library
	gulp.watch(['patterns/templates/**/*.html', 'patterns/templates/**/*.json'], ['templates']);
	gulp.watch('patterns/app/scss/**/*.scss', ['pattern-styles']);
	gulp.watch('patterns/app/js/*.js', ['pattern-scripts']);

});


 //**************
// ERROR HANDLER

function onError(err) {
	console.log(err);
	notify().write(err)
	this.emit('end');
};
