// 모바일 구분
//$(window).resize(function(){
	//windowWidth = $(window).width();
	//if(windowWidth < 1260){
		//$('body').removeClass('pc');
		//$('body').addClass('mobile');
		//$('#wrap').removeClass('pc');
		//$('#wrap').addClass('mobile');
	//}else{
		//$('body').addClass('pc');
		//$('body').removeClass('mobile');
		//$('#wrap').addClass('pc');
		//$('#wrap').removeClass('mobile');
	//}
//}).resize();

//스크롤
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
		$("#hd").addClass("subscroll");
	} else {
		$("#hd").removeClass("subscroll");
	}
});

//스크롤 방향감지
/*
$(function(){
	var header = document.querySelector('header');
	var headerMoving = function(direction){
	  if (direction === "up"){
			$('header').fadeIn(200);
	  } else if (direction === "down"){
			$('header').fadeOut(200);
	  }
	};
	var prevScrollTop = 0;
	document.addEventListener("scroll", function(){
	  var nextScrollTop = window.pageYOffset || 0; // pageYOffset -> IE 8 이하 빼고 다 됨.
	  if (nextScrollTop > prevScrollTop){
		headerMoving("down");
	  } else if (nextScrollTop < prevScrollTop){
		headerMoving("up");
	  }
	  prevScrollTop = nextScrollTop;
	});
});
*/


/* navigation */
$(function(){
	$("#nav").hover( 
		function() { 
			$('#hd').addClass("sub_on"); 
		}, function() { 
			$('#hd').removeClass("sub_on"); 
		}
	);
	$('#hd').addClass('start');
});


/* head menu icon */
$(function(){
	var burger = $('.ic_menu');
	
	burger.each(function(index){
		var $this = $(this);
		
		$this.on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('active-' + (index+1));
		})
	});
});



/* btn_menu */
$(function(){
	$("#btn_menu").click(function(){
		$('body').addClass('gnb_open');
		$('html').addClass('fixed');
	});
	$("#btn_menu_close").click(function(){
		$('body').removeClass('gnb_open');
		$('html').removeClass('fixed');
	});
	$(".btn_close_cover").click(function(){
		$('body').removeClass('gnb_open');
		$('html').removeClass('fixed');
	});

	$(".gnb_1_depth").click(function() { 
		//$(this).toggleClass("on");
		$(".gnb_1_depth").removeClass("on"); 
		$(this).addClass("on"); 
	});
});


/* scroll top btn */
$("#topbtn").css('display','none');

function topBtn(){
	var scroll = $(window).scrollTop();

	if (scroll >= 300) {
		$("#topbtn").fadeIn();
	} else {
		$("#topbtn").fadeOut();
	}
}
topBtn();

$(window).scroll(function() {
	topBtn();
});


$(function(){
	$("#topbtn").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
});


/* goback */
function goBack() {
	window.history.back();
}









