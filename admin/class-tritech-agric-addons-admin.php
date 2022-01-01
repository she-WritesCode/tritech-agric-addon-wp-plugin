<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://she-writescode.github.io
 * @since      1.0.0
 *
 * @package    Tritech_Agric_Addons
 * @subpackage Tritech_Agric_Addons/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Tritech_Agric_Addons
 * @subpackage Tritech_Agric_Addons/admin
 * @author     Busola Okeowo <busolaokemoney@gmail.com>
 */
class Tritech_Agric_Addons_Admin
{

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($plugin_name, $version)
	{

		$this->plugin_name = $plugin_name;
		$this->version = $version;
	}

	public function admin_menu()
	{
		global $submenu;

		$capability = 'manage_options';
		$slug = 'tritech-agric-addons';

		add_menu_page(
			__('Dashboard | Tritech Agric Addons', 'textdomain'),
			__('Tritech Agric Addons', 'textdomain'),
			$capability,
			$slug,
			[$this, 'menu_page_template'],
			''
		);

		if (current_user_can($capability)) {
			$submenu[$slug][] = [__('Dashboard', 'textdomain'), $capability, 'admin.php?page=' . $slug . '#/'];
			$submenu[$slug][] = [__('Projects', 'textdomain'), $capability, 'admin.php?page=' . $slug . '#/projects'];
		}
	}

	public function menu_page_template()
	{
		echo '<div id="app"></div>';
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles()
	{
		wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/tritech-agric-addons-admin.css', array(), $this->version, 'all');

		$base_dir = plugin_dir_url(__FILE__) . 'dist/assets';
		// $file = $base_dir . $this->get_hashed_file('vendor', 'css');
		// wp_enqueue_style($this->plugin_name . 'admin_vendors', $file, [], $this->version, 'all');

		$file = $base_dir . $this->get_hashed_file('index', 'css');
		wp_enqueue_style($this->plugin_name . 'admin_app', $file, [$this->plugin_name . 'vue_css'], $this->version, 'all');
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts()
	{
		wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/tritech-agric-addons-admin.js', array('jquery'), $this->version, false);

		$base_dir = plugin_dir_url(__FILE__) . 'dist/assets';
		// enqueue the Vue app script with localized data.
		$file = $base_dir . $this->get_hashed_file('index');
		$file_name = $this->plugin_name . '_admin';
		wp_enqueue_script(
			$file_name,
			$file,
			[],
			$this->version,
			true
		);
		$file2 = $base_dir . $this->get_hashed_file('vendor');
		$file2_name = $this->plugin_name . '_admin-2';
		wp_enqueue_script(
			$file2_name,
			$file2,
			[],
			$this->version,
			true
		);
		add_filter('script_loader_tag', [$this, 'add_type_attribute'], 10, 3);
	}

	public function add_type_attribute($tag, $handle, $src)
	{
		// if not your script, do nothing and return original $tag
		if (!in_array($handle, ['tritech-agric-addons_admin', 'tritech-agric-addons_admin-2'])) {
			return $tag;
		}
		// change the script tag by adding type="module" and return it.
		$tag = '<script id="' . $handle . '-js" type="module" src="' . esc_url($src) . '"></script>';
		return $tag;
	}

	public function get_hashed_file($filename, $extension = 'js')
	{
		$base_dir = dirname(__FILE__) . '/dist/assets/';
		$regex = '/\/[\w-]+\.[\w-]+.*/i';
		$fileWithHash = glob($base_dir . $filename . '.*.' . $extension)[0];
		preg_match($regex, $fileWithHash, $matches);
		return $matches[0];
	}
}
