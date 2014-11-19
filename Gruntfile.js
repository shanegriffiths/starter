module.exports = function(grunt) {

	require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// shell: {
		// 	remove: {
		// 		command: [
		// 			'rm -rf assets/css/*',
        //             'rm -rf assets/js/*',
	    //         ].join('&&')
		//
		// 	}
		// },
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'assets/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'assets/img/'
				}]
			}
		},
		svgmin: {
			options: {
				plugins: [
					{ removeViewBox: false },
					{ removeUselessStrokeAndFill: false }
				]
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'assets/img/',
					src: ['**/*.svg'],
					dest: 'assets/img/'
				}]
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded',
					require: 'sass-globbing'
				},
				files: {
					'assets/css/styles.css': 'assets/scss/styles.scss'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 version', 'ie 8', 'ie 9']
			},
			single_file: {
				src: 'assets/css/styles.css'
			},
		},
		csslint: {
			options: {
				import: false,
				csslintrc: '.csslintrc'
			},
			lint: {
				src: ['assets/css/styles.css']
			}
		},
		cmq: {
		    options: {
		    	log: false
		    },
		    your_target: {
			    files: {
			      'assets/css/styles.css': ['assets/css/styles.css']
			    }
		    }
		},
		cssmin: {
			minify: {
				files: {
					'assets/css/styles.min.css' : 'assets/css/styles.css'
				}
			}
		},
		uglify: {
			scripts: {
				src: 'assets/js/main.js',
				dest: 'assets/js/main.min.js'
			},
		},
		jshint: {
			options: {
				reporter: require('jshint-stylish'),
				smarttabs: true
			},
			target: ['assets/js/main.js']
		},
		modernizr: {

			// [REQUIRED] Path to the build you're using for development.
			"devFile" : "assets/js/libs/modernizr.js",

			// [REQUIRED] Path to save out the built file.
			"outputFile" : "assets/js/libs/modernizr.js",

			// Based on default settings on http://modernizr.com/download/
			"extra" : {
				"shiv" : false,
				"printshiv" : false,
				"load" : true,
				"mq" : true,
				"cssclasses" : true
			},

			// Based on default settings on http://modernizr.com/download/
			"extensibility" : {
				"fontface" : true,
				"svg" : true,
				"touch" : true,
			},

			// By default, source is uglified before saving
			"uglify" : true,

			// Define any tests you want to implicitly include.
			"tests" : [],

			// By default, this task will crawl your project for references to Modernizr tests.
			// Set to false to disable.
			"parseFiles" : true,

			// When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
			// You can override this by defining a "files" array below.
			"files" : [ 'assets/js/main.js', 'assets/css/styles.css' ],

			// When parseFiles = true, matchCommunityTests = true will attempt to
			// match user-contributed tests.
			"matchCommunityTests" : false,

			// Have custom Modernizr tests? Add paths to their location here.
			"customTests" : []
		},
		notify: {
			default: {
				options: {
					title: 'Grunt Complete',  // optional
					message: 'Success!' //required
				}
			},
			css: {
				options: {
					title: 'Task Complete',  // optional
					message: 'CSS Compiled' //required
				}
			},
			scripts: {
				options: {
					title: 'Task Complete',
					message: 'JavaScript Compiled'
				}
			}
		},
		watch: {
			images: {
			    files: ['assets/img/**/*.{png,jpg,gif}', 'assets/img/*.{png,jpg,gif}'],
			    tasks: ['newer:imagemin'],
			    options: {
			        spawn: false
			    },
			},
			styles: {
				files: ['assets/scss/*.scss', 'assets/scss/**/*.scss'],
				tasks: ['modernizr', 'sass', 'newer:autoprefixer', 'csslint', 'cmq', 'cssmin', 'notify:css'],
				options: {
					spawn: false
				}
			},
			scripts: {
				files: ['assets/js/*.js', 'assets/js/**/*.js'],
				tasks: ['modernizr', 'jshint', 'uglify', 'notify:scripts'],
				options: {
					spawn: false
				},
			},
			livereload: {
				files: ['*.html', '*.php', '**/*.php', 'assets/js/*.{js,json}', 'assets/css/*.css', 'assets/scss/**/*.scss', 'assets/scss/*.scss','assets/img/**/*.{png,jpg,jpeg,gif,webp,svg}', 'assets/img/*.{png,jpg,jpeg,gif,webp,svg}'],
				options: {
					livereload: true
				}
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-svgmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks("grunt-modernizr");
	grunt.loadNpmTasks("grunt-newer");
	grunt.loadNpmTasks('grunt-combine-media-queries');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-notify');

	grunt.registerTask('default', ['imagemin', 'svgmin', 'sass', 'autoprefixer', 'csslint', 'cmq', 'cssmin', 'modernizr', 'uglify', 'jshint', 'notify:default']);
	grunt.registerTask('auto', ['watch']);
	grunt.registerTask('post-deploy', ['sass', 'autoprefixer', 'cmq', 'cssmin', 'modernizr']);
};
