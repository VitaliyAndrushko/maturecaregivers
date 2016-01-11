'use strict';

module.exports = function (grunt) {

    // load all grunt tasks
    //require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass : {
                files : 'public/stylesheets/*.scss',
                tasks : 'sass'
            }
        },
        express: {
            dev: {
                options: {
                    script: 'app.js'
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'public/stylesheets/style.css': 'public/stylesheets/style.scss'
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('default', ['sass', 'express', 'watch']);
};
