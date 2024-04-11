// スライダー
const swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		961: {
			slidesPerView: 2.5,
			centeredSlides: true,
			spaceBetween: 20,
		}
	}
});

$(function () {
	// ふわっと下から出てくるアニメーション
	function fadeAnime() {
		$('.fadeUpTrigger').each(function () {
			let elemPos = $(this).offset().top - 20;
			let scroll = $(window).scrollTop();
			let windowHeight = $(window).height();

			if (scroll >= elemPos - windowHeight) {
				$(this).addClass('fadeUp');
			}
		});
	}

	// スクロール検知
	$(window).scroll(function () {
		fadeAnime();
	});
	// 画面ロード時に検知
	$(window).on('load', function () {
		fadeAnime();
	})

	/* スムーズスクロール */
	$('a[href^="#"]').click(function() {
		const href = $(this).attr("href");
		const target = $(href == "#" || href == "" ? 'html' : href);
		let pos = target.offset().top - 50;

		$('body, html').animate({scrollTop: pos}, 1000, 'swing');

		return false;
	});

	/* ハンバーガーメニュー */
	$('.hamburger').click(function () {
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
	});
	$(".menu .link").click(function () {
		$('.menu').toggleClass('active');
		$('.hamburger').removeClass('active');
	})

});