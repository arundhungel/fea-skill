import '../scss/main.scss'

require('../images/sprite.svg')
require('../images/logo.png')

// Import Bootstrap js components
import 'bootstrap/js/dist/collapse';

// Import jquery
import $ from "jquery";

// Responsive navigation
$('.navbar-toggler').on('click', function() {
    $(".navbar").toggleClass('navbar-bg-blue')
});