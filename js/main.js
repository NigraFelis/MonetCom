// Fullpage
$('#fullpage').fullpage({
	sectionsColor: ['#000000', '#000000', '#000000', '#000000'],
	//anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
	menu: '#menu',
	'navigation': true,
	'navigationPosition': 'right',
	//navigationTooltips: ['MAIN_01', 'MAIN_02', 'MAIN_03', 'MAIN_04'],
	showActiveTooltip: true,
	slidesToSections: true,
	scrollingSpeed: 770,
	lazyLoad: true,
	
	// ** �������� �ҷ��� ��
	afterLoad : function(anchorLink, index){
		//console.log(index);
		$('.sec'+index).addClass('ani');
		
		if(index=="4"){
			setTimeout(function(){
				$('#sec4.ani .biz-list .business').addClass('over');
			}, 1500);
		};

		//top button
		switch(index) {
			case 1: 
				//$('.scroll_top_btn.fixed').fadeOut(300);
				$('.scroll_top_btn.fixed').removeClass("show");
				$('.scroll_top_btn.fixed').addClass("hide");
			break;
			case 2: 
				//$('.scroll_top_btn.fixed').fadeIn(500).addClass("hide");
				$('.scroll_top_btn.fixed').removeClass("hide");
				$('.scroll_top_btn.fixed').addClass("show");
			break;
			default:
				//$('.scroll_top_btn.fixed').fadeIn(500).removeClass("hide");
				$('.scroll_top_btn.fixed').removeClass("hide");
				$('.scroll_top_btn.fixed').addClass("show");
			break;
		}
	},
	onLeave: function(index, nextIndex, direction){
		if (direction == 'down'){
			$("#hd").fadeOut();
		} else if (direction == 'up'){
			$("#hd").fadeIn();
		}
	},
});

/* ���콺�� �̺�Ʈ */
$(window).bind('mousewheel', function(e){
	if(e.originalEvent.wheelDelta /120 > 0) {
		$('header').fadeIn(200);
	}
	else{
		$('header').fadeOut(200);
	}
});

// top��ư
$('.scroll_top_btn').click(function() {
	$.fn.fullpage.moveTo(1);
	$("header").fadeIn(100);
});


/* section2
* * * * * * * * * * * * * * * * * * * */
$("#tabmenu li:first").attr("id","current");
$(".contbx_wr .contbx:first-child").addClass("show"); 
$(".cont_bg_wr .cont_bg:first-child").addClass("show");
$(".cont_link_wr .cont_link:first-child").addClass("show");

/* hover */
$('#tabmenu li .btn.hover').hover(function(e) {
	e.preventDefault();        
	$(".contbx_wr .contbx").removeClass("show"); 
	$("#tabmenu li").attr("id",""); 
	$(this).parents("li").attr("id","current"); 
	$('#' + $(this).attr('title')).addClass("show")
	
	$(".cont_bg_wr .cont_bg").removeClass("show"); 
	$('#' + $(this).attr('title') + '_bg').addClass("show");

	$(".cont_link_wr .cont_link").removeClass("show"); 
	$('#' + $(this).attr('title') + '_link').addClass("show");
});
/* hover */
$('#tabmenu li .btn.click').click(function(e) {
	e.preventDefault();        
	$(".contbx_wr .contbx").removeClass("show"); 
	$("#tabmenu li").attr("id",""); 
	$(this).parents("li").attr("id","current"); 
	$('#' + $(this).attr('title')).addClass("show")
	
	$(".cont_bg_wr .cont_bg").removeClass("show"); 
	$('#' + $(this).attr('title') + '_bg').addClass("show");

	$(".cont_link_wr .cont_link").removeClass("show"); 
	$('#' + $(this).attr('title') + '_link').addClass("show");
});


/* section4
* * * * * * * * * * * * * * * * * * * */
$('.biz-list .ibox').on('mouseenter', function(){
	$('.biz-list .ibox').removeClass('over');
	$(this).addClass('over');
});
$('.biz-list .ibox').on('mouseleave', function(){
	$(this).removeClass('over');
});