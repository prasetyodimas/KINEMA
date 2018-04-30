//Function Css Circle Menu
(function(window) {
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

// Function Loader Page
$(document).ready(function() {
	setTimeout(function(){
      $('body').addClass('loaded');
	    $('.hideButton').removeClass('hideButton');
  }, 4000);
});

var Conclave=(function(){
  var buArr =[],arlen;
  return {
    init:function(){
      this.addCN();this.clickReg();
    },
    addCN:function(){
      var buarr=["holder_bu_awayL1","holder_bu_center","holder_bu_awayR1"];
      for(var i=1;i<=buarr.length;++i){
        // console.log(buarr);
        $("#bu"+i).removeClass().addClass(buarr[i-1]+" holder_bu");
      }
    },
    clickReg:function(){
      $(".holder_bu").each(function(){
        buArr.push($(this).attr('class'))
      });
      arlen=buArr.length;
      for(var i=0;i<arlen;++i){
        buArr[i]=buArr[i].replace(" holder_bu","")
      };

      $(".holder_bu").click(function(buid){
        var me   = this,
            id   = this.id||buid,
            joId = $("#"+id),joCN=joId.attr("class").replace(" holder_bu","");
        var cpos = buArr.indexOf(joCN),
            mpos = buArr.indexOf("holder_bu_center");

        if(cpos!=mpos){
            tomove=cpos>mpos?arlen-cpos+mpos:mpos-cpos;
          while(tomove){
            var t = buArr.shift();
            buArr.push(t);
            for(var i=1;i<=arlen;++i){
              $("#bu"+i).removeClass().addClass(buArr[i-1]+" holder_bu");
            }
          --tomove;
          }
        }
      })

    },
    auto:function(){
      for(i=1;i<=1;++i){
        $(".holder_bu").delay(2000).trigger('click',"bu"+i).delay(4000);
        console.log("called this function !!");
      }
    }
  };
})();

//Init Conclave Function
$(document).ready(function(){
  window['conclave']=Conclave;
  Conclave.init();
})     

