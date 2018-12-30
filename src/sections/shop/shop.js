//= ../../libs/jquery/jquery-3.3.1.min.js

(function( $ ){

$(document).ready(function() {

	//выбор подкаталогов в разделе категории в сайдбаре
	$('.plus-toggler').click(function() {
		$(this).toggleClass('active').prev().slideToggle();
		});

	//триггер для открытия списков-фильтров в сайдбаре
	$('.filter-section h4').click(function() {
		$(this).toggleClass('active').parent().next().slideToggle();
	});

	// фильтры в шапке основной сетки товаров

	$('.btn-dropdown').click(function() {
		$(this).toggleClass('active').next().slideToggle();
	});

	$('.grid-toggler__list a').click(function() {
		$(this).parent().parent().prev().html($(this).html()).toggleClass('active');
		$(this).parent().parent().slideToggle();
	});

	// переключение сетки товара с сетки на строку и обратно
	$('.list-view').click(function(e) {
		e.preventDefault();
		if($(this).hasClass('active')) {
			return
		} else {
			$(this).addClass('active').prev().removeClass('active');
			$('.shop-grid__wrap').addClass('shop-grid__wrap__line');
		}
	});

	$('.grid-view').click(function(e) {
		e.preventDefault();
		if($(this).hasClass('active')) {
			return
		} else {
			$(this).addClass('active').next().removeClass('active');
			$('.shop-grid__wrap').removeClass('shop-grid__wrap__line');
			}
	});
	
});

	
})( jQuery );