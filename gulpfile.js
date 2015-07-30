var gulp = require('gulp'),

	// general
	watch = require('gulp-watch'),
	rename = require('gulp-rename')
	concat = require('gulp-concat'),
	notify = require("gulp-notify"),
	browserSync = require('browser-sync').create(),
	plumber = require('gulp-plumber'),

	// styles
	sass = require('gulp-sass'),
	scsslint = require('gulp-scss-lint'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCss = require('gulp-minify-css'),
	globbing = require('gulp-css-globbing'),

	// scripts
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify');


 //**************
// ERROR HANDLER

function onError(err) {
	console.log(err);
	notify().write(err)
	this.emit('end');
};


 //******
// TASKS

gulp.task('scss', function () {

	return gulp.src('./assets/scss/*.scss')
		.pipe(plumber({ errorHandler: onError }))
		.pipe(globbing({ extensions: ['.scss'] }))
		.pipe(sass().on('error', function (err) {
			return notify().write(err);
		}))
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulp.dest('assets/css'))
		.pipe(concat('styles.min.css'))
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('assets/css'))
		.pipe(notify("Sass Compiled"));

});

gulp.task('js', function () {

	return gulp.src('assets/js/main.js')
		.pipe(plumber({ errorHandler: onError }))
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest('assets/js/'));

});

gulp.task('scss:bs', function () {

	return gulp.src('./assets/scss/*.scss')
		.pipe(plumber({ errorHandler: onError }))
		.pipe(globbing({ extensions: ['.scss'] }))
		.pipe(sass().on('error', function (err) {
			return notify().write(err);
		}))
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulp.dest('assets/css'))
		.pipe(browserSync.reload({stream: true}))
		.pipe(concat('styles.min.css'))
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('assets/css'))
		.pipe(notify("Sass Compiled"));

});

gulp.task('bs', function () {

	browserSync.init({
		proxy: "dev.frontendboilerplate.com",
		host: "localhost"
	});

	gulp.watch('assets/scss/**/*.scss', ['scss:bs']);
	gulp.watch("./*.html").on('change', browserSync.reload);

});


 //******
// WATCH

gulp.task('default', ['watch']);

gulp.task('watch', function () {
	gulp.watch('assets/scss/**/*.scss', ['scss']);
	gulp.watch('assets/js/*.js', ['js']);
});
