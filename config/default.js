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
            browserify: 'bundle'
        },
        paths: {
            curl: 'curl_downloads',
            source: 'src',
            translations: 'lang'
        },
        project: {
            composer: 'manovotny/wp-phpunit-helpers',
            description: 'Simple PHPUnit helpers for testing WordPress.',
            git: 'git://github.com/manovotny/wp-phpunit-helpers.git',
            name: 'WP PHPUnit Helpers',
            slug: 'wp-phpunit-helpers',
            type: 'plugin', // Should be `plugin` or `theme`.
            url: 'https://github.com/manovotny/wp-phpunit-helpers',
            version: '1.2.0'
        }
    };

}());
