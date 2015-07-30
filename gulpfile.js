var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	concat = require('gulp-concat'),
	scsslint = require('gulp-scss-lint'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCss = require('gulp-minify-css'),
	globbing = require('gulp-css-globbing'),
	notify = require("gulp-notify"),
	watch = require('gulp-watch'),
	scsslint = require('gulp-scss-lint'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

gulp.task('scss', function () {

	return gulp.src('./assets/scss/*.scss')
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

gulp.task('default', ['watch']);

gulp.task('watch', function () {
	gulp.watch('assets/scss/**/*.scss', ['scss']);
	gulp.watch('assets/js/*.js', ['js']);
});

gulp.task('bs', function () {

	browserSync.init({
		proxy: "dev.frontendboilerplate.com",
		host: "localhost"
	});

	gulp.watch('assets/scss/**/*.scss', ['scss:bs']);
	gulp.watch("./*.html").on('change', browserSync.reload);

});
