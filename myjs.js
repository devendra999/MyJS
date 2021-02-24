$(document).ready(function(){
 
    // $('.hero-slider').slick({
    //   dots: false,
    //   infinite: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: true,
    //   dots: false,
    //   responsive: [
    //     {breakpoint: 1024,settings: {slidesToShow: 3,slidesToScroll: 3,infinite: true,dots: true}},
    //     {breakpoint: 600,settings: {slidesToShow: 2,slidesToScroll: 2}},
    //     {breakpoint: 480,settings: {slidesToShow: 1,slidesToScroll: 1}}
    //   ]
    // });

    // if (window.matchMedia("(min-width: 768px)").matches) {
    //     $('.jarallax').jarallax({
    //         speed: 0.2
    //     });
    // }

    


}); // END READY

$(window).on('load', function(){

    equalheight('.main_article');
    sidebarheight();
}); // END LOAD

$(window).on('resize', function(){

    equalheight('.main_article');
    sidebarheight();
}); // END RESIZE

$(window).on('scroll', function(){

    // ** STICKY OR FIXED JS
    // if ($(this).scrollTop() > 50){  
    //     $('.header').addClass("sticky");
    // }
    // else{
    //     $('.header').removeClass("sticky");
    // }

}); // END SCROLL


// ** EQUAL HEIGHT JS
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}
// ** END EQUAL HEIGHT JS


// ** DIFFERENT COLUMN EQUAL HEIGHT JS
function sidebarheight(){
	var contentheight = (jQuery('.newslistingright').height());
	jQuery('.newslisting-sidebar').height(contentheight);
}
// ** END DIFFERENT COLUMN EQUAL HEIGHT JS
















//======================================================
//                    OTHER JS
//======================================================

// 01 add class with loop or index
$("nav > ul > li").each( function(i) {
    $(this).addClass('section-'+i);
});

// 01.1 window resize event
$(window).trigger('resize');

// 02 sticky js
$(window).on('scroll', function(){
  if ($(this).scrollTop() > 50){  
    $('.header').addClass("sticky");
  }
  else{
    $('.header').removeClass("sticky");
  }
});

// 02 PLACEHOLDER TEXT CHANGE
$(".header-search input").attr("placeholder", "FIND YOUR STORY");


// 03 WRAP FIRST THREE DIV
var divs = $("div > div");
for(var i = 0; i < divs.length; i+=3) {
    divs.slice(i, i+3).wrapAll("<div class='new'></div>");
}

// 03.01 wrap div with 3,2,4
  var div = $('.links > div');
  var flag = 3;
  for (var i = 0; i < div.length;i++) {
        if(flag == 3) {
            div.slice(i, i + 3).wrapAll('<div class="three-div"></div>');
            flag = 2;
            i+=2;        
        } else if(flag == 4) {
          div.slice(i, i + 4).wrapAll('<div class="four-div"></div>');
          i+=3;
          flag = 3;
        } else  if( flag == 2) { 
            div.slice(i, i + 2).wrapAll('<div class="two-div"></div>');
            flag = 4;
            i+=1;
        }       
    };

// each function insertAfter
jQuery('.post .article-content-wrap').each(function(){ 
	jQuery(this).find('.meta-category').insertAfter(jQuery(this).find('.post-header')); 
});


// 04 Two Column Equal Height
 // Select and loop the container element of the elements you want to equalise
    $('.container').each(function(){  
      // Cache the highest
      var highestBox = 0;
      // Select and loop the elements you want to equalise
      $('.column', this).each(function(){
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      });  
      // Set the height of all those children to whichever was highest 
      $('.column',this).height(highestBox);
    }); 

// 05 Background
$('.bg-wrapper').each(function(){
  var bannerSRC = $(this).find('.bg-img img').attr('src');
  $(this).css('background-image','url(' + bannerSRC + ')');    
});


// 06 slick slider arrow
$("button.slick-prev.slick-arrow").prependTo("ul.slick-dots");
$("button.slick-next.slick-arrow").appendTo("ul.slick-dots");


// 07 outside click hide div
 $('#open').on('click', function () {
     $('#popup').show(500)
 });

 $(document).mouseup(function (e) {
     var popup = $("#popup");
     if (!$('#open').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
         popup.hide(500);
     }
 });

// 08 outside click hide div
  jQuery('.prs-profile').on('click', function () {
    jQuery('.drp-list').toggle(); // .drp-list dropdown list
  });

  jQuery(document).mouseup(function (e) {
    if ($(e.target).closest(".prs-profile").length === 0) { // .prs-profile onclick toggle .drp-list
      jQuery('.drp-list').hide();
    } 
  });

// 08.01 outside click hide div
  $(document).mouseup(function(e) {
      var container = $("YOUR CONTAINER SELECTOR");
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) 
      {
          container.hide();
      }
  });

// 09 jquery each function
  jQuery("#gform_fields_2 li").each(function(ind,el){
    jQuery(this).find('label').insertAfter(jQuery(this).find('input, textarea'));
  });

// 10 select change color
  jQuery('#gform_fields_2 li input, #gform_fields_2 li textarea').change(function() {
    var val = jQuery(this).val();
    console.log(val)
    if (val.length > 0) {
      jQuery(this).addClass('input-has-value');
    } else {
      jQuery(this).removeClass('input-has-value');
    }
  });

// 11 child trigger menu jquery
  jQuery('.mainmenu li:has(ul)').addClass('parent'); // add class in main li

  jQuery('a.menulinks').click(function() {  // this click in mobile toggle
    jQuery(this).next('ul').slideToggle(250);
    jQuery('body').toggleClass('mobile-open'); 
    jQuery('.mainmenu li.parent ul').slideUp(250);
    jQuery('a.child-triggerm').removeClass('child-open');
    return false;
  });	 

  jQuery('.mainmenu li.parent > a').after('<a class="child-triggerm"><span></span></a>'); // add extra anchor tag in parent of submenu

  jQuery('.mainmenu a.child-triggerm').click(function() { // in mobile create toggle button click
    jQuery(this).parent().siblings('li').find('a.child-triggerm').removeClass('child-open');
    jQuery(this).parent().siblings('li').find('ul').slideUp(250);
    jQuery(this).next('ul').slideToggle(250);
    jQuery(this).toggleClass('child-open');
    return false;
  });

// 12 class add in viewport jquery function
   $(window).scroll(function(){
     inViewport();
   });

   function inViewport(){
     $('.your-div').each(function(){
       var divPos = $(this).offset().top,
           topOfWindow = $(window).scrollTop();

       if( divPos < topOfWindow+400 ){
         $(this).addClass('in');
       }
     });
   }

// 13 class add and remove in viewport function
    (function(jQuery) {
      jQuery.fn.visible = function(partial) {
        var $t            = jQuery(this),
            $w            = jQuery(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

      };

    })(jQuery);

    jQuery(window).scroll(function(event) {

      jQuery("p").each(function(i, el) {
        var el = jQuery(el);
        if (el.visible(true)) {
          el.addClass("in"); 
        } else {
          el.removeClass("in");
        }
      });

    });

// 14 vertical slick slider for sameheight function
function sameheight(clsaaName) {
	  var highest = null;
	  var hi = 0;
	  jQuery(clsaaName).each(function() {
		var h = jQuery(this).outerHeight();
		if (h > hi) {
		  hi = h;
		  highest = jQuery(this);
		}
	  });
	  jQuery(clsaaName).css('min-height', hi);
}
sameheight('.timline_slider .time_bx'); // function used

// 15 add class in iframe body
setTimeout(function () {
        var head    = jQuery(".form-wrap").find("iframe").contents().find("head");
        var classes = jQuery('body').attr('class');
        jQuery(".form-wrap").find("iframe").contents().find("body").addClass('form-style4');
        jQuery(".form-wrap").find("iframe").contents().find("body").addClass(classes);
        var css = '<link rel="stylesheet" type="text/css" href="https://acryliconuk.com/wp-content/themes/divi-child/style.css?ver=5.5.3">';
        jQuery(head).append(css);

    },500);

// 16 go to secton smooth
$('.click-class').on('click',function (e) {
	    e.preventDefault();
	    var $target = $('.target-class');
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        // window.location.hash = target;
	    });
});

// 17 sticky content
$(document).ready(function(){
	var menu = $('className');
	var menuPos = $(menu).offset().top;
	var stickyFunction = function(){
		var wpos = $(window).scrollTop();
		if (wpos > menuPos) {
			$(menu).addClass('sticky');
		} else {
			$(menu).removeClass('sticky');
		}
	};
	stickyFunction();
	$(window).scroll(function(){
		stickyFunction();
	});
});

// 18  video play and pause on Click
jQuery('video').click(function (){
  this.paused ? this.play() : this.pause();
});

// 19 video play on button click
jQuery('#video-play-main').click(function () {
  jQuery('.video-play-sec video').get(0).play();
});

// 20 first click take css, second click go to url
$(".phone a").click(function (e) {
    $(this).css({"width": "100%"});
    e.preventDefault();
    $(this).unbind(e);
});

// 21 other page go to some section jquery
$('.btnClass').on('click',function() {
  window.location.href='page_url/#sectionid';
});

// 22 scroll up and scroll down class add and remove
var previousScroll = 0;
jQuery(window).scroll(function(){
  var currentScroll = jQuery(this).scrollTop();
  if (currentScroll > previousScroll){
    alert('down');
  } else {
    alert('up');
  }
  previousScroll = currentScroll;
});


// 23 load more content
$('div').slice(0, 6).show();
$('#loadmore').on('click', function (e) {
  e.preventDefault();
  $('div:hidden').slice(0, 8).slideDown();
  if ($('div:hidden').length === 0) {
    $('#loadmore').hide();
  }
});