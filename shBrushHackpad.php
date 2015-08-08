<?php
/*
Plugin Name: SyntaxHighlighter Evolved: H Brush
Description: Adds support for the H language to the SyntaxHighlighter Evolved plugin. As used in mobile app "Hacked" (www.hackedapp.com). Plugin includes Hackpad theme to make code samples look more like the Hackpad UI from the app itself.
Author: Andrew Johns
Version: 0.0.1
Author URI: http://andrewjohns.net
*/
 
add_action( 'init', 'syntaxhighlighter_hackpad_regscript' );
 
add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_hackpad_addlang' );
add_filter( 'syntaxhighlighter_themes', 'syntaxhighlighter_hackpad_addtheme' );
 
function syntaxhighlighter_hackpad_regscript() {
    wp_register_script( 'syntaxhighlighter-brush-hackpad', plugins_url( 'shBrushHackpad.js', __FILE__ ), array('syntaxhighlighter-core'), '0.0.1' );    

wp_register_style(
        'syntaxhighlighter-theme-hackpad',
        plugins_url( 'shBrushHackpad/styles/shBrushHackpad.css'),
        array( 'syntaxhighlighter-core' ),
        '0.0.1'
    );
}
 
function syntaxhighlighter_hackpad_addlang( $brushes ) {
    $brushes['hackpad'] = 'hackpad';
    $brushes['hack'] = 'hackpad';
 
    return $brushes;
}

function syntaxhighlighter_hackpad_addtheme( $themes ) {
    $themes['hackpad'] = 'Hackpad';
 
    return $themes;
}
 
?>