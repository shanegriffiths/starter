$(document).ready(function() {

    //*********************
    // SVG ERROR REPORTING
    //
    // <img src="example.svg" data-fallback="example.png">

    if ( ! Modernizr.svg ) {

        $('img[data-fallback]').each(function() {

            // cache image element
            var $img = $(this);

            // replace svg with fallback
            $img.attr('src', $img.data('fallback'));

        });

    }


