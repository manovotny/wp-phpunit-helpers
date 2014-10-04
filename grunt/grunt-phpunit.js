module.exports = function (grunt) {

    'use strict';

    grunt.config('phpunit', {
        options: {
            bin: 'vendor/bin/phpunit',
            bootstrap: 'wp-phpunit-helpers.php',
            colors: true
        },
        tests: {
            coverage: true,
            dir: 'tests'
        }
    });

};