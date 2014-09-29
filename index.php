<?php

// initialise the style guide
require 'styleguide/init.php';

// get the url without start / end slashes
$url = trim($_SERVER['REQUEST_URI'], '/');

// build up the template path
$template_path = '_templates/pages/' . $url;

// attempt to find a file based on the specified URL
// the default file path is NULL, if this remains throw 404

$file_path = NULL;

if ( is_file($template_path . 'index.php') ) {
	$file_path = $template_path . 'index.php';
}

if ( is_file($template_path . '.php') ) {
	$file_path = $template_path . '.php';
}

// throw a 404?
if ( $file_path === NULL ) {

	// pass back the 404 status code
	header("HTTP/1.0 404 Not Found");

	// and output the 404 template
	$file_path = '404.php';
	
}

// build output
include $_SERVER['DOCUMENT_ROOT'] . '/_templates/_header.php';
include $file_path;
include $_SERVER['DOCUMENT_ROOT'] . '/_templates/_footer.php';
