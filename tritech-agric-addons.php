<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://she-writescode.github.io
 * @since             1.0.0
 * @package           Tritech_Agric_Addons
 *
 * @wordpress-plugin
 * Plugin Name:       Addons for Tritech Agric
 * Plugin URI:        https://she-writescode.github.io
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            Busola Okeowo
 * Author URI:        https://she-writescode.github.io
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       tritech-agric-addons
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'TRITECH_AGRIC_ADDONS_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-tritech-agric-addons-activator.php
 */
function activate_tritech_agric_addons() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-tritech-agric-addons-activator.php';
	Tritech_Agric_Addons_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-tritech-agric-addons-deactivator.php
 */
function deactivate_tritech_agric_addons() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-tritech-agric-addons-deactivator.php';
	Tritech_Agric_Addons_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_tritech_agric_addons' );
register_deactivation_hook( __FILE__, 'deactivate_tritech_agric_addons' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-tritech-agric-addons.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_tritech_agric_addons() {

	$plugin = new Tritech_Agric_Addons();
	$plugin->run();

}
run_tritech_agric_addons();
