$('.wrapper').addClass('loaded')

// Burger menu animation

$('.icon-menu').click(function(e){
	$(this).toggleClass('_active')
	$('.header__menu').toggleClass('_active')
	if ($(this).hasClass('_active')) {
		$('body').data('scroll',$(window).scrollTop())
		$('body').addClass('lock').css('overflowY',"hidden")
	} 
	if (!$(this).hasClass('_active')) {
		$('body').removeClass('lock').css('overflowY',"initial")
		$('body,html').scrollTop(parseInt($('body').data('scroll')))
	} 
})

//2 PARTS IMAGE + TEXT

function ibg(){
	$.each($('._ibg'), function (){
		if ($(this).find('img').length>0) {
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")')
		}
	})
}
ibg()

$(window).resize(function(){
	mainblock()
})

function mainblock(){
	var h = $(window).outerHeight()
	$('.mainblock').css('minHeight',h-50);
}
mainblock()

$(window).scroll(function(){
	var s = 0-$(this).scrollTop()/3;
	$('.mainblock__image').css('transform','translate3d(0,'+s+'px,0)')

	var scroll = $(window).scrollTop();
	if (scroll > 0) {
		$(".header").addClass("scrolled");
	} else {
		$(".header").removeClass("scrolled");
	}
})

$('.goto').click(function(){
	let target = $(this).attr('href')
	target = '.'+target.slice(1)
	$('html,body').animate({ scrollTop: $(`${target}`).offset()['top'] }, 1000);
	return false; 
});

/*==============================================================================================================================================================================*/

$('.filter__item').click(function () {
	var x = $(this).data('filter')
	if (x == 0) {
		$('.filter__column').show()
	}
	else {
		$('.filter__column').hide()
		$('.filter__column.f_' + x).show()
	}
	$('.filter__item').removeClass('active')
	$(this).addClass('active')
	return false
})

$(window).on('load',function(){
	$.each($('.filter__item'),function(){
		if($(this).hasClass('active')){
			var x = $(this).data('filter')
			if (x == 0) {
				$('.filter__column').show()
			} else{
				$('.filter__column').hide()
				$('.filter__column.f_' + x).show()
			}
		}
	})
})

/*==============================================================================================================================================================================*/
var gallery = document.getElementsByClassName('gallery');
if (gallery.length>0) {
	baguetteBox.run('.gallery',{
		animation: 'fadeIn',
		noScrollbars: true,
    	// buttons: false,
    	// captions: function(element) {
	   //    $('body').addClass('lock')
	   // }
	})
}

/*==============================================================================================================================================================================*/

$('.block-type__show').click(function(){
	$('.block-type__columns').not($(this).parent().prev()).hide('slow')
	$('.block-type__show').not($(this)).html('РАЗВЕРНУТЬ')
	$('.block-type__order').not($(this).prev()).css('display','none')
	$(this).parent().prev().slideToggle('slow')
	if($(this).html()=='РАЗВЕРНУТЬ'){
		$(this).prev().css('display','flex')
		$(this).html('СВЕРНУТЬ')
	}else{
		$(this).prev().css('display','none')
		$(this).html('РАЗВЕРНУТЬ')
	}
})
