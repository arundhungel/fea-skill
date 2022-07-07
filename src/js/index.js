import '../scss/main.scss'

// Import Images
import '../images/sprite.svg'
import '../images/logo.png'
import '../images/logo-white.png'
import '../images/hero.jpg'
import '../images/mission.jpg'
import '../images/maria.jpg'
import '../images/roger.png'

import '../images/bene-1.png'
import '../images/bene-2.png'
import '../images/bene-3.png'

import '../images/apple-touch-icon.png'

// Import Bootstrap js components
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';

// Import jquery
import $ from "jquery";

// Responsive navigation
const navigationBar = document.getElementById('navigationBar')
navigationBar.addEventListener('show.bs.collapse', event => {
  $('.navbar').addClass('navbar-bg-blue')
  $('.navbar-brand--white').addClass('show')
  $('.navbar-brand--primary').addClass('hide')
})

navigationBar.addEventListener('hidden.bs.collapse', event => {
    $('.navbar').removeClass('navbar-bg-blue')
    $('.navbar-brand--white').removeClass('show')
    $('.navbar-brand--primary').removeClass('hide')
})

import './animation'