
//= ../libs/slick/slick.min.js
//= ../libs/jquery.rateit/scripts/jquery.rateit.min.js


//preloader

$(window).on("load",function(){
	$(".cube-loader, #cube-loader").delay(100).fadeOut().remove();  
});


//popup signin block
jQuery(document).ready(function($){


	var $form_modal = $('.cd-user-modal'),
		$form_login = $form_modal.find('#cd-login'),
		$form_signup = $form_modal.find('#cd-signup'),
		$form_forgot_password = $form_modal.find('#cd-reset-password'),
		$form_modal_tab = $('.cd-switcher'),
		$tab_login = $form_modal_tab.children('li').eq(0).children('a'),
		$tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
		$forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
		$back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
		$sign_up = $('.signup');

	//открыть модальное окно
	$sign_up.on('click', function(event) {
			$form_modal.addClass('is-visible');	
			( $(event.target).is('.cd-signup') ) ? signup_selected() : login_selected();
		});

	//закрыть модальное окно
	$('.cd-user-modal').on('click', function(event){
		if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form') ) {
			$form_modal.removeClass('is-visible');
		}	
	});
	//закрыть модальное окно нажатье клавиши Esc 
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$form_modal.removeClass('is-visible');
	    }
    });

	//переключения  вкладки от одной к другой
	$form_modal_tab.on('click', function(event) {
		event.preventDefault();
		( $(event.target).is( $tab_login ) ) ? login_selected() : signup_selected();
	});

	//скрыть или показать пароль
	$('.hide-password').on('click', function(){
		var $this= $(this),
			$password_field = $this.prev('input');
		
		( 'password' == $password_field.attr('type') ) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
		( 'Скрыть' == $this.text() ) ? $this.text('Показать') : $this.text('Скрыть');
		//фокус и перемещение курсора в конец поля ввода
		$password_field.putCursorAtEnd();
	});

	//показать форму востановления пароля 
	$forgot_password_link.on('click', function(event){
		event.preventDefault();
		forgot_password_selected();
	});

	//Вернуться на страницу входа с формы востановления пароля
	$back_to_login_link.on('click', function(event){
		event.preventDefault();
		login_selected();
	});

	function login_selected(){
		$form_login.addClass('is-selected');
		$form_signup.removeClass('is-selected');
		$form_forgot_password.removeClass('is-selected');
		$tab_login.addClass('selected');
		$tab_signup.removeClass('selected');
	}

	function signup_selected(){
		$form_login.removeClass('is-selected');
		$form_signup.addClass('is-selected');
		$form_forgot_password.removeClass('is-selected');
		$tab_login.removeClass('selected');
		$tab_signup.addClass('selected');
	}

	function forgot_password_selected(){
		$form_login.removeClass('is-selected');
		$form_signup.removeClass('is-selected');
		$form_forgot_password.addClass('is-selected');
	};


// главный слайдер на главной странице

	$('.slick-slider').slick({
		autoplay: false,
		autoplaySpeed: 1000,
		arrows: false,
		dots: true,
		speed: 1000
	});

//слайдер в боковой колонке .hot-deals

	$('.hot-deals__slider').slick({
		autoplay: false,
		autoplaySpeed: 1000,
		arrows: true,
		dots: false,
		speed: 1000
	});

// слайдер с отзывами в сайдбаре

	$('.sidebar-testim__slider').slick({
		autoplay: false,
		autoplaySpeed: 1000,
		arrows: false,
		dots: true,
		speed: 1000
	});

// слайдер с последними новостями

$('.sidebar-news__slider').slick({
	autoplay: false,
	autoplaySpeed: 1000,
	arrows: true,
	speed: 1000
});

// слайдер секции new arrivals

$('.product-carousel').slick({
	autoplay: false,
	autoplaySpeed: 1000,
	arrows: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	speed: 1000,
	responsive: [
		{
      breakpoint: 1200,
      settings: {
				slidesToShow: 3
      }
		},
    {
      breakpoint: 992,
      settings: {
				slidesToShow: 2
      }
		},
		{
      breakpoint: 576,
      settings: {
				slidesToShow: 1
      }
		}

	]
});

$('.best-sellers__carousel').slick({
	autoplay: false,
	autoplaySpeed: 1000,
	arrows: true,
	speed: 1000
});

$('.categories-list').slick({
	autoplay: false,
	autoplaySpeed: 1000,
	arrows: true,
	slidesToShow: 10,
	slidesToScroll: 1,
	speed: 1000,
	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
		},
		{
      breakpoint: 576,
      settings: {
				slidesToShow: 3
      }
		}
	]
});

$('.partners-list').slick({
	autoplay: false,
	autoplaySpeed: 1000,
	arrows: true,
	slidesToShow: 6,
	slidesToScroll: 1,
	speed: 1000,
	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
		},
		{
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
		}
	]
});


// переключение валют в шапке

	$('.currency__switcher').click(function() {
		$(this).toggleClass('active').next().slideToggle();
	});

	$('.currency-list li').click(function() {
		var currency = $('.currency__switcher').html();
		$('.currency__switcher').html($(this).html()).toggleClass('active');
		$(this).html(currency).parent().slideUp();
		
	});

// переключение языков в шапке

	$('.language__switcher').click(function() {
		$(this).toggleClass('active').next().fadeToggle();
	});

	$('.language-list li').click(function() {
		var language = $($(this).parent().prev().html());
		$(this).parent().prev().html($(this).html()).toggleClass('active');
		$(this).html(language).parent().fadeToggle();

	});


//раздел categories переключение табов

	$('.categories-example__list').hide();
  $('.categories-example__list:first').show();
  $('.categories-list li:first').addClass('active');
  $('.categories-list li').click(function(event) {
    $('.categories-list li').removeClass('active');
    $(this).addClass('active');
    $('.categories-example__list').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
	});

//затемнение поп-апом при наведении на каталог
	if($(window).width() > 992) {
		$(".catalog").hover(function() {
			$('.bck').stop(false, true).fadeIn();
		},
		function() {
			$('.bck').stop(false, true).fadeOut();
		});
	}

//триггер каталога в адаптивном меню
	if($(window).width() < 992) {
		$('.catalog-header').click(function() {
			$('.catalog-wrap').toggleClass('js-toggle__categories');
		});
	};

	//бургер-кнопка переключения меню
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.main-menu').toggleClass('js-main-menu');
	});

	//адаптив для колонок футера

	var footerHeader = $('.footer-nav__column h3');

	if($(window).width() < 768) {

		footerHeader.next().hide();

		footerHeader.click(function() {
			if($(this).removeClass('active').next().is(':visible')) {
				$(this).next().slideUp();
				return;
			}
			footerHeader.removeClass('active').next().slideUp();
			$(this).toggleClass('active').next().slideDown();
		});

	};

	$(window).resize(function() {
		if($(this).width() >= 768) {
			footerHeader.next().show();
		} else {
			footerHeader.next().hide();
		}
	});

//триггер формы поиска по сайту
$('.form-toggle.form-submit').click(function(e) {
	$(this).fadeToggle().next().toggleClass('js-search-visible');
});

$(document).keyup(function(e) {
	if (e.keyCode === 27) { 
			$('.form-toggle.form-submit').fadeIn().next().removeClass('js-search-visible');
	}
});

$(document).mouseup(function (e){ // событие клика по веб-документу
	if($(".header-search").hasClass('js-search-visible')) {
		var div = $(".header-search"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.form-toggle.form-submit').fadeIn().next().removeClass('js-search-visible');
		
	}
	}
	
});

//триггер входа на сайт или регистрации



});

