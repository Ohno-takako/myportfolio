$(function(){
  var sect = $( window.location.hash ),
	portfolio = $('.portfolio__items');

  if(sect.length == 1){
		$('.section.is-active').removeClass('is-active');
		sect.addClass('is-active');
		if( sect.hasClass('colorChange') ){
			$('body').addClass('js-colorChange');
		}
	}

	/*=========================================================================
		Magnific Popup (Project Popup initialization)
	=========================================================================*/
	$('.view-project').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$(window).on('load', function(){
    /*=========================================================================
      loading animation
    =========================================================================*/
    $('body').addClass('loaded');

    /*=========================================================================
      Portfolio Grid
    =========================================================================*/
    portfolio.shuffle();
    $('.portfolio__filters > li > a').on('click', function (e) {
      e.preventDefault();
      var groupName = $(this).attr('data-group');
      $('.portfolio__filters > li > a').removeClass('active');
      $(this).addClass('active');
      portfolio.shuffle('shuffle', groupName );
    });
	});


  /*=========================================================================
		Navigation Functions
	=========================================================================*/
	$('.menu__button').on('click', function() {
    $('.menu').toggleClass('is-active');
  });

	/*=========================================================================
		Navigation Functions
	=========================================================================*/
	$('.section__toggle').on('click', function(){
		var $this = $(this),
			sect = $( '#' + $this.data('section') ),
			current_sect = $('.section.is-active');
      $('.menu').removeClass('is-active');
		if(sect.length == 1){
			if( sect.hasClass('is-active') == false && $('body').hasClass('section__switching') == false ){
				$('body').addClass('section__switching');
				if( sect.index() < current_sect.index() ){
					$('body').addClass('up');
				}else{
					$('body').addClass('down');
				}
				setTimeout(function(){
					$('body').removeClass('section__switching up down');
				}, 2500);
				setTimeout(function(){
					current_sect.removeClass('is-active');
					sect.addClass('is-active');
				}, 1250);
				if( sect.hasClass('colorChange') ){
					$('body').addClass('js-colorChange');
				}else{
					$('body').removeClass('js-colorChange');
				}
			}
		}
	});
});
