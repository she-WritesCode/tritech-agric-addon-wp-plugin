<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://she-writescode.github.io
 * @since      1.0.0
 *
 * @package    Tritech_Agric_Addons
 * @subpackage Tritech_Agric_Addons/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Tritech_Agric_Addons
 * @subpackage Tritech_Agric_Addons/public
 * @author     Busola Okeowo <busolaokemoney@gmail.com>
 */
class Tritech_Agric_Addons_Public
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
	 * @param      string    $plugin_name The name of the plugin.
	 * @param string $version    The version of this plugin.
	 *
	 *@since    1.0.0
	 */
	public function __construct(string $plugin_name, string $version)
	{

		$this->plugin_name = $plugin_name;
		$this->version = $version;
	}

	public function add_shortcodes()
	{
		$this->add_project_list_shortcode();
		$this->add_project_details_shortcode();
	}

	public function add_project_list_shortcode()
	{
		add_shortcode('ta_projects', [$this, 'renderProjectListShortcode']);
	}

	public function add_project_details_shortcode()
	{
		add_shortcode('ta_project_details', [$this, 'renderProjectDetailsShortcode']);
	}

	public function renderProjectListShortcode($attributes = [], $content = null, $tag): string
	{
		// normalize attribute keys, lowercase
		$attributes = array_change_key_case((array) $attributes, CASE_LOWER);
		// override default attributes with user attributes
		$projects_attr = shortcode_atts(
			['limit' => 20, 'page' => 0, 'style' => 'width: 100%; height: 100%;'],
			$attributes,
			$tag
		);

		return '<div id="ta_projects"></div>';
	}

	public function renderProjectDetailsShortcode($attributes = [], $content = null, $tag): string
	{
		return '<div id="ta_project_details"></div>';
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles()
	{

		wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/tritech-agric-addons-public.css', [], $this->version, 'all');

		$base_dir = plugin_dir_url(__FILE__) . 'dist/css';
		$file = $base_dir . $this->get_hashed_file('chunk-vendors', 'css');
		wp_enqueue_style($this->plugin_name . 'vue_chunk-vendors', $file, [], $this->version, 'all');

		$file = $base_dir . $this->get_hashed_file('app', 'css');
		wp_enqueue_style($this->plugin_name . 'vue_app', $file, [$this->plugin_name . 'vue_chunk-vendors'], $this->version, 'all');
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts()
	{

		global $post;

		wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/tritech-agric-addons-public.js', ['jquery'], $this->version, false);

		if (has_shortcode($post->post_content, "ta_projects") or has_shortcode($post->post_content, "ta_project_details")) {
			$base_dir = plugin_dir_url(__FILE__) . 'dist/js';
			// enqueue the Vue app script with localized data.
			$file = $base_dir . $this->get_hashed_file('app');
			wp_enqueue_script(
				$this->plugin_name . '_list-project',
				$file,
				[],
				$this->version,
				true
			);
			$file2 = $base_dir . $this->get_hashed_file('chunk-vendors');
			wp_enqueue_script(
				$this->plugin_name . '_list-project-2',
				$file2,
				[],
				$this->version,
				true
			);
		}
	}

	public function get_hashed_file($filename, $extension = 'js')
	{
		$base_dir = dirname(__FILE__) . '/dist/' . $extension . '/';
		$regex = '/\/[\w-]+\.[\w-]+.*/i';
		$fileWithHash = glob($base_dir . $filename . '.*.' . $extension)[0];
		preg_match($regex, $fileWithHash, $matches);
		return $matches[0];
	}
}
