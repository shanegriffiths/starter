/*--------------------------------------------------*\

	Are you using the Styleguide?

	if false, please remove /styleguide_assets/

\*--------------------------------------------------*/

var is_styleguide = true;

 //***************
// Begin Gulpfile


var gulp = require('gulp'),

	// general
	fs = require('fs'),
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
	autoprefixer = require('gulp-autoprefixer'),
	cleanCss = require('gulp-clean-css'),
	globbing = require('gulp-css-globbing'),

	// scripts
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),

	// webpack
	runSequence = require('run-sequence'),
	webpack = require('webpack-stream'),

	// styleguide
	aigis = require('gulp-aigis');


 //**************
// ERROR HANDLER

function onError(err) {
	console.log(err);
	notify().write(err)
	this.emit('end');
};



 //******
// TASKS

gulp.task('compile-styleguide', function() {
	return gulp.src('./styleguide_assets/aigis_assets/scripts/styleguide.js')
		.pipe(webpack({
			module: {
				loaders: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: 'babel-loader',
						query: {
							plugins: ['transform-runtime'],
							presets: ['es2015'],
						}
					},
				]
			},
			entry: {
				styleguide: ['babel-polyfill', './styleguide_assets/aigis_assets/scripts/styleguide.js'],
			},
			output: {
				filename: '[name].js',
			},
		}))
		.pipe(gulp.dest('./styleguide_assets/aigis_assets/dist/'))
		.pipe(notify("Styleguide Assets Compiled"));
});

gulp.task('build-styleguide', function() {
	return gulp
		.src('./styleguide_config.yml')
		.pipe(aigis())
		.pipe(notify("Styleguide Generated"));
});

gulp.task('styleguide', function() {
	if ( fs.existsSync('./dist') ) {
		runSequence('compile-styleguide', 'build-styleguide');
	} else {
		console.log('\x1b[31m%s\x1b[0m', '\n ABORTED: directory "/dist" does not exist');
		console.log(' Run `yarn run build` to first compile project assets \n');
	}
});

gulp.task('styles', function () {

	// compile all scss files references in styles.css

	return gulp
		.src('./src/styles/styles.scss')
		.pipe(plumber({ errorHandler: onError }))
		.pipe(globbing({ extensions: ['.scss'] }))
		.pipe(sass())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulp.dest('dist/styles'))
		.pipe(concat('styles.min.css'))
		.pipe(cleanCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('dist/styles'))
		.pipe(livereload())
		.pipe(notify("Sass Compiled"));

});

gulp.task('scss-lint', function lintCssTask() {
	const gulpStylelint = require('gulp-stylelint');

	return gulp
		.src('src/styles/**/*.scss')
		.pipe(gulpStylelint({
			reporters: [
				{formatter: 'string', console: true}
			]
		}));
});

gulp.task('scripts', function () {

	// lint and uglify the main scripts file

	return gulp.src('src/scripts/main.js')
		.pipe(plumber({ errorHandler: onError }))
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest('dist/scripts/'))
		.pipe(livereload())
		.pipe(notify("JS Compiled"));

});

gulp.task('modernizr', function() {

	// checks both compiled js and css files for modernizr tests

	gulp.src(['src/scripts/main.js', 'src/styles/styles.css'])
		.pipe(modernizr({
			options: [
				"setClasses",
				"addTest",
				"html5printshiv",
				"testProp",
				"fnBind"
			],
			tests: [
				'fontface'
			]
		}))
		.pipe(uglify())
		.pipe(gulp.dest("dist/scripts/"));

});

gulp.task('svgstore', function() {

	// create a unified icon file from a range of svgs,
	// the compiled svg file will need including below the <body> tag

	return gulp
		.src('src/images/icons/*.svg')
		.pipe(svgmin())
		.pipe(svgstore({ inlineSvg: true }))
		.pipe(gulp.dest('dist/images/'));

});


 //******
// TASKS

// post deploy, for deploying to the server
gulp.task('post-deploy', ['styles', 'scripts']);

// if using styleguide
if ( is_styleguide === true ) {

	gulp.task('watch', function () {

		livereload.listen();

		// boilerplate
		gulp.watch('src/styles/**/*.scss', ['styles', 'scss-lint', 'styleguide']);
		gulp.watch('src/scripts/*.js', ['scripts']);

		// pattern library
		gulp.watch(['styleguide_src/aigis_src/styles/**/*.css', 'styleguide_src/template_ejs/*.ejs'], ['styleguide']);

	});

} else {

	gulp.task('watch', function () {

		livereload.listen();

		// boilerplate
		gulp.watch('src/styles/**/*.scss', ['styles', 'scss-lint']);
		gulp.watch('src/scripts/*.js', ['scripts']);

	});

}
