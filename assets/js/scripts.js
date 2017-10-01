$(document).ready(function(){
	
	$('form').submit(function(){
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		var err = 0;
		
		if(!pattern.test($(this).find('.email').val())){
			err++; $(this).find('.email').css({'border-color':'#FF3235'});
		} else {
			$(this).find('.email').css({'border-color':'#2F8E5F'});
		}
		
		pattern = new RegExp(/^([0-9\s\+\(\)\-]{7,20}$)/);
		
		if(!pattern.test($(this).find('.phone').val())){
			err++; $(this).find('.phone').css({'border-color':'#FF3235'});
		} else {
			$(this).find('.phone').css({'border-color':'#2F8E5F'});
		}
		
		pattern = new RegExp(/^([А-Яа-яЁё\s]{0,50}$)/);
		
		if($(this).find('.name').val().length < 2 || !pattern.test($(this).find('.name').val())){
			err++; $(this).find('.name').css({'border-color':'#FF3235'});
		} else {
			$(this).find('.name').css({'border-color':'#2F8E5F'});
		}
		
		if(err > 0) return false;
	});	
	
	$('aside .docs').click(function(){
		if($('#wrapper').width() < 780){
			if($('aside .doc').css('display') == 'none'){
				$('aside .doc').slideDown();
				if($('aside #social').css('display') == 'block'){
					$('aside #social').slideUp();
				}
			} else {
				$('aside .doc').slideUp();
				if($('aside #social').css('display') == 'block'){
					$('aside #social').slideUp();
				}
			}
			$('#wrapper').addClass('must-clear');
		}
	});	
		
	$('aside .soc').click(function(){
		if($('#wrapper').width() < 780){
			if($('aside #social').css('display') == 'none'){
				$('aside #social').slideDown();
				if($('aside .doc').css('display') == 'inline-block'){
					$('aside .doc').slideUp();
				}
			} else {
				$('aside #social').slideUp();
				if($('aside .doc').css('display') == 'inline-block'){
					$('aside .doc').slideUp();
				}
			}
			$('#wrapper').addClass('must-clear');
		}
	});
	
	$(window).resize(function(){
		if($('#wrapper').hasClass('must-clear')){
			$('*').removeAttr('style');
			$('#wrapper').removeClass('must-clear');
			$('#main-menu').removeClass('active');
			$('.aside-menu').removeClass('active');
		}
	});
	
	$('select').selectmenu();
	$(".gallery a").fancybox();
});

