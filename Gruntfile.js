/**
 * Grunt configuration for front end deployment.
 *
 * The following tasks will generate development or production front end
 * ready code. This includes linting, compiling and minifying code. As a
 * standard `development` tasks will lint and compile (no minification) while
 * `production` tasks should compile and minify (no linting).
 *
 * @author jimmyhillis <jimmy@hatchd.com.au>
 * @author neilf <neil@hatchd.com.au>
 * @author janeyee <jane@hatchd.com.au>
 * @author jackarmley <jack@hatchd.com.au>
 * @author douglinder <doug@hatchd.com.au>
 */

var ext = require('./.gruntExt');
var registerCoopTasks = require('./.gruntCoop');
module.exports = function (grunt) {
    'use strict';

    // Setup eggbox
    registerCoopTasks(grunt);
    ext.configure({
        copy: {
            coop: {
                files: [{
                    expand: true,
                    src: ['libs/**/*', '!libs/empty-coop/**/*'],
                    dest: 'libs/empty-coop/static'
                }]
            }
        }
    });

    // Scripts
    ext.configure({
        typescript: {
            coop: {
                src: ['scripts/**/*.ts'],
                dest: 'libs/empty-coop/static',
                options: {
                    module: 'amd',
                    target: 'es3',
                    basePath: '',
                    sourceMap: true,
                    declaration: true,
                    comments: true
                }
            }
        },
        watch: {
            typescript: {
                files: ['defs/**/*', 'scripts/**/*.ts'],
                tasks: ['scripts'],
                options: {
                    spawn: true
                }
            }
        }
    });
    ext.registerTask('scripts', ['typescript:coop']);

    // Html
    ext.configure({
        jade: {
            html: {
                files: [
                    {
                        expand: true,
                        src: ['html/**/*.jade'],
                        dest: 'libs/empty-coop/static',
                        ext: '.html'
                    }
                ]
            }
        },
        watch: {
            html: {
                files: ['html/**/*.jade'],
                tasks: ['html'],
                options: {
                    spawn: true
                }
            }
        }
    });
    ext.registerTask('html', ['jade:html']);

    // Development mode
    ext.configure({
        connect: {
            dev: {
                options: {
                    port: 3000,
                    base: 'libs/empty-coop/static'
                }
            }
        }
    });

    // Load grunt configuration
    ext.initConfig(grunt);
    grunt.registerTask('default', ['copy:coop', 'scripts', 'empty-coop-default']);
    grunt.registerTask('development', ['default', 'connect', 'watch']);
};
