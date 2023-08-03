/* --------------------------------
*  Vue Application
* -------------------------------- */
import { createApp, defineComponent } from 'https://unpkg.com/vue@3.2.4/dist/vue.esm-browser.prod.js';

const Header = defineComponent({
	template: `
					<header class="header" id="header">
						<h1 class="header__logo">
							<a href="index.html">
								<img src="assets/images/logo.svg" alt="logo">
							</a>
						</h1>

						<nav class="header__nav">
							<ul class="header__nav__list">
								<li>
									<a href="about.html">About</a>
								</li>

								<li>
									<a href="service.html">Service</a>
								</li>

								<li>
									<a href="works.html">Works</a>
								</li>

								<li>
									<a href="news.html">News</a>
								</li>

								<li class="header__nav__list__btn">
									<a href="#">
										<span>Contact</span>
									</a>
								</li>
							</ul>
						</nav>
					</header>
			`
});

const Contact = defineComponent({
	template: `
					<section>
						<div class="stalker"></div>
						<a class="contact" href="#">
							<h2 class="contact__title">
								<span class="contact__title__jp">
									お問い合わせ
								</span>
								<span class="contact__title__en">
									Contact
								</span>
							</h2>

							<p class="contact__text">
								お問い合わせやご依頼はこちら。<br>
								一週間以内に返信いたします。
							</p>
						</a>
					</section>
      `
});

const Footer = defineComponent({
	template: `
					<footer class="footer">
						<a href="index.html" class="footer__logo">
							<img src="assets/images/logo.svg" alt="ロゴ">
						</a>

						<a class="footer__sns" href="https://twitter.com/wallless_yuki" target="_blank">
							<img src="assets/images/icon_twitter.svg" alt="twitter">
						</a>

						<nav class="footer__nav">
							<ul class="footer__nav__list">
								<li>
									<a href="about.html">About</a>
								</li>

								<li>
									<a href="service.html">Service</a>
								</li>

								<li>
									<a href="works.html">Works</a>
								</li>

								<li>
									<a href="news.html">News</a>
								</li>

								<li>
									<a href="#">Contact</a>
								</li>
							</ul>
						</nav>

						<p class="footer__copyright"><small>&copy;2023 Wallless.inc</small></p>
					</footer>
      `
});

const Service = defineComponent({
	template: `
					<div class="service__content js-fadeIn">
						<div class="service__content__inner js-serviceContent"
						v-for="(item, index) in items" :key="index" :id="item.id" :class="item.class">
							<img class="service__content__inner__img" :src="item.imageSrc" :alt="item.titleEn">
							<h3 class="service__content__inner__title">
								<span class="service__content__inner__title__jp">
									{{ item.titleJp }}
								</span>
								<span class="service__content__inner__title__en">
									{{ item.titleEn }}
								</span>
							</h3>
							<p class="service__content__inner__text"  v-html="item.text"></p>
						</div>
					</div>
      `,
	data() {
		return {
			items: [
				{
					id: "graphic",
					class: "active",
					imageSrc: "assets/images/service_graphic.webp",
					titleJp: "グラフィック制作",
					titleEn: "Graphic",
					text: "クライアントのご要望に沿った制作物をご用意しております。<br>「こんなものほしいんだけど…」とお気軽にお問い合わせください。"
				},
				{
					id: "web",
					imageSrc: "assets/images/service_web.webp",
					titleJp: "Web制作",
					titleEn: "Web",
					text: "クライアントに合わせたオーダーメイドのWebサイトを制作いたします。<br>ウェブアクセシビリティやSEOに配慮したサイトづくりを心がけています。"
				},
				{
					id: "movie",
					imageSrc: "assets/images/service_movie.webp",
					titleJp: "動画制作",
					titleEn: "Movie",
					text: "PVからSNS用の動画に至るまで一貫して制作いたします。<br>動画を通して分かりやすく明確に表現し、効果的に訴求いたします。"
				},
				{
					id: "photograph",
					imageSrc: "assets/images/service_photograph.webp",
					titleJp: "写真・動画撮影",
					titleEn: "Photograph",
					text: "物撮り・イベント撮影などオールジャンル撮影可能。<br>カメラジンバル・ドローン等もございますので、空撮からシネマティック撮影までお任せください。"
				},
			],
		}
	},
});

const Works = defineComponent({
	template: `
					<div class="works__grid">
						<a class="works__grid__content" v-for="(item, index) in items" :key="index" :href="item.href">
							<div class="works__grid__content__img js-fadeIn">
								<img :src="item.imageSrc" alt="">
							</div>
							<h3 class="works__grid__content__title">
								{{ item.title }}
							</h3>
							<p class="works__grid__content__category">
								{{ item.category }}
							</p>
						</a>
					</div>
      `,
	data() {
		return {
			items: [
				{
					href: "works.html#works01",
					imageSrc: "assets/images/works_ensupport.webp",
					title: "せしゅらく ブランディングツール",
					category: "Graphic / Movie"
				},
				{
					href: "works.html#works02",
					imageSrc: "assets/images/works_ensupport.webp",
					title: "金城学院大学 入学資料",
					category: "Graphic"
				},
				{
					href: "works.html#works03",
					imageSrc: "assets/images/works_ensupport.webp",
					title: "ロート製薬 新卒採用ポスター",
					category: "Graphic"
				},
				{
					href: "works.html#works03",
					imageSrc: "assets/images/works_ensupport.webp",
					title: "ふれあいテスラ コーポレートツール",
					category: "Graphic / Web / Movie / Photograph"
				},
				{
					href: "works.html#works03",
					imageSrc: "assets/images/works_ensupport.webp",
					title: "ポラリスエクスポート ブランディングツール",
					category: "Graphic / Web"
				},
				{
					href: "works.html#works03",
					imageSrc: "assets/images/works_ensupport.webp",
					title: "COOON WORKS CFクリエイティブサポート",
					category: "Graphic"
				},
			],
		}
	},
});

const News = defineComponent({
	template: `
					<ul class="news__list">
						<li v-for="(item, index) in items" :key="index">
							<a class="news__list__item js-news" :href="item.href">
								<time class="news__list__item__date" :dateTime="item.dateTime" >
									{{ item.date }}
								</time>
								<p class="news__list__item__category">
									{{ item.category }}
								</p>
								<h3 class="news__list__item__title">
									{{ item.title }}
								</h3>
							</a>
						</li>
					</ul>
      `,
	data() {
		return {
			items: [
				{
					href: "news/230527.html",
					dateTime: "2023-05-27",
					date: "2023.05.27",
					category: "Event",
					title: "デザイン体験会#4（オンライン）開催決定！"
				},
				{
					href: "news/230221.html",
					dateTime: "2023-02-21",
					date: "2023.02.21",
					category: "Event",
					title: "デザイン体験会#3（オンライン）開催決定！"
				},
				{
					href: "news/230219.html",
					dateTime: "2023-02-19",
					date: "2023.02.19",
					category: "Event",
					title: "デザイン体験会#2開催決定！"
				},
			],
		}
	},
});

const app = createApp({});
app.component('the-header', Header);
app.component('the-contact', Contact);
app.component('the-footer', Footer);
app.component('app-service', Service);
app.component('app-works', Works);
app.component('app-news', News);
app.mount('#app');


/* --------------------------------
*  Decrease Display Magnification
* -------------------------------- */
const adjustViewport = (triggerWindowWidth = 370) => {
	const metaViewport = document.querySelector('meta[name="viewport"]');
	const viewportValue =
		window.outerWidth < triggerWindowWidth
			? `width=${triggerWindowWidth}, user-scalable=no, target-densitydpi=device-dpi`
			: 'width=device-width, initial-scale=1';
	metaViewport.setAttribute('content', viewportValue);
};

window.addEventListener('DOMContentLoaded', () => {
	adjustViewport(); // 引数に画面幅の数値を与えると、その値が画面幅が縮小される起点になる
});


/* --------------------------------
*  Lower Content
* -------------------------------- */
$(function () {
	const headerHeight = $('#header').innerHeight()
	$('#main').css('margin-top', headerHeight);
});


/* --------------------------------
*  Scroll Header
* -------------------------------- */
$(function () {
	let pastPos = $(window).scrollTop();
	let headerHeight = $('#header').innerHeight()

	$(window).on('scroll', function () {
		const scroll = $(window).scrollTop();
		if (scroll > pastPos && scroll > headerHeight) {
			$("#header").addClass('hide');
		} else {
			$("#header").removeClass('hide');
		}

		pastPos = scroll;
	});
});


/* --------------------------------
*  Scroll Animation
* -------------------------------- */
$(function () {
	$(".js-fadeIn").on("inview", function () {
		$(this).addClass("view");
	});
});

gsap.set('.js-hero', {
	opacity: 0,
	y: 10,
});
const fadeInTimeline = gsap.to('.js-hero', {
	opacity: 1,
	y: 0,
	stagger: {
		each: 0.1,
	},
	scrollTrigger: {
		trigger: '.js-trigger',
		start: 'top center+=200',
		// markers: true,
		onLeaveBack: function () {
			fadeInTimeline.reverse();
		},
	},
});

gsap.set('.js-scroll', {
	opacity: 1,
	y: 0,
});
const fadeOutScroll = gsap.to('.js-scroll', {
	opacity: 0,
	y: 20,
	scrollTrigger: {
		trigger: '.js-trigger',
		start: 'top center+=200',
		onLeaveBack: function () {
			fadeOutScroll.reverse();
		},
	},
});

gsap.fromTo(".js-serviceNav", {
	y: 50,
	opacity: 0,
}, {
	scrollTrigger: {
		trigger: ".service__nav",
		start: "top center+=100",
	},
	y: 0,
	opacity: 1,
	stagger: {
		each: 0.1,
	},
});

gsap.fromTo(".js-news", {
	y: 50,
	opacity: 0,
}, {
	scrollTrigger: {
		trigger: ".news__list",
		start: "top center+=100",
	},
	y: 0,
	opacity: 1,
	stagger: {
		each: 0.1,
	},
});


/* --------------------------------
*  Service Toggle
* -------------------------------- */
$('.js-serviceNav').on('click', function () {
	const target = $(this).data('target');

	$('.js-serviceNav, .js-serviceContent').removeClass('active');
	$(this).addClass('active');
	$('#' + target).addClass('active');
});


/* --------------------------------
*  Mouse Stalker
* -------------------------------- */
$(function () {
	const mouse = $(".stalker");
	$(document).on("mousemove", function (e) {
		const x = e.clientX;
		const y = e.clientY;
		mouse.css({
			"transform": "translate(" + x + "px," + y + "px)",
		});
		$(".contact").on({
			"mouseenter": function () {
				mouse.addClass("js-hover");
			},
			"mouseleave": function () {
				mouse.removeClass("js-hover");
			}
		});
	});
});
