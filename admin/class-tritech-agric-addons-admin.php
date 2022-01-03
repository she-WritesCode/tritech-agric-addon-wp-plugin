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

	private $scriptHandles = [];

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
		echo '<div class="wrap"><div id="app"></div><div class="clear"></div></div>';
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

		$file = $base_dir . $this->get_hashed_file('style', 'css');
		wp_enqueue_style($this->plugin_name . '_admin_app', $file, [], $this->version, 'all');
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts()
	{
		wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/tritech-agric-addons-admin.js', array('jquery'), $this->version, false);
		$vueFileNames = ['index', 'vendor'];
		foreach ($vueFileNames as $file) {
			$filename = $this->get_hashed_file($file);
			array_push($this->scriptHandles, $this->plugin_name . '_' . $file);
			wp_enqueue_script(
				$this->plugin_name . '_'  . $file,
				plugin_dir_url(__FILE__) . 'dist/assets' . $filename,
				[],
				$this->version,
				false
			);
		}
		add_filter('script_loader_tag', [$this, 'add_type_attribute'], 10, 3);
	}

	public function add_type_attribute($tag, $handle, $src)
	{
		// if not your script, do nothing and return original $tag
		if (!in_array($handle, $this->scriptHandles)) {
			return $tag;
		}
		// change the script tag by adding type="module" and return it.
		if (strpos($handle, 'index') !== false) {
			$tag = '<script type="module" crossorigin src="' . esc_url($src) . '" id="' . $handle . '-js"></script>';
			return $tag;
		}
		$tag = '<link rel="modulepreload" href="' . esc_url($src) . '" id="' . $handle . '-js"/>';
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
