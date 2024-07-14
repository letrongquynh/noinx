/**
  * isMobile
  * responsiveMenu
  * headerFixed
  * scrollBtn
  * onepage_nav 
  * ajaxAppointmentl
  * ajaxContactForm
  * alertBox
  * detectViewport
  * counter
  * tabs
  * flatPricingCarousel
  * flatTestimonials
  * simpleSlider
  * datepicker
  * sectionVideo
  * googleMap
  * swClick
  * responsiveVideo
  * flatAnimation
  * goTop
  * retinaLogos
  * parallax
  * removePreloader
*/

;(function($) {

    'use strict'
 
     var isMobile = {
         Android: function() {
             return navigator.userAgent.match(/Android/i);
         },
         BlackBerry: function() {
             return navigator.userAgent.match(/BlackBerry/i);
         },
         iOS: function() {
             return navigator.userAgent.match(/iPhone|iPad|iPod/i);
         },
         Opera: function() {
             return navigator.userAgent.match(/Opera Mini/i);
         },
         Windows: function() {
             return navigator.userAgent.match(/IEMobile/i);
         },
         any: function() {
             return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
         }
     };
 
     var responsiveMenu = function() {
         var menuType = 'desktop';
 
         $(window).on('load resize', function() {
             var currMenuType = 'desktop';
 
             if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                 currMenuType = 'mobile';
             }
 
             if ( currMenuType !== menuType ) {
                 menuType = currMenuType;
 
                 if ( currMenuType === 'mobile' ) {
                     var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                     var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');
 
                     $('#header').after($mobileMenu);
                     hasChildMenu.children('ul').hide();
                     hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                     $('.btn-menu').removeClass('active');
                 } else {
                     var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
                     $desktopMenu.find('.submenu').removeAttr('style');
                     $('#header').find('.nav-wrap').append($desktopMenu);
                     $('.btn-submenu').remove();
                 }
             }
         });
 
         $('.btn-menu').on('click', function() {        	
             $('#mainnav-mobi').slideToggle(300);
             $(this).toggleClass('active');
         });
 
         $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
             $(this).toggleClass('active').next('ul').slideToggle(300);
             e.stopImmediatePropagation()
         });
     }
 
     var headerFixed = function() {        
 
         if ( $('body').hasClass('header-sticky') ) {
             var hd_height = $('#header').height();           
             $(window).on('load scroll', function(){                
                 if ( $(window).scrollTop() > hd_height + 30 ) {
                     $('#header').addClass('downscrolled');                      
                 } else {                    
                     $('#header').removeClass('downscrolled');                   
                 }
                 if( $(window).scrollTop() > 300 ) {
                     $('#header').addClass('upscrolled');                    
                 } else {
                     $('#header').removeClass('upscrolled');                    
                 }
             })            
         }   
     }
 
     var scrollBtn = function () {
         $('.flat-scroll-btn').on( 'click', function() {
             var anchor = 'about';
             var largeScreen = matchMedia('only screen and (min-width: 992px)').matches;
             var headerHeight = 0;
             headerHeight = $('.header').height();            
             if ( anchor ) {
                 if ( $('#'+anchor).length > 0 ) {
                    if ( $('.header-sticky').length > 0 && largeScreen ) {
                         headerHeight = headerHeight;
                    } else {
                         headerHeight = 0;
                    }                   
                    var target = $('#'+anchor).offset().top - headerHeight;
                    $('html,body').animate({scrollTop: target}, 1000, 'easeInOutExpo');
                 }
             }
             return false;
         })
     }  
 
     var onepage_nav = function () {
         $('.page-template-front-page .mainnav > ul > li > a').on('click',function() {           
             var anchor = $(this).attr('href').split('#')[1];            
             var largeScreen = matchMedia('only screen and (min-width: 992px)').matches;
             var headerHeight = 0;
             headerHeight = $('.header').height();            
             if ( anchor ) {
                 if ( $('#'+anchor).length > 0 ) {
                    if ( $('.header-sticky').length > 0 && largeScreen ) {
                         headerHeight = headerHeight;
                    } else {
                         headerHeight = 0;
                    }                   
                    var target = $('#'+anchor).offset().top - headerHeight;
                    $('html,body').animate({scrollTop: target}, 1000, 'easeInOutExpo');
                 }
             }
             return false;
         })
 
         $('.mainnav ul > li > a').on( 'click', function() {
             $( this ).addClass('active').parent().siblings().children().removeClass('active');
         });
     } 
    
 
        // Dom Ready
     $(function() { 
         if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {
             headerFixed();
         }             
         onepage_nav();
         scrollBtn();        
         responsiveMenu();
        });
 
 })(jQuery);