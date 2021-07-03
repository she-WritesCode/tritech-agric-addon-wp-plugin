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
class Tritech_Agric_Addons_Public {

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
	public function __construct( string $plugin_name, string $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	public function add_project_list_shortcode() {
		add_shortcode( 'ta_projects', [$this, 'renderProjectListShortcode'] );
	}

	public function renderProjectListShortcode($attributes = [], $content = null, $tag ): string {
		// normalize attribute keys, lowercase
		$attributes = array_change_key_case( (array) $attributes, CASE_LOWER );
		// override default attributes with user attributes
		$projects_attr = shortcode_atts(
			[ 'limit' => 20, 'page' => 0, 'style' => 'width: 100%; height: 100%;' ],
			$attributes,
			$tag
		);

		$iframe_url = 'https://dashboard.agric.tritech.com.ng/list-projects?limit=' . $projects_attr['limit'] . '&page='  . $projects_attr['page'];
		return '<div id="ta_projects"></div>';
//		return '<iframe class="ta_projects" src="'.$iframe_url.'" style="'.$projects_attr['style'].'"></iframe>';
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Tritech_Agric_Addons_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Tritech_Agric_Addons_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/tritech-agric-addons-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Tritech_Agric_Addons_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Tritech_Agric_Addons_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		global $post;

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/tritech-agric-addons-public.js', array( 'jquery' ), $this->version, false );

		if(has_shortcode($post->post_content, "ta_projects")){
			// $base_dir = 'http://localhost:8080/js';
			$base_dir = plugin_dir_url( __FILE__ ) . 'dist/js';
			// enqueue the Vue app script with localized data.
			wp_enqueue_script(
				$this->plugin_name.'_list-project',
				$base_dir . '/app.c6d2834c.js', // plugin_dir_url( __FILE__ ) . 'spa/dist/app.js'
				array(),
				'1.0.0',
				true,
			);
			wp_enqueue_script(
				$this->plugin_name.'_list-project-2',
				$base_dir . '/chunk-vendors.8d371d59.js', // plugin_dir_url( __FILE__ ) . 'spa/dist/chunk-vendors.js'
				array(),
				'1.0.0',
				true,
			);
		}
	}

}
