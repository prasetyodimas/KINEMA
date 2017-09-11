/*!function(e){
	var initScrollMagic = new ScrollMagic.Controller,
		t = ["#slider01","#slide02","#slide03","#slide04","#slide05"],
		r = ["#slider01","#slide02","#slide03","#slide04","#slide05"];
		n = ["#cb01","#cb02","#cb03","#cb04","#cb05","#cb06"];

	if(Modernizr.touch){
		r.forEach(function(e,t){
		var r = t+1;
		new ScrollMagic.Scene({triggerElement:e,offset:-95}).setClassToggle("#slide0"+r,"is-active").addTo(initScrollMagic)}),
			n.forEach(function(t,r){
			var n = e(t).attr("id");
			new ScrollMagic.Scene({triggerElement:t,triggerHook:.75}).setClassToggle("#"+n,"is-active").on("enter",function(o){
				e("nav").attr("class","is-light")}).addTo(initScrollMagic)}),
			t.forEach(function(t,r){
			new ScrollMagic.Scene({triggerElement:t}).on("enter",function(initScrollMagic){
				e("nav").removeAttr("class")}).addTo(initScrollMagic)}),t.forEach(function(t,r){
				var n = e(t).find(".bcg");
				new ScrollMagic.Scene({triggerElement:t,triggerHook:1,duration:"100%"}).setTween(TweenMax.from(n,1,{y:"-40%",autoAlpha:.3,ease:Power0.easeNone})).addTo(o)});

				var a = new TimelineMax;
				a.to(e("#intro section, .scroll-hint"),.2,{autoAlpha:0,ease:Power1.easeNone}).to(e("#intro .bcg"),1.4,{y:"20%",ease:Power1.easeOut},"-=0.2").to(e("#intro"),.7,{autoAlpha:.5,ease:Power1.easeNone},"-=1.4"),
				new ScrollMagic.Scene({
					triggerElement:"#intro",triggerHook:0,duration:"100%"}).setTween(a).addTo(initScrollMagic),initScrollMagic.scrollTo(function(e){
					TweenMax.to(window,1,{scrollTo:{y:e},ease:Power1.easeInOut})
				}),

				e(document).on("click","a[href^='#']",function(t){
					var r = e(this).attr("href");
							e(r).length > 0 &&(t.preventDefault(),
							initScrollMagic.scrollTo(r),
							window.history&&window.history.pushState&&history.pushState("",document.title,r)
				)}
	)}
}(jQuery);*/

//Funtion TweenLite GreenShock
!function(e){
 	var initScrollMagic = new ScrollMagic.Controller,
 		sliderArray 	= ["#slider01","#slide02","#slide03","#slide04","#slide05"],
 		sliderEllement	= ["#slider01","#slide02","#slide03","#slide04","#slide05"];
 		findEllement 	= ["#cb01","#cb02","#cb03","#cb04","#cb05","#cb06"];
 		
 		//loop element +1 find attr
		sliderEllement.forEach(function(e,sliderArray){
			var sliderEllement = sliderArray+1;
			console.log('#slide0'+sliderEllement);
			new ScrollMagic.Scene({triggerElement:e,offset:-95}).setClassToggle("#slide0"+sliderEllement,"is-active").addTo(initScrollMagic);
			//loop element 1
			findEllement.forEach(function(sliderArray,sliderEllement){
				var findEllement = e(sliderArray).attr("id");
				console.log(findEllement);
				new ScrollMagic.Scene({triggerElement:sliderArray,triggerHook:.75}).setClassToggle("#"+findEllement,"is-active").on("enter",function(initScrollMagic){
					e("nav").attr("class","is-light")}).addTo(initScrollMagic)}),
				//loop element 2
				sliderArray.forEach(function(sliderArray,sliderEllement){
					new ScrollMagic.Scene({triggerElement:sliderArray}).on("enter",function(initScrollMagic){
						e("nav").removeAttr("class")}).addTo(initScrollMagic)}),
					//loop element 3
					sliderArray.forEach(function(sliderArray,sliderEllement){
						var findEllement = e(sliderArray).find(".bcg");
						new ScrollMagic.Scene({triggerElement:sliderArray,triggerHook:1,duration:"100%"}).setTween(TweenMax.from(findEllement,1,{y:"-40",autoAlpha:.3,ease:Power0.easeNone})).addTo(initScrollMagic)});

				})
			//Function Navigate To 
			var NavigateTo = new TimelineMax;
				NavigateTo.to(e("#intro, .scroll-hint"),.2,{autoAlpha:0,ease:Power1.easeNone}).to(e("#intro"),1.4,{y:"20%",ease:Power1.easeOut},"-=0.2").to(e("#intro"),.7,{autoAlpha:.5,ease:Power1.easeNone},"-=1.4"),
				new ScrollMagic.Scene({
					triggerElement:"#intro",triggerHook:0,duration:"100%"}).setTween(NavigateTo).addTo(initScrollMagic),initScrollMagic.scrollTo(function(e){
						TweenMax.to(window,1,{scrollTo:{y:e},ease:Power1.easeInOut})

			}),
			//Function SlideTo		
			e(document).on("click","a[href^='#']", function(sliderArray) {
				var sliderEllement = e(this).attr("href");
									 e(sliderArray).length > 0 &&(sliderEllement.preventDefault(),
									 initScrollMagic.scrollTo(sliderEllement),
									 window.history&&window.history.pushState&&history.pushState("",document.title,sliderEllement)

	)}
)}
// }(jQuery);

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
    $("body").niceScroll({
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