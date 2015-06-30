'use strict';

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			options: {
				outputStyle: 'compressed'
			},
			dist: {
				files: {
					'css/main.css': 'scss/main.scss'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 10 versions', 'ie 6']
			},
			dist: {
				files: {
					'css/main.css': 'css/main.css'
				}
			}
		},
		cssmin: {
			target: {
				files: {
					'dist/main.css': 'css/main.css'
				}
			}
		}
	});

	grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin']);
}