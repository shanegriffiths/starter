module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'assets/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'assets/img/',
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
					dest: 'assets/img/',
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
					'assets/css/screen.css': 'assets/scss/screen.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 version', 'ie 8', 'ie 9']
			},
			single_file: {
				src: 'assets/css/screen.css'
			},
		},

		cssmin: {
			minify: {
				files: {
					'assets/css/screen.min.css' : 'assets/css/screen.css'
				}
			}
		},

		uglify: {
			scripts: {
				src: 'assets/js/scripts.js',
				dest: 'assets/js/scripts.min.js'
			},
		},

		watch: {
			images: {
				files: ['assets/img/**/*.{png,jpg,gif}', 'assets/img/*.{png,jpg,gif}'],
				tasks: ['newer:imagemin'],
				options: {
					spawn: false,
				},
			},
			styles: {
				files: ['assets/scss/*.scss', 'assets/scss/**/*.scss'],
				tasks: ['sass', 'newer:autoprefixer', 'cssmin', 'notify:css'],
				options: {
					spawn: false,
				}
			},
			scripts: {
				files: ['assets/js/*.js', 'assets/js/**/*.js'],
				tasks: ['uglify', 'notify:js'],
				options: {
					spawn: false,
				},
			}
		},

		notify: {
			base: {
				options: {
					title: 'Task Complete',
					message: 'Grunt Compiled',
				}
			},
			css: {
				options: {
					title: 'Task Complete',
					message: 'CSS Compiled',
				}
			},
			js: {
				options: {
					title: 'Task Complete',
					message: 'JS Compiled',
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
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks("grunt-newer");
	grunt.loadNpmTasks('grunt-notify');

	grunt.registerTask('default', ['imagemin', 'svgmin', 'sass', 'autoprefixer', 'cssmin', 'uglify','notify:base']);
	grunt.registerTask('auto', ['watch']);
};
