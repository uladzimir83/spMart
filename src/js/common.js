//= ../libs/jquery/jquery-3.3.1.min.js
//= ../libs/slick/slick.min.js
//= ../libs/jquery.rateit/scripts/jquery.rateit.min.js
//= countdown.js

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
		$sign_up = $('.sign-up');

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
	}

	//при желании можно отключить - это просто, сообщения об ошибках при заполнении
	$form_login.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		$form_login.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});
	$form_signup.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		$form_signup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});

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
	speed: 1000
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
	speed: 1000
});

$('.partners-list').slick({
	autoplay: false,
	autoplaySpeed: 1000,
	arrows: true,
	slidesToShow: 6,
	slidesToScroll: 1,
	speed: 1000
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


	$(".catalog").hover(function() {
		$('.bck').stop(false, true).fadeIn();
	},
	function() {
		$('.bck').stop(false, true).fadeOut();
	});

});

