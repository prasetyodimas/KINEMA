(function(window) {
  // 'use strict';
  window.cssCircleMenu = function(el) {
    var $menu = document.querySelector(el);
    var $menuToggle = $menu ? $menu.querySelector('.js-menu-toggle') : undefined;
    var $menuMask = $menu ? $menu.querySelector('.js-menu-mask') : undefined;

    if (!$menu || !$menuToggle || !$menuMask) {
      throw new Error('Invalid elements, check the structure.');
    } else {
      init();
    }

    return {
      openMenu: openMenu,
      closeMenu: closeMenu
    };

    function init() {
      $menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        toggleMenu();
      });
    }

    function toggleMenu() {
      $menuToggle.classList.contains('is-active')
        ? closeMenu()
        : openMenu();
    }

    function openMenu() {
      $menu.classList.add('is-active');
      $menuToggle.classList.add('is-active');
      $menuMask.classList.add('is-active');
    }

    function closeMenu() {
      $menu.classList.remove('is-active');
      $menuToggle.classList.remove('is-active');
      $menuMask.classList.remove('is-active');
    }
  };
})(window);

//Function Owl Slider
$(function SliderOwl(){
	$(".itemsScaleUp-true").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 3,
      itemsScaleUp:true
  })
});

//Function NiceScroll
$(function NiceScroll(){
    $("body.kinema-visual-supply").niceScroll({
    	cursorborder:"",
    	boxzoom:true,
    	scrollspeed: 100,
      autohidemode: true, 
    	mousescrollstep: 40,
    	cursorcolor: "#424242",
    	cursorwidth: "7px",
    	bouncescroll: true,
    	smoothscroll: true
	}); 
});

/*  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
e=o.createElement(i);r=o.getElementsByTagName(i)[0];
e.src='frontend/asset/js/www.google-analytics.com/analytics.js';
r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create','UA-839919-3','auto');ga('send','pageview');*/

// Function Loader
$(document).ready(function() {
	setTimeout(function(){
      $('body').addClass('loaded');
	    $('.hideButton').removeClass('hideButton');
  }, 4000);
});
     
