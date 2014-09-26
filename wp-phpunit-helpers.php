<?php
/**
 * @package WP_PHPUnit_Helpers
 *
 * @wordpress-plugin
 * Plugin Name: WP PHPUnit Helpers
 * Plugin URI: https://github.com/manovotny/wp-phpunit-helpers
 * Description: Simple PHPUnit helpers for testing WordPress.
 * Version: 1.0.0
 * Author: Michael Novotny
 * Author URI: http://manovotny.com
 * License: GPL-3.0+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 * Domain Path: /lang
 * Text Domain: wp-phpunit-helpers
 * GitHub Plugin URI: https://github.com/manovotny/wp-phpunit-helpers
 */

/* Access
---------------------------------------------------------------------------------- */

if ( ! defined( 'WPINC' ) ) {

    die;

}

/* Composer
---------------------------------------------------------------------------------- */

if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {

    require_once __DIR__ . '/vendor/autoload.php';

}

/* Initialization
---------------------------------------------------------------------------------- */

require_once __DIR__ . '/src/initialize.php';