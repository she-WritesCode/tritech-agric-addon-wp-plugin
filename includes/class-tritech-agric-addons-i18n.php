<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://she-writescode.github.io
 * @since      1.0.0
 *
 * @package    Tritech_Agric_Addons
 * @subpackage Tritech_Agric_Addons/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Tritech_Agric_Addons
 * @subpackage Tritech_Agric_Addons/includes
 * @author     Busola Okeowo <busolaokemoney@gmail.com>
 */
class Tritech_Agric_Addons_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'tritech-agric-addons',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
