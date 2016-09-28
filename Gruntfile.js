module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        open: {
            dev: {
                path: 'http://localhost:8000'
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: 'build',
                    keepalive: true
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            main: {
                src: [
                    '/**/*.js'
                ],
                dest: 'working/cad.concat.js'
            }
        },
        copy: {
            dist: {
                expand: true,
                src: ['**/*', '!**/templates/**', '!**/**'],
                dest: 'build/'
            },
            dev: {
                expand: true,
                src: ['**/*', '!**/templates/**'],
                dest: 'build/'
            },
        },
        jshint: {
            options: {
                esversion: 6,
                browser: true,
                undef: true,
                unused: true,
                predef: [] //no predefined jshint functions
            },
            files: ['/js/*.js', 'Gruntfile.js']
        },
        htmllint: {
            all: ["build/**/*.html"]
        },
        clean: ['build', 'working']
    });

    grunt.registerTask('build', ['clean', 'concat', 'regenerator', 'uglify', 'copy:dist']);
    grunt.registerTask('build-dev', ['clean', 'ejs:dev', 'copy:dev']);
    grunt.registerTask('run', ['open:dev', 'connect']);
    grunt.registerTask('bar', ['build', 'run']);
    grunt.registerTask('bar-dev', ['build-dev', 'run']);
    grunt.registerTask('test', ['clean', 'jshint', 'ejs:dev', 'htmllint']);
    grunt.registerTask('default', ['bar']);
};
