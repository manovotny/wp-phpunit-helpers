module.exports = (function () {

    'use strict';

    return {
        author: {
            email: 'manovotny@gmail.com',
            name: 'Michael Novotny',
            url: 'http://manovotny.com',
            username: 'manovotny'
        },
        files: {
            bower: 'bower.json',
            composer: 'composer.json',
            composerLock: 'composer.lock',
            grunt: 'Gruntfile.js',
            jshint: '.jshintrc',
            package: 'package.json',
            readme: 'README.md',
            replace: 'replace.js',
            sassLint: '.scss-lint.yml',
            style: 'style.css'
        },
        paths: {
            admin: 'admin',
            bower: 'bower_components',
            classes: 'classes',
            composer: 'vendor',
            config: 'config',
            css: 'css',
            grunt: 'grunt',
            inc: 'inc',
            js: 'js',
            lib: 'lib',
            phpunit: 'vendor/bin/phpunit',
            sass: 'sass',
            tests: 'tests',
            translations: 'lang',
            views: 'views'
        },
        project: {
            composer: 'manovotny/wp-phpunit-helpers',
            copyright: '2014 Michael Novotny',
            description: 'Simple PHPUnit helpers for testing WordPresss.',
            git: 'git://github.com/manovotny/wp-phpunit-helpers.git',
            name: 'WP PHPUnit Helpers',
            package: 'WP_PHPUnit_Helpers',
            slug: 'wp-phpunit-helpers',
            type: 'plugin', // Should be `plugin` or `theme`.
            url: 'https://github.com/manovotny/wp-phpunit-helpers',
            version: '0.1.0'
        }
    };

}());
